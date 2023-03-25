import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  CardImg,
} from "reactstrap";
import "./FichaProducto.css";
import jsonData from "../listaCarrito.json";

const listaCarrito = jsonData.listaCarrito;

class FichaProducto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      listaCarrito,
      stock: props.props.stock,
    };

    this.toggle = this.toggle.bind(this);
    this.agregarCarrito = this.agregarCarrito.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  agregarCarrito() {
    listaCarrito.push({
      titulo: this.props.props.titulo,
      precio: this.props.props.precio,
    });
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Ver ficha</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>{this.props.props.titulo}</ModalHeader>
          <ModalBody>
            <CardImg src={this.props.props.imagen} />
            <p>El detalle del producto seleccionado es el siguiente:</p>
            {this.props.props.descripcion}
            <p>
              Este producto tiene un valor de{" "}
              <b>{this.props.props.precio.toFixed(3)}</b>
              pesos.
            </p>
            <p>
              hay <b>{this.state.stock}</b> unidades de este producto
              disponibles
            </p>
          </ModalBody>
          <ModalFooter className="modalfooter">
            <Button color="primary" onClick={this.agregarCarrito}>
              Agregar al carro
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Volver atras
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
export default FichaProducto;
