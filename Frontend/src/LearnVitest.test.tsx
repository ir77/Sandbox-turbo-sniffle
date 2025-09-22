import { expect, test, vi } from 'vitest'

test('vi.fn()の基本', () => {
  const getApples = vi.fn(); // 何も返さない空のモック関数を作成
  getApples(); // 呼び出す
  expect(getApples).toHaveBeenCalled(); // 呼び出されたかチェック

  // 戻り値を設定したモック関数
  const getOranges = vi.fn(() => 5);
  const orangeCount = getOranges();
  expect(orangeCount).toBe(5); // 戻り値をチェック
  expect(getOranges).toHaveReturnedWith(5); // 戻り値をチェックする別の書き方
});