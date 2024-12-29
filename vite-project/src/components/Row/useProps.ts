// Reactから必要なフックをインポート
import { useEffect, useState } from "react";
import { Movie } from "../../type";
// axiosをインポート (APIリクエスト用ライブラリ)
import axios from "../../axios"; // axiosの設定ファイルへの相対パス

// カスタムフック useProps を定義
export const useProps = (fetchUrl: string) => { 
  // moviesという状態変数を定義し、初期値は空の配列
  const [movies, setMovies] = useState<Movie[]>([]); 

  // useEffectフックを使ってAPIからデータを取得
  useEffect(() => {
    // 非同期関数 fetchData を定義
    async function fetchData() {
      // fetchUrlで指定されたURLにAPIリクエストを送信
      const request = await axios.get(fetchUrl); 

      // レスポンスデータから必要な情報を抽出し、movies配列を作成
      const movies = request.data.results.map((movie: Movie) => ({
        id: movie.id,
        name: movie.name,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      }));

      // setMoviesを使ってmovies状態変数を更新
      setMovies(movies); 

      // requestオブジェクトを返す (クリーンアップ関数としては使用しない)
      return request;
    }

    // fetchData関数を呼び出す
    fetchData();
  }, [fetchUrl]); // fetchUrlが変更されたときのみuseEffect内の処理を実行

  // movies状態変数を返す
  return movies; 
};
