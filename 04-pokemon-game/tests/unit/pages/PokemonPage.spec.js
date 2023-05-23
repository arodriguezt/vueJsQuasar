import { shallowMount, mount } from "@vue/test-utils";

import PokemonPage from "@/pages/PokemonPage";
import { pokemons } from "../mocks/pokemons.mock.js";



describe("PokemonPicture component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("debe hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe llamar el mixPokemonArr al montar", () => {
    const mixPokemonArrSpy = jest.spyOn(PokemonPage.methods, "mixPokemonArray");

    shallowMount(PokemonPage);

    expect(mixPokemonArrSpy).toHaveBeenCalled();
  });

  test("debe hacer match el snapshot al cargar los pokemons", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot()
  });

  test("debe mostrar los compomentes PokemonPicture y PokemonOptions", ()=>{
    const wrapper = shallowMount(PokemonPage, {
        data() {
          return {
            pokemonArr: pokemons,
            pokemon: pokemons[0],
            showPokemon: false,
            showAnswer: false,
            message: "",
          };
        },
      });

      const picture = wrapper.find('pokemon-picture-stub')
      const options = wrapper.find('pokemon-options-stub')

      expect(picture.exists()).toBe(true)
      expect(options.exists()).toBe(true)

      expect(picture.attributes('pokemonid')).toBe("1")
      expect(options.attributes('pokemons')).toBeTruthy()

  })

  test("pruebas con checkAnswer", async()=>{
    const wrapper = shallowMount(PokemonPage, {
        data() {
          return {
            pokemonArr: pokemons,
            pokemon: pokemons[0],
            showPokemon: false,
            showAnswer: false,
            message: "",
          };
        },
      });

      await wrapper.vm.checkAnswer(1)

      expect(wrapper.find('h2').exists()).toBeTruthy()
      expect ( wrapper.vm.showPokemon ).toBe(true)

      await wrapper.vm.checkAnswer (10)
      expect( wrapper.find('h2').text()).toBe(`Oops, era ${ pokemons [0].name}`)
  })
});
