import { getGifs } from "../../src/helpers/getGifs"

describe('prubeas en getGifs', () => { 
    
    test('debe de retonrar un arreglo de gifs', async() => { 
        
        const gifs = await getGifs('one Punch')
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual( {
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        } )

     })

 })