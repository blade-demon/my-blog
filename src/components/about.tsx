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
        相关专业，我一直对编程很感兴趣，所以毕业以后从事软件相关行业。刚开始使用
        <span className="font-medium">C++</span>编写桌面软件软件。
        <span className="font-medium">2015年左右</span>
        ，公司需要做一个网站，在这个机缘下开始接触到前端开发。从那时开始，我就开始了前端开发生涯。
        从开始接触<span className="italic">jQuery</span>、
        <span className="italic">Angular</span>、
        <span className="italic">Vue</span>再到
        <span className="italic">React</span>。很快
        <span className="font-medium">React</span>
        <span className="italic">成为了我的最爱的UI框架</span>。
        我喜欢在开发的过程中给自己一些挑战，
        增加一些自己从未尝试过的功能，以及使用一些更高效快捷的技术，并思考它的背后的运行机制。
      </p>
    </motion.section>
  );
}
