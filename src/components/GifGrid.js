import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__shakeY"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}



/* import React,{useState, useEffect} from 'react'
// import PropTypes from 'prop-types'

import { GifGridItem } from './GifGridItem'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {


    const [images, setImages] = useState([])    
    

    useEffect( () =>{
        // getGifs( category ).then(imgs => setImages( imgs ) )
        getGifs( category ).then( setImages )
    }, [ category ])
    




    return (
        
        <>
            <h3>{category}</h3>

            
            <div className="card-grid">
    
                {
                    images.map( img => (  
                        <GifGridItem 
                        key={img.id}
                        { ...img }
                        />
                    ))
                }
    
            
            </div>
        </>
    )
}


export default GifGrid
 */

