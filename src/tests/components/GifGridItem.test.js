import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'



describe('Pruebas en <GrifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    
    
    test('debe de mostrar el componente correctamente ', () => {
        
        const wrapper = shallow( <GifGridItem title = {title} url = {url}/> );
        expect( wrapper ).toMatchSnapshot();
    })
    
})
