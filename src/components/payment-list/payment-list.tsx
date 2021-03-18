import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { NameSpace } from "../../store/reducers/root";
import PaymentItem from "../payment-item/payment-item";

const DEFAULT_PAYMENTS: number[] = [];

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

interface IPaymentList {
  taxOfSalary: number;
  taxOfRealty: number;
};

const PaymentList: React.FC<IPaymentList> = ({ taxOfSalary, taxOfRealty }: IPaymentList) => {
  const [payments, setPayments] = React.useState(DEFAULT_PAYMENTS);

  React.useEffect(() => {
    if (taxOfSalary) {
      const getPaymentValue = (taxOfRealty: number, taxOfSalary: number) => {
        let balanceTaxOfSalary = taxOfRealty;
        return () => {
          balanceTaxOfSalary = balanceTaxOfSalary - taxOfSalary;
          return balanceTaxOfSalary >= 0
            ? taxOfSalary
            : taxOfRealty % taxOfSalary;
        };
      };
      const payment = getPaymentValue(taxOfRealty, taxOfSalary);
      const countPayment = Math.ceil(taxOfRealty / taxOfSalary);
      const newPayments: number[] = [];
      for (let i = 0; i < countPayment; i++) {
        newPayments.push(payment());
      }
      setPayments(newPayments);
    }
  }, [setPayments, taxOfRealty, taxOfSalary]);
  return (<>
    <Title>Итого можете внести в качестве досрочных:</Title>
    <List>
      {payments.map((payment, i) => <PaymentItem value={payment} name={`year-${i + 1}`} isChecked={true} id={i + 1} key={`${i}-list`} />)}
    </List>
  </>)
};

interface IPaymentListState {
  [x: string]: {
    taxOfSalary: number;
    taxOfRealty: number;
  }
};

const mapStateToProps = (state: IPaymentListState) => ({
  taxOfSalary: state[NameSpace.NUMBERS].taxOfSalary,
  taxOfRealty: state[NameSpace.NUMBERS].taxOfRealty
});

export default connect(mapStateToProps)(PaymentList);
