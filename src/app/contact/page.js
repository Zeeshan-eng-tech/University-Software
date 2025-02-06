export default function Contact(){
    return (
        <div>
      {/* Header */}
      <header className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1>Contact Us</h1>
          <p className="lead">We'd love to hear from you! Reach out to us anytime.</p>
        </div>
      </header>

      {/* Contact Form Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Get in Touch</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2>Contact Information</h2>
          <p className="mb-4">You can also reach us through the following:</p>
          <div className="row">
            <div className="col-md-4">
              <h5>Phone</h5>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="col-md-4">
              <h5>Email</h5>
              <p>info@mywebsite.com</p>
            </div>
            <div className="col-md-4">
              <h5>Address</h5>
              <p>1234 Street Name, City, State, ZIP</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}