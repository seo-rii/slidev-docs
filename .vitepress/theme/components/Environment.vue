<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      환경:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="mt-2 opacity-75">
      <span v-if="type === 'node'">
        이 설정 함수는 Node.js 환경에서만 실행됩니다.
      </span>
      <span v-else>
        이 설정 함수는 클라이언트 환경에서만 실행됩니다. 패키지를 가져올 때 브라우저 호환성을 확인하세요.
      </span>
    </div>
  </details>
</template>
