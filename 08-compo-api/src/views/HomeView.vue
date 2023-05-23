<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h2>{{ ironman }}</h2>
    <h2>{{ hulk }}</h2>
    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "",
  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 50 });

    return {
      ironman,
      hulk,

      changeIronman: () => {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 55;
      },
      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 51;
      },
    };
  },
};
</script>
