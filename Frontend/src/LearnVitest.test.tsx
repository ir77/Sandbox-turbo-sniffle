import { expect, test, vi, afterEach } from 'vitest'


describe('Vitestの基本的な使い方', () => {
    afterEach(() => {
      vi.restoreAllMocks(); // スパイを元の実装に戻す
    });

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

    const cart = {
      getApples: () => 5,
    };

    test('vi.spyOnの基本', () => {
        // cartオブジェクトのgetApplesメソッドをスパイする
        const spy = vi.spyOn(cart, 'getApples').mockReturnValue(10);

        expect(cart.getApples()).toBe(10); // Mockされた値が返る
        expect(spy).toHaveBeenCalled(); // スパイが呼び出されたか確認

        spy.mockRestore(); // スパイを元に戻す
        expect(cart.getApples()).toBe(5); // 元の関数の値が返る
    });
});
