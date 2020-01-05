import React, { useEffect, useState } from "react";

import { Container, Content, HeaderContent, Table } from "./styles";
import Header from "./../../components/Header";
import api from "./../../services/api";
import AnswerQuestion from "./../../components/AnswerQuestion";

export default function HelpQuestions() {
    const [data, setData] = useState({});
    const [questions, setQuestions] = useState([]);
    const [showQuestion, setShowQuestion] = useState(false);

    useEffect(() => {
        async function loadQuestions() {
            const { data } = await api.get("help-orders");

            setQuestions(data);
        }

        loadQuestions();
    }, []);

    async function handleSubmit(data) {
        setShowQuestion(!showQuestion);
        setData(data);
    }

    return (
        <Container>
            <Header />
            <Content>
                <HeaderContent>
                    <h1>Pedidos de auxílio</h1>
                </HeaderContent>
                <Table>
                    <thead>
                        <tr>
                            <th>ALUNO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(question => (
                            <tr key={question.id}>
                                <td>{question.student.name}</td>
                                <td>
                                    <button
                                        type="button"
                                        style={{ color: "#4d85ee" }}
                                        onClick={() => handleSubmit(question)}
                                    >
                                        responder
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Content>

            {showQuestion ? (
                <AnswerQuestion data={data} handleSubmit={handleSubmit} />
            ) : null}
        </Container>
    );
}
