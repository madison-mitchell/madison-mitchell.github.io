<template>
  <div id="portfolio-container" class="container sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">

            <div class="portfolio grid grid-cols-3 gap-8 p-16 text-justify m-auto">
                <header class="flex col-span-3">
                    <div class="inline-block w-1.5 h-10 bg-sky-500 mr-4"></div>
                    <h1 class="flex flex-col justify-around text-3xl font-bold">Portfolio</h1>
                </header>
                <p class="col-span-3">Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
                <div class="portfolio-grid grid grid-cols-3 col-span-4 gap-8">

                    <a class="hover:text-sky-500 focus:text-sky-700" :href="proj.url" v-for="proj in projects" :key="proj">
                        <div :class="'proj-' + proj.title.toLowerCase().replace(/\s/g, '-')" class="bg-white drop-shadow-md rounded-xl p-4 hover:drop-shadow-xl">
                            <h1 class="font-bold text-lg">{{ proj.title }}</h1>
                            <img :class="'proj-img-' + proj.title.toLowerCase().replace(/\s/g, '-')" class="drop-shadow-md rounded" :src="getImageUrl(proj.img)" alt="" ref="gifImage">
                            <!-- <p class="ml-4 text-left" v-for="p in proj.paragraph" :key="p">{{ p }}</p> -->
                        </div>
                    </a>
                </div>
            </div>
        </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Portfolio',
    computed: {
        ...mapState({
            projects: state => state.projects,
        }),
    },
      methods: {
        getImageUrl(img) {
            return require('@/assets/' + img);
        },
        playGif(event) {
            event.target.src = this.gifUrl;
        },
        pauseGif(event) {
            event.target.src = '';
        },
    },
}
</script>

<style scoped>
.portfolio {
    max-width: 1200px;
}
</style>