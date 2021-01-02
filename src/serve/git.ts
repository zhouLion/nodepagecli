import simpleGit from 'simple-git'
import { parse } from 'path'
import { Config, ConfigProject } from '../typings/Config'

const git = simpleGit()

function getRepoName(repoAddress: string) {
    return parse(repoAddress).name;
}

function gitClone(project: ConfigProject) {
    const { repository, options } = project
    const repoName = getRepoName(repository)
    return git.clone(project.repository, `.static/${repoName}`, options, (err: any) => {
        if (err) { 
            console.log(err)
        }
    })
}

export function gitCloneProjects(config: Config) {
    config.projects.forEach((project) => {
        gitClone(project);
    })
}
