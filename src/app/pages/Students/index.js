import React, { useEffect, useState } from "react";

import { Container, Content, HeaderContent, Table } from "./styles";
import { MdAdd } from "react-icons/md";
import Header from "./../../components/Header";
import api from "./../../services/api";
import history from "./../../services/history";
import { toast } from "react-toastify";

export default function Students() {
  const [student, setStudent] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get("/students", {
        params: {
          name: student
        }
      });

      setStudents(response.data);
    }
    loadStudents();
  }, [student]);

  async function handleDelete(id) {
    var message = window.confirm("Deseja apagar o registro?");
    try {
      if (message === true) {
        await api.delete(`/students/${id}`);
        toast.success("Registro apagado com sucesso.");
      } else {
        toast.warn("Registro não foi apagado.");
      }
    } catch (error) {
      toast.error("Erro ao apagar o registro.");
    }
  }

  function goEdit(student) {
    history.push("/students/edit", { student });
  }

  function goCreate() {
    history.push("/students/create");
  }

  return (
    <Container>
      <Header />
      <Content>
        <HeaderContent>
          <h1>Gerenciando alunos</h1>
          <nav>
            <button onClick={goCreate}>
              <MdAdd size={20} color={"#FFF"} /> CADASTRAR
            </button>
            <input
              type="text"
              name="name"
              placeholder="Buscar nome"
              onChange={e => setStudent(e.target.value)}
            />
          </nav>
        </HeaderContent>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
            </tr>
          </thead>

          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <button
                    type="button"
                    style={{ color: "#4d85ee" }}
                    onClick={() => goEdit(student)}
                  >
                    editar
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    style={{ color: "#de3b3b" }}
                    onClick={() => handleDelete(student.id)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
