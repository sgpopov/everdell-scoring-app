<template>
  <div class="lg:mt-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="mx-auto max-w-none">
      <div class="overflow-hidden bg-white sm:rounded-lg sm:shadow-sm">
        <div
          class="flex justify-between border-b border-gray-200 bg-white px-4 py-5 sm:px-6"
        >
          <h3
            class="flex items-center gap-x-2 text-base font-semibold text-gray-900"
          >
            <img class="max-w-6" :src="loadImage(scoreDetails.icon)" alt="" />
            <span>Score :: {{ scoreDetails?.title }}</span>
          </h3>
          <div>
            <NavigationLink
              to=""
              @click.prevent="goBack"
              type="secondary"
              class="flex items-center gap-x-2"
            >
              <ArrowLeftCircleIcon class="h-6 w-auto" />
              <span>Back</span>
            </NavigationLink>
          </div>
        </div>

        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="player in scores" :key="player.id">
            <div class="px-4 py-4">
              <div class="flex justify-between">
                <div class="sm:flex">
                  <div class="flex items-center text-gray-600">
                    <svg
                      class="mr-1.5 size-5 shrink-0 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z"
                      />
                    </svg>
                    {{ player.name }}
                  </div>
                </div>
              </div>
              <div class="mt-2 flex items-center justify-between">
                <InputField
                  type="number"
                  :name="`player_${player.id}`"
                  :ariaLabel="`Player ${player.id}`"
                  v-model="player.score"
                  required
                  min="0"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex m-4 lg:mx-0 justify-center">
        <button
          class="w-full rounded-md bg-orange-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
          @click="addScore"
        >
          Add scores
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline';
import NavigationLink from '@/components/NavigationLink.vue';
import InputField from '@/components/InputField.vue';
import { BaseGameScores, Game, PlayerScore } from '@/types';

type Props = {
  game: Game;
  scoreDetails: {
    key: string;
    title: string;
    icon: string;
  };
};

type Emits = {
  (e: 'scorePoints', scores: PlayerScore[]): void;
  (e: 'cancel'): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const scores = ref<PlayerScore[]>([]);

const iconModules = import.meta.glob('/src/assets/**/*.png', {
  eager: true,
});

const loadImage = (img: string) => {
  const normalizedPath = img.replace(/^@/, '/src');

  return (
    (iconModules as Record<string, { default: string }>)[normalizedPath]
      ?.default || ''
  );
};

const addScore = () => {
  emit('scorePoints', scores.value);
};

const goBack = () => {
  emit('cancel');
};

onMounted(() => {
  scores.value = props.game.players.map((player) => ({
    ...player,
    score: player.scores[props.scoreDetails.key as keyof BaseGameScores] || 0,
  }));
});
</script>
