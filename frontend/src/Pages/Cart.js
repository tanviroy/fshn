// This is the Cart Page - will show products (if any) that are in the cart

import React, { useState, useEffect } from "react";
import "./App.scss";

export default function Cart() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderContent = () => (
    <>
        <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Alta Romea</h1>
        <h2 className="Parallax__content__heading__caption">
        You have no items in your shopping cart.
        Return home to continue shopping.
        </h2>
        </div>
    </>
    );

    return (
    <section className="Parallax">
        <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
        <div className="Parallax__content">{renderContent()}</div>
    </section>
    );
}
