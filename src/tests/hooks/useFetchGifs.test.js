import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('probando el useFetchGifs', () => {
    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( ()=>useFetchGifs('Hunter x Hunter') )
        const { data, loading } = result.current;
        
        // const { data:images, loading } = useFetchGifs( 'Hunter x Hunter' );
    
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

        
    })

    test('debe de retornar un arreglo de imagenes y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs('Hunter x Hunter') );
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(5);
        expect( loading ).toBe(false);

        
    })
    
    
    
})
