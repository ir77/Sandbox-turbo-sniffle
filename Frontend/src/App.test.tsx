import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';
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
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    // click the "vite-default" navigation item
    await user.click(screen.getByText('ViteDefault'));

    expect(await screen.findByText(/vite \+ react/i)).toBeInTheDocument();

    // click the "PostRequest" navigation item
    await user.click(screen.getByText('PostRequest'));

    expect(
      await screen.findByText('Mocked response from backend'),
    ).toBeInTheDocument();
  });
});
