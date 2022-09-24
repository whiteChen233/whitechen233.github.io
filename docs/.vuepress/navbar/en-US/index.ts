import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Demo", icon: "discover", link: "/en/demo/" },
  {
    text: "Posts",
    icon: "pen",
    prefix: "/en/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen", link: "1" },
          { text: "Apple2", icon: "pen", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Banana",
        icon: "pen",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Cherry", icon: "pen", link: "cherry" },
      { text: "Dragonfruit", icon: "pen", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://vuepress-theme-hope.github.io/v2/",
  },
]);
