export interface RegisterType {
  surname: string;
  name: string;
  patronymic?: string;
  phone: string;
  email: string;
  password: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface ResponseType {
  token: string | null;
}
