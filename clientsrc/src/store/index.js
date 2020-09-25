import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    activeProject:
    {
      name: "Please Help Me",
      description: "Group project build with a Vue front-end and Node back-end and utilizes MongoDB. Users can post jobs they need help with and sign up to help others with their jobs.",
      img: "Volunteer.png",
      link: "https://capstone-volunteer.herokuapp.com/#/"
    },
    projects: [
      {
        name: "Please Help Me",
        description: "Group project build with a Vue front-end and Node back-end and utilizes MongoDB. Users can post jobs they need help with and sign up to help others with their jobs.",
        img: "Volunteer.png",
        link: "https://capstone-volunteer.herokuapp.com/#/"
      },
      {
        name: "Inspire",
        description: "Google's Inspire extention using a random image api for the background.",
        img: "Inspire.png",
        link: "https://kevinclane.github.io/week-4-checkpoint/"
      },
      {
        name: "Vault Keeps",
        description: "Clone of Pinterest. Built with a Vue front-end and C# back-end and utilizes MongoDB.",
        img: "Pinterest.png",
        link: "https://vaultkeep.herokuapp.com/#/"
      },
      {
        name: "Town Miner",
        description: "Idle clicker game. Built with Vue.js and Node.js and utilizes MongoDB. Currently working on adding some more depth and cleaning up the GUI.",
        img: "IdleMiner.png",
        link: "https://townminer.herokuapp.com/#/"
      },
      {
        name: "Bug Logger",
        description: "An app where users can submit bugs about an application. Built with Vue.js and Node.js and utilizes MongoDB.",
        img: "BugLogger.png",
        link: "https://bug-loggerz.herokuapp.com/#/"
      },
    ]
  },
  mutations: {
    setActiveProject(state, num) {
      state.activeProject = state.projects[num]
    },
  },
  actions: {
    setActiveProject({ commit }, num) {
      commit("setActiveProject", num)
    }
  }
});
