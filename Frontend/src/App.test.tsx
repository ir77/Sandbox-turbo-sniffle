import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

describe('App', async () => {
  beforeEach(() => {
    vi.spyOn(window, 'fetch').mockImplementation((url) => {
      if (url === '/api/form') {
        return Promise.resolve(
          new Response('Mocked response from backend', { status: 200 })
        );
      }

      if (url === 'https://jsonplaceholder.typicode.com/posts') {
        return Promise.resolve(
          new Response(JSON.stringify({ id: 101 }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
          })
        );
      }

      return Promise.reject(new Error(`Unhandled request: ${url}`));
    });
  });

  // 各テストの後にモックを解除
  afterEach(() => {
    vi.mocked(window.fetch).mockRestore();
  });

  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();

    // const backendResponseElement = await screen.findByText(
    //   'Mocked response from backend'
    // );

    // // レスポンスが表示されたことを確認
    // expect(backendResponseElement).toBeInTheDocument();

    // // 外部APIのレスポンスが表示されることも確認（例として）
    // const externalResponseElement = await screen.findByText(/101/);
    // expect(externalResponseElement).toBeInTheDocument();
  });
});
