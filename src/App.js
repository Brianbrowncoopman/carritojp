import "./App.css";
import Producto from "./components/Producto";
import { Container, Row } from "reactstrap";
import React from "react";
import Navegacion from "./components/Navegacion";
import jsonData from "./listaProductos.json";

const listaProductos = jsonData.listaProductos;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listaProductos,
    };
  }

  render() {
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        return (
          <Producto
            key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            precio={listaProductos.precio}
            stock={listaProductos.stock}
          />
        );
      }
    );
    return (
      <Container>
        <Navegacion titulo="MI primer sitio de compras en React" />
        <Row>{arregloComponentes}</Row>
      </Container>
    );
  }
}

export default App;
