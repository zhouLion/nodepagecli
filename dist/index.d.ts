import { Response as Response_2 } from 'simple-git';

declare interface Config {
    port: number
    projects: ConfigProject[]
}

declare interface ConfigProject {
    repository: string
    options?: string[]
}

/**
 * gitClone
 * @param project 项目配置
 */
export declare function gitClone(project: ConfigProject): Response_2<string>;

/**
 * gitCloneProjects
 * @param config
 */
export declare function gitCloneProjects(config: Config): void;

export { }
