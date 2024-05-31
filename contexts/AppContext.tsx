import React, { createContext, useState, ReactNode } from "react";
import { Product } from "../types";

interface AppContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  totalValue: number;
  discount: number;
  setDiscount: (discount: number) => void;
  freight: number;
  setFreight: (freight: number) => void;
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  currencyRate: number;
  setCurrencyRate: (rate: number) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [freight, setFreight] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [currencyRate, setCurrencyRate] = useState<number>(1);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const totalValue =
    products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ) - discount;

  return (
    <AppContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        totalValue,
        discount,
        setDiscount,
        freight,
        setFreight,
        selectedCurrency,
        setSelectedCurrency,
        currencyRate,
        setCurrencyRate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
