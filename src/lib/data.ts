import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "主页",
    hash: "#home",
  },
  {
    name: "关于我",
    hash: "#about",
  },
  {
    name: "项目",
    hash: "#projects",
  },
  {
    name: "技能",
    hash: "#skills",
  },
  {
    name: "经历",
    hash: "#experience",
  },
  {
    name: "联系我",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "软件开发工程师",
    location: "北京，中国",
    description:
      "我使用C++、Qt编写桌面应用，并在工作之余研究学习游戏开发相关技术。",
    icon: React.createElement(CgWorkAlt),
    date: "2012-2014",
  },
  {
    title: "游戏开发工程师",
    location: "上海，中国",
    description:
      "2014年我来到上海，开始就职于Unity3D公司，进行游戏开发，主要对国外的游戏进行本土化开发。在工作的同时，我开始接触到了Node.js，并在工作之余自学了一些前端相关的知识。",
    icon: React.createElement(CgWorkAlt),
    date: "2014-2015",
  },
  {
    title: "全栈开发工程师",
    location: "上海，中国",
    description:
      "2015年我开始承担公司的前端以及部分后端工作。从零开始主持公司的网站，微信公众号，小程序等其他web相关应用。使用的技术栈包括：React, TypeScript, Express 以及 MongoDB。",
    icon: React.createElement(CgWorkAlt),
    date: "2015-2019",
  },
  {
    title: "高级前端开发工程师",
    location: "上海，中国",
    description: "现在我供职于中国平安，担任高级前端开发工程师。",
    icon: React.createElement(CgWorkAlt),
    date: "2019-现在",
  },
] as const;

export const projectsData = [
  {
    title: "用户行为回溯系统",
    description:
      "行为可回溯系统为我们后期提供有效的图片、音频或者视频相关的有效资料，以便调查，检查使用。通过记录用户行为序列存储，经过回放播放器回放还原用户操作真实场景，分析核心流程转化并呈现用户行为偏好，基于用户行为优化用户体验，根据用户操作轨迹了解异常发生的全部过程，协助研发人员定位处理异常问题，实现通过行为分析达到异常追踪的方式。",
    tags: ["React", "Puppeteer", "rrweb", "ffmpeg", "ffmpeg-wasm", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Webpack",
  "Vite",
  "Rollup",
  "Gulp",
  "ffmpeg",
  "ffmpeg-wasm",
  "Vue",
  "Tailwind",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "AWS",
  "MongoDB",
] as const;
