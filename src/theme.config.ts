export const THEME_CONFIG: App.Locals["config"] = {
  /** blog title */
  title: "刷题记录",
  /** your name */
  author: "mrxirzzz",
  /** website description */
  desc: "刷题记录, LeetCode, AcWing, NowCoder",
  /** your deployed domain */
  website: "https://coding.mrxir.cloud",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/xirzc/",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "twitter",
      href: "https://twitter.com/mrxirsr",
    },
  ],
  /** your header info */
  header: {
    twitter: "@mrxirsr",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    // {
    //   name: "About",
    //   href: "/about",
    // },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "LeetCode", path: "leetcode" },
    { name: "AcWing", path: "acwing" },
    { name: "NowCoder", path: "nowcoder" },
    { name: "Interview", path: "interview" },
  ],
};
