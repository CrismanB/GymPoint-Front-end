import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { signOut } from "./../../store/modules/auth/actions";

import { Container, Content } from "./styles";
import logo from "./../../assets/logo1.png";

export default function Header() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GymPoint" />
                    <Link to="/students">ALUNOS</Link>
                    <Link to="/plans">PLANOS</Link>
                    <Link to="/registrations">MATRÍCULAS</Link>
                    <Link to="/help">PEDIDOS DE AUXÍLIO</Link>
                </nav>
                <aside>
                    <div>
                        <span>{profile.name}</span>
                        <button type="button" onClick={handleSignOut}>
                            SAIR DO SISTEMA
                        </button>
                    </div>
                </aside>
            </Content>
        </Container>
    );
}
