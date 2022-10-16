import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "软考", icon: "certificate", link: "/zh/QCCSTP/" },
  { text: "手把手", icon: "hands", link: "/zh/step-by-step/" },
  {
    text: "杂七杂八", 
    icon: "boxes-stacked",
    children: [
      { text: "前端", link: "/zh/front-end/" },
      { text: "其他", link: "/zh/others/" }
    ]
  }
]);
