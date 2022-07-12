import axios from 'axios';

export default class Http {
  #http;

  constructor() {
    this.#http = axios;
  }

  async get(url, params) {
    try {
      const { data } = await this.#http.get(url, { params });

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
