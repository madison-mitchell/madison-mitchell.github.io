<template>
<!--  <div class="container h-screen grid grid-cols-4 md:max-w-full lg:max-w-full xl:max-w-full">
    <div class="left top-0 col-span-1">
      <NavBar class="sticky top-0" />
    </div>
    <div class="right col-span-3 sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
        <AboutMe />
        <Skills />

    </div>
  </div> -->

  <div class="container flex md:max-w-full lg:max-w-full xl:max-w-full">
    <div class="left top-0 w-72">
      <NavBar class="sticky top-0" />
    </div>
    <div class="right w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
        <!-- <AboutMe />
        <Skills />
        <Contact /> -->
        <router-view />

    </div>
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue';
// import AboutMe from './components/AboutMe.vue';
// import Skills from './components/Skills.vue';
// import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    // AboutMe,
    // Skills,
    // Contact
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
