import axios from 'axios';

export const getCurrencies = async () => {
  const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,ARS-BRL');
  return response.data;
};
