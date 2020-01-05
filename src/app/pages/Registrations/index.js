import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import { Container, Content, HeaderContent, Table } from "./styles";
import { MdAdd, MdCheckBox } from "react-icons/md";
import Header from "./../../components/Header";
import api from "./../../services/api";
import history from "./../../services/history";
import { toast } from "react-toastify";

export default function Registrations() {
    const [registration, setRegistration] = useState([]);
    useEffect(() => {
        async function loadRegistrations() {
            const { data } = await api.get("registrations");

            data.forEach(function(element) {
                element.start_date_formatted = format(
                    parseISO(element.start_date),
                    "dd 'de' MMMM 'de' yyyy",
                    { locale: pt }
                );
                element.end_date_formatted = format(
                    parseISO(element.end_date),
                    "dd 'de' MMMM 'de' yyyy",
                    { locale: pt }
                );
            });

            setRegistration(data);
        }

        loadRegistrations();
    }, []);

    async function handleDelete(id) {
        var message = window.confirm("Deseja apagar o registro?");
        try {
            if (message === true) {
                await api.delete(`/plans/${id}`);
                toast.success("Registro apagado com sucesso.");
            } else {
                toast.warn("Registro não foi apagado.");
            }
        } catch (error) {
            toast.error("Erro ao apagar o registro.");
        }
    }

    function goEdit(plan) {
        history.push("/plans/edit", { plan });
    }

    function goCreate() {
        history.push("/registrations/create");
    }

    return (
        <Container>
            <Header />
            <Content>
                <HeaderContent>
                    <h1>Gerenciando matrículas</h1>
                    <nav>
                        <button onClick={goCreate}>
                            <MdAdd size={20} color={"#FFF"} /> CADASTRAR
                        </button>
                    </nav>
                </HeaderContent>
                <Table>
                    <thead>
                        <tr>
                            <th>ALUNO</th>
                            <th>PLANO</th>
                            <th>INÍCIO</th>
                            <th>TÉRMINO</th>
                            <th>ATIVA</th>
                        </tr>
                    </thead>

                    <tbody>
                        {registration.map(item => (
                            <tr key={item.id}>
                                <td>{item.student.name}</td>
                                <td>{item.plan.title}</td>
                                <td>{item.start_date_formatted}</td>
                                <td>{item.end_date_formatted}</td>
                                <td>
                                    <MdCheckBox
                                        size={16}
                                        color={
                                            item.active ? "#3dba76" : "#a8b3ad"
                                        }
                                    />
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        style={{ color: "#4d85ee" }}
                                        onClick={() => goEdit()}
                                    >
                                        editar
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        style={{ color: "#de3b3b" }}
                                        onClick={() => handleDelete()}
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
