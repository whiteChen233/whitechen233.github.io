import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "软考", icon: "certificate", link: "/zh/QCCSTP/" },
  { text: "手把手", icon: "Grab-Hand", link: "/zh/step-by-step/" },
  {
    text: "杂七杂八",
    icon: "other",
    children: [
      {
        text: "程序猿",
        prefix: "/zh/programmer/",
        activeMatch: "^/programmer/$",
        children: ["front-end/"],
      },
      { text: "杂文", link: "/zh/essay/", activeMatch: "^/essay/$" },
      { text: "其他", link: "/zh/others/", activeMatch: "^/others/$" },
    ],
  },
]);
