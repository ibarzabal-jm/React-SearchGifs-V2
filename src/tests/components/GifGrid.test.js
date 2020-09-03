import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')


describe('Prueba de componente <GifGrid />', () => {
    
    const category = 'Messi';

    test('debe de mostrar correctamente por pantalla ', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category} /> );
        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id:'ABC',
            title: 'Cualquiercosa',
            url:'https://localhost/juanma/cosa.jpg',
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category} /> );
        
        expect( wrapper ).toMatchSnapshot();
    })
    
    
})
