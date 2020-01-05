import React, { useState, useEffect, useMemo } from "react";
import { MdAdd, MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";

import { formatPriceBR } from "./../../services/Currency";
import Header from "./../../components/Header";
import { Container, Content, HeaderContent, FormEdit, Button } from "./styles";
import api from "./../../services/api";
import history from "./../../services/history";

export default function EditPlans() {
  const [plan] = useState(history.location.state.plan);

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setTitle(plan.title);
    setDuration(plan.duration);
    setPrice(plan.price);
  }, [plan]);

  const totalPlan = useMemo(() => {
    const total = parseFloat(price) * parseInt(duration);

    if (isNaN(total)) {
      return formatPriceBR(0);
    } else {
      return formatPriceBR(total);
    }
  }, [price, duration]);

  function handleGoback() {
    history.goBack();
  }

  async function handleSubmit(id) {
    if (!title || !duration || !price) {
      return toast.error("Campos vazios, verifique os dados.");
    }

    if (isNaN(duration)) {
      return toast.error("Duração com valor invalído.");
    }

    if (isNaN(price)) {
      return toast.error("Preço com valor invalído.");
    }

    try {
      await api.put(`/plans/${id}`, {
        title,
        price,
        duration
      });

      toast.success("Plano atualizado com sucesso!");
      history.push("/plans");
    } catch (error) {
      toast.error("Algo deu errado, verifique os dados.");
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <HeaderContent>
          <h1>Edição de planos</h1>
          <nav>
            <Button colorButton={"#3b3b3b"} onClick={handleGoback}>
              <MdKeyboardArrowLeft size={20} color={"#FFF"} /> VOLTAR
            </Button>
            <Button
              colorButton={"#ee4d64"}
              onClick={() => handleSubmit(plan.id)}
            >
              <MdAdd size={20} color={"#FFF"} /> ATUALIZAR
            </Button>
          </nav>
        </HeaderContent>
        <FormEdit initialData={plan}>
          <label>TITULO DO PLANO</label>
          <input
            type="text"
            name="title"
            defaultValue={plan.title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Exemplo"
          />
          <div>
            <div>
              <label>DURAÇÃO (em meses)</label>
              <input
                type="text"
                name="duration"
                defaultValue={plan.duration}
                onChange={e => setDuration(e.target.value)}
                placeholder="Exemplo: 1"
              />
            </div>
            <div>
              <label>PREÇO MENSAL</label>
              <input
                type="text"
                name="price"
                defaultValue={plan.price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Exemplo: 200"
              />
            </div>
            <div>
              <label>PREÇO TOTAL</label>
              <input
                type="text"
                name="priceTotal"
                disabled
                style={{ background: "#dbdbdb", border: "solid 1px #bababa" }}
                value={totalPlan}
              />
            </div>
          </div>
        </FormEdit>
      </Content>
    </Container>
  );
}
