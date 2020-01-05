import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const Form = styled.div`
    height: 450px;
    width: 450px;

    border-radius: 4px;
    background-color: #fff;

    display: flex;
    flex-direction: column;

    padding: 20px;

    label {
        padding: 10px 0;
        font-weight: bold;
    }

    span {
        border-radius: 4px;

        padding: 10px 0;
        height: 150px;
    }

    textarea {
        margin-bottom: 10px;
        font-size: 14px;
        padding-left: 10px;
        border: solid 1px #dbdbdb;
        border-radius: 4px;
        padding: 10px 0;
        height: 150px;
        flex-wrap: nowrap;

        ::placeholder {
            padding-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    button {
        padding: 10px 0;
        border-radius: 6px;
        background: #ee4d64;

        font-size: 14px;
        font-weight: bold;
        color: #fff;

        transition: 0.3s;

        :hover {
            background: #ad4b79;
            opacity: 1;
        }
    }
`;
