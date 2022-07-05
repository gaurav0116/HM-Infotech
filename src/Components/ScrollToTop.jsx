import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, [pathname]);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;


