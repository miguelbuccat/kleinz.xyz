<script setup>
useHead({
  title: 'kleinz.xyz | Home',
});

definePageMeta
  ({
    layout
      : 'newdesign'
  });
</script>

<template>
  <div class="flex flex-col items-stretch gap-6">
    <div
      class="bg-[url('/kanaa_banner.jpg')] bg-cover w-full h-[200px] bg-center rounded-xl shadow-md flex flex-col items-center justify-center">
      <!-- <span class="font-extrabold text-3xl bg-slate-500 bg-opacity-80 text-white px-3 py-2 rounded-lg">Infos about me</span> -->
    </div>
    <div class="flex flex-row gap-3">
      <div class="bg-[url('/kanaa.jpg')] bg-cover w-[125px] h-[125px] rounded-full flex-shrink-0"></div>
      <div class="flex flex-col justify-center">
        <span class="text-3xl font-extrabold">Kleinz</span>
        <span class="text-slate-700 font-bold">🇵🇭 | he/him | 16 year old | full-stack web developer</span>
        <span class="text-xl text-slate-500">"You can't change the beginning, but you can start where you are and change
          the ending"</span>
      </div>
    </div>
  </div>
</template>