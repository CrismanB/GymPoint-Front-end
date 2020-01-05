import styled from "styled-components";
import AsyncSelect from "react-select/async";
import { Form } from "@rocketseat/unform";

export const Container = styled.div`
    height: 100%;
    max-height: max-content;
    background: #e3e3e3;
`;

export const Content = styled.div`
    margin: 30px 10%;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    nav {
        display: flex;
        button {
            display: flex;
            justify-content: center;
            align-items: center;

            margin-right: 20px;
            height: 38px;
            width: 140px;
            border-radius: 6px;
            background: ${props => props.colorButton};

            font-size: 14px;
            font-weight: bold;
            color: #fff;
        }
    }
`;

export const FormEdit = styled(Form)`
    background: #fff;
    display: flex;
    flex-direction: column;

    padding: 25px;

    label {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 20px;
    height: 38px;
    width: 140px;
    border-radius: 6px;
    background: ${props => props.colorButton};
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    transition: 0.3s;

    :hover {
        background: #ad4b79;
        opacity: 1;
    }
`;

export const Listbox = styled(AsyncSelect)``;
