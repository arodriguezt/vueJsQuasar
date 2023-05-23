import {shallowMount,mount} from '@vue/test-utils'

import Counter from '@/components/Counter'

describe('Counter Component',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })    
    // test('Debe hacer match con el snapshot', () =>{
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    test('h2 debe tener valor defecto "Counter"',()=>{

        expect(wrapper.find('h2').exists()).toBe(true)

        const h2 = wrapper.find('h2').text()

        expect(h2).toBe('Counter')
    })

    test('el valor por defecto debe ser 100', ()=>{

        const pDataTest = wrapper.find('[data-testid="counter"]').text()

        expect(pDataTest).toBe("100")
    })

    test('debe incrementar en 1 el valor de contador y disminuir 2',async () =>{

        const [increaseBtn,decreaseBtn] = wrapper.findAll('button');

        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('99')
    })

    test('debe establecer valor por defecto ', () => {
        
        const {start}= wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)

    });
    
    test('debe mostrar la prop title', () => {
        const title = 'Hola Mundo!'
        const wrapper = shallowMount(Counter,{
            props:{
                title
            }
        })

        const h2 = wrapper.find('h2').text()

        expect(h2).toBe(title)
    });
    
})