<template>
    <div class="navBar bg-gradient-to-b from-cyan-500 to-blue-500 h-screen flex flex-col w-72">
        <router-link to="/"><h1 class="mt-10 text-2xl text-center font-bold text-white">Madison Mitchell</h1></router-link>
        <div class="bio flex flex-col justify-center px-6">
            <img class="headshot rounded-full w-8/12 my-6 mx-auto" src="../assets/headshot.jpeg" alt="" />
            <p class="text-white font-medium">Hi! 👋🏻 My name is Madison. I have a passion for creating, design, and fixing. What I love about Software Development is how it encapsulates all three in one.</p>
        </div>

        <div class="social-icons mt-4 flex justify-center">
            <div class="flex flex-col justify-center items-center bg-white rounded-full w-8 h-8 mr-2">
                <a href="https://www.linkedin.com/in/madison-r-mitchell"><i class="fa-brands fa-linkedin-in fa-lg text-sky-500"></i></a>
            </div>
            <div class="flex flex-col justify-center items-center bg-white rounded-full w-8 h-8 ml-2">
                <a href="https://github.com/madison-mitchell"><i class="fa-brands fa-github fa-lg text-sky-500"></i></a>
            </div>
        </div>

        <div class="h-px m-6 bg-blue-300"></div>

        <nav class="flex flex-col items-center w-full">
            <ul class="text-left text-white font-medium">
                <li class="flex items-center p-2 hover:text-sky-700 active:text-sky-900">
                    <a href="/#home"><i class="fa-solid fa-house text-center w-6"></i><span class="ml-2 mt-1">Home</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-sky-700 active:text-sky-900">
                    <a href="/#about-me-container"><i class="fa-solid fa-user text-center w-6"></i><span class="ml-2 mt-1">About Me</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-sky-700 active:text-sky-900">
                    <a href="/#skills-container"><i class="fa-solid fa-clipboard text-center w-6"></i><span class="ml-2 mt-1">Skills</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-sky-700 active:text-sky-900">
                    <a href="/#portfolio-container"><i class="fa-solid fa-laptop text-center w-6"></i><span class="ml-2 mt-1">Portfolio</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-sky-700 active:text-sky-900">
                    <a href="/#contact-container"><i class="fa-solid fa-envelope text-center w-6"></i><span class="ml-2 mt-1">Contact</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-sky-700 active:text-sky-900">
                    <router-link to="resume#top-of-page"><i class="fa-solid fa-file-lines text-center w-6"></i><span class="ml-2 mt-1">Resume</span></router-link>
                </li>
            </ul>

            <button class="bg-sky-700 hover:bg-sky-800 text-white font-bold mt-10 py-4 px-6 rounded"><i class="fa-solid fa-paper-plane text-white"></i> Hire Me</button>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
