<template>
    <div>
        <div class="main-section flex">
            <div class="left-box w-3/4">
                <div class="work">
                    <ResumeWorkExp />
                </div>
                <div class="projects my-4">
                    <ResumeProjects />
                </div>
            </div>
            <div class="vertical-bar inline-block max-h-max bg-neutral-300 mx-8"></div>
            <div class="w-1/5 flex mb-8">
                <div class="right-box">
                    <div class="skills-section">
                        <header class="skills-header flex">
                            <div class="inline-block w-1.5 h-7 bg-sky-500 mr-4"></div>
                            <h1 class="flex flex-col text-sky-500 text-2xl font-bold tracking-wider">SKILLS</h1>
                        </header>
                        <h3 class="text-left tracking-wide text-xl font-black mt-4">Technical</h3>
                        <ul class="tech-skills text-left text-md tracking-wide">
                            <li class="py-0 5" v-for="skill in techSkills" :key="skill">{{ skill }}</li>
                        </ul>
                        <h3 class="text-left tracking-wide text-xl font-black mt-6">Professional</h3>
                        <ul class="pro-skills text-left text-md tracking-wide">
                            <li class="py-0 5" v-for="skill in profSkills" :key="skill">{{ skill }}</li>
                        </ul>
                    </div>
                    <div class="education-section">
                        <header class="education-header flex mt-12">
                            <div class="inline-block w-1.5 h-7 bg-sky-500 mr-4"></div>
                            <h1 class="flex flex-col text-sky-500 text-2xl font-bold tracking-wider">EDUCATION</h1>
                        </header>
                        <h3 class="text-left tracking-wide text-xl font-black mt-6">Certificates</h3>
                        <ul class="education text-left text-md">
                            <li class="py-0.5">{{ education.cert }}</li>
                            <li class="py-0.5 ml-2">{{ education.date}}</li>
                            <li class="py-0.5 ml-2">{{ education.school}}</li>
                            <li class="py-0.5 ml-2">{{ education.location }}</li>
                        </ul>
                    </div>
                    <div class="interests-section">
                        <header class="education-header flex mt-12">
                            <div class="inline-block w-1.5 h-7 bg-sky-500 mr-4"></div>
                            <h1 class="flex flex-col text-sky-500 text-2xl font-bold tracking-wider">INTERESTS</h1>
                        </header>
                        <ul class="interests text-left text-md mt-6">
                            <li class="py-0 5" v-for="interest in interests" :key="interest">{{ interest }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="horizontal-bar bg-neutral-300 h-0.5 w-full mt-8 mb-8"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ResumeProjects from './ResumeProjects.vue';
import ResumeWorkExp from './ResumeWorkExp.vue';

export default {
    name: 'ResumeMain',
    components: {
        ResumeWorkExp,
        ResumeProjects,
    },
    computed: {
        ...mapState({
            techSkills: state => state.techSkills,
            profSkills: state => state.profSkills,
            education: state => state.education,
            interests: state => state.interests,
        }),
    },

}
</script>

<style scoped>
.vertical-bar {
  width: .5px;
}

.horizontal-bar {
  height: .5px;
}
</style>