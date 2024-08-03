<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen font-flower p-4">
    <div class="transition-height duration-500 flex flex-col items-stretch bg-slate-50 p-6 rounded-xl shadow-md gap-6 w-[450px] md:w-[548px] border-2 border-blue-300">
      <slot />
      <div class="flex flex-row justify-center gap-2">
        <NuxtLink to="/" class="transition duration-300 font-extrabold text-xl text-white px-2 py-1 bg-blue-600 hover:bg-blue-500 hover:rotate-6 active:scale-75 rounded-xl">home</NuxtLink>
        <NuxtLink to="/about" class="transition duration-300 font-extrabold text-xl text-white px-2 py-1 bg-blue-600 hover:bg-blue-500 hover:rotate-6 active:scale-75 rounded-xl">about me</NuxtLink>
        <NuxtLink to="/skills" class="transition duration-300 font-extrabold text-xl text-white px-2 py-1 bg-blue-600 hover:bg-blue-500 hover:rotate-6 active:scale-75 rounded-xl">skills</NuxtLink>
        <NuxtLink to="/contacts" class="transition duration-300 font-extrabold text-xl text-white px-2 py-1 bg-blue-600 hover:bg-blue-500 hover:rotate-6 active:scale-75 rounded-xl">contacts</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
html,
body {
  @apply bg-blue-200;
}
.nav-link-active {
  @apply rotate-6;
}
</style>