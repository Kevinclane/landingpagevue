<template>
  <div class="home">
    <div class="container-fluid bg-img p-3">
      <div class="row p-2 text-white">
        <div class="col-6 col-md-4 col-lg-2">
          <img
            src="../assets/profile.jpg"
            alt="error loading image"
            class="profile-size"
          />
        </div>
        <div class="col-6 col-md-8 col-lg-10">
          <div class="row">
            <div class="col-11 font-lg">KEVIN LANE</div>
            <div class="col-10 offset-1">SOFTWARE DEVELOPER</div>
            <div class="col-10 my-1">
              <a
                href="KevinLaneResume.docx"
                download
                class="btn btn-primary text-white"
              >
                ATS Resume
              </a>
            </div>
            <div class="col-10 my-1">
              <a
                href="KevinLaneResume.pdf"
                download
                class="btn btn-primary text-white"
              >
                Presentation Resume
              </a>
            </div>
            <div class="col-10 my-1">
              <a
                href="KevinLaneCertification.pdf"
                download
                class="btn btn-primary text-white"
              >
                Coding Certification
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container box-shadow my-5">
      <div class="row d-flex justify-content-around bg-white">
        <div class="col-8 my-3">
          <h3 class="text-center text-black">About Me</h3>
          <p class="noUnder text-black">
            I'm software developer skilled in building various applications
            using front and back-end technologies. I love watching the project
            come to life as it's built piece by piece. I first got interested in
            coding from a couple of friends who had already taken a course at a
            local coding bootcamp. They told me that I seemed like someone who
            would enjoy and be good at coding because of my problem solving
            personality. I started by trying a pre-course work for said bootcamp
            and found that I really did have a knack for it.
          </p>
          <p class="noUnder text-black">
            Shorty after, I started the course myself. During the course, we
            were often given a lecture in the morning about how to use new
            software and had to build projects with them in the afternoon. This
            led to us having to learn how to utilize new information very
            quickly in order to pass. For every project I worked on, I was not
            content just hitting the minimum requirements to pass, so I reached
            for stretch goals plus adding some of my own features into it. I
            enjoyed going over the top with them and learning how to give them
            that little bit of extra flair that I wanted. My abilities gradually
            improved and so did the depths of my projects.
          </p>

          <p class="noUnder text-black">
            I'm currently continuing my learning by taking on projects for
            friends and family as well as building out ideas of my own. My next
            big project is a Stock Market based app. Users will be able to spend
            fake money to invest in stocks in order to practice if their
            strategies will work or not before commiting real money into the
            market.
          </p>
        </div>
        <!-- </div> -->
        <!-- <div class="row bg-cstm-med  text-dark py-2"> -->
        <div class="col-12 bg-dark">
          <div class="row d-flex justify-content-around">
            <div class="col-10 mt-2">
              <h3 class="text-white text-center">Technologies</h3>
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/html-css-js.png"
                alt="error loading image"
                class="icon-size-wider"
              />
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/csharp-icon.png"
                alt="error loading image"
                class="icon-size"
              />
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/vue-icon.png"
                alt="error loading image"
                class="icon-size"
              />
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/node-icon.png"
                alt="error loading image"
                class="icon-size"
              />
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/mongo-db-icon.png"
                alt="error loading image"
                class="icon-size"
              />
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/mvc-icon.png"
                alt="error loading image"
                class="icon-size"
              />
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/mysql-icon.png"
                alt="error loading image"
                class="icon-size"
              />
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/scrum-icon.png"
                alt="error loading image"
                class="icon-size"
              />
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/api-icon.png"
                alt="error loading image"
                class="icon-size"
              />
            </div>
            <div class="col-6 col-md-3 icon-cols">
              <img
                src="../assets/postman.png"
                alt="error loading image"
                class="icon-size"
              />
            </div>
            <!-- </div> -->
            <!-- </div> -->
          </div>
        </div>
        <div class="col-12 bg-white">
          <h3 class="text-center text-black py-3">Projects</h3>
          <project />
          <div class="d-flex justify-content-between row">
            <div class="">
              <i
                class="fa fa-3x fa-arrow-left m-3"
                aria-hidden="true"
                type="button"
                @click="changeProject(-1)"
              ></i>
            </div>
            <div class="text-center d-flex align-items-center">
              <circles
                v-for="project in projects"
                :key="project.name"
                :project="project"
              />
            </div>
            <div class="">
              <i
                class="fa fa-3x fa-arrow-right m-3"
                aria-hidden="true"
                type="button"
                @click="changeProject(1)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="container-fluid bg-dark">
      <div class="row">
        <div
          class="col-12 text-white d-flex align-items-center justify-content-center"
        >
          <span class="font-md text">CONTACT ME:</span>
          <a
            href="https://www.linkedin.com/in/kevinchristopherlane/"
            target="_blank"
          >
            <i class="fa fa-linkedin-square fa-2x p-1 text-white mx-2"></i>
          </a>
          <a href="https://github.com/Kevinclane" target="_blank">
            <i class="fa fa-github fa-2x p-1 text-white"></i>
          </a>
          <span class="mx-2">(208)251-1087</span>
          <span>kevinclane21@gmail.com</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Project from "@/components/ProjectComponent.vue";
import Circles from "@/components/CirclesComponent.vue";
export default {
  name: "home",
  mounted() {},
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    activeProject() {
      return this.$store.state.activeProject;
    },
    index() {
      return this.$store.state.projects.findIndex(
        (p) => p.name == this.activeProject.name
      );
    },
  },
  methods: {
    changeProject(num) {
      // debugger;
      let l = this.projects.length;
      let dif = num + this.index;
      if (dif >= 0 && dif < l) {
        let newIndex = this.index + num;
        this.$store.dispatch("setActiveProject", newIndex);
      }
    },
  },
  components: {
    Project,
    Circles,
  },
};
</script>

<style>
* {
  font: serif;
}
.home {
  background-color: whitesmoke;
}
body {
  background-color: whitesmoke;
}
p {
  line-height: 1.5rem;
}
a {
  color: black;
}
a:hover {
  color: black;
}
.bg-img {
  background-image: url("../assets/bgimg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.font-lg {
  font-size: 3.5rem;
}
.font-md {
  font-size: 2rem;
}
.profile-size {
  height: 25vh;
  border-radius: 5%;
}
.icon-size-wider {
  max-height: 30vh;
  max-width: 100%;
}
.icon-size {
  max-height: 13vh;
  max-width: 100%;
}
.icon-cols {
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-size {
  max-width: 100%;
}
.sticky-bottom {
  position: absolute;
  bottom: 0;
}
.rounded {
  border-radius: 50px;
  border: 2px solid black;
}
.text-black {
  color: black;
}
.box-shadow {
  box-shadow: 4px 4px 5px black;
}
.mySlides {
  width: 100%;
}
</style>