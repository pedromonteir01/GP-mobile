import { v4 as uuidv4 } from 'uuid'

export default class Company {
    constructor(name, email, cnpj, telephone, contact) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.cnpj = cnpj;
        this.telephone = telephone;
        this.contact = contact;
    }
}