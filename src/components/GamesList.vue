<template>
  <ul role="list" class="-mx-4 mt-5 sm:w-full divide-y divide-gray-200">
    <li
      v-for="game in games"
      :key="game.id"
      class="relative flex justify-between px-5 py-5"
    >
      <div class="flex pr-6">
        <div class="min-w-0 flex-auto">
          <div class="text-sm/6 font-semibold text-gray-900">
            <NavigationLink
              to=""
              @click.prevent="gameClicked(game)"
              class="flex items-center gap-x-2"
            >
              <span class="absolute inset-x-0 -top-px bottom-0" />

              <span
                v-for="player in game.players"
                :key="player.name"
                class="inline-flex size-6 items-center justify-center rounded-full bg-gray-500"
              >
                <span class="text-xs font-medium text-white">
                  {{ player.name[0] }}
                </span>
                <span class="absolute inset-x-0 -top-px bottom-0" />
              </span>
            </NavigationLink>
          </div>
          <p class="mt-1 flex gap-x-1 text-xs/6 text-gray-500">
            <span>started at</span>
            <time :datetime="game.startedAt">
              {{ formatDate(game.startedAt) }}
            </time>
          </p>
        </div>
      </div>
      <div class="flex items-center justify-between gap-x-4">
        <ChevronRightIcon
          class="size-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronRightIcon } from '@heroicons/vue/20/solid';
import NavigationLink from '@/components/NavigationLink.vue';
import { Game } from '@/types';

type Props = {
  games: Game[];
};

type Emits = {
  (e: 'gameClicked', game: Game): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const games = ref(props.games);

const formatDate = (date: string) => {
  return new Date(date).toLocaleTimeString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const gameClicked = (game: Game) => {
  emit('gameClicked', game);
};
</script>
