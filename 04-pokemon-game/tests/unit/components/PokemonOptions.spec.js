import { shallowMount } from "@vue/test-utils";

import PokemonOptions from "@/components/PokemonOptions";

import { pokemons } from "../mocks/pokemons.mock.js";

describe("PokemonPicture component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("debe hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe mostrar las 4 opciones correctamente", () => {
    const liTags = wrapper.findAll("li")
    expect(liTags.length).toBe(4)

    expect(liTags[0].text()).toBe("bulbasaur")
    expect(liTags[1].text()).toBe("ivysaur")
    expect(liTags[2].text()).toBe("charmander")
    expect(liTags[3].text()).toBe("venusaur")
  });

  test('debe emitir "selection" con los respectivos parametros', () => {
    const [li1,li2,li3,li4] = wrapper.findAll("li")

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    // wrapper.emited('selecionPokemon') Emite el argumento de la emision en este caso solo emite 4 trigger
    expect(wrapper.emitted('selectionPokemon').length).toBe(4)

    // wrapper.emited('selecionPokemon') Emite el argumento de la emision en este caso el emit emite el id de li1: [[1]]
    expect(wrapper.emitted('selectionPokemon')[0]).toStrictEqual([1])
    expect(wrapper.emitted('selectionPokemon')[1]).toStrictEqual([2])
    expect(wrapper.emitted('selectionPokemon')[2]).toStrictEqual([3])
    expect(wrapper.emitted('selectionPokemon')[3]).toStrictEqual([4])




  });
});
