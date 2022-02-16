import alert from "./../../../assets/img/alert_icon.png";
import check from "./../../../assets/img/check_icon.png";
import "./message_styles.css";

export const Message = (props) => {
  const { text } = props;
  if (text === "alert") {
    return (
      <div className="container__message--alert">
        <p>
          <img src={alert} alt="alert_img" className="alert__img" />
          <strong>Error:</strong> Por favor llena el formulario correctamente
        </p>
      </div>
    );
  } else if (text === "check") {
    return (
      <div className="container__message--check">
        <p>
          <img src={check} alt="check_img" className="alert__img" />
          Formulario enviado correctamente
        </p>
      </div>
    );
  }
};
