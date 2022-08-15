import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas para componente GiftItem', () => {
    
    const url = 'https://www.google.com/saitama.jpg';
    const title = 'Saitama';
    
    test('Debería mostrar el compontente igual al match', () => {
        const { container } = render(<GifItem url={url} title={title}/>)
        expect(container).toMatchSnapshot();
    });
    
    test('Debería mostrar una imágen con URL y ALT', () => {
        render(<GifItem url={url} title={title}/>);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    
    test('Debería mostrar un texto en el componente', () => {
        render(<GifItem url={url} title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});