import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "软考", icon: "certificate", link: "/zh/QCCSTP/" },
  { text: "前端", link: "/zh/front-end/" },
  { text: "杂七杂八", link: "/zh/others/" }
]);
