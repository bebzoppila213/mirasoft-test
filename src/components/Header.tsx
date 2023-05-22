import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {[false].map((expand, index) => (
        <Navbar key={index} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Mirasoft</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Илья
                </Offcanvas.Title>
                <Image
                  style={{ width: 50, height: 50 }}
                  src="https://img5.goodfon.ru/original/320x240/2/33/panda-medved-priroda-zoopark-morda-poza-medvezhonok-listia-z.jpg"
                  roundedCircle
                />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/">
                    Список постов
                  </NavLink>
                  <NavLink className="nav-link" to="/about">
                    Обо мне
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
