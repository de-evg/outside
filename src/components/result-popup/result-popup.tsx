import * as React from "react";
import styled from "styled-components";
import CloseButton from "../close-button/close-button";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";

const DEFAULT_YEARS: string[] = [];
const Decrease: { [x: string]: string } = {
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
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TableTitle = styled.caption`
  text-align: left;
  color: #000000;  
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;

const TableBody = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.tr`
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid #DFE3E6;
`;

const TableHead = styled.th`
  text-align: left;
  flex-basis: 70%;
  width: 70%;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

const TableData = styled.td`
  flex-basis: 30%;
  width: 30%;
  flex-wrap: nowrap;
  text-align: right;
  font-family: "LabGrotesque", "Arial", sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

interface IResultProps {
  salary: number;
  taxOfSalary: number;
  costOfRealty: number;
  taxOfRealty: number;
  paymentByYears: { [x: string]: number };
  decreaseBy: string;
};

const ResultPopup: React.FC<IResultProps> = ({ salary, taxOfSalary, costOfRealty, taxOfRealty, paymentByYears, decreaseBy }: IResultProps) => {
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
        <TableTitle>Сводные данные</TableTitle>
        <TableBody>
          <TableRow>
            <TableHead>Стоимость недвижимости</TableHead>
            <TableData>{costOfRealty} ₽</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Налоговый вычет с недвижимости</TableHead>
            <TableData>{taxOfRealty} ₽</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Годовая зарплата</TableHead>
            <TableData>{salary * 12} ₽</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Налоговый вычет с ЗП за год</TableHead>
            <TableData>{taxOfSalary} ₽</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Тип операции</TableHead>
            <TableData>{Decrease[decreaseBy.toUpperCase()]}</TableData>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableTitle>Налоговые вычеты</TableTitle>
        <TableBody>
        </TableBody>
        {
          years.map((year, i) => <TableRow key={`${i}-${year}`}>
            <TableHead>{year.replace("year-", "Год ")}</TableHead>
            <TableData>{paymentByYears[year]} ₽</TableData>
          </TableRow>)
        }
      </Table>
    </Container>
  );
};

interface IResultState {
  [x: string]: {
    salary: number;
    taxOfSalary: number;
    costOfRealty: number;
    taxOfRealty: number;
    paymentByYears: { [x: string]: number };
    decreaseBy: string;
  }
};

const mapStateToProps = (state: IResultState) => ({
  salary: state[NameSpace.NUMBERS].salary,
  taxOfSalary: state[NameSpace.NUMBERS].taxOfSalary,
  costOfRealty: state[NameSpace.NUMBERS].costOfRealty,
  taxOfRealty: state[NameSpace.NUMBERS].taxOfRealty,
  paymentByYears: state[NameSpace.NUMBERS].paymentByYears,
  decreaseBy: state[NameSpace.INTERFACE].decreaseBy,
});

export default connect(mapStateToProps)(ResultPopup);
