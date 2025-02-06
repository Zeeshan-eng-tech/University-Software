export default function About(){
    return(
        <div>
      {/* Header */}
      <header className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1>About Us</h1>
          <p className="lead">Learn more about our mission in worldwide, values, and team.</p>
        </div>
      </header>

      {/* About Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              We are a team of dedicated professionals committed to delivering the
              best products and services to our customers. Our mission is to
              create value through innovation and customer-centric solutions.
            </p>
            <p>
              With years of experience and a passion for excellence, we aim to
              make a difference in the industries we serve.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2>Meet Our Team</h2>
          <p className="mb-5">The talented individuals behind our success.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">CEO & Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Chief Technology Officer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Emily Johnson</h5>
                  <p className="card-text">Head of Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}