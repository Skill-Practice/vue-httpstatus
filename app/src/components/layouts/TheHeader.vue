<template>
  <header
    class="flex items-center justify-between max-w-full mx-12 mt-16 h-24 px-20 border-b rounded-t-2xl bg-white text-gray-500 font-bold"
  >
    <a href="#">
      <img
        class="h-9"
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/800px-Go_Logo_Blue.svg.png"
      />
    </a>

    <nav>
      <ul class="flex gap-10">
        <li v-for="item in menuItems" :key="item.id">
          <a href="#" class="py-2 hover:text-black hover:border-b-2 hover:border-cyan-500">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>

    <div>
      <a href="/Signin" class="py-2 px-3 mr-2 hover:bg-gray-100 rounded">Sign in</a>
      <a href="/Signup" class="py-2 px-3 text-white bg-cyan-500 hover:bg-cyan-600 rounded">Sign up</a>
    </div>
  </header>
</template>

<script setup>
const menuItems = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Domain' },
  { id: 4, name: 'Customers' },
  { id: 5, name: 'Contact' },
];
</script>
