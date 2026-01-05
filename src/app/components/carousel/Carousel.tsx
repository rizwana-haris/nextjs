"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      const el = document.getElementById("carouselExampleSlidesOnly");
      if (el) {
        new bootstrap.Carousel(el, {
          interval: 3000,
          ride: "carousel",
        });
      }
    });
  }, []);

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/8939267/pexels-photo-8939267.jpeg"
            alt="First slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5872364/pexels-photo-5872364.jpeg"
            alt="Second slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg"
            alt="Third slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}


