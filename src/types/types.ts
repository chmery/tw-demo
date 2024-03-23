interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
}

interface ProductsData {
  products: Product[];
  total: number;
}
