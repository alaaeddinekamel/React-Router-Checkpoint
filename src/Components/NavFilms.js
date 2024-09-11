import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavFilms =()=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">AK7 Movies</Navbar.Brand>
          <Nav className="me-auto">
       
            <Link to={'/'}> <Nav.Link href="#home">Home</Nav.Link></Link>     
         <Link to={'/Movies'}><Nav.Link href="#features">Movies</Nav.Link></Link>  
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavFilms