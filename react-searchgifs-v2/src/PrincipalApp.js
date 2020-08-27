import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const PrincipalApp = () => {

   
    
    const [categories, setCategories] = useState(['Hunter x Hunter']);

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
