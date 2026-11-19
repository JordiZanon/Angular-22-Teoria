export interface Usuario {
  nombre: string;
  edad: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  phoneNumber?: string;
}
export type Role = 'admin'| 'customer'| 'guest'| 'administrator';


export type Superpower = 'fly' | 'teleport' | 'fire';
export interface SpecialUser extends User {
  superpower: Superpower;
}

export interface CategoryInterface {
  id: number;
  name: string;
  active: boolean;
  icon: string;
}


export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export type CategoryType = 'electronics'| 'clothing'| 'books'| 'home';


// export interface Product
// {
//   id: string;
//   title: string;
//   price: number;
//   stock: number;
//   description: string;
//   category: CategoryType;
//   imageUrl: string;
//   rating: Rating;
// }



export interface Category
{
  id: number;
  name: string;
  active: boolean;
  icon: string;
}

export interface UserProfile {
  name: string;
  city: string;
  isPremium: boolean;
}
