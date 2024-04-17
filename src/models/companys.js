class CompanysRepository {
    constructor() {
        this.list = [];
    }

    getAllCompanys() {
        return this.list;
    }

    getCompanyById(id) {
        const company = this.list.find(company => company.id == id);
        return company;
    }

    postCompany(company) {
        this.list.push(company);
    }

    putCompany(id, name, email, cnpj, telephone, contact) {
        const company = this.getCompanyById(id);

        if(company) {
            company.name = name;
            company.email = email;
            company.cnpj = cnpj;
            company.telephone = telephone;
            company.contact = contact;
        }

        return company;
    }

    deleteCompany(id) {
        return this.list = this.list.filter((company) => company.id !== id);
    }
}

const listCompanys = new CompanysRepository();
export default listCompanys;