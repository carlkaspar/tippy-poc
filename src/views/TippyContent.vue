<script setup lang="ts">import { onMounted, onUnmounted, ref } from 'vue';


const contentRef = ref<HTMLDivElement>()
const listener = () => {
    if (!contentRef.value) return
    contentRef.value.style.color = generateRandomColor()
  }

onMounted(() => {
  contentRef.value?.addEventListener('click', listener)
})

onUnmounted(() => {
  contentRef.value?.removeEventListener('click', listener)
})



const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  return `rgb(${red}, ${green}, ${blue})`
}

</script>

<template>
  <div ref="contentRef">hello i am tippy</div>
</template>

