export class user{
  _id?: string;
  first_name: string;
  last_name: string;
  contact: number;
  email: string;
  password: string;
  address: string;
  setdata(data:user){
    this._id = data._id
    this.first_name = data.first_name
    this.address = data.address
    this.contact = data.contact
    this.email = data.email
    this.address = data.address
    console.log('data = ', this.first_name, ' ',this.address)
  }
}
