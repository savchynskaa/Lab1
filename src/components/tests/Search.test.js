import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../Search';

describe('Search', () => {
  test('renders all words: Search, All, Series, Movie', () => {
    render(<Search />);
    
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/Series/i)).toBeInTheDocument();
    expect(screen.getByText(/Movie/i)).toBeInTheDocument();
  });
});
