import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import logo from "./../../assets/logo.png";
import { Container, Login, FormLogin, Inputs } from "./styles";

import { signInRequest } from "./../../store/modules/auth/actions";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira seu e-mail.")
    .required("E-mail obrigatório"),
  password: Yup.string().required("Senha obrigatório.")
});

export default function Signin() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Container>
        <Login>
          <img src={logo} alt="GymPoint" />
          <FormLogin schema={schema} onSubmit={handleSubmit}>
            <label>SEU E-MAIL</label>
            <Inputs
              type="email"
              name="email"
              placeholder="Digite seu e-mail."
            />
            <label>SUA SENHA</label>
            <Inputs
              type="password"
              name="password"
              placeholder="Digite sua senha."
            />

            <button type="submit">Acessar o sistema</button>
          </FormLogin>
        </Login>
      </Container>
    </>
  );
}
