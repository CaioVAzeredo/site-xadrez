import styled from "styled-components";
import './estilo.css'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ArrayHeaderLogout from "../../Login/ArrayHeaderLogin";

const HeaderContainer = styled.header`
    background-color: rgb(121, 203, 250);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    position: relative; 
    z-index: 10;
`;

function HeaderLogout({setToken}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const alternaMenu = () => {
        if (!isDesktop) {
            setIsOpen(!isOpen);
        }
    };

    const tela = () => {
        setIsDesktop(window.innerWidth >= 768);
        if (window.innerWidth >= 768) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', tela);

        tela();

        return () => window.removeEventListener('resize', tela);
    }, []);

    function handleLogout() {
        setToken(null)
        localStorage.removeItem("authToken")
        alert("Você saiu!")
    }

    return (
        <HeaderContainer>
            <nav>

                <div
                    onClick={alternaMenu}
                    className={`mobile-menu ${isOpen ? 'open' : ''}`}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                {(isDesktop || isOpen) && (
                    <>
                        <ul className="nav-list">
                            <li><Link to="/" onClick={alternaMenu}> Turmas </Link></li>
                            <li onClick={() => { alternaMenu(); handleLogout(); }} > Logout </li>
                            {/* {opcoes.map(opcao => <li><Link to={opcao.Link} onClick={alternaMenu}>  {opcao.Pagina} </Link></li>)}  */}<div className="EspacoEmBranco" onClick={alternaMenu}></div>
                        </ul>
                    </>

                )}
            </nav>
        </HeaderContainer >
    );
}

export default HeaderLogout;