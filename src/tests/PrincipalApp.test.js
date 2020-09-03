import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import {PrincipalApp} from '../PrincipalApp'

describe('Pruebas en <PrincipalApp />', () => {
    
    test('debe de mostrar el componente Correctamente ', () => {
        
        const wrapper = shallow( <PrincipalApp /> );

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de mostrar una lista de categorías', () => {
        
        const categories = ['Hunter x Hunter', 'Dragon ball'];
        const wrapper = shallow( <PrincipalApp defaultCategories={categories} /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
