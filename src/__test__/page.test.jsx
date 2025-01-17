import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { Typography } from '@mui/material';

// Mock de los componentes y módulos
jest.mock('@mui/material', () => ({
  Typography: jest.fn(({ children, variant, ...props }) => (
    <div data-testid="mock-typography" {...props}>{children}</div>
  ))
}));

jest.mock('@/components/BoxLocations', () => ({
  BoxLocations: jest.fn(() => <div data-testid="mock-box-locations">BoxLocations Mock</div>)
}));

// Mock para CSS modules
jest.mock('../app/page.module.css', () => ({
  page: 'page-class',
  main: 'main-class',
  footer: 'footer-class'
}));

describe('Home Component', () => {
  it('renderiza el título "Locations"', () => {
    render(<Home />);
    const titleElement = screen.getByTestId('mock-typography');
    expect(titleElement).toHaveTextContent('Locations');
  });

  it('renderiza el componente BoxLocations', () => {
    render(<Home />);
    const boxLocations = screen.getByTestId('mock-box-locations');
    expect(boxLocations).toBeInTheDocument();
  });

  it('renderiza el footer con el enlace correcto', () => {
    render(<Home />);
    const footerLink = screen.getByRole('link');
    expect(footerLink).toHaveAttribute('href', 'https://juanpablohuertas.com/');
    expect(footerLink).toHaveAttribute('target', '_blank');
    expect(footerLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(footerLink).toHaveTextContent('Desarrollado con ❤️ por Juan Pablo Huertas');
  });
});