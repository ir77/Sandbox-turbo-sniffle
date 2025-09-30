# ベースイメージとしてJava 21 を使用
FROM eclipse-temurin:21-jre

# コンテナ起動時に実行するコマンド
# -XX:+PrintCommandLineFlags は、JVMが最終的に使用するフラグ
# （エルゴノミクスで自動選択されたものを含む）を出力するオプション
CMD ["java", "-XX:+PrintCommandLineFlags", "-version"]