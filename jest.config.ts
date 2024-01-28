const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // テスト環境の next.config.js と .env ファイルを読み込むために、Next.js アプリケーションへのパスを記載する
    dir: './',
})

// Jest に渡すカスタム設定を追加する
const customJestConfig = {
    // 各テストの実行前に渡すオプションを追加
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // TypeScript の設定で baseUrl をルートディレクトリに設定している場合、alias を動作させるためには以下のようにする必要があります
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig は、非同期で next/jest が Next.js の設定を読み込めるようにするため、下記のようにエクスポートします
module.exports = createJestConfig(customJestConfig)

// 裏側では、next/jest が自動的に以下のような Jest の設定をしています:

// SWC を利用した transform の設定
// スタイルシート（.css、.module.css や scss 関連事項）と画像の自動モック化
// .env（とその関連事項）を process.env に読み込む
// テスト環境や依存関係から node_modules を除外する
// テストの依存関係から .next を除外する
// SWC での変換を有効化するフラグを next.config.js から読み込む