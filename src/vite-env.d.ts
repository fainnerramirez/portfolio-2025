/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TOKEN_GITHUB: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}