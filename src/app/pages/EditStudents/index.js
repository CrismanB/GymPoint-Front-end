import React, { useState, useEffect } from "react";
import { MdAdd, MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";

import Header from "./../../components/Header";
import { Container, Content, HeaderContent, FormEdit, Button } from "./styles";
import api from "./../../services/api";
import history from "./../../services/history";

export default function EditStudents() {
  const [student] = useState(history.location.state.student);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setName(student.name);
    setEmail(student.email);
    setAge(student.age);
    setWeight(student.weight);
    setHeight(student.height);
  }, [student]);

  function handleGoback() {
    history.goBack();
  }

  async function handleSubmit(id) {
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
      await api.put(`/students/${id}`, {
        name,
        email,
        age,
        weight,
        height
      });

      toast.success("Aluno atualizado com sucesso!");
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
          <h1>Edição de aluno</h1>
          <nav>
            <Button colorButton={"#3b3b3b"} onClick={handleGoback}>
              <MdKeyboardArrowLeft size={20} color={"#FFF"} /> VOLTAR
            </Button>
            <Button
              colorButton={"#ee4d64"}
              onClick={() => handleSubmit(student.id)}
            >
              <MdAdd size={20} color={"#FFF"} /> ATUALIZAR
            </Button>
          </nav>
        </HeaderContent>
        <FormEdit initialData={student}>
          <label>NOME COMPLETO</label>
          <input
            type="text"
            name="name"
            defaultValue={student.name}
            onChange={e => setName(e.target.value)}
            placeholder="Exemplo Silva Souza"
          />
          <label>ENDERECO DE E-MAIL</label>
          <input
            type="text"
            name="email"
            defaultValue={student.email}
            onChange={e => setEmail(e.target.value)}
            placeholder="exemplo@hotmail.com"
          />
          <div>
            <div>
              <label>IDADE</label>
              <input
                type="text"
                name="age"
                defaultValue={student.age}
                onChange={e => setAge(e.target.value)}
                placeholder="Exemplo: 27"
              />
            </div>
            <div>
              <label>PESO (em kg)</label>
              <input
                type="text"
                name="weight"
                defaultValue={student.weight}
                onChange={e => setWeight(e.target.value)}
                placeholder="Exemplo: 75"
              />
            </div>
            <div>
              <label>ALTURA</label>
              <input
                type="text"
                name="height"
                defaultValue={student.height}
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
