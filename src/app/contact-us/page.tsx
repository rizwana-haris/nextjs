import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Addkart",
};

export default function ContactUs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <p className="text-center mb-4">
            Have a question or need help? We’d love to hear from you!  
            You can reach out to us using the form below or through our contact details.
          </p>

          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={4} placeholder="Type your message here"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>

          <div className="text-center mt-5">
            <p><strong>Email:</strong> support@addkart.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  )
}
