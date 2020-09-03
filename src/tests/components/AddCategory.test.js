import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCAtegory />', () => {
    
    const setCategories = () =>{};
    
    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow( <AddCategory setCategories={setCategories} /> );

        
    })
    
})
