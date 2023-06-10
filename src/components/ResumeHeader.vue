<template>
    <div>
        <header class="resume-header flex justify-between">
            <div class="right-box flex flex-col justify-center">
                <h1 class="text-4xl text-left tracking-wider font-black text-sky-500">MADISON MITCHELL</h1>
                <h5 class="text-md text-left">Full Stack Software Engineer | Salesforce Developer</h5>
            </div>
            <div class="left-box flex">
                <div class="vertical-bar inline-block max-h-max bg-neutral-300 mr-4"></div>
                <div class="contact-info flex flex-col justify-center">
                    <a class="hover:text-sky-600" href="tel:3304955075"><h5 class="text-md text-left"><i class="fa-solid fa-phone text-neutral-400 w-6"></i>(330) 495-5075</h5></a>
                    <a class="hover:text-sky-600" href="mailto:madisonrmitchell@icloud.com"><h5 class="text-md text-left"><i class="fa-solid fa-envelope text-neutral-400 w-6"></i>madisonrmitchell@icloud.com</h5></a>
                    <a class="hover:text-sky-600" href="http://madison-mitchell.github.io" target="_blank"><h5 class="text-md text-left"><i class="fa-solid fa-globe text-neutral-400 w-6"></i>madison-mitchell.github.io</h5></a>
                    <a class="hover:text-sky-600" href="http://www.linkedin.com/in/madison-r-mitchell" target="_blank"><h5 class="text-md text-left"><i class="fa-brands fa-linkedin-in text-neutral-400 w-6"></i>linkedin.com/in/madison-r-mitchell</h5></a>
                    <a class="hover:text-sky-600" href="http://github.com/madison-mitchell" target="_blank"><h5 class="text-md text-left"><i class="fa-brands fa-github text-neutral-400 w-6"></i>github.com/madison-mitchell</h5></a>
                    <h5 class="text-md text-left"><i class="fa-solid fa-location-dot text-neutral-400 w-6"></i>Uniontown, OH, USA</h5>
                </div>
            </div>
        </header>
        <div class="horizontal-bar bg-neutral-300 h-0.5 w-full mt-4 mb-8"></div>
    </div>
</template>

<script>
export default {
    name: 'ResumeHeader',
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