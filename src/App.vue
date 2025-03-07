<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NavigationLink :to="{ name: 'home' }" class="-m-1.5 p-1.5">
          <span class="sr-only">Everdell Scoring App</span>
          <img
            class="h-8 w-auto"
            src="./assets/images/logo.png"
            alt="Everdell Logo"
          />
        </NavigationLink>
      </div>

      <div class="flex flex-1 items-center justify-end gap-x-6">
        <NavigationLink :to="{ name: 'games.create' }" type="primary">
          New game
        </NavigationLink>
      </div>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script setup>
import NavigationLink from '@/components/NavigationLink.vue';
</script>
