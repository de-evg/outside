import * as React from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import styled from "styled-components";
import { gaussRound } from "../../helpers/round";
import { addPaymentByYear, removePaymentByYear } from "../../store/action";
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

interface IPaymentListProps {
  taxOfSalary: number;
  taxOfRealty: number;
  addPayment: (x: { [y: string]: number }) => void
  removePayment: (x: { [y: string]: number }) => void
};

const PaymentList: React.FC<IPaymentListProps> = ({ taxOfSalary, taxOfRealty, addPayment, removePayment }: IPaymentListProps) => {
  const [payments, setPayments] = React.useState(DEFAULT_PAYMENTS);

  React.useEffect(() => {
    if (taxOfSalary) {
      const getPaymentValue = (taxOfRealty: number, taxOfSalary: number) => {
        let balanceTaxOfSalary = taxOfRealty;
        return () => {
          balanceTaxOfSalary = balanceTaxOfSalary - taxOfSalary;
          return balanceTaxOfSalary >= 0
            ? gaussRound(taxOfSalary, 0)
            : gaussRound(taxOfRealty % taxOfSalary, 0);
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

  const handleChangeCheckBox = React.useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    evt.target.checked ? addPayment({ [name]: +value }) : removePayment({ [name]: +value })

  }, [addPayment, removePayment]);

  return (<>
    <Title>Итого можете внести в качестве досрочных:</Title>
    <List>
      {payments.map((payment, i) => <PaymentItem clickHandler={handleChangeCheckBox} value={payment} name={`year-${i + 1}`} id={i + 1} key={`list-${i}-${payment}`} />)}
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

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  addPayment(paymentByYear: { [x: string]: number }) {
    dispatch(addPaymentByYear(paymentByYear));
  },
  removePayment(paymentByYear: { [x: string]: number }) {
    dispatch(removePaymentByYear(paymentByYear));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentList);
