import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const PrincipalApp = ( { defaultCategories = [] }) => {

   
    
    // const [categories, setCategories] = useState(['Amor']);
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
            <h1> SearchGifs V2 </h1>
            <br />
            <AddCategory setCategories = {setCategories} />
            <hr />


            <ol>
                {
                    categories.map( category => 

                        <GifGrid 
                            category={category}
                            key={category}
                            
                        />

                    )
                }
            </ol>
        </>
    )
}
