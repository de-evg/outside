import * as React from "react";
import styled from "styled-components";
import CloseButton from "../close-button/close-button";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";

const DEFAULT_YEARS: string[] = [];
const Decrease: { PAYMENT: string, TIME: string } = {
  PAYMENT: "Сокращения платежа",
  TIME: "Сокращение срока"
};

const Container = styled.div`  
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  padding: 32px 16px 16px 16px;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;  
  background-color: #FFFFFF;
 
  @media(min-width: 768px) {
    border-radius: 30px;
    padding: 32px;
    min-width: 453px;
    min-height: 476px;
    width: 453px;
  }

  @media(min-width: 1440px) {
    min-width: 552px;
    min-height: 476px;
  }
`;

const Title = styled.h1` 
  margin: 0;
  margin-bottom: 16px;
  
  color: #000000;  
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
 
  @media(min-width: 768px) {
    font-size: 28px;
    line-height: 40px; 
  }
`;

const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
`;

const TableHead = styled.th`
  
`;

const TableData = styled.td`
  flex-grow: 1;
  text-align: right;
  align-self: center;
`;

interface IResultProps {
  salary: number;
  paymentByYears: { [x: string]: number };
  decreaseBy: string;
};

const ResultPopup: React.FC<IResultProps> = ({ salary, paymentByYears, decreaseBy }: IResultProps) => {
  const [years, setYears] = React.useState<string[]>(DEFAULT_YEARS);

  React.useEffect(() => {
    if (paymentByYears) {
      const newYears = Object.keys(paymentByYears);
      setYears(newYears);
    }
  }, [setYears, paymentByYears]);

  return (
    <Container>
      <CloseButton />
      <Title>Результат</Title>
      <Table>
        <TableRow>
          <TableHead>Зарплата</TableHead>
          <TableData>{salary}</TableData>
        </TableRow>
        <TableRow>
          <TableHead>Тип операции</TableHead>
          <TableData>{Decrease[decreaseBy.toUpperCase()]}</TableData>
        </TableRow>
        <TableRow>
          <TableHead>Налоговые вычеты</TableHead>
        </TableRow>
        {
          years.map((year) => <TableRow>
            <TableHead>{year.replace("year-", "Год ")}</TableHead>
            <TableData>{paymentByYears[year]} рублей</TableData>
          </TableRow>)
        }
      </Table>
    </Container>
  );
};

interface IResultState {
  [x: string]: {
    salary: number;
    paymentByYears: { [x: string]: number };
    decreaseBy: string;
  }
};

const mapStateToProps = (state: IResultState) => ({
  salary: state[NameSpace.NUMBERS].salary,
  paymentByYears: state[NameSpace.NUMBERS].paymentByYears,
  decreaseBy: state[NameSpace.INTERFACE].decreaseBy,
});

export default connect(mapStateToProps)(ResultPopup);
