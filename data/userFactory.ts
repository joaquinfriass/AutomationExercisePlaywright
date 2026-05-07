// data/userFactory.ts
export interface UserData {
  name: string;
  email: string;
  lastName: string;
  password: string;
  day: string;
  month: string;
  year: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  phone: string;
}

export function generateUser(): UserData {
  const uniqueId = Date.now();
  return {
    name: `JoaTest_${uniqueId}`,
    email: `joatest_${uniqueId}@example.com`,
    lastName: 'Test',
    password: '12345',
    day: '10',
    month: '2',
    year: '1990',
    company: 'JoaCompany',
    address1: 'Address1',
    address2: 'Address2',
    country: 'United States',
    state: 'State',
    city: 'City',
    zipcode: 'Zipcode',
    phone: '1234567890',
  };
}