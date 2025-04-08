import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../layout/Main';

global.fetch = jest.fn();

describe('Main componentDidMount()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches data on mount and updates state', async () => {
    const mockData = {
      Search: [
        { Title: 'The Matrix', Year: '1999' },
        { Title: 'The Matrix Reloaded', Year: '2003' },
      ],
    };

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<Main />);

    await act(async () => {
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('s=matrix')
    );

    expect(screen.getByText('The Matrix')).toBeInTheDocument();
    expect(screen.getByText('The Matrix Reloaded')).toBeInTheDocument();
  });

  test('handles fetch errors gracefully', async () => {
    fetch.mockRejectedValueOnce(new Error('API error'));

    render(<Main />);

    await act(async () => {
    });

    expect(screen.queryByText('The Matrix')).not.toBeInTheDocument();
    expect(screen.queryByText('The Matrix Reloaded')).not.toBeInTheDocument();
  });
});
