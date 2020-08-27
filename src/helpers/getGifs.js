
export const getGifs = async( category ) =>{
        
    const apikey = 'A7zQQ6CwBCsNg3qwSu2rvcL5nBnOcnCU';
    let url = 'https://api.giphy.com/v1/gifs/search';
    let cantidadGifs = 5;
    

    
    url += `?api_key=${apikey}&q=${encodeURI(category)}&limit=${cantidadGifs}`;
    
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {

        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }

    })

    return gifs;
}




