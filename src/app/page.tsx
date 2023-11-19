
export default function Home() {
  return (
    <>
      <a className="menu-toggle rounded" href="#"><i className="fa fa-bars"></i></a>
      <nav className="navbar navbar-expand navbar-light" id="sidebar-wrapper">
          <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler d-none" data-bs-target="#"></button>
              <div className="collapse navbar-collapse">
                  <ul className="navbar-nav sidebar-nav" id="sidebar-nav">
                      <li className="nav-item sidebar-brand"><a className="nav-link active js-scroll-trigger" href="#page-top">Brand</a></li>
                      <li className="nav-item sidebar-nav-item"><a className="nav-link js-scroll-trigger" href="#page-top">Home</a></li>
                      <li className="nav-item sidebar-nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                      <li className="nav-item sidebar-nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                      <li className="nav-item sidebar-nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                      <li className="nav-item sidebar-nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                  </ul>
              </div>
          </div>
      </nav>
      <header className="d-flex masthead" style={{ backgroundImage: `url('assets/img/bg-masthead.jpg')` }}>
          <div className="container my-auto text-center">
              <h1 className="mb-1">Stylish Portfoliо</h1>
              <h3 className="mb-5"><em>A Free Bootstrap Theme</em></h3><a className="btn btn-primary btn-xl js-scroll-trigger" role="button" href="#about">Find Out More</a>
              <div className="overlay"></div>
          </div>
      </header>
      <section id="about" className="content-section bg-light">
          <div className="container text-center">
              <div className="row">
                  <div className="col-lg-10 mx-auto">
                      <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                      <p className="lead mb-5"><span>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at&nbsp;</span><a href="https://unsplash.com/">Unsplash</a><span>!</span></p><a className="btn btn-dark btn-xl js-scroll-trigger" role="button" href="#services">What We Offer</a>
                  </div>
              </div>
          </div>
      </section>
      <section id="services" className="content-section bg-primary text-white text-center">
        <div className="container">
            <div className="content-section-heading">
                <h3 className="text-secondary mb-0">Services</h3>
                <h2 className="mb-5">What We Offer</h2>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-5 mb-lg-0"><span className="mx-auto service-icon rounded-circle mb-3"><i className="icon-screen-smartphone"></i></span>
                    <h4><strong>Responsive</strong></h4>
                    <p className="mb-0 text-faded">Looks great on any screen size!</p>
                </div>
                <div className="col-md-6 col-lg-3 mb-5 mb-lg-0"><span className="mx-auto service-icon rounded-circle mb-3"><i className="icon-pencil"></i></span>
                    <h4><strong>Redesigned</strong></h4>
                    <p className="mb-0 text-faded">Freshly redesigned for Bootstrap 5.</p>
                </div>
                <div className="col-md-6 col-lg-3 mb-5 mb-lg-0"><span className="mx-auto service-icon rounded-circle mb-3"><i className="icon-like"></i></span>
                    <h4><strong>Favorited</strong></h4>
                    <p className="mb-0 text-faded"><span>Milions of users&nbsp;</span><i className="fa fa-heart"></i><span>&nbsp;us!</span></p>
                </div>
                <div className="col-md-6 col-lg-3 mb-5 mb-lg-0"><span className="mx-auto service-icon rounded-circle mb-3"><i className="icon-mustache"></i></span>
                    <h4><strong>Question</strong></h4>
                    <p className="mb-0 text-faded">I mustache you a question...</p>
                </div>
            </div>
        </div>
      </section>
      <section className="callout" style={{
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url("assets/img/bg-callout.jpg")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
          <div className="container text-center">
              <h2 className="mx-auto mb-5"><span>Welcome to&nbsp;</span><em>your</em><span><br />next website!<br /></span></h2><a className="btn btn-primary btn-xl" role="button" href="#">Download Now!</a>
          </div>
      </section>
      <section id="portfolio" className="content-section">
          <div className="container">
              <div className="content-section-heading text-center">
                  <h3 className="text-secondary mb-0">Portfolio</h3>
                  <h2 className="mb-5">Recent Projects</h2>
              </div>
              <div className="row g-0">
                  <div className="col-lg-6"><a className="portfolio-item" href="#">
                          <div className="caption">
                              <div className="caption-content">
                                  <h2>Stationary</h2>
                                  <p className="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                              </div>
                          </div><img className="img-fluid" src="assets/img/portfolio-1.jpg" />
                      </a></div>
                  <div className="col-lg-6"><a className="portfolio-item" href="#">
                          <div className="caption">
                              <div className="caption-content">
                                  <h2>Ice Cream</h2>
                                  <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                              </div>
                          </div><img className="img-fluid" src="assets/img/portfolio-2.jpg" />
                      </a></div>
                  <div className="col-lg-6"><a className="portfolio-item" href="#">
                          <div className="caption">
                              <div className="caption-content">
                                  <h2>Strawberries</h2>
                                  <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                              </div>
                          </div><img className="img-fluid" src="assets/img/portfolio-3.jpg" />
                      </a></div>
                  <div className="col-lg-6"><a className="portfolio-item" href="#">
                          <div className="caption">
                              <div className="caption-content">
                                  <h2>Workspace</h2>
                                  <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                              </div>
                          </div><img className="img-fluid" src="assets/img/portfolio-4.jpg" />
                      </a></div>
              </div>
          </div>
      </section>
      <section className="content-section bg-primary text-white">
          <div className="container text-center">
              <h2 className="mb-4">The buttons below are impossible to resist..</h2><a className="btn btn-light btn-xl me-4" role="button" href="#">Click Me!</a><a className="btn btn-dark btn-xl me-4" role="button" href="#">Look at Me</a>
          </div>
      </section>
      <section id="contact" className="map"><iframe allowFullScreen src="https://cdn.bootstrapstudio.io/placeholders/map.html" width="100%" height="400"></iframe></section>
      <footer className="footer text-center">
          <div className="container">
              <ul className="list-inline mb-5">
                  <li className="list-inline-item">&nbsp;<a className="link-light social-link rounded-circle" href="#"><i className="icon-social-facebook"></i></a></li>
                  <li className="list-inline-item">&nbsp;<a className="link-light social-link rounded-circle" href="#"><i className="icon-social-twitter"></i></a></li>
                  <li className="list-inline-item">&nbsp;<a className="link-light social-link rounded-circle" href="#"><i className="icon-social-github"></i></a></li>
              </ul>
              <p className="text-muted mb-0 small">Copyright &nbsp;© Brand 2023</p>
          </div><a className="js-scroll-trigger scroll-to-top rounded" href="#page-top"><i className="fa fa-angle-up"></i></a>
      </footer>
    </>
  )
}
