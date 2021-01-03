import simpleGit, { SimpleGit, Response } from 'simple-git'
import { parse } from 'path'
import { Config, ConfigProject } from '../../typings/Config'

const git: SimpleGit = simpleGit()

function getRepoName(repoAddress: string) {
    return parse(repoAddress).name;
}

/**
 * gitClone
 * @param project 项目配置
 */
export function gitClone(project: ConfigProject): Response<string> {
    const { repository, options } = project
    const repoName = getRepoName(repository)
    return git.clone(project.repository, `.static/${repoName}`, options, (err: any) => {
        if (err) {
            console.log(err)
        }
    })
}

/**
 * gitCloneProjects
 * @param config
 */
export function gitCloneProjects(config: Config) {
    config.projects.forEach((project) => {
        gitClone(project);
    })
}
