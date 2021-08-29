import { IoLogoSass } from "react-icons/io5";
import { SiMongodb, SiJavascript, SiTypescript, SiReact, SiReactrouter, SiNodeDotJs, SiRedux, SiHtml5, SiCss3, SiNextDotJs, SiMysql, SiJsonwebtokens, SiWebpack, SiVisualstudiocode, SiNetlify, SiHeroku, SiPhp, SiJava, SiGithub, SiFigma, SiBootstrap, SiGit, SiJest, SiTailwindcss } from "react-icons/si";

class skillData {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }
}

const react = new skillData("reactJs", SiReact);
const next = new skillData("nextJs", SiNextDotJs);
const router = new skillData("router v6", SiReactrouter);
const redux = new skillData("redux", SiRedux);
const jest = new skillData("Jest", SiJest);
const html = new skillData("HTML", SiHtml5);
const css = new skillData("CSS", SiCss3);
const sass = new skillData("sass", IoLogoSass);
const bs = new skillData("bootstrap", SiBootstrap);
const figma = new skillData("figma", SiFigma);
const git = new skillData("Git", SiGit);
const github = new skillData("Github", SiGithub);
const mongo = new skillData("mongoDb", SiMongodb);
const sql = new skillData("sql", SiMysql);
const node = new skillData("nodejs", SiNodeDotJs);
const jwt = new skillData("jwt", SiJsonwebtokens);
const webpack = new skillData("webpack", SiWebpack);
const vscode = new skillData("vscode", SiVisualstudiocode);
const netlify = new skillData("netlify", SiNetlify);
const heroku = new skillData("heroku", SiHeroku);
const js = new skillData("javascript", SiJavascript);
const ts = new skillData("typescript", SiTypescript);
const php = new skillData("php", SiPhp);
const java = new skillData("java", SiJava);
const tail = new skillData("Tailwind", SiTailwindcss)

export const data = {
    front_end: [react, next, redux, router, html, css, sass,],
    design: [bs, tail, figma],
    back_end: [mongo, sql, node,],
    languages: [js, ts, php, java],
    tooling: [netlify, heroku, webpack,],
    version_control: [git, github,],
    testing: [jest,],
    developer_tools: [vscode,],
}