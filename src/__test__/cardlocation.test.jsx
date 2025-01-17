import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardLocation } from '@/components/CardLocation';

// Mock de los componentes de Material-UI
jest.mock('@mui/material', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  Card: ({ children, ...props }) => <div data-testid="card" {...props}>{children}</div>,
  CardContent: ({ children, ...props }) => <div {...props}>{children}</div>,
  CardMedia: ({ alt, image, ...props }) => <img src={image} alt={alt} {...props} />,
  Typography: ({ children, variant, ...props }) => (
    <div data-testid={`typography-${variant}`} {...props}>{children}</div>
  ),
}));

describe('CardLocation', () => {
  const mockLocation = {
    id: 1,
    name: 'Test Location',
    code: 'TEST123',
    creationDate: '2024-01-17T12:00:00.000Z',
    image: 'https://example.com/image.jpg'
  };

  it('renderiza la información de la ubicación correctamente', () => {
    render(<CardLocation location={mockLocation} />);

    // Verifica la imagen
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockLocation.image);
    expect(image).toHaveAttribute('alt', `Image of the location ${mockLocation.name}`);

    // Verifica el nombre
    const name = screen.getByTestId('typography-h5');
    expect(name).toHaveTextContent(mockLocation.name);

    // Verifica el código
    const code = screen.getByText(mockLocation.code);
    expect(code).toBeInTheDocument();

    // Verifica la fecha
    const date = screen.getByText(new Date(mockLocation.creationDate).toLocaleDateString());
    expect(date).toBeInTheDocument();
  });

  it('mantiene la estructura correcta del card', () => {
    render(<CardLocation location={mockLocation} />);
    
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveStyle({ display: 'block' });
  });

  it('renderiza la fecha en el formato correcto', () => {
    render(<CardLocation location={mockLocation} />);
    
    const formattedDate = new Date(mockLocation.creationDate).toLocaleDateString();
    const dateElement = screen.getByText(formattedDate);
    expect(dateElement).toBeInTheDocument();
  });
});