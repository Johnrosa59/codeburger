import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerTwo,
  Img,
  ContainerOrder,
  OrderTag,
  ClientNameTag,
  Button,
  Button2,
} from "./styles";
import BurgerBag from "../../assets/burgerbag.png";
import axios from "axios";
import Trash from "../../assets/trash.png";
import { useHistory } from "react-router-dom";

const Orders = () => {
  const [Orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: neworders } = await axios.get(
        "http://localhost:3001/order"
      );
      setOrders(neworders);
    }
    fetchUsers();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`);

    const neworders = Orders.filter((order) => order.id !== orderId);

    setOrders(neworders);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <ContainerTwo>
        <Img src={BurgerBag}></Img>
        {Orders.map((order) => (
          <ContainerOrder key={order.id}>
            <OrderTag>{order.order}</OrderTag>
            <ClientNameTag>{order.clientName}</ClientNameTag>
            <Button onClick={() => deleteOrder(order.id)}>
              <img src={Trash} alt="Lata de Lixo" />
            </Button>
          </ContainerOrder>
        ))}
        <Button2 onClick={goBackPage}>Voltar</Button2>
      </ContainerTwo>
    </Container>
  );
};

export default Orders;
