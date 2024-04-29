export default class Company {
    constructor(name, email, cnpj, telephone, contact) {
        this.id = this.generateId();
        this.name = name;
        this.email = email;
        this.cnpj = cnpj;
        this.telephone = telephone;
        this.contact = contact;
    }

    generateId() {
        return Math.floor(Math.random() * 9999);
    }
}