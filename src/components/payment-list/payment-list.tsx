import * as React from "react";
import styled from "styled-components";
import PaymentItem from "../payment-item/payment-item";

const Title = styled.p`
  margin: 0;  
  width: 55%;  

  font-family: "LabGrotesque", "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  @media (min-width: 768px) {
    width: 100%;  
  }
`;

const List = styled.ul`
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
  list-style: none;
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

`;

const PaymentList: React.FC = () => {
  return (<>
    <Title>Итого можете внести в качестве досрочных:</Title>
    <List>
      <PaymentItem value={78000} name={"firstYear"} isChecked={true} >78 000 в год</PaymentItem>
    </List>
  </>)
};

export default PaymentList;
