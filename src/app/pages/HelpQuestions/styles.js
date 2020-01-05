import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    max-height: max-content;
    background: #e3e3e3;
`;

export const Content = styled.div`
    margin: 30px 20%;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
`;

export const Table = styled.table`
    width: 100%;

    background: #fff;
    border: none;
    border-radius: 4px;
    padding: 0 20px;
    font-size: 16px;

    thead {
        tr {
            th:first-child {
                text-align: left;
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
                padding: 15px 0;
                border-bottom: 1px solid #dbdbdb;
            }
            td:first-child + td {
                padding: 15px 0;
                border-bottom: 1px solid #dbdbdb;
                text-align: center;
            }
        }
    }
`;
