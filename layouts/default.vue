<template>
  <div class="site-container">
    <div class="panel">
      <div class="panel-header">
        <div class="panel-me">
          <img src="/kana.jpg" class="me-avatar">
          <h1 class="me">Kleinz</h1>
        </div>
        <div class="navbar">
          <NuxtLink to="/" class="nav-link nav-link-normal">
            Home</NuxtLink>
          <NuxtLink to="/skills" class="nav-link nav-link-normal">
            Skills</NuxtLink>
          <NuxtLink to="/projects" class="nav-link nav-link-normal">
            Projects</NuxtLink>
          <NuxtLink to="/contacts" class="nav-link nav-link-normal">
            Contacts</NuxtLink>
        </div>
      </div>
      <div class="w-full md:w-[500px] md:h-[456px] p-5 bg-slate-600 text-white rounded-lg overflow-y-scroll">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

html,
body {
  @apply bg-slate-900;
}

.site-container {
  @apply flex flex-col items-center justify-center w-screen min-h-screen;
}

.panel {
  @apply bg-slate-800 p-5 rounded-lg shadow-md flex flex-col md:flex-row gap-4 justify-center w-screen h-screen md:w-auto md:h-auto;
}

.panel-header {
  @apply flex flex-col gap-3;
}

.panel-me {
  @apply flex flex-col gap-2 items-center;
}

.me-avatar {
  @apply w-20 h-20 md:w-52 md:h-52 rounded-full;
}

.me {
  @apply text-2xl text-white;
}

.navbar {
  @apply flex flex-row justify-center items-center md:flex-col gap-3;
}

.nav-link {
  @apply transition duration-500 text-center p-2 font-bold text-white w-36 md:w-full rounded-xl;
}

.nav-link-normal {
  @apply bg-slate-700 hover:bg-slate-900;
}

.nav-link-active {
  @apply bg-slate-900
}

.nav-link-blue {
  @apply bg-blue-600 hover:bg-blue-900;
}
</style>