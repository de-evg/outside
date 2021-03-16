import * as React from "react";
import styled from "styled-components";
import PaymentItem from "../payment-item/payment-item";

const List = styled.ul`
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
  list-style: none;
`;

const PaymentList: React.FC = () => {
  return (<>        
    <List>
      <PaymentItem value={78000} name={"firstYear"} isChecked={true}>78 000 в год</PaymentItem>
    </List>
  </>)
};

export default PaymentList;
