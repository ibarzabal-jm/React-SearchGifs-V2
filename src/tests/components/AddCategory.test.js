import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCAtegory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    
    beforeEach( () => {
        jest.clearAllMocks();
        
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    });
    
    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto ', () => {
        
        const input = wrapper.find('input');
        const value ='Hola mundo'

        input.simulate('change', { target : { value } } );
    })

    test('NO debe de mostrar la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault: ()=>{} });

        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value ='Hola prueba'
        const input = wrapper.find('input');

        // simular el inputChange
        input.simulate('change', { target : { value } } );
        //simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // set categories debe ser llamado
        expect( setCategories ).toHaveBeenCalled();
        // el valor del input debe estar ''
        expect(wrapper.find('input').prop('value') ).toBe('');
        
    })

    
    
    
    
})
