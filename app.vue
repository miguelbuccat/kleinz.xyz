<template>
  <div class="site-container">
    <div class="panel">
      <div class="panel-header">
        <div class="panel-me">
          <img src="/frieren.jpg" class="me-avatar">
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
      <div class="w-full md:w-[500px] p-5 bg-slate-600 text-white rounded-lg overflow-x-scroll">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
