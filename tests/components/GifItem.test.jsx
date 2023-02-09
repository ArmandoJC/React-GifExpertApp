import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe("Pruebas en GifItem", () => {
  const title = 'One Punch man';
  const url = 'https://media2.giphy.com/media/d2PqO9s7M9CNO/giphy.gif?cid=596cc03ceyfrxyhhbowg1ni09pypku0cvaaiiru0blztu1no&rid=giphy.gif&ct=g';


  test("Debería hacer match con el snapshot", () => {
    // render(<GifItem title={ title } url={ url } />);
    const { container } = render(<GifItem title={ title } url={ url } />);
    expect(container).toMatchSnapshot();
  
  });

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 

    render(<GifItem title={ title } url={ url } />);
    // screen.debug();
    // expect( screen.getByRole('img').src).toBe( url );
    // expect( screen.getByRole('img').alt).toBe( title );
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );


  });

  test('Debe de mostrar el título en el componente', () => { 

    render(<GifItem title={ title } url={ url } />);
    expect( screen.getByText( title )).toBeTruthy();



  });





});
