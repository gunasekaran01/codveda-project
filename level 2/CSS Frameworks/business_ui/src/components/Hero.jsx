function Hero() {
  return (
    <section id="home" className="bg-light py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1 className="display-4 fw-bold text-primary">
              Build Modern Websites
            </h1>

            <p className="lead mt-4">

              Create beautiful and responsive websites using
              React and Bootstrap 5. Build projects faster with
              reusable Bootstrap components.

            </p>

            <a href="#services" className="btn btn-primary btn-lg mt-3">
              Get Started
            </a>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
              alt="Hero"
              className="img-fluid rounded shadow"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;