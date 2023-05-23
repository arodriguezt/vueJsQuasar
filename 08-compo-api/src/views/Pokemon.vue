<template>
  <h1 v-if="!pokemon && !errorMessage" >Buscando</h1>
  <h1 v-else-if="errorMessage">{{errorMessage}}</h1>
  <template v-else>
    <h3>{{pokemon.name}}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <router-link :to="{name:'pokemon-search'}">Regresar</router-link>
  </template>


</template> 

<script>
import {watch} from 'vue'
import { useRoute, onBeforeRouteLeave } from "vue-router"
import usePokemon from "@/composables/usePokemon"


export default {

  setup() {

    const route = useRoute()

    const {pokemon,isLoading,errorMessage,searchPokemon} = usePokemon(route.params.id)

    watch(
      ()=>route.params.id,
      ()=>searchPokemon(route.params.id)
      
    )

    onBeforeRouteLeave(()=>{
      const answer = window.confirm('¿Esta seguro de que quiere salir?')

      console.log('onBeforeRouteLeave');

      if(!answer) return false //bloquea la salida
    })

    return{
        errorMessage,
        isLoading,
        pokemon,
        searchPokemon
    }
  },
};
</script>

<style></style>
