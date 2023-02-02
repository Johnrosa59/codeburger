import React, { useState, useRef } from "react";
import {
  Container,
  ContainerMor,
  Image,
  P1,
  Label,
  Input,
  Cont,
  Cont2,
  Button,
} from "./styles";
import CodeBurger from "../../assets/burger1.png";
import { useHistory } from "react-router-dom";

import axios from "axios";

const App = () => {
  const [orders, setOrders] = useState();
  const inputOrder = useRef();
  const inputOwner = useRef();
  const history = useHistory();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      clientName: inputOwner.current.value,
    });

    setOrders([...orders, newOrder]);

    history.push("/orders");
  }
  return (
    <ContainerMor>
      <Container>
        <Image alt="Logo CodeBurger" src={CodeBurger}></Image>
        <P1>Faça seu pedido!</P1>
        <Cont>
          <Label>Pedido</Label>
          <Input ref={inputOrder} />
        </Cont>
        <Cont2>
          <Label>Nome do Cliente</Label>
          <Input ref={inputOwner} />
        </Cont2>
        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </Container>
    </ContainerMor>
  );
};

export default App;
