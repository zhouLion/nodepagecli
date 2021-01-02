export interface ConfigProject {
    repository: string
    options?: string[]
}

export interface Config {
    port: number
    projects: ConfigProject[]
}
