import styled from "styled-components";

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

    input {
      height: 38px;
      width: 220px;
      border: solid 1px #dbdbdb;
      border-radius: 6px;
      padding-left: 8px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;

  background: #fff;
  border: none;
  border-radius: 4px;
  padding: 0 20px;
  font-size: 16px;

  thead {
    margin-top: 00px;

    tr {
      th:first-child {
        text-align: left;
      }
      th:first-child + th {
        text-align: left;
      }
      th:first-child + th + th {
        text-align: center;
        white-space: nowrap;
      }
    }
  }

  tbody {
    border: none;
    color: #3b3b3b;
    tr {
      height: 100%;

      button {
        border: none;
        width: 100%;
        height: 100%;
        transition: 0.3s;

        cursor: pointer;

        :hover {
          font-size: 18px;
          font-weight: bold;
          opacity: 1;
        }
      }

      td:first-child {
        width: 350px;
        padding: 15px 0;
        border-bottom: 1px solid #dbdbdb;
        white-space: nowrap;
      }
      td:first-child + td {
        width: 300px;
        padding: 15px 0;
        border-bottom: 1px solid #dbdbdb;
        text-align: left;
        white-space: nowrap;
      }
      td:first-child + td + td {
        width: 200px;
        padding: 15px 0;
        border-bottom: 1px solid #dbdbdb;
        text-align: center;
      }
      td:first-child + td + td + td {
        padding: 15px 0;
        border-bottom: 1px solid #dbdbdb;
      }

      td:first-child + td + td + td + td {
        padding: 15px 0;
        border-bottom: 1px solid #dbdbdb;
      }
    }
  }
`;
