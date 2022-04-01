export interface Customer {
  id: number,
  companyName: string,
  firstName: string,
  lastName: string,
  street: string,
  streetNumber: number,
  zipCode: number,
  city: string,
  country: string,
}

export const customers = [
  {
    id: 800001,
    companyName: 'example company 1',
    firstName: 'John',
    lastName: 'Doe',
    street: 'Example Street',
    streetNumber: 7,
    zipCode: 11111,
    city: 'example city',
    country: 'example country'
  },
  {
    id: 800002,
    companyName: 'example company 2',
    firstName: 'Jessica',
    lastName: 'Doe',
    street: 'Example Street',
    streetNumber: 8,
    zipCode: 11111,
    city: 'example city',
    country: 'example country'
  },
  {
    id: 800003,
    companyName: 'example company 3',
    firstName: 'Mark',
    lastName: 'Doe',
    street: 'Example Street',
    streetNumber: 69,
    zipCode: 11111,
    city: 'example city',
    country: 'example country'
  }
]
