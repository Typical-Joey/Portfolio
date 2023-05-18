import KeeperIMG from "../assets/images/Keeper.png";
import SecretIMG from "../assets/images/Secret.png";
import BlogIMG from "../assets/images/Blog.png";
import TindogIMG from "../assets/images/Tindog.png";

export function getProjects() {
  return [
    {
      title: "Keeper",
      info: "Made using react, mongoDB, Nodejs, and express. Keeper is a task managing application with full login and register functionality as well as user specific saved note.",
      img: KeeperIMG,
      code: "https://github.com/Typical-Joey/Keeper-App",
      url: "",
    },
    {
      title: "Secrets",
      info: "Made using ejs, mongoDB, Nodejs, express, and passport. Secret is an application that allows users to upload secrets to share with everyone, this project was made to practice user authorization and authentication using passport, it includes password hashing as well as oAuth login.",
      img: SecretIMG,
      code: "https://github.com/Typical-Joey/secrets",
      url: "https://damp-depths-86371.herokuapp.com/",
    },
    {
      title: "Blog",
      info: "Made using ejs, NodeJS, and express. My blog application was the first time I did routing using express.",
      img: BlogIMG,
      code: "https://github.com/Typical-Joey/blog",
      url: "https://radiant-beyond-31546.herokuapp.com/",
    },
    {
      title: "Tindog",
      info: "Made using css, and bootstrap. This was one of my first websites, made just using the basics",
      img: TindogIMG,
      code: "https://github.com/Typical-Joey/Tindog",
      url: "https://typical-joey.github.io/Tindog/",
    },
  ];
}
