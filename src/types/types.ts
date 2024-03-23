interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
}

interface ProductsData {
  products: Product[];
  total: number;
}
