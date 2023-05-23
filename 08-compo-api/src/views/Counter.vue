<template>
  <h1>Conter view</h1>
  <h2>{{ counter }}</h2>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
import useCounter from '@/composables/useCounter.js';
export default {
  name: "Counter",
  props: {},
  emits: [],
  setup() {
    const {counter, decrease, increase} = useCounter(10)

    return{
        counter,
        decrease,
        increase
    } 
  },
};
</script>

<style></style>
