import { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";

export const Login = () => {
  const [user, setUser] = useState({ field: "", valid: null });
  const [password, setPassword] = useState({ field: "", valid: null });

  const expressions = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/, // 4 a 12 digitos.
  };

  return (
    <form className="form__add">
      <Input
        tag="Usuario"
        type="text"
        name="user"
        placeholder="Ingresa el usuario"
        textError="Por favor ingresa tu usuario"
        regex={expressions.usuario}
        status={user}
        changeStatus={setUser}
      />
      <Input
        tag="Contraseña"
        type="password"
        name="password"
        placeholder="Ingresa tu contraseña"
        textError="Por favor ingresa tu contraseña"
        regex={expressions.usuario}
        status={password}
        changeStatus={setPassword}
      />
      <div className="form__button">
        <Button name="Iniciar Sesión" />
      </div>
    </form>
  );
};
