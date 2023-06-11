<template>
    <div id="about-me-container" class="container bg-neutral-100 sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
        <div class="about-me lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 p-16 m-auto">
            <div class="about lg:col-span-1 xl:col-span-2 text-justify">
                <header class="flex mb-8">
                    <div class="inline-block w-1.5 h-10 bg-sky-500 mr-4"></div>
                    <h1 class="flex flex-col text-4xl font-bold">Madison Mitchell</h1>
                </header>
                <p class="mb-2 max-sm:text-lg">
                    Hey there, I'm Madison Mitchell, a Software Developer with nine years of experience in the dynamic world of technology. Throughout my journey, I've honed my skills in a multitude of technologies, including Java, C#, .NET, HTML/CSS, JavaScript, Vue.js, SQL Gearset, and Salesforce.
                    It's been an exhilarating ride, navigating the ever-changing landscape of code.
                </p>
                <div v-for="(paragraph, index) in paragraphs" :key="index" v-show="!hideParagraphs || index < visibleParagraphs">
                    <p class="mb-2 max-sm:text-lg">{{ paragraph }}</p>
                </div>

                <div class="flex lg:flex-col lg:items-center justify-evenly my-10">
                    <button v-if="hideParagraphs" class="show-btn flex justify-center items-center max-sm:mr-2 py-2 px-4 rounded bg-emerald-500 hover:bg-emerald-700 text-white text-center font-semibold sm:w-44 md:w-44 lg:w-72 xl:w-44" @click="toggleParagraphs">
                        <i class="fa-solid fa-square-plus"></i><span class="ml-2">Show More</span>
                    </button>
                    <button v-else class="show-btn flex justify-center items-center max-sm:mr-2 py-2 px-4 rounded bg-amber-500 hover:bg-amber-700 text-white text-center font-semibold sm:w-44 md:w-44 lg:w-72 xl:w-44" @click="toggleParagraphs">
                        <i class="fa-solid fa-square-plus"></i><span class="ml-2">Show More</span>
                    </button>

                    <button class="portfolio-btn flex justify-center items-center sm:mx-2 lg:my-2 py-2 max-sm:mx-2 px-4 bg-sky-500 hover:bg-sky-700 rounded text-white text-center font-semibold sm:w-44 md:w-44 lg:w-72 xl:w-44" href="">
                        <i class="fa-solid fa-circle-arrow-right"></i><span class="ml-2">View Portfolio</span>
                    </button>
                    <router-link to="/resume">
                        <button class="resume-btn flex justify-center items-center max-sm:ml-2 py-2 px-4 bg-sky-500 hover:bg-sky-700 rounded text-white text-center font-semibold sm:w-44 md:w-44 lg:w-72 xl:w-44" href="">
                            <i class="fa-solid fa-file-lines"></i><span class="ml-2 mt-1">View Resume</span>
                        </button>
                    </router-link>
                </div>
            </div>

            <div class="sm:hidden lg:inline xl:col-end-4">
                <img class="photo rounded-xl" src="../assets/headshot2.jpeg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutMe",
    data() {
        return {
            hideParagraphs: true,
            visibleParagraphs: 1,
            paragraphs: [
                "I find immense joy in bringing ideas to life through lines of code, crafting innovative solutions that make a difference. The thrill of problem-solving and the satisfaction of creating something from scratch is what fuels my drive every day.",
                "But my passion extends beyond the realm of coding. I'm an ardent believer in the power of continuous learning and creative exploration.When I'm not immersed in coding projects, you'll find me exploring various avenues of creation, whether it's through art, writing, or experimenting with new technologies. The world is my playground, and I'm always seeking new ways to expand my knowledge and push the boundaries of what's possible.",
                "In a nutshell, I'm Madison Mitchell, a tech enthusiast who thrives on the excitement of coding, creating, and learning.With every line of code, I strive to make a meaningful impact and leave a lasting impression on the ever - evolving world of technology.",
            ],
        };
    },
    methods: {
        toggleParagraphs() {
            this.hideParagraphs = !this.hideParagraphs;
        },
    },
};
</script>

<style scoped>
.about-me {
    max-width: 1200px;
}

@media not all and (min-width: 640px) {
    .about-me {
        width: 550px;
    }

    .photo {
        width: 500px;
        margin: auto 0;
    }
}
</style>
