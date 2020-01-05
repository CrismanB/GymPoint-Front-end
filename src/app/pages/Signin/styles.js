import styled from "styled-components";
import { darken } from "polished";
import { Form, Input } from "@rocketseat/unform";

export const Container = styled.div`
  height: 100%;
  background: #ee4d64;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  background: #fff;

  height: 380px;
  width: 340px;
  border-radius: 4px;
  border: 1px solid #eaeaea;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 70px;
    width: 100px;
    margin-bottom: 25px;
  }
`;

export const FormLogin = styled(Form)`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 2px;
    color: #3b3b3b;
  }

  }

  button {
    border: none;
    height: 40px;
    border-radius: 4px;
    background: #ee4d64;
    color: #fff;
    font-weight: bold;
    transition: 0.3s;

    :hover {
      background: #ad4b79;
      opacity: 1;
    }
  }
  
  span{
      
      margin-top: -20px;
      padding: 5px 0;
      font-size: 12px;
      color:${darken(0.25, "#ee4d64")}
  }
`;

export const Inputs = styled(Input)`
  height: 40px;
  border: solid 1px #dbdbdb;
  border-radius: 4px;
  margin-bottom: 20px;
  padding-left: 6px;
  color: #3b3b3b;

  ::placeholder {
    font-family: "Roboto", sans-serif;
    padding-left: 6px;
  }
`;
