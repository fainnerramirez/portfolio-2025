import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

interface ResponseGithub {
    nameRepository: string;
    createdAt: string | undefined;
    avatar_url: string;
}

export const useFetchRepository = () => {
    const [username] = useState<string>("fainnerramirez");
    const [response, setResponse] = useState<Array<ResponseGithub> | null>(null);
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null);
    let timeOut: ReturnType<typeof setTimeout>;

    useEffect(() => {
        const getDataApiGithub = async () => {
            try {
                const API_GITHUB = new Octokit({
                    auth: import.meta.env.VITE_TOKEN_GITHUB
                });
                console.log("Eliminando el secret key");

                const repos = await API_GITHUB.request('GET /users/{username}/repos', {
                    username: username,
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28',
                    }
                });

                const dataArray: Array<ResponseGithub> = repos.data.map((e: any) => ({
                    nameRepository: e.name,
                    createdAt: e.created_at ? new Date(e.created_at).toISOString() : undefined,
                    avatar_url: e.owner.avatar_url,
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
