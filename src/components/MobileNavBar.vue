<template>
  <div class="mobile-menu fixed bottom-0 left-0 w-full h-16 bg-sky-500 py-2 flex items-center justify-evenly z-10">
    <a class="home-btn text-center text-white hover:bg-sky-600 py-2 px-4 rounded transition-colors duration-300" href="/"><i class="fa fa-home text-3xl"></i></a>
    <a class="about-me-btn text-center text-white hover:bg-sky-600 py-2 px-4 rounded transition-colors duration-300" href="/#about-me-container"><i class="fa-solid fa-user text-3xl"></i></a>
    <a class="skills-btn text-center text-white hover:bg-sky-600 py-2 px-4 rounded transition-colors duration-300" href="/#skills-container"><i class="fa-solid fa-clipboard text-3xl"></i></a>
    <a class="portfolio-btn text-center text-white hover:bg-sky-600 py-2 px-4 rounded transition-colors duration-300" href="/#portfolio-container"><i class="fa-solid fa-laptop text-3xl"></i></a>
    <router-link class="resume-btn text-center text-white hover:bg-sky-600 py-2 px-4 rounded transition-colors duration-300" to="/resume"><i class="fa-solid fa-file-lines text-3xl"></i></router-link>
    <a class="contact-btn text-center text-white hover:bg-sky-600 py-2 px-4 rounded transition-colors duration-300" href="/#contact-container"><i class="fa-solid fa-envelope text-3xl"></i></a>
  </div>
</template>

<script>
export default {
  name: "MobileNavBar",
};
</script>

<style></style>
