<script setup lang="ts">

import TippyContent from './TippyContent.vue';
import TippyWrapper from './TippyWrapper.vue'
import {array} from '../main'

</script>

<template>
  <div class="about">
    <h1>This is an about page that has a lot of tippies</h1>

    <tippy-wrapper v-for="number in array">
      <template #trigger><button>Tippy</button></template>
        <tippy-content></tippy-content>
    </tippy-wrapper>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
