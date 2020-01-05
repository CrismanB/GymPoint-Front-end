import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Container, Form } from "./styles";
import api from "./../../services/api";

export default function AnswerQuestion({ data, handleSubmit, ...rest }) {
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        data.answer = answer;
    }, [answer, data.answer]);

    async function handleAnswer() {
        if (data.answer === null || data.answer === "") {
            toast.warn("Não foi respondido a mensagem selecionada.");
            handleSubmit();
            return;
        }

        const answer = { answer: data.answer };

        try {
            await api.post(`/help-orders/${data.id}/answer`, answer);

            toast.success("Mensagem respondida com sucesso!");
        } catch (error) {
            toast.error("Erro ao salvar a mensagem!");
        }

        handleSubmit();
    }

    return (
        <Container>
            <Form>
                <label>Pergunta do aluno</label>
                <span>{data.question}</span>
                <label>Sua resposta</label>
                <textarea
                    placeholder="exemplo de resposta."
                    onChange={e => setAnswer(e.target.value)}
                />
                <button onClick={handleAnswer}>Responder aluno</button>
            </Form>
        </Container>
    );
}
