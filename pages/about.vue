<script setup>
useHead({
  title: 'kleinz.xyz | About',
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
      class="bg-[url('/kaguya_banner.jpg')] bg-cover w-full h-[200px] bg-center rounded-xl shadow-md flex flex-col items-center justify-center max-h-[350px] overflow-y-auto">
      <span class="font-extrabold text-3xl bg-slate-500 bg-opacity-80 text-white px-3 py-2 rounded-lg">about me</span>
    </div>
    <div class="text-xl w-full p-4 rounded-xl bg-pink-200 border-2 border-pink-300">
      Hi! I'm Miguel Buccat. Also known by my online alias, <strong>Kleinz</strong>. I go by he/him pronouns<br/>
      <br/>
      🇵🇭 I'm a 16 year old studying TVL-ICT at DLSU-Dasmariñas 🏹💚<br/>
      <br/>
      I do full-stack web development. In fact, I've been doing web development since I was 11. <br/>
      <br/>
      To see what I'm capable of, please check out my <NuxtLink class="transition text-pink-600 hover:text-pink-800" to="/skills">Skills</NuxtLink> page<br />
      <br/>
      For more info about what I do, check out my <a class="transition text-pink-600 hover:text-pink-800" href="https://github.com/miguelbuccat">Github</a>
    </div>
  </div>
</template>