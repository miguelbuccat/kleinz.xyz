<script setup>
import { ref } from 'vue';

const page = ref("landing");
const landingLoaded = ref(false);
const letterLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    landingLoaded.value = true;
  }, 100);
});

const buttonPosition = ref({
  top: 100,
  left: 100
});

const buttonHovered = ref(false);

definePageMeta
  ({
    layout
      : 'nicki'
  });

const hovButtonInit = () => {
  buttonHovered.value = true;
}

const moveButton = () => {
  const maxX = 500; // Adjust 100 to your button width
  const maxY = 500; // Adjust 50 to your button height
  buttonPosition.value.top = Math.random() * maxY;
  buttonPosition.value.left = Math.random() * maxX;
};

const switchToLetter = () => {
  letterLoaded.value = false;
  page.value = "letter";
  setTimeout(() => {
    letterLoaded.value = true;
  }, 100);
}

const switchToLanding = () => {
  buttonHovered.value = false;
  landingLoaded.value = false;
  page.value = "landing";
  setTimeout(() => {
    landingLoaded.value = true;
  }, 100);
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen font-flower">
    <div class="transition duration-500 flex flex-col items-center bg-slate-100 p-4 rounded-lg shadow-md" :class="{ 'opacity-100': landingLoaded, 'opacity-0': !landingLoaded, 'rotate-12': !landingLoaded, 'rotate-0': landingLoaded }" v-if="page === 'landing'">
      <img src="/heart.svg" width="50" height="50" />
      <span class="text-2xl">kleinz wants you to read something</span>
      <div class="flex flex-row gap-2 mt-2">
        <button
          class="transition hover:rotate-6 hover:scale-110 bg-pink-600 font-extrabold text-white px-3 py-1 text-xl rounded-xl shadow-md"
          @click="switchToLetter">read?</button>
        <button
          class="absolute transition hover:rotate-6 hover:scale-110 bg-black font-extrabold text-white px-3 py-1 text-xl rounded-xl shadow-md"
          @mouseover="moveButton"
          :style="{ top: buttonPosition.top + 'px', left: buttonPosition.left + 'px', position: 'absolute' }" v-if="buttonHovered">
          no.
        </button>
        <button
          class="transition hover:rotate-6 hover:scale-110 bg-black font-extrabold text-white px-3 py-1 text-xl rounded-xl shadow-md"
          @mouseover="hovButtonInit" v-if="!buttonHovered">
          no.
        </button>
      </div>
    </div>

    <div class="transition duration-500 flex flex-col items-end bg-slate-100 p-4 rounded-lg shadow-md w-[600px]" :class="{ 'opacity-100': letterLoaded, 'opacity-0': !letterLoaded, 'rotate-12': !letterLoaded, 'rotate-0': letterLoaded }" v-if="page === 'letter'">
      <img src="/heart.svg" class="mx-auto" width="50" height="50" />
      <span class="text-2xl text-blue-400 mx-auto">"worth more than all the diamonds"</span>
      <span class="text-left">
        When you devalue your own worth, I get sad. When you call yourself a joke, I get  sad. Why? Because if you can see through the lens of my glasses and through my eyes, you'd see someone worth more than even all the diamonds in the world.<br /><br />

        Under our feet, precious gems like diamonds could be found lurking around, waiting for someone to discover and mine them out. But, those diamonds are still worth a lot even if no one has discovered them, right? Thousands, millions of people can walk over the ground where those diamonds are at, and everyone can just be ignorant to their existence. But those ignorant does not make those diamonds worthless, correct?<br /><br />

        To me, you are worth more than all the diamonds in the world. Just because the people before me treated you like a joke, just a regular stone.. doesn't mean you are. They just weren't the people who were meant to discover a gem like you. If a person could be measured in carats, to me, you would outweigh the scale of rarity and preciousness of all the gems in the world.<br /><br />

        If no one has taken you seriously until now, and no one has treated you right.. I will be the first to do so. If no one has stayed with you until your birthday, then I'll stay with you until your birthday, and I'll stay with you even after your birthday. Now and forever, I'm here. I will shield you from the pain of the past, and also shield you from the pain of the present and future. I will treat you right and love you right, just the way you deserve to be loved...<br /><br />

        You may ask, "why me?"<br /><br />

        Because to me.. you are worth more than all the diamonds
      </span>
      <button
          class="transition hover:rotate-6 hover:scale-110 bg-pink-600 font-extrabold text-white px-3 py-1 text-xl rounded-xl shadow-md"
          @click="switchToLanding">go back?</button>
    </div>
    <span class="text-sm text-slate-600 mt-2">from: kleinz to: nicki</span>
  </div>
</template>

<style>
html,
body {
  @apply bg-pink-200;
}
</style>