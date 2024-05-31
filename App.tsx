import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Importe os estilos da biblioteca React Tabs
import ProductList from './components/ProductList/ProductList';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import Summary from './components/Summary/Summary';
import { AppProvider } from './contexts/AppContext';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
  }
`;

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Tabs>
        <TabList>
          <Tab>Product List</Tab>
          <Tab>Currency Converter</Tab>
          <Tab>Summary</Tab>
        </TabList>
        <TabPanel>
          <ProductList />
        </TabPanel>
        <TabPanel>
          <CurrencyConverter />
        </TabPanel>
        <TabPanel>
          <Summary />
        </TabPanel>
      </Tabs>
    </AppProvider>
  );
};

export default App;
