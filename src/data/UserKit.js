const ROOT_URL = "https://frebi.willandskill.eu/";

export default class {
  async register(
    firstName,
    lastName,
    email,
    password,
    organisationName,
    organisationKind
  ) {
    const url = `${ROOT_URL}auth/users/`;

    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind,
    };

    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async activateUser(uid, token) {
    const url = `${ROOT_URL}auth/users/activate/`;
    const payload = { uid, token };
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async login(data) {
    const url = `${ROOT_URL}api-token-auth/`;
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(data),
    });
  }

  async getLogedinUser() {
    const url = `${ROOT_URL}api/v1/me`;
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }

  async createCustomer(data) {
    const url = `${ROOT_URL}api/v1/customers`;
    return fetch(url, {
      method: "POST",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(data),
    });
  }

  async getCustomerList() {
    const url = `${ROOT_URL}api/v1/customers`;
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }

  // ta bort funktionom fel
  async getCustomerDetail(id) {
    const url = `${ROOT_URL}api/v1/customers/${id}/`;
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }
  
// update form
  async updateCustomerDetail(id, data) {
    const url = `${ROOT_URL}api/v1/customers/${id}/`;
    return fetch(url, {
      method: "PATCH",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(data),
    });
  }

  async deleteCustomer(id) {
    const url = `${ROOT_URL}api/v1/customers/${id}/`;
    return fetch(url, {
      method: "DELETE",
      headers: this.getPrivateHeaders(),
    });
  }
  
  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token);
  }

  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN");
  }

  removeToken(){
    return  localStorage.removeItem("BUSINESS_TOKEN");
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    };
  }
}
