import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeProject: {
    },
    projects: [
      {
        id: 0,
        name: "TimeTrackers",
        descriptions: [
          "This project is by far the largest I've built. It's not flashy or groundbreaking, but I spent a ton of time working on it. I originally built it because I do contract work and got tired of writing down my hours on paper just to type up a MS Word doc. After spending a lot of time on it, I had the idea to market it at some point. So I also incorperated PayPal's subscription setup to handle all payments.",

          "I added a lot of different options for things like hourly vs salary pay, weekly, bi-weekly, ect pay periods, time rounding, and more. I'm currently in the process of reformatting some of the data structures to increase performance. Free users can have 1 project at a time. Paid users get unlimited (very low monthly cost). You can clock-in/out, add comments for services performed for that day/shift, and edit/add times manually (incase you forgot to clock in/out). The site has a live timer for how long you've been clocked in and calculates an estimated pay based on current hours per pay period. Once the pay period is over, the user can download a Word Doc (utilizes Docx) and send it wherever they need.",

          "There's also a page for reporting bugs, making suggestions, or just giving feedback in general. I added this because it could help me fix issues that I don't notice, but the users do. There's also a slightly customizable profile for each user. They can add a personal picture, change their name, and add their business info.",

          "There are a few bugs and I'm working on fixing those as well as reformatting some of the design and overall flow of the site. I have plans to build this out further and add options for team/company time tracking as well as some other (hopefully) useful features/addons to increase the user experience."
        ],
        imgs: [
          {
            img: "TimeTrackersProjectView",
            desc: ""
          },
          {
            img: "Timetrackers",
            desc: "Home Page (screen capture cut some off)"
          },
        ],
        link: "https://www.timetrackers.net/#/"
      },
      {
        id: 1,
        name: "Volunteer",
        descriptions: [
          "This is was a 3-man group hackathon project built during my time in a coding bootcamp. One of my teammates came up with the idea to build an app where users can post and browse requests for help. These requests could be anything from needing help pulling weeds to repairing a vehicle. We used Vue.js for the front-end and Node.js for the back-end with MongoDB for data storage.",

          "We got the base functionality done fairly quickly, so we then started adding additional features to the project. We added live updating comments on each job posting (using Socket.io), a rating system for both parties involved (like a Google review), auto-expiring job postings, and a detailed profile page.",

          "There were quite a few challenges to overcome during this project. My two teammates worked on figuring out how Socket.io works while I was trying to find a good system to keep track of allowing reviews. In hindsight, the system chosen could definitely be simplified, but that's just part of the learning process. We learned a lot from the project and I'm glad to have it on my portfolio."
        ],
        imgs: [{
          img: "Volunteer",
          desc: "Home Page"
        },
        {
          img: "VolunteerJobs",
          desc: "List of Jobs"
        },
        {
          img: "VolunteerJobDetails",
          desc: "Job Details Page"
        },
        {
          img: "VolunteerProfile",
          desc: "Profile Page"
        }
        ],
        link: "https://capstone-volunteer.herokuapp.com/#/"
      },
      {
        id: 2,
        name: "Bug Logger",
        descriptions: [
          "This app is pretty basic, but very important for just about any business. It's better fit as an addon or a part of a larger app. It's a basic bug tracking system. Users can post that something is broken or needs updated or whatever and these issues can be toggled to closed after it has been resolved."
        ],
        imgs: [
          {
            img: "BugLogger",
            desc: ""
          }
        ],
        link: "https://bug-loggerz.herokuapp.com/#/"
      },
      {
        id: 3,
        name: "Texas Hold em",
        descriptions: [
          "This was a fun and challenging project. I participated in a 1 week hackathon. The task was to build a card game that is at least as complicated as 'War'. Everyone participating was allowed to be in teams of up to 3 people total, but everyone I asked to join was busy, so I went solo. On top of that, I like to overacheive and challenge myself. So instead of building a small, easy game like War or Blackjack, I went for Texas Hold 'em! I knew it was a much bigger game, but I honestly didn't anticipate just how much bigger...",

          "There were 2 main hurdles I faced with this project: 1. Live updating other players and 2. keeping the game self-sufficient (so it wouldn't break if someone just left). To handle these problems, I built a game cycle that uses a setInterval to check on the status of the game and perform actions accordingly. If something was updating, socket.io would relay that to everyone in the game so they are all seeing the same thing. I had to build out a diagram just to be able to better understand the system and find bugs to fix. I'll try to include a download link or it will viewable in the root folder of the github repo for those interested.",

          "Getting this system to work correctly took the majority of my time and I wasn't able to spend as much time on the design as I would like (although my design isn't great anyway so oh well). It still has some bugs in it which is why there's a button on the middle of the table to reset the game incase it does crash. If I had just another day or two, I could have fixed most of these problems. Regardless, I'm very happy with the results especially given how much I had to do in so little time.",

          "Part of not being able to finish the design, mobile does look a little goofy. I reccomend viewing this on desktop, but if you do use mobile, hold your phone landscape for the best experience. You will need another person/phone for this to work properly so bring a friend and enjoy!"
        ],
        imgs: [
          {
            img: "TexasHoldemTable",
            desc: ""
          },
          {
            img: "TexasHoldemFloor",
            desc: "I didn't have a lot of time to clean up the visuals, but this is supposed to be an overhead view of the casino floor."
          }
        ],
        link: "https://pokerhackathon.herokuapp.com/#/",
        miscData: [
          {
            type: "Download",
            data: "GameLogicLoop.drawio"
          }
        ]
      },
      {
        id: 4,
        name: "Vault Keeps",
        descriptions: [
          "This is a spin-off/clone of Pinterest and was the final project built for my bootcamp. I personally am a big fan of dark themes, so I redesigned it with that in mind. It was built with a Vue.js front-end and .NET back-end with MySQL for data storage. Users can browse and post pictures with a short description. They can also create 'vaults' or groups of favorite images for themselves. Each picture also recorded how many times it was viewed and/or saved to a vault."
        ],
        imgs: [
          {
            img: "Pinterest",
            desc: "List of all posts"
          },
          {
            img: "KeeprProfile",
            desc: "Profile Page"
          }
        ],
        link: "https://vaultkeep.herokuapp.com/#/"
      },
      {
        id: 5,
        name: "Town Miner",
        descriptions: [
          "This was by far, my favorite project during bootcamp. During the second week, we were tasked with building an idle clicker game. The instructors demoed a few different versions of these types of games for us to give some ideas. The one that stuck out to me was built by one of the founders. My competitive side came out and I knew I wanted to build something better. So I did (in my opinion).",

          "The original version was built purely in HTML, CSS, and Vanilla JS. This was merely a weekend project, but I went all out trying to make everything look great and go above and beyond the requirements to pass this checkpoint. There are 3 resource buttons you can click to collect. You can sell the resources for gold and to upgrade tools. Upgrading tools increases how much of a resource you collect per click. You can also hire workers to collect resources automatically (tools affect their amount per tick as well).",

          "I ended up rebuilding this project in a Vue.js front-end later on. It helped clean up the GUI and overall feel of the game a lot. This is the current version hosted on the live link below. I fully plan to rebuild this into a mobile game at some point."
        ],
        imgs: [
          {
            img: "IdleMiner",
            desc: "Main view"
          },
          {
            img: "IdleMinerBlacksmith",
            desc: "Blacksmith shop"
          },
          {
            img: "IdleMinerMarket",
            desc: "Market"
          },
          {
            img: "IdleMinerTavern",
            desc: "Tavern to hire workers"
          }
        ],
        link: "https://townminer.herokuapp.com/#/"
      },
      {
        id: 6,
        name: "Inspire",
        descriptions: [
          "This is one of the earlier projects I made in bootcamp. It's a clone Google's Inspire. It's a bit old and doesn't run very well anymore, but isn't really worth fixing at this time. The idea is that every time it loads, it would get a new background image and famous quote to display. It also has a todo list built in."
        ],
        imgs: [
          {
            img: "Inspire",
            desc: ""
          }
        ],
        link: "https://kevinclane.github.io/week-4-checkpoint/"
      },

    ],
    techs: [
      {
        id: 0,
        name: "HTML CSS JS",
        img: "html-css-js"
      },
      {
        id: 1,
        name: "C#",
        img: "csharp-icon"
      },
      {
        id: 2,
        name: "Vue",
        img: "vue-icon"
      },
      {
        id: 3,
        name: "Node",
        img: "node-icon"
      },
      {
        id: 4,
        name: ".NET",
        img: "net-icon"
      },
      {
        id: 5,
        name: "MongoDB",
        img: "mongo-db-icon"
      },
      {
        id: 6,
        name: "MySQL",
        img: "mysql-icon"
      },
      {
        id: 7,
        name: "APIs",
        img: "api-icon"
      },
      {
        id: 8,
        name: "Postman",
        img: "postman-icon"
      },
      {
        id: 9,
        name: "MVC",
        img: "mvc-icon"
      },
    ]
  },
  mutations: {
    setActiveProject(state, id) {
      let i = state.projects.findIndex(p => p.id == id)
      state.activeProject = state.projects[i]
    },
  },
  actions: {
    setActiveProject({ commit }, id) {
      commit("setActiveProject", id)
    }
  }
});
