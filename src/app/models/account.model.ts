export interface AccountModel {
    id: number | null;
    username: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    website: string | null;
    address: Address | null;
    company: Company | null;
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
