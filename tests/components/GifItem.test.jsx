import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe("Pruebas en GifItem", () => {
  const title = 'One Punch man';
  const url = 'https://media2.giphy.com/media/d2PqO9s7M9CNO/giphy.gif?cid=596cc03ceyfrxyhhbowg1ni09pypku0cvaaiiru0blztu1no&rid=giphy.gif&ct=g';


  test("Debería hacer match con el snapshot", () => {
    // render(<GifItem title={ title } url={ url } />);
    const { container } = render(<GifItem title={ title } url={ url } />);
    expect(container).toMatchSnapshot();
  
  });
});
