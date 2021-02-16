const projects = [
  {
    id: 1,
    name: "Railway Managment System",
    techs: "Flask, AWS and Vanilla JS",
    colors: ["#00a0d1", "#00cf8a"],
    icon: require("../imgs/train.png"),
    pos: "right",
    github: "https://github.com/SharjeelAbbas014/RailwayProject",
    details:
      "Probably the biggest project I worked on! Created a full blown Railway Managment System with online ticket booking, integrated Stipe and JAZZCASH API. Worked with big SQL database and Flask, integrated Google MAPS, email system, charts and much much more!",
    projimg: require("../imgs/pakrail.png"),
  },
  {
    id: 2,
    name: "Gotta Go! The Chat App",
    techs: "React, Firebase",
    pos: "left",
    colors: ["#e49c00", "#ffe607"],
    icon: require("../imgs/chat.png"),
    github: "https://github.com/SharjeelAbbas014/gotta-go",
    details:
      "A chat app where user can login with there emails and chat with others on the platform, Used React Frontend And Firebase for Auth and Firestore for realtime chatting",
    projimg: require("../imgs/gottago.png"),
  },
  {
    id: 3,
    name: "Travel Agency Managment",
    techs: "Node, Express, MySQL & Vanilla JS",
    colors: ["#8254e5", "#83afe3"],
    pos: "right",
    icon: require("../imgs/travel.png"),
    github: "https://github.com/SharjeelAbbas014/Travel-Agency-Database",
    details:
      "A travel Agency Database where user can create account and book a travel package. Admin can assign agents to user and agents can assign different flights and hotels for the user",
    projimg: require("../imgs/travelagency.png"),
  },
  {
    id: 4,
    name: "Movie App",
    techs: "React and OMDB API",
    colors: ["#232323", "#666"],
    icon: require("../imgs/movieico.png"),
    pos: "left",
    github: "https://github.com/SharjeelAbbas014/Movie-App",
    details:
      "Used React to fetch from OMDB API to show realtime shows and movies details",
    projimg: require("../imgs/pakrail.png"),
  },
  {
    id: 4,
    name: "PIXIT",
    techs: "Simple HTML, CSS and JS",
    pos: "right",
    colors: ["#CD2837", "#E63C3C"],
    icon: require("../imgs/smootie.png"),
    github: "https://github.com/SharjeelAbbas014/PIXIT",
    details: "A Basic HTML, CSS and JS static Site nothing crazy",
    projimg: require("../imgs/pixit.png"),
  },
  {
    id: 5,
    name: "Face Identifier",
    techs: "Python, OpenCV",
    colors: ["#82ff99", "#00ffee"],
    pos: "left",
    icon: require("../imgs/face.png"),
    github: "https://github.com/SharjeelAbbas014/Face-Identifier",
    details:
      "Used OpenCV to access camera and indentify faces based on previous training data given",
    projimg: require("../imgs/travelagency.png"),
  },
];

export default projects;
