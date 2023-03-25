import React from "react";
import {
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardBody,
  Col,
  Card,
} from "reactstrap";
import FichaProducto from "./FichaProducto";
import "./Producto.css";

class Producto extends React.Component {
  render() {
    return (
      <Col sm="4">
        <Card className="Card" body outline color="primary">
          <CardImg src={this.props.imagen} />
          <CardBody>
            <CardTitle>{this.props.titulo}</CardTitle>
            <CardSubtitle>
              <b>Valor:</b> ${this.props.precio.toFixed(3)}.-
            </CardSubtitle>
            <CardText>{this.props.descripcion}</CardText>
            <FichaProducto props={this.props} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Producto;
