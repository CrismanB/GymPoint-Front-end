import React, { useState } from "react";
import { MdAdd, MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";

import Header from "./../../components/Header";
import { Container, Content, HeaderContent, FormEdit, Button } from "./styles";
import api from "./../../services/api";
import history from "./../../services/history";

export default function CreateStudents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);

  function handleGoback() {
    history.goBack();
  }

  async function handleSubmit() {
    if (!name || !email || !age || !weight || !height) {
      return toast.error("Campos vazios, verifique os dados.");
    }

    if (isNaN(age)) {
      return toast.error("Idade com valor invalído.");
    }

    if (isNaN(weight)) {
      return toast.error("Peso com valor invalído.");
    }

    if (isNaN(height)) {
      return toast.error("Altura com valor invalído.");
    }

    try {
      await api.post("/students", {
        name,
        email,
        age,
        weight,
        height
      });

      toast.success("Aluno cadastrado com sucesso.");
      history.push("/students");
    } catch (error) {
      toast.error("Algo deu errado, verifique os dados.");
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <HeaderContent>
          <h1>Matrícula de aluno</h1>
          <nav>
            <Button colorButton={"#3b3b3b"} onClick={handleGoback}>
              <MdKeyboardArrowLeft size={20} color={"#FFF"} /> VOLTAR
            </Button>
            <Button colorButton={"#ee4d64"} onClick={handleSubmit}>
              <MdAdd size={20} color={"#FFF"} /> SALVAR
            </Button>
          </nav>
        </HeaderContent>
        <FormEdit>
          <label>NOME COMPLETO</label>
          <input
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
            placeholder="Exemplo Silva Souza"
          />
          <label>ENDERECO DE E-MAIL</label>
          <input
            type="text"
            name="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="exemplo@hotmail.com"
          />
          <div>
            <div>
              <label>IDADE</label>
              <input
                type="text"
                name="age"
                onChange={e => setAge(e.target.value)}
                placeholder="Exemplo: 27"
              />
            </div>
            <div>
              <label>PESO (em kg)</label>
              <input
                type="text"
                name="weight"
                onChange={e => setWeight(e.target.value)}
                placeholder="Exemplo: 75"
              />
            </div>
            <div>
              <label>ALTURA</label>
              <input
                type="text"
                name="height"
                onChange={e => setHeight(e.target.value)}
                placeholder="Exemplo: 1.60"
              />
            </div>
          </div>
        </FormEdit>
      </Content>
    </Container>
  );
}
