<template>
  <div id="home-container">
    <AboutMe />
    <Skills />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from '../components/AboutMe.vue';
import Skills from '../components/Skills.vue';
import Portfolio from '../components/Portfolio.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'HomeView',
  components: {
    AboutMe,
    Skills,
    Portfolio,
    Contact,
  },
};
</script>

<style scoped></style>
