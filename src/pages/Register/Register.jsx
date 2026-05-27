import mascotSvg from "../../assets/svgs/body_image_mascot.svg";
import "./Register.css";

function Register({ copy }) {
  return (
    <main id="register" className="register-page">
      <div className="registration-art">
        <img id="mascot" src={mascotSvg} alt="" aria-hidden="true" />
      </div>
      <div className="registration-heading">
        <h1>{copy.title}</h1>
      </div>

      <div className="register-form-content">
        <form className="register-form">
          <label for="email">{copy.fields.email}</label>
          <input id="email" placeholder={copy.placeholder.email} />

          <label for="username">{copy.fields.username}</label>
          <input id="username" placeholder={copy.placeholder.username} />

          <label for="password">{copy.fields.password}</label>
          <input id="password" type="password" />

          <label for="confirm-password">{copy.fields.confirmPassword}</label>
          <input id="confirm-password" type="password" />

          <button className="signin-button" type="submit">
            {copy.actions.signup}
          </button>
        </form>
      </div>

      <div className="social-signup">
        <button type="submit">{copy.socialAuth.google}</button>
        <button type="submit">{copy.socialAuth.facebook}</button>
      </div>
    </main>
  );
}
export default Register;
