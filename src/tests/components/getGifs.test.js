const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas con getGifs fetch', () => {
    
    test('debe de traer 5 elementos', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 5 );
    })
    
})
