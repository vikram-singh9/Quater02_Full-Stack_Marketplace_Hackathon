// types/index.ts
export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  slug:'string';
  ratingCount: number;
  // Add other fields as needed
}