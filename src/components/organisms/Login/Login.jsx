import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";

export const Login = () => {
  return (
    <form className="form__add">
      <Input
        tag="Usuario"
        type="text"
        name="user"
        placeholder="Ingrese su usuario"
      />
      <Input
        tag="Clave"
        type="password"
        name="clave"
        placeholder="Ingrese su clave"
      />
      <Button name="Iniciar sesión" />
    </form>
  );
};
