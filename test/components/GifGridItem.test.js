import { render } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('pruebas en GifGridItem', () => { 

    const title = 'Saitama';
    const url = 'https://on-punch.com/saitama/jpg';
    
    test('debe de hacer match con el snapshot', () => { 

        const { container } = render( <GifGridItem title={ title } url={ url }/> );
        expect( container ).toMatchSnapshot();

     })

 })