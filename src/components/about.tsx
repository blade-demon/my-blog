"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("关于我");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>关于我</SectionHeading>

      <p className="mb-3">
        大学期间学习<span className="font-medium">计算机以及通信</span>
        相关专业，我一直对编程很感兴趣，毕业以后从事软件相关行业。刚开始使用
        <span className="italic">C++</span>
        编写桌面软件。在某个机缘巧合下开始接触到
        <span className="font-medium">前端开发</span>。
        我最初从事基于Web的应用程序开发，使用
        <span className="italic">HTML</span>、
        <span className="italic">CSS</span>和
        <span className="italic">JavaScript</span>构建用户友好的界面。
        随着web前端技术的蓬勃发展，我深入接触并研究了各种前端框架和库，如
        <span className="italic">Angular</span>、
        <span className="italic">React</span>和
        <span className="italic">Vue.js</span>
        ，并在不同项目中运用。我对技术充满热情，希望在探索技术的过程中寻找更好的自己。
      </p>
    </motion.section>
  );
}
