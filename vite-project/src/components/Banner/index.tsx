import { useProps } from "./useProps"; 
import { Layout } from "./Layout";

export const Banner = () => {
    return <Layout {...useProps()} />; // スプレッド構文でuseProps()の値を返す
};