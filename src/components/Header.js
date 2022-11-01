import React from 'react'
import { Navbar, Container, FormControl, Nav, Badge, Dropdown } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
const Header = () => {

    const { state: { cart }, dispatch } = CartState();

    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search For A Product"
                        className="m-auto"
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignright="true">
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length > 0 ?
                                <>
                                    {cart.map((prod) => (
                                        <span className='cart-item' key={prod.id}>
                                            <img src={prod.image} className='cart-item-img' alt={prod.name} />
                                            <div className='cart-item-detail'>
                                                <span>{prod.name}</span>
                                                <span>${prod.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod
                                                    })}
                                            />
                                        </span>
                                    ))}
                                    </> 
                                    : <span style={{ padding: 10 }}>Cart is Empty!</span>}

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header