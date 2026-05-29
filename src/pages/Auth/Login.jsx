import mascotSvg from "../../assets/svgs/body_image_mascot.svg";
import googleSvg from "../../assets/icons/google.svg";
import facebookSvg from "../../assets/icons/facebook_blue.svg";
import "./auth.css";

function Login({ copy }) {
  return (
    <main id="auth" className="auth-page">
      <div className="auth-art">
        <img id="mascot" src={mascotSvg} alt="" aria-hidden="true" />
      </div>
      <div className="auth-heading">
        <h1>{copy.title}</h1>
      </div>

      <div className="auth-form-content">
        <form className="auth-form">
          <label for="email">{copy.fields.emailOrUsername}</label>
          <input id="email" placeholder={copy.placeholder.email} />

          <label for="password">{copy.fields.password}</label>
          <input id="password" type="password" />

          <a>{copy.actions.forgotPassword}</a>

          <button className="signin-button" type="submit">
            {copy.actions.signup}
          </button>
        </form>
      </div>

      <div className="separator-content">
        <hr />
        <p>{copy.separators.social}</p>
        <hr />
      </div>

      <div className="social-signup">
        <button type="button" className="social-btn">
          <img src={googleSvg} alt="google icon" className="google-icon" />
          {copy.socialAuth.google}
        </button>
        <button type="button" className="social-btn">
          <img
            src={facebookSvg}
            alt="facebook icon"
            className="facebook-icon"
          />
          {copy.socialAuth.facebook}
        </button>
      </div>
    </main>
  );
}

export default Login;
