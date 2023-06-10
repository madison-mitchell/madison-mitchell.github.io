<template>
    <div>
        <header class="flex mb-8">
            <div class="inline-block w-1.5 h-7 bg-sky-500 mr-4"></div>
            <h1 class="flex flex-col text-sky-500 text-2xl font-bold tracking-wider">WORK EXPERIENCES</h1>
        </header>
        <div :class="job.name.replace(/\s/g, '') + '-details'" v-for="job in workExp" :key="job">
            <div :class="'header-' + job.name.replace(/\s/g, '')" class="flex justify-between mt-4">
                <h3 class="text-left tracking-wide text-xl font-black">{{ job.jobTitle }}</h3>
                <h4 class="flex flex-col justify-center text-neutral-400 text-sm">{{ job.name }} | {{ job.dates }}</h4>
            </div>
            <ul class="bullets-progressive text-justify text-md list-disc pl-6">
                <li class="py-0.5" v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ResumeWorkExp',
    computed: {
        ...mapState({
            workExp: state => state.workExp,
        }),
    },

}
</script>

<style>

</style>