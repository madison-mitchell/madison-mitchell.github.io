<template>
  <div id="top-of-page" class="container flex flex-col w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
    <ResumeDownload />
    <div class="resume-container bg-white p-4">
      <div class="resume bg-white drop-shadow-2xl mx-auto my-20 p-20">
        <ResumeHeader />
        <ResumeBio />
        <ResumeMain />
        <ResumeFooter />
      </div>
    </div>
  </div>
</template>


<script>
import ResumeDownload from '@/components/ResumeDownload.vue';
import ResumeHeader from '@/components/ResumeHeader.vue';
import ResumeBio from '@/components/ResumeBio.vue';
import ResumeMain from '@/components/ResumeMain.vue';
import ResumeFooter from '@/components/ResumeFooter.vue';

export default {
  components: {
    ResumeDownload,
    ResumeHeader,
    ResumeBio,
    ResumeMain,
    ResumeFooter
  }
}
</script>

<style scoped>
.resume {
  max-width: 1020px;
  /* max-height: 1320px; */
}

.vertical-bar {
  width: .5px;
}

.horizontal-bar {
  height: .5px;
}

</style>