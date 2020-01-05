import React, { useEffect, useState } from "react";

import { Container, Content, HeaderContent, Table } from "./styles";
import { MdAdd } from "react-icons/md";
import Header from "./../../components/Header";
import api from "./../../services/api";
import history from "./../../services/history";
import { toast } from "react-toastify";
import { formatPriceBR } from "./../../services/Currency";

export default function Plans() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        async function loadPlans() {
            const { data } = await api.get("/plans");

            data.forEach(function(item) {
                item.durationFormatted =
                    item.duration > 1
                        ? `${item.duration} meses`
                        : `${item.duration} mês`;

                item.priceformatted = formatPriceBR(item.price);
            });

            setPlans(data);
        }

        loadPlans();
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
        history.push("/plans/create");
    }

    return (
        <Container>
            <Header />
            <Content>
                <HeaderContent>
                    <h1>Gerenciando planos</h1>
                    <nav>
                        <button onClick={goCreate}>
                            <MdAdd size={20} color={"#FFF"} /> CADASTRAR
                        </button>
                    </nav>
                </HeaderContent>
                <Table>
                    <thead>
                        <tr>
                            <th>TITULO</th>
                            <th>DURAÇÃO</th>
                            <th>VALOR p/ MÊS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {plans.map(plan => (
                            <tr key={plan.id}>
                                <td>{plan.title}</td>
                                <td>{plan.durationFormatted}</td>
                                <td>{plan.priceformatted}</td>
                                <td>
                                    <button
                                        type="button"
                                        style={{ color: "#4d85ee" }}
                                        onClick={() => goEdit(plan)}
                                    >
                                        editar
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        style={{ color: "#de3b3b" }}
                                        onClick={() => handleDelete(plan.id)}
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
