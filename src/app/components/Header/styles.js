import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  padding: 0 40px;
  background: #fff;
  border: 2px solid;
  border-color: ${darken(0.05, "#e3e3e3")};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

  img {
    padding-right: 22px;
    border-right: solid 2px;
    border-color: ${darken(0.1, "#e3e3e3")};
  }

  nav {
    display: flex;
    align-items: center;
    padding-left: 5px;

    a {
      font-weight: bold;
      color: ${darken(0.5, "#e3e3e3")};
      padding: 0 10px;
      cursor: pointer;

      :hover {
        color: ${darken(0.9, "#e3e3e3")};
      }
    }
  }

  aside {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 14px;
        font-weight: bold;
        color: ${darken(0.7, "#e3e3e3")};
      }

      button {
        border: none;
        font-size: 11px;
        color: #f75c5c;
        padding: 0 10px;
        cursor: pointer;

        :hover {
          font-weight: bold;
          color: ${darken(0.3, "#f75c5c")};
        }
      }
    }
  }
`;
