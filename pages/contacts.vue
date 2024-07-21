<script setup>
useHead({
  title: 'kleinz.xyz | Contacts',
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
      <span class="font-extrabold text-3xl bg-slate-500 bg-opacity-80 text-white px-3 py-2 rounded-lg">contacts</span>
    </div>
    <div
      class="text-xl w-full p-4 rounded-xl bg-pink-200 border-2 border-pink-300 flex flex-col gap-3 max-h-[350px] overflow-y-auto">
      <div>
        If you want to reach out to me, either a business inquiry, or just a little chit-chat (both I'm open to), feel
        free to use my contacts below
      </div>
      <div>
        <strong>Email</strong> - miguel.buccat12@gmail.com
      </div>
      <div>
        <strong>Discord</strong> - Kleinz
      </div>
    </div>
  </div>
</template>