export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome to In Future Website</h1>
          <p className="lead">
            Your one-stop destination for quality products and services.
          </p>
          <a href="/products" className="btn btn-primary btn-lg">
            Explore Products
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-4 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Feature 1</h5>
                <p className="card-text">
                  Description of the first feature of your website.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Feature 2</h5>
                <p className="card-text">
                  Description of the second feature of your website.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Feature 3</h5>
                <p className="card-text">
                  Description of the third feature of your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}