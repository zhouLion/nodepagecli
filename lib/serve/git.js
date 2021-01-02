"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitCloneProjects = void 0;
const simple_git_1 = __importDefault(require("simple-git"));
const path_1 = require("path");
const git = simple_git_1.default();
function getRepoName(repoAddress) {
    return path_1.parse(repoAddress).name;
}
function gitClone(project) {
    const { repository, options } = project;
    const repoName = getRepoName(repository);
    return git.clone(project.repository, `.static/${repoName}`, options, (err) => {
        if (err) {
            console.log(err);
        }
    });
}
function gitCloneProjects(config) {
    config.projects.forEach((project) => {
        gitClone(project);
    });
}
exports.gitCloneProjects = gitCloneProjects;
//# sourceMappingURL=git.js.map