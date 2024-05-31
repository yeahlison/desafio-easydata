import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { getCurrencies } from "../../api";
import { AppContext } from "../../contexts/AppContext";

const Container = styled.div`
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CurrencyConverter: React.FC = () => {
  const {
    selectedCurrency,
    setSelectedCurrency,
    currencyRate,
    setCurrencyRate,
    totalValue,
  } = useContext(AppContext)!;

  useEffect(() => {
    const fetchCurrencies = async () => {
      const data = await getCurrencies();
      const currencies: { [key: string]: number } = {
        USD: parseFloat(data.USDBRL.high),
        EUR: parseFloat(data.EURBRL.high),
        ARS: parseFloat(data.ARSBRL.high),
      };
      setCurrencyRate(currencies[selectedCurrency]);
    };

    fetchCurrencies();
  }, [selectedCurrency, setCurrencyRate]);

  return (
    <Container>
      <h2>Currency Converter</h2>
      <div>
        <select
          onChange={(e) => setSelectedCurrency(e.target.value)}
          value={selectedCurrency}
        >
          <option value="USD">Dólar</option>
          <option value="EUR">Euro</option>
          <option value="ARS">Peso Argentino</option>
        </select>
        <p>Current Rate: {currencyRate}</p>
        <p>
          Total in Selected Currency: {(totalValue * currencyRate).toFixed(2)}
        </p>
      </div>
    </Container>
  );
};

export default CurrencyConverter;
