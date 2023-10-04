export interface AccountModel {
    id: number;
    username: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;
}
export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
  }
  
  export interface Geo {
    lat: string
    lng: string
  }
  
  export interface Company {
    name: string
    catchPhrase: string
    bs: string
  }
