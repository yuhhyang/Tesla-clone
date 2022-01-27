import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/carSlice';
import { useSelector } from 'react-redux';
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <Menu>
                {cars && cars.map((car, index) =>(
                    <a key={index} href='#'>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloserWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloserWrapper>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Investor Relations</a></li>
            </BurgerNav>
        </Container>
    );
}

export default Header;
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    /* keep the menu center */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;/* Coverd by BurgerNav */
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 500;
        text-transform: uppercase;
        padding: 5px 10px;
        flex-wrap: nowrap;
    }
    a:hover {
        background-color: #A7C0CF;
        border-radius: 10px;
        cursor: pointer;
        color: black;
    }
    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    /* closeIcon */
    transform: ${props => props.show ? 'translateX(0)' : 'translateY(100%)'};
    /* closeIcon transition */
    transition: transform 0.2s;
    li {
        font-size: 14px;
        padding: 15px 0;
    }
    li:hover {
        background-color: whitesmoke;
        border-radius: 10px;
        cursor: pointer;
        color: black;
    }
    a {
        font-weight: 600;
        padding: 0 8px;
    }
` 
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloserWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`