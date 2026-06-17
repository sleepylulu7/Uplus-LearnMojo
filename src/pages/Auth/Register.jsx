import mascotSvg from "../../assets/svgs/body_image_mascot.svg";
import googleSvg from "../../assets/icons/google.svg";
import facebookSvg from "../../assets/icons/facebook_blue.svg";
import "./auth.css";

function Register({ copy }) {
  return (
    <main id="auth" className="auth-page">
      <div className="auth-art">
        <img id="mascot" src={mascotSvg} alt="" aria-hidden="true" />
      </div>
      <div className="auth-heading">
        <h1>{copy.auth.titles.register}</h1>
      </div>

      <div className="auth-form-content">
        <form className="auth-form">
          <label for="email">{copy.auth.fields.email}</label>
          <input id="email" placeholder={copy.auth.placeholder.email} />

          <label for="username">{copy.auth.fields.username}</label>
          <input id="username" placeholder={copy.auth.placeholder.username} />

          <label for="password">{copy.auth.fields.password}</label>
          <input id="password" type="password" />

          <label for="confirm-password">
            {copy.auth.fields.confirmPassword}
          </label>
          <input id="confirm-password" type="password" />

          <button className="signin-button" type="submit">
            {copy.auth.actions.signup}
          </button>
        </form>
      </div>

      <div className="separator-content">
        <hr />
        <p>{copy.auth.separators.social}</p>
        <hr />
      </div>

      <div className="social-signup">
        <button type="button" className="social-btn">
          <img src={googleSvg} alt="google icon" className="google-icon" />
          {copy.auth.socialAuth.google}
        </button>
        <button type="button" className="social-btn">
          <img
            src={facebookSvg}
            alt="facebook icon"
            className="facebook-icon"
          />
          {copy.auth.socialAuth.facebook}
        </button>
      </div>

      <div className="separator-login">
        <span>{copy.auth.separators.loginText}</span>
        <a href="#login">{copy.auth.separators.login}</a>
      </div>
    </main>
  );
}
export default Register;
