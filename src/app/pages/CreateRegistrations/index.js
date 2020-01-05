import React from "react";
import { MdAdd, MdKeyboardArrowLeft } from "react-icons/md";
import AsyncSelect from "react-select/async";

import Header from "./../../components/Header";
import { Container, Content, HeaderContent, Button } from "./styles";

//import history from "./../../services/history";

export default function CreateRegistrations() {
    const colourOptions = [
        { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
        { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
        { value: "purple", label: "Purple", color: "#5243AA" },
        { value: "red", label: "Red", color: "#FF5630", isFixed: true },
        { value: "orange", label: "Orange", color: "#FF8B00" },
        { value: "yellow", label: "Yellow", color: "#FFC400" },
        { value: "green", label: "Green", color: "#36B37E" },
        { value: "forest", label: "Forest", color: "#00875A" },
        { value: "slate", label: "Slate", color: "#253858" },
        { value: "silver", label: "Silver", color: "#666666" }
    ];

    // const dataList = [
    //     {
    //         id: 5,
    //         label: "IONA ZAGO",
    //         name: "IONA ZAGO",
    //         email: "iona@hotmail.com",
    //         age: 32,
    //         height: 1.77,
    //         weight: 60,
    //         createdAt: "2019-12-15T09:56:50.007Z",
    //         updatedAt: "2019-12-24T04:16:40.236Z"
    //     },
    //     {
    //         id: 3,
    //         label: "Crisman Bernardo Santos",
    //         name: "Crisman Bernardo Santos",
    //         email: "crisman25@hotmail.com",
    //         age: 25,
    //         height: 1.78,
    //         weight: 67,
    //         createdAt: "2019-12-02T22:47:30.986Z",
    //         updatedAt: "2019-12-24T05:33:30.967Z"
    //     },
    //     {
    //         id: 10,
    //         label: "Ana gabi",
    //         name: "Ana gabi",
    //         email: "gabi@hotmail.com",
    //         age: 19,
    //         height: 1.76,
    //         weight: 60,
    //         createdAt: "2019-12-24T14:47:47.803Z",
    //         updatedAt: "2019-12-24T22:23:18.952Z"
    //     },
    //     {
    //         id: 11,
    //         label: "Leo",
    //         name: "Leo",
    //         email: "leo@hotmail.com",
    //         age: 19,
    //         height: 1.7,
    //         weight: 70,
    //         createdAt: "2019-12-26T23:31:58.525Z",
    //         updatedAt: "2019-12-26T23:31:58.525Z"
    //     }
    // ];

    // function handleInputChange(newValue) {
    //const inputValue = newValue.replace(/\W/g, "");
    //this.setState({ inputValue });
    //return inputValue;
    //}

    // function handleGoback() {
    //     history.goBack();
    // }

    // async function handleSubmit(id) {
    //     try {
    //         toast.success("Plano criado com sucesso!");
    //         history.push("/plans");
    //     } catch (error) {
    //         toast.error("Algo deu errado, verifique os dados.");
    //     }
    // }

    // const customStyle = {
    //     container: () => ({
    //         background: "#dbdb",
    //         width: 20
    //     }),
    //     option: (provided, state) => ({
    //         ...provided,
    //         borderBottom: "1px dotted pink",
    //         color: state.isSelected ? "red" : "blue",
    //         padding: 20
    //     })
    // };

    return (
        <Container>
            <Header />
            <Content>
                <HeaderContent>
                    <h1>Cadastro de matrículas</h1>
                    <nav>
                        <Button colorButton={"#3b3b3b"}>
                            <MdKeyboardArrowLeft size={20} color={"#FFF"} />{" "}
                            VOLTAR
                        </Button>
                        <Button
                            colorButton={"#ee4d64"}
                            // onClick={() => handleSubmit()}
                        >
                            <MdAdd size={20} color={"#FFF"} /> SALVAR
                        </Button>
                    </nav>
                </HeaderContent>

                <label>ALUNO</label>

                <AsyncSelect
                    cacheOptions
                    loadOptions={colourOptions}
                    defaultOptions
                />
            </Content>
        </Container>
    );
}
