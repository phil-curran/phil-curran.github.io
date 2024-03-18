import "./skills.css";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import api from "../../assets/api.svg";
import babel from "../../assets/babel.svg";
import bootstrap from "../../assets/bootstrap.svg";
import bulma from "../../assets/bulma.svg";
import django from "../../assets/django.svg";
import figma from "../../assets/figma.svg";
import firebase from "../../assets/firebase.svg";
import flask from "../../assets/flask.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import jquery from "../../assets/jquery.svg";
import json from "../../assets/json.svg";
import markdown from "../../assets/markdown.svg";
import microsoft from "../../assets/microsoft.svg";
import apple from "../../assets/apple.svg";
import ubuntu from "../../assets/ubuntu.svg";
import node from "../../assets/node.svg";
import npm from "../../assets/npm.svg";
import postman from "../../assets/postman.svg";
import python from "../../assets/python.svg";
import bash from "../../assets/bash.svg";
import react from "../../assets/react.svg";
import sass from "../../assets/sass.svg";
import vscode from "../../assets/vscode.svg";
import webpack from "../../assets/webpack.svg";
import jetbrains from "../../assets/jetbrains.svg";
import parcel from "../../assets/parcel.svg";
import less from "../../assets/less.svg";
import material from "../../assets/material.svg";
import redux from "../../assets/redux.svg";
import dotnet from "../../assets/dotnet.svg";
import semantic from "../../assets/semantic.svg";
import csharp from "../../assets/csharp.svg";
import express from "../../assets/express.svg";
import supabase from "../../assets/supabase.svg";
import mongodb from "../../assets/mongodb.svg";
import mysql from "../../assets/mysql.svg";
import adobecc from "../../assets/adobecc.svg";

const Skills = () => {
  return (
    <section className="skillsContainer">
      <div className="skillsContent">
        <h1>Skills:</h1>
        <h2>Languages</h2>
        <div className="skills">
          <div className="skill">
            <img src={html} alt="" />
            <p>HTML5</p>
          </div>

          <div className="skill">
            <img src={css} alt="" />
            <p>CSS3</p>
          </div>

          <div className="skill">
            <img src={js} alt="" />
            <p>Javascript</p>
          </div>

          <div className="skill">
            <img src={jquery} alt="" />
            <p>jQuery</p>
          </div>

          <div className="skill">
            <img src={typescript} alt="" />
            <p>Typescript</p>
          </div>

          <div className="skill">
            <img src={python} alt="" />
            <p>Python</p>
          </div>

          <div className="skill">
            <img src={csharp} alt="" />
            <p>C#</p>
          </div>
        </div>
        <h2>Libraries</h2>
        <div className="skills">
          <div className="skill">
            <img src={react} alt="" />
            <p>React</p>
          </div>

          <div className="skill">
            <img src={redux} alt="" />
            <p>Redux</p>
          </div>

          <div className="skill">
            <img src={dotnet} alt="" />
            <p>.dotnet</p>
          </div>

          <div className="skill">
            <img src={flask} alt="" />
            <p>Flask</p>
          </div>

          <div className="skill">
            <img src={django} alt="" />
            <p>Django</p>
          </div>
        </div>

        <h2>Backend</h2>
        <div className="skills">
          <div className="skill">
            <img src={node} alt="" />
            <p>Node.js</p>
          </div>

          <div className="skill">
            <img src={express} alt="" />
            <p>Express.js</p>
          </div>

          <div className="skill">
            <img src={api} alt="" />
            <p>REST API</p>
          </div>

          <div className="skill">
            <img src={postman} alt="" />
            <p>Postman</p>
          </div>
        </div>

        <h2>Databases</h2>
        <div className="skills">
          <div className="skill">
            <img src={supabase} alt="" />
            <p>Supabase</p>
          </div>

          <div className="skill">
            <img src={mongodb} alt="" />
            <p>MongoDB</p>
          </div>

          <div className="skill">
            <img src={firebase} alt="" />
            <p>Firebase</p>
          </div>

          <div className="skill">
            <img src={mysql} alt="" />
            <p>MySQL</p>
          </div>
        </div>

        <h2>CSS Frameworks</h2>
        <div className="skills">
          <div className="skill">
            <img src={bootstrap} alt="" />
            <p>Bootstrap</p>
          </div>

          <div className="skill">
            <img src={bulma} alt="" />
            <p>Bulma</p>
          </div>

          <div className="skill">
            <img src={material} alt="" />
            <p>Material UI</p>
          </div>

          <div className="skill">
            <img src={semantic} alt="" />
            <p>Semantic UI</p>
          </div>

          <div className="skill">
            <img src={sass} alt="" />
            <p>SASS</p>
          </div>

          <div className="skill">
            <img src={less} alt="" />
            <p>LESS</p>
          </div>
        </div>

        <h2>Dev Tools</h2>
        <div className="skills">
          <div className="skill">
            <img src={git} alt="" />
            <p>Git</p>
          </div>

          <div className="skill">
            <img src={github} alt="" />
            <p>Github</p>
          </div>

          <div className="skill">
            <img src={vscode} alt="" />
            <p>VS Code</p>
          </div>

          <div className="skill">
            <img src={jetbrains} alt="" />
            <p>JetBrains</p>
          </div>
        </div>

        <h2>Tooling</h2>
        <div className="skills">
          <div className="skill">
            <img src={babel} alt="" />
            <p>Babel</p>
          </div>
          <div className="skill">
            <img src={npm} alt="" />
            <p>npm</p>
          </div>
          <div className="skill">
            <img src={webpack} alt="" />
            <p>Webpack</p>
          </div>
          <div className="skill">
            <img src={parcel} alt="" />
            <p>Parcel</p>
          </div>
        </div>

        <h2>Environments</h2>
        <div className="skills">
          <div className="skill">
            <img src={microsoft} alt="" />
            <p>Windows</p>
          </div>

          <div className="skill">
            <img src={apple} alt="" />
            <p>Mac</p>
          </div>

          <div className="skill">
            <img src={ubuntu} alt="" />
            <p>Linux</p>
          </div>
        </div>

        <h2>Other</h2>
        <div className="skills">
          <div className="skill">
            <img src={bash} alt="" />
            <p>Bash</p>
          </div>
          <div className="skill">
            <img src={figma} alt="" />
            <p>Figma</p>
          </div>
          <div className="skill">
            <img src={adobecc} alt="" />
            <p>Adobe CC</p>
          </div>
          <div className="skill">
            <img src={json} alt="" />
            <p>JSON</p>
          </div>

          <div className="skill">
            <img src={markdown} alt="" />
            <p>Markdown</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
