<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Everdell Scoring App</span>
            <img class="h-8 w-auto" src="https://images.launchbox-app.com/6bb7242b-778b-4473-9892-4fd3d281722a.png"
              alt="" />
          </a>
        </div>
      </nav>
    </header>

    <!-- Homepage -->
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Welcome to the Everdell Scoring Companion - your intuitive tool for effortless score tracking in the
            enchanting world of Everdell
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              New game
            </a>
          </div>
        </div>
      </div>
    </div>


    <!-- Players list -->
    <div>
      <label for="query" class="block text-sm/6 font-medium text-gray-900">Search candidates</label>
      <div class="mt-2 flex">
        <div class="-mr-px grid grow grid-cols-1 focus-within:relative">
          <input type="text" name="query" id="query"
            class="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
            placeholder="John Smith" />
          <UsersIcon class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
            aria-hidden="true" />
        </div>
        <button type="button"
          class="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
          <BarsArrowUpIcon class="-ml-0.5 size-4 text-gray-400" aria-hidden="true" />
          Sort
        </button>
      </div>
    </div>


    <!-- Results :: start -->
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold text-gray-900">Score</h1>
          <p class="mt-2 text-sm text-gray-700">
            Click on the category to enter the scoring points for each player
          </p>
        </div>
        <div class="-mx-4 mt-5 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Player
                  </th>
                  <th v-for="player in people" :key="player.name" scope="col"
                    class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    {{ player.name }}
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="score in tableContent" :key="score.key">
                  <td class="py-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900">
                    <div class="flex items-center gap-x-2">
                      <img v-if="score.icon" class="h-6 w-auto" :src="loadImage(score.icon)" alt="">
                      <span>{{ score.title }}</span>
                    </div>
                  </td>
                  <td v-for="playerScore in score.scores" :key="playerScore.key"
                    class="px-3 py-4 text-sm whitespace-nowrap text-center text-gray-700">
                    {{ playerScore.value }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class="py-3.5 pr-3 pl-4 text-sm font-semibold text-gray-900 sm:pl-0">
                    <div class="flex items-center gap-x-2">
                      <img class="h-6 w-auto" src="./assets/icons/icon-total.png" alt="">
                      <span>Total</span>
                    </div>
                  </td>
                  <td class="px-3 py-3.5 text-sm font-semibold text-center text-gray-900">20</td>
                  <td class="px-3 py-3.5 text-sm font-semibold text-center text-gray-900">30</td>
                  <td class="px-3 py-3.5 text-sm font-semibold text-center text-gray-900">1</td>
                  <td class="px-3 py-3.5 text-sm font-semibold text-center text-gray-900">1</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Results :: end -->

    <!-- Add score for a category :: start -->
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="flex items-center gap-x-2">
          <img class="h-6 w-auto" :src="loadImage('./assets/icons/icon-prosperity.png')" alt="">
          <h1 class="text-base font-semibold text-gray-900">
            Score > Prosperity
          </h1>
        </div>
        <div class="-mx-4 mt-5 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Player
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Score
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="player in people" :key="player.name">
                  <td class="py-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900">
                    {{ player.name }}
                  </td>
                  <td class="px-3 py-4 text-sm whitespace-nowrap text-left text-gray-700">
                    <input
                      type="number"
                      name="email"
                      class="block w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      min="0"
                    />
                  </td>
                </tr>
              </tbody>
              <!-- <tfoot>
                <tr>
                  <td class="py-3.5 pr-3 pl-4 text-sm font-semibold text-gray-900 sm:pl-0">
                    <div class="flex items-center gap-x-2">
                      <img class="h-6 w-auto" src="./assets/icons/icon-total.png" alt="">
                      <span>Total</span>
                    </div>
                  </td>
                  <td class="px-3 py-3.5 text-sm font-semibold text-center text-gray-900">20</td>
                  <td class="px-3 py-3.5 text-sm font-semibold text-center text-gray-900">30</td>
                  <td class="px-3 py-3.5 text-sm font-semibold text-center text-gray-900">1</td>
                  <td class="px-3 py-3.5 text-sm font-semibold text-center text-gray-900">1</td>
                </tr>
              </tfoot> -->
            </table>
            <div class="mt-5 p-5 flex items-center justify-center gap-x-6">
                <!-- <button
                  href="/"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button> -->

                <a
                  href="/"
                  class="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                  Cancel
                </a>
                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                  Save
                </a>

              </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add score for a category :: end -->


  </div>

</template>

<script setup lang="ts">
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/vue/16/solid'


const scores = [
  { key: 'base_cards', title: 'Cards', icon: './assets/icons/icon-cards.png' },
  { key: 'base_prosperity', title: 'Prosperity', icon: './assets/icons/icon-prosperity.png' },
  { key: 'base_events', title: 'Events', icon: '' },
  { key: 'base_journey', title: 'Journey', icon: '' },
  { key: 'base_tokens', title: 'Point tokens', icon: './assets/icons/icon-tokens.png' },
];

const people = ['A', 'B', 'M', 'C'].map((name) => {
  return {
    name,
    scores: {
      base_cards: Math.floor(Math.random() * 20),
      base_prosperity: Math.floor(Math.random() * 20),
      base_events: Math.floor(Math.random() * 10),
      base_journey: Math.floor(Math.random() * 10),
      base_tokens: Math.floor(Math.random() * 10),
      total: Math.floor(Math.random() * 10),
    },
  };
});

const tableContent = scores.map((score) => {
  return {
    key: score.key,
    title: score.title,
    icon: score.icon,
    scores: people.map((person) => {
      return {
        key: `${score.key}-${person.name}`,
        value: person.scores[score.key],
      };
    }),
  };
});

const loadImage = (img: string) => new URL(img, import.meta.url).href;
</script>