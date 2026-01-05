import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Addkart",
};

export default function AboutUs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About ADDKART</h2>

      <p className="lead text-center mb-5">
        Welcome to <strong>ADDKART</strong> — your one-stop destination for
        fashion, electronics, and home essentials. We bring top-quality products
        at the best prices to make online shopping enjoyable and affordable for
        everyone.
      </p>

      <div className="row text-center">
        <div className="col-md-4">
          <h5>💼 Our Mission</h5>
          <p>
            To deliver quality products at unbeatable prices and ensure
            excellent customer satisfaction.
          </p>
        </div>

        <div className="col-md-4">
          <h5>🚀 Our Vision</h5>
          <p>
            To become one of the most trusted and loved e-commerce platforms
            globally.
          </p>
        </div>

        <div className="col-md-4">
          <h5>🤝 Our Values</h5>
          <p>
            We believe in integrity, innovation, and putting our customers first
            in everything we do.
          </p>
        </div>
      </div>
    </div>
  )
}
