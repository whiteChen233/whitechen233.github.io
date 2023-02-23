import { sidebar } from "vuepress-theme-hope";

import { qccstp, frontEnd, design } from "./note";
import { stepByStep } from "./step-by-step";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    "intro",
    {
      text: "随笔",
      icon: "heart",
      link: "/zh/essay/",
      prefix: "/zh/essay/",
      children: ["me", "love", "rain", "tearsOfRouge", "SlowSlowSong"],
    },
  ],
  "/zh/note/QCCSTP/": qccstp,
  "/zh/note/front-end/": frontEnd,
  "/zh/note/design/": design,
  "/zh/step-by-step/": stepByStep,
  "/zh/links": [],
});
