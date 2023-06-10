<template>
    <div>
        <header class="flex mt-20 mb-8">
            <div class="inline-block w-1.5 h-7 bg-sky-500 mr-4"></div>
            <h1 class="flex flex-col text-sky-500 text-2xl font-bold tracking-wider">PROJECTS</h1>
        </header>
        <div :class="proj" v-for="proj in projects" :key="proj">
            <div :class="'header-' + proj.title.toLowerCase().replace(/\s/g, '-')" class="flex justify-between mt-4">
                <a class="hover:text-sky-700" :href="proj.url" target="_blank">
                    <h3 class="text-left tracking-wide text-xl font-black">{{ proj.title }}</h3>
                </a>
                <h4 class="flex flex-col justify-center text-neutral-400 text-sm">{{ proj.date }}</h4>
            </div>
            <p :class="'p-' + proj.title.toLowerCase().replace(/\s/g, '-')" class="text-justify text-md pl-6" v-for="paragraph in proj.paragraph" :key="paragraph">{{ paragraph }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ResumeProjects',
    computed: {
        ...mapState({
            projects: state => state.projects,
        }),
    },
}
</script>

<style>

</style>