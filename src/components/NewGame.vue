<template>
  <div class="lg:mt-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="mx-auto max-w-none">
      <div class="overflow-hidden bg-white sm:rounded-lg sm:shadow-sm">
        <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 class="text-base font-semibold text-gray-900">New game</h3>
        </div>

        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="(player, idx) in players" :key="player.id">
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
                    Player {{ idx + 1 }}
                  </div>
                </div>
                <div>
                  <span
                    class="px-2 py-1 text-xs font-medium text-red-700 cursor-pointer"
                    @click="removePlayer(player.id)"
                  >
                    Remove
                  </span>
                </div>
              </div>
              <div class="mt-2 flex items-center justify-between">
                <InputField
                  type="text"
                  :name="`player_${player.id}`"
                  :ariaLabel="`Player ${player.id}`"
                  v-model="player.name"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex justify-center">
        <div class="mt-6 text-center">
          <button
            @click="addPlayer"
            class="group inline-flex text-base font-medium cursor-pointer"
          >
            <UserPlusIcon
              class="mr-2 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span class="text-gray-500 hover:text-gray-700">Add player</span>
          </button>
        </div>
      </div>

      <div v-if="canStartGame" class="flex m-4 lg:mx-0 justify-center">
        <button
          class="w-full rounded-md bg-orange-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
          @click.once="startGame"
        >
          Start game
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { Player } from '@/types';
import { UserPlusIcon } from '@heroicons/vue/24/outline';
import InputField from './InputField.vue';

interface Props {
  defaultPlayers?: number;
}

interface Emits {
  (e: 'startGame', value: Player[]): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const uniqueId = ref(0);
const players = ref<Player[]>([]);

const canStartGame = computed(() =>
  players.value.every((player) => !!player.name)
);

onMounted(() => {
  if (props.defaultPlayers) {
    generateDefaultPlayers(props.defaultPlayers);
  }
});

const generateDefaultPlayers = (count: number) => {
  uniqueId.value = count;

  players.value = [...Array(count)].map((_, idx) => ({
    id: idx,
    name: '',
  }));
};

const addPlayer = () => {
  uniqueId.value = uniqueId.value += 1;

  players.value.push({
    id: uniqueId.value,
    name: '',
  });
};

const removePlayer = (idx: number) => {
  players.value = players.value.filter((player) => player.id !== idx);
};

const startGame = () => emit('startGame', players.value);
</script>
