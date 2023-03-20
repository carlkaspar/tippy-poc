<template>
  <tippy ref="tippyRef" v-bind="$attrs" :append-to="appendTo" :interactive="interactive" @hide="$emit('hide')" @show="$emit('show')">
    <slot name="trigger" />

    <template #content>
      <slot />
    </template>
  </tippy>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

import { Tippy } from 'vue-tippy'

const interactive = true

const props = defineProps<{
  appendTo?: Element | 'parent' | ((ref: Element) => Element)
}>()

defineEmits<{
  (event: 'show'): void
  (event: 'hide'): void
}>()

const tippyRef = ref()

const tip = computed(() => tippyRef.value?.tippy)

const hide = computed(() => tippyRef.value?.hide)

const appendTo = computed(() => props.appendTo || document.body)

defineExpose({ tip, hide })
</script>