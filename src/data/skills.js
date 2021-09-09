import { IoLogoSass } from "react-icons/io5";
import { SiMongodb, SiJavascript, SiTypescript, SiPostman, SiUbuntu, SiReact, SiReactrouter, SiNodeDotJs, SiRedux, SiHtml5, SiCss3, SiNextDotJs, SiMysql, SiJsonwebtokens, SiWebpack, SiVisualstudiocode, SiNetlify, SiHeroku, SiPhp, SiJava, SiGithub, SiFigma, SiBootstrap, SiGit, SiJest, SiTailwindcss } from "react-icons/si";
import { ViteIcon } from "../components/ViteIcon";
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
const tail = new skillData("Tailwind", SiTailwindcss);
const vite = new skillData("Vite", ViteIcon);
const postman = new skillData("Postman", SiPostman);
const ubuntu = new skillData("Ubuntu", SiUbuntu)

export const data = {
    front_end: [react, next, redux, router, webpack, vite, html, css, sass,],
    back_end: [mongo, sql, node, jwt],
    design: [bs, tail, figma],
    languages: [js, ts, php, java],
    testing: [jest,],
    developer_tools: [git, github, postman, ubuntu, vscode, netlify, heroku],
}