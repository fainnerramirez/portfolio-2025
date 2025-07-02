const getColorLanguage = (language: string) => {

    if (language.toLowerCase() === "javascript") {
        return "yellow";
    }

    if (language.toLowerCase() === "html") {
        return "red";
    }

    if (language.toLowerCase() === "css" || language.toLocaleLowerCase() === "typescript") {
        return "blue";
    }

    if (language.toLowerCase() === "c#") {
        return "purple";
    }

    if (language.toLowerCase() === "python") {
        return "green";
    }

    if (language.toLowerCase() === "java") {
        return "cyan";
    }
}

export { getColorLanguage };