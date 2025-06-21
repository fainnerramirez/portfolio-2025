import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

export interface ResponseGithub {
    repo_name: string;
    repo_createAt: string | undefined;
    repo_avatar_url: string;
    repo_languages: Array<string>,
    repo_description: string | null,
    repo_url: string
}

export const useFetchRepository = () => {
    const [username] = useState<string>("fainnerramirez");
    const [response, setResponse] = useState<Array<ResponseGithub> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    let timeOut: NodeJS.Timeout;

    useEffect(() => {
        const getDataApiGithub = async () => {
            try {
                // En tu código, agrega logs para debuggear
                const API_GITHUB = new Octokit({
                    auth: import.meta.env.VITE_TOKEN_GITHUB
                });

                const repos = await API_GITHUB.request('GET /users/{username}/repos', {
                    username: username,
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28',
                    }
                });

                console.log("repos: ", repos.data);

                const getLanguagesRepository = async (reponame: string) => {
                    return await API_GITHUB.request('GET /repos/{owner}/{repo}/languages', {
                        owner: 'fainnerramirez',
                        repo: reponame,
                    });
                };

                const languagesPromises = repos.data.map((e: any) =>
                    getLanguagesRepository(e.name)
                );

                const languagesData = await Promise.all(languagesPromises);
                console.log("languagesData: ", languagesData);

                const dataArray: Array<ResponseGithub> = repos.data.map((e: any, i: number) => ({
                    repo_name: e.name,
                    repo_createAt: e.created_at ? new Date(e.created_at).toISOString() : undefined,
                    repo_avatar_url: e.owner.avatar_url,
                    repo_languages: Object.keys(languagesData[i].data as {}),
                    repo_description: e.description,
                    repo_url: e.html_url
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
