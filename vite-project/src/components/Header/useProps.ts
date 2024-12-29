import { useEffect, useState } from "react";
export const useProps = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        // scrollが100pxを超えたか判定
        const handleShow = () => {
            setShow(window.scrollY > 100);
        };

        // イベントリスナーの設定
        window.addEventListener("scroll", handleShow);
        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, []); //空の依存配列を渡すことで初回レンダリング時のみ実行

    return {
        show,
    };
};