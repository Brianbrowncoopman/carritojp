import React from "react";
import {
  Badge,
  Button,
  Popover,
  PopoverBody,
  Table,
  PopoverHeader,
} from "reactstrap";
import jsonData from "../listaCarrito.json";

const listaCarrito = jsonData.listaCarrito;

class Carro extends React.Component {
  constructor() {
    super();
    this.state = {
      popoverOpen: false,
      listaCarrito,
      total: 0,
    };

    this.toggle = this.toggle.bind(this);
    this.calcularTotal = this.calcularTotal.bind(this);
  }

  toggle() {
    this.calcularTotal();
    this.setState((prevState) => ({
      popoverOpen: !prevState.popoverOpen,
    }));
  }

  calcularTotal() {
    let total = 0;
    this.state.listaCarrito.forEach((producto) => {
      total += parseFloat(producto.precio);
    });
    this.setState({ total });
  }

  render() {
    const arregloCarrito = this.state.listaCarrito.map((item, i) => {
      return (
        <tr key={i}>
          <th>{i + 1}</th>
          <td>{item.titulo}</td>
          <td>${item.precio.toFixed(3)}.-</td>
        </tr>
      );
    });

    return (
      <div>
        <Button id="Popover1" color="info">
          <span className="material-symbols-outlined">shopping_cart</span>
          <Badge color="secondary">{arregloCarrito.length}</Badge>
        </Button>
        <Popover
          target="Popover1"
          placement="bottom"
          isOpen={this.state.popoverOpen}
          toggle={this.toggle}
        >
          <PopoverHeader>Listado de compras</PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>{arregloCarrito}</tbody>
              <tfoot>
                <tr>
                  <th>TOTAL</th>
                  <th></th>
                  <th>$ {this.state.total.toFixed(3)}.-</th>
                </tr>
              </tfoot>
            </Table>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default Carro;
