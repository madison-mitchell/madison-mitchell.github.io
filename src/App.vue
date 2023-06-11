<template>
  <div class="container flex md:max-w-full lg:max-w-full xl:max-w-full">
    <div class="left top-0 w-72">
      <NavBar class="sticky top-0" />
    </div>
    <div class="right w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
        <router-view />

    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
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
