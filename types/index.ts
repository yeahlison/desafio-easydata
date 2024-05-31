export interface Product {
  id: number;
  description: string;
  quantity: number;
  price: number;
}

export interface Currency {
  code: string;
  name: string;
  rate: number;
}
