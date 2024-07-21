<script setup>
useHead({
  title: 'kleinz.xyz | Skills',
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
      class="bg-[url('/kaguya_banner.jpg')] bg-cover w-full h-[200px] bg-center rounded-xl shadow-md flex flex-col items-center justify-center">
      <span class="font-extrabold text-3xl bg-slate-500 bg-opacity-80 text-white px-3 py-2 rounded-lg">skills</span>
    </div>
    <div class="text-xl w-full p-4 rounded-xl bg-pink-200 border-2 border-pink-300 flex flex-col gap-2 max-h-[350px] overflow-y-auto">
      <div>
        <strong>ExpressJS (JS/TS)</strong> - ExpressJS is a minimalist and unopinionated framework I use to make
        performant APIs or multiple-page applications using
        ejs
      </div>
      <div>
        <strong>Laravel (PHP)</strong> - Laravel is a framework that provides a lot of the stuff out of the box
        <strike>totally not bloat</strike>, allowing me to prototype or create web applications faster
      </div>
      <div>
        <strong>AdonisJS (JS/TS)</strong> - Similar to Laravel, it is a batteries-included framework, also allowing me
        to prototype or create web applications faster
      </div>
      <div>
        <strong>VueJS (JS/TS)</strong> - VueJS is a Javascript framework I use to build performant single page frontends
        for web applications
      </div>
      <div>
        <strong>ReactJS (JS/TS)</strong> - Similar to VueJS, ReactJS is a Javascript framework that I also use to build
        performant single page frontends for web applications
      </div>
      <div>
        <strong>Unity (C#)</strong> - A popular 3D game engine that uses the C# programming language. currently a
        beginner.
      </div>
    </div>
  </div>
</template>