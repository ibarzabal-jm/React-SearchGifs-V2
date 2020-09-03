import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'



describe('Pruebas en <GrifGridItem />', () => {
    
    test('debe de mostrar el componente correctamente ', () => {
        
        const wrapper = shallow( <GifGridItem/> );
        expect( wrapper ).toMatchSnapshot();
    })
    
})
