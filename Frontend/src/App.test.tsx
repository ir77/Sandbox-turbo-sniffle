import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';
import App from './App';

describe('App - ルーティングテスト', async () => {
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

  it('各ページに正常にルーティングされる', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    // ComplexPostRequestページ（デフォルト）が表示される
    expect(screen.getByText('ComplexPostRequest')).toBeInTheDocument();

    // ViteDefaultページに移動
    await user.click(screen.getByText('ViteDefault'));
    expect(await screen.findByText(/vite \+ react/i)).toBeInTheDocument();

    // PostRequestページに移動
    await user.click(screen.getByText('PostRequest'));
    expect(
      await screen.findByText('Mocked response from backend'),
    ).toBeInTheDocument();

    // ComponentVSFunctionページに移動
    await user.click(screen.getByText('ComponentVSFunction'));
    expect(await screen.findByText(/component vs function/i)).toBeInTheDocument();
  });

  it('ナビゲーションリンクが正常に表示される', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    // すべてのナビゲーションリンクが表示される
    expect(screen.getByText('ComplexPostRequest')).toBeInTheDocument();
    expect(screen.getByText('PostRequest')).toBeInTheDocument();
    expect(screen.getByText('ComponentVSFunction')).toBeInTheDocument();
    expect(screen.getByText('ViteDefault')).toBeInTheDocument();
  });
});
