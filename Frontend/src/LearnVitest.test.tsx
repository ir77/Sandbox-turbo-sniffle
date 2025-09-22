import { expect, test, vi, afterEach } from 'vitest'
import { fetchUser } from './utils/api';

// '../utils/api'モジュールをMockする（importより前に記述する必要がある）
vi.mock('./utils/api', () => ({
    // モジュールがexportしているものをオブジェクトで定義する
    fetchUser: vi.fn(), // fetchUserをモック関数に置き換える
}));

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

    test('ユーザーIDに応じてfetchUserが呼ばれる', () => {
        // MockされたfetchUserの振る舞いを定義
        vi.mocked(fetchUser).mockResolvedValue({ name: 'Taro' });

        // 本来はここでUserProfileコンポーネントをレンダリングしてテストする
        // ...

        // 例として直接呼び出す
        fetchUser('1');

        // 正しい引数で呼び出されたかチェック
        expect(fetchUser).toHaveBeenCalledWith('1');
    });
});
