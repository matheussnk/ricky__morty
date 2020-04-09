import React, { Component } from "react";
import { Card, Row, Col, CardImg, CardBody, CardTitle } from "reactstrap";
import "./style.css";
import api from "../../services/api";

export default class CardClass extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const response = await api.get(`/character/?page=${Math.random() * 10}`);
    this.state.data = this.setState({
      data: response.data.results,
    });
  }

  render() {
    //JSX
    return (
      <>
        <h1 className="headerTitle">Wellcome Rick & Morty Site </h1>
        <Row>
          {
            this.state.data.map((info) => (
              // sempre é necessario passar uma chave quando voce varre um array por que o React é burro

              <Col xs={12} sm={4} md={6} lg={3}>
                <Card key={info.id} className="card__model">
                  <CardImg src={info.image} alt={info.name} />
                  <CardBody>
                    <CardTitle>{info.name}</CardTitle>
                    <p>Status : {info.status}</p>
                    <p>Gender : {info.gender}</p>
                    <p>Species : {info.species}</p>
                  </CardBody>
                </Card>
              </Col>
            )) // Atributo que o componente renderiza
          }
        </Row>
      </>
    );
  }
}
