import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";

const Container = styled.div`
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Summary: React.FC = () => {
  const { totalValue, discount, freight, setFreight } = useContext(AppContext)!;
  const [importTax, setImportTax] = useState<number>(0);

  useEffect(() => {
    setImportTax((totalValue + freight) * 0.92);
  }, [totalValue, freight]);

  const totalWithTax = totalValue + freight + importTax - discount;

  return (
    <Container>
      <h2>Order Summary</h2>
      <div>
        <Input
          type="number"
          placeholder="Freight"
          value={freight}
          onChange={(e) => setFreight(parseFloat(e.target.value))}
        />
        <p>Import Tax: {importTax.toFixed(2)}</p>
        <p>Total with Tax: {totalWithTax.toFixed(2)}</p>
      </div>
    </Container>
  );
};

export default Summary;
