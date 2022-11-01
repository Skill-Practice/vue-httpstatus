<template>
  <header>
    <nav class="max-w-7xl flex items-center justify-between mx-auto p-6 border-b text-gray-400">
      <img
        class="h-9"
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/800px-Go_Logo_Blue.svg.png"
      />

      <ul class="flex gap-10">
        <li v-for="item in menuItems" :key="item.id">
          <a href="" class="hover:border-gray-300 hover:text-gray-900">{{ item.name }}</a>
        </li>
      </ul>

      <a
        href="/login"
        class="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
        >Login</a
      >
    </nav>
  </header>
</template>

<script setup>
const menuItems = [
  { id: 1, name: '網站資訊查詢' },
  { id: 2, name: '網站速度檢測' },
];
</script>
