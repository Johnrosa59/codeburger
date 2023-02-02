import styled from "styled-components";

export const Container = styled.div`
  width: 414px;
  height: 730px;
  background-color: black;
`;

export const ContainerMor = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  margin-left: 65px;
  width: 280px;
  height: 280px;
`;

export const P1 = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #ffffff;
  margin-top: 40px;
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
  margin-left: 35px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-left: 25px;
  padding-left: 20px;
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;
  margin-left: 10px;
`;

export const Cont2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 42px;
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: #d93856;
  margin-left: 35px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`;
