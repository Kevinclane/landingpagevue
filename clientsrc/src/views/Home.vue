<template>
  <div class="w-100 home">
    <div class="section-1 super-center">
      <div class="s1-content">
        <div>Kevin Lane</div>
        <div>Full-Stack Developer</div>
        <div class="super-center">
          <div class="pill-button-yellow fs-2">Resume</div>
        </div>
      </div>
    </div>
    <div class="section-2 font-secondary">
      <div class="s2-content">
        <img
          class="profile-size my-5"
          src="../assets/profile.jpg"
          alt="error loading image"
        />
        <div class="col-lg-6 offset-lg-3 col-10 offset-1 mb-3">
          I'm a full-stack web developer specializing in Vue.js front-end and
          Node.js / .NET back-end technologies. After graduating from a coding
          bootcamp in June of 2020, I started my own business doing freelance
          work. My previous work experience as a General Manager gave me the
          tools I needed to keep myself focused and be successful on my own.
        </div>
        <div class="col-lg-6 offset-lg-3 col-10 offset-1 my-3">
          Aside from work projects, I do plenty of my own personal projects as
          well. While building games is definitely my favorite, I've built
          plenty of other types of applications. There will be plenty of
          information on all of my projects below.
        </div>
        <div class="col-lg-6 offset-lg-3 col-10 offset-1 my-3">
          I have a few hobbies outside of coding. I enjoy video games a lot
          (hense why I like to build them), particularly League of Legends and
          Minecraft. I also enjoy working out. I ran a 10k in about 47 minutes,
          just shy of my 45 minute goal. I'll get it next time though! I have a
          dog and 2 cats that are all extremely sweet and friendly. I play
          guitar occasionally, but I'm definitely not good at it. I love
          longboarding, hiking, mechanic work on cars (to some extent), making
          candy, and more.
        </div>
      </div>
    </div>
    <div class="section-3">
      <div class="super-center color-primary">
        <img class="section-icon" src="../assets/tech-icon.gif" alt="" />
        <h1 class="text-center m-3">Tech</h1>
        <img class="section-icon" src="../assets/tech-icon.gif" alt="" />
      </div>
      <tech-carousel />
    </div>
    <div class="section-4">
      <div class="super-center color-primary">
        <img class="section-icon" src="../assets/project-icon.gif" alt="" />
        <h1 class="text-center m-3">Projects</h1>
        <img class="section-icon" src="../assets/project-icon.gif" alt="" />
      </div>
      <project-carousel />
      <h3
        class="
          super-center
          text-center
          dynamic-header-3
          col-8
          offset-2
          mt-3
          color-primary
          font-secondary
        "
      >
        Click/tap on a project for more details
      </h3>
    </div>
    <div class="section-5">
      <div class="super-center color-primary">
        <img class="section-icon mirror" src="../assets/demo-icon.gif" alt="" />
        <h1 class="text-center m-3">Demos</h1>
        <img class="section-icon" src="../assets/demo-icon.gif" alt="" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col super-center my-3">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/l_F-LBtglJA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="section-6">
      <div class="super-center color-primary">
        <img
          class="section-icon mirror"
          src="../assets/contact-icon.gif"
          alt=""
        />
        <h1 class="text-center m-3">Contact</h1>
        <img class="section-icon" src="../assets/contact-icon.gif" alt="" />
      </div>
      <div class="container-fluid">
        <div class="row pb-3">
          <div class="col-12 col-lg-4 my-2">
            <div class="row">
              <div class="col-6 super-center">
                <i
                  class="fa fa-3x li-color fa-linkedin-square mx-3"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="col-6 super-center">
                <i
                  class="fa fa-3x text-white fa-github mx-3"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4 my-2">
            <span class="pill-button-yellow type-button super-center w-100"
              >Resume</span
            >
          </div>

          <div class="col-12 col-lg-4 d-flex justify-content-around my-2">
            <div class="row">
              <div class="super-center text-white flow-column col-6">
                <i class="fa fa-2x fa-mobile" aria-hidden="true"> </i>
                <div>(208) 251-1087</div>
              </div>
              <div class="super-center text-white flow-column col-6">
                <i class="fa fa-2x fa-envelope" aria-hidden="true"></i>
                <div>kevinclane21@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "@/components/ProjectComponent.vue";
import ProjectCarousel from "../components/ProjectCarousel.vue";
import TechCarousel from "../components/TechCarousel.vue";
export default {
  name: "home",
  components: {
    Project,
    ProjectCarousel,
    TechCarousel,
  },
};
</script>

<style>
.section-1 {
  background-image: url("../assets/bgs/sectionOneBg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  min-height: 95vh;
  font-family: "Aclonica", sans-serif;
}
.s1-content {
  font-size: 4rem;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: column;
  text-align: center;
  color: aliceblue;
}

.section-2 {
  background-color: #2a313b;
  min-height: 80vh;
  display: flex;
  justify-content: center;
}
.s2-content {
  color: aliceblue;
  text-align: center;
}

.section-3 {
  background-color: black;
  min-height: 40vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
}

.section-4 {
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: #2a313b;
  min-height: 50vh;
}

@media screen and (min-width: 992px) {
  .section-4 {
    min-height: 90vh;
  }
  .section-3 {
    min-height: 80vh;
  }
}

.section-5 {
  background-color: #29084a;
  padding-top: 5vh;
  padding-bottom: 5vh;
}

.section-6 {
  background-color: #2a313b;
}

.section-icon {
  height: 4rem;
}

.mirror {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.home {
  overflow-x: hidden;
}

a:hover {
  background-color: rgb(128, 128, 128, 0.5);
}

.li-color {
  color: #0a66c2;
}

.git-color {
  color: #30363d;
}

.fs-half {
  font-size: 0.5em;
}

.fs-2 {
  font-size: 2rem;
}

.flow-column {
  flex-direction: column;
}

a {
  color: black;
}
a:hover {
  color: black;
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