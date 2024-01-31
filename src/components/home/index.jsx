import React from "react";
import '../css/bootstrap.min.css';
import '../css/index.css';

export default class Home extends React.PureComponent {

  goToPage(pathname) {
    this.props.history.push({ pathname });
  }

  goToLoginPage = () => {
    this.goToPage('/login');
  }

  goToSignupPage = () => {
    this.goToPage('/signup');
  }
  render() {
    return (
      <div className="index-page">
        {/* ======= Start Gallery Section =======  */}
        <div className="container gallery">
          <div className="row gallery-box">
            <div className="col-4 column">
              <div className="gallery-photo">
                <img src="img/1.png" />
              </div>
              <div className="gallery-photo">
                <img src="img/4.png" />
              </div>
              <div className="gallery-photo">
                <img src="img/7.png" />
              </div>
            </div>
            <div className="col-4 column">
              <div className="gallery-photo">
                <img src="img/2.png" />
              </div>
              <div className="gallery-photo">
                <img src="img/5.png" />
              </div>
              <div className="gallery-photo">
                <img src="img/8.png" />
              </div>
            </div>
            <div className="col-4 column">
              <div className="gallery-photo">
                <img src="img/3.png" />
              </div>
              <div className="gallery-photo">
                <img src="img/6.png" />
              </div>
              <div className="gallery-photo">
                <img src="img/9.png" />
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        {/* ======= End Gallery Section =======  */}
        <div className="container leading-content">
          {/* ======= Start Text Section =======  */}
          <div className="content">
            <p className="title">New Place, New Home!</p>
            <p className="text">
              Are you ready to uproot and start over in a new area? Placoo will help
              you on your journey!
            </p>
          </div>
          {/* ======= End Text Section =======  */}
          {/* ======= Start Action Section =======  */}
          <div className="actions">
            <button className="log-in" onClick={this.goToLoginPage}>
              <p className="login-btn-text">Log in</p>
            </button>
            <button className="mid-btn">
              <p className="mid-btn-text">Sign up</p>
            </button>
            <button className="sign-up" onClick={this.goToSignupPage}>
              <p className="signup-btn-text" />
              Sign up
              <p />
            </button>
          </div>
          {/* ======= End Action Section =======  */}
        </div>
      </div>
    )
  }
}
