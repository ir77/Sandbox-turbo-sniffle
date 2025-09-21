import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', async () => {
  beforeEach(() => {
    vi.spyOn(window, 'fetch').mockImplementation(async (url) => {
      switch (url) {
        case '/api/form':
          return new Response('Mocked response from backend', { status: 200 });
        case 'https://jsonplaceholder.typicode.com/posts':
          return new Response(JSON.stringify({ id: 101 }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
          });
        default:
          throw new Error(`Unhandled request: ${url}`);
      }
    });
  });

  // 各テストの後にモックを解除
  afterEach(() => {
    vi.mocked(window.fetch).mockRestore();
  });

  it('renders without crashing', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();

    expect(await screen.findByText('Mocked response from backend')).toBeInTheDocument();
  });
});
