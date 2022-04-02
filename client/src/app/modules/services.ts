export interface Service {
  id: number,
  name: string,
  price: number,
}

export const services = [
  {
    id: 20001,
    name: 'Gesellschafter Stundensatz',
    price: 90
  },
  {
    id: 20002,
    name: 'Teamleiter Stundensatz',
    price: 80
  },
  {
    id: 20003,
    name: 'Mitarbeiter Stundensatz',
    price: 70
  },
  {
    id: 20004,
    name: 'Azubi Stundensatz',
    price: 60
  }
]
