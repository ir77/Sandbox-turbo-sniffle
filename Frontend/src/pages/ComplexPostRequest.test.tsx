import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import ComplexPostRequest from './ComplexPostRequest';

describe('ComplexPostRequest', () => {
  beforeEach(() => {
    vi.spyOn(window, 'fetch').mockImplementation(async (url) => {
      switch (url) {
        case '/api/complex-form':
          return new Response(JSON.stringify({ success: true, id: 123 }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        default:
          throw new Error(`Unhandled request: ${url}`);
      }
    });
  });

  afterEach(() => {
    vi.mocked(window.fetch).mockRestore();
  });

  it('複数の入力フィールドを持つフォームが表示される', () => {
    render(<ComplexPostRequest />);

    // フォームの入力フィールドが表示されることを確認
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('フォーム入力と送信が正常に動作する', async () => {
    const user = userEvent.setup();
    render(<ComplexPostRequest />);

    // フォームに入力
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a test message');

    // 入力値が正しく反映されることを確認
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('This is a test message');

    // フォーム送信
    await user.click(submitButton);

    // 送信後の成功メッセージが表示されることを確認
    expect(await screen.findByText(/form submitted successfully/i)).toBeInTheDocument();
  });

  it('必須フィールドのバリデーションが動作する', async () => {
    const user = userEvent.setup();
    render(<ComplexPostRequest />);

    const submitButton = screen.getByRole('button', { name: /submit/i });

    // 空のフォームを送信してバリデーションエラーを確認
    await user.click(submitButton);

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/message is required/i)).toBeInTheDocument();
  });

  it('メールアドレスの形式バリデーションが動作する', async () => {
    const user = userEvent.setup();
    render(<ComplexPostRequest />);

    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // 無効なメールアドレスを入力
    await user.type(emailInput, 'invalid-email');
    await user.click(submitButton);

    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
  });

  it('フォーム送信中の状態が正しく表示される', async () => {
    const user = userEvent.setup();
    
    // 送信に時間がかかるモックを設定
    vi.mocked(window.fetch).mockImplementation(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      return new Response(JSON.stringify({ success: true, id: 123 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    });

    render(<ComplexPostRequest />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // フォームに入力
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a test message');

    // フォーム送信
    await user.click(submitButton);

    // 送信中の状態が表示されることを確認
    expect(screen.getByText(/submitting/i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    // 送信完了まで待機
    expect(await screen.findByText(/form submitted successfully/i)).toBeInTheDocument();
  });

  it('フォーム送信エラーが正しく処理される', async () => {
    const user = userEvent.setup();
    
    // エラーレスポンスのモックを設定
    vi.mocked(window.fetch).mockImplementation(async () => {
      return new Response(JSON.stringify({ error: 'Server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    });

    render(<ComplexPostRequest />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // フォームに入力
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a test message');

    // フォーム送信
    await user.click(submitButton);

    // エラーメッセージが表示されることを確認
    expect(await screen.findByText(/failed to submit form/i)).toBeInTheDocument();
  });

  it('フォーム送信後にフォームがリセットされる', async () => {
    const user = userEvent.setup();
    render(<ComplexPostRequest />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // フォームに入力
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a test message');

    // フォーム送信
    await user.click(submitButton);

    // 送信完了まで待機
    await screen.findByText(/form submitted successfully/i);

    // フォームがリセットされることを確認
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
});