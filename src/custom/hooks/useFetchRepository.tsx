import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

export interface ResponseGithub {
    nameRepository: string;
    createdAt: string | undefined;
    avatar_url: string;
    languages: Array<string>,
    description: string | null
}

export const useFetchRepository = () => {
    const [username] = useState<string>("fainnerramirez");
    const [response, setResponse] = useState<Array<ResponseGithub> | null>(null);
    const [languages, setLangages] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    let timeOut: ReturnType<typeof setTimeout>;

    useEffect(() => {
        const getDataApiGithub = async () => {
            try {
                const API_GITHUB = new Octokit({
                    auth: import.meta.env.VITE_TOKEN_GITHUB
                });

                const repos = await API_GITHUB.request('GET /users/{username}/repos', {
                    username: username,
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28',
                    }
                });

                // Función para obtener los lenguajes de un repositorio
                const getLanguagesRepository = (reponame: string) => {
                    return API_GITHUB.request('GET /repos/{owner}/{repo}/languages', {
                        owner: 'fainnerramirez',
                        repo: reponame,
                    })
                        .then((response) => {
                            console.log("Se genero la data: ", response.data)
                            return response.data;
                        })
                        .catch((error) => {
                            console.error("Error al consultar los lenguajes: ", error);
                            return null;
                        });
                };

                // Obtener los lenguajes para todos los repositorios de una vez
                const languagesPromises = repos.data.map((e: any) =>
                    getLanguagesRepository(e.name)
                );

                // Esperar a que todas las promesas de lenguajes se resuelvan
                const languagesData = await Promise.all(languagesPromises);

                const dataArray: Array<ResponseGithub> = repos.data.map((e: any, i:number) => ({
                    nameRepository: e.name,
                    createdAt: e.created_at ? new Date(e.created_at).toISOString() : undefined,
                    avatar_url: e.owner.avatar_url,
                    languages: Object.keys(languagesData[i] as {}),
                    description: e.description
                }));

                setResponse(dataArray);
            } catch (err) {
                setError(`Hubo un error al obtener los repositorios: Error: ${err}`);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        timeOut = setTimeout(() => {
            getDataApiGithub();
        }, 1000);

        return () => {
            clearTimeout(timeOut);
        }

    }, [username]);

    return { response, loading, error };
};
