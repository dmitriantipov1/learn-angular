export interface Post {
  id?: string;
  title: string;
  body: string;
}

export interface Task {
  id?: string;
  title: string;
  description: string;
}

export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

export interface Seat {
  id: number;
  positionRow: number;
  positionPlace: string;
  price: number;
  isTaken: boolean;
  x: number;
  y: number;
}

export type SchemaId = string;
