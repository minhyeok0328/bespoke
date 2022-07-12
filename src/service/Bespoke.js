import Http from '@/service/Http';

export default class Bespoke {
  constructor() {
    this.http = new Http();
  }

  async getInterior() {
    const interiorItems = await this.http.get('/interiors');

    return interiorItems;
  }

  async getFridgeBodyCode() {
    const fridgeBodyCode = await this.http.get('/bodycode.json');

    return fridgeBodyCode;
  }

  async getFridgeModelCode() {
    const fridgeModelCode = await this.http.get('/models.json');

    return fridgeModelCode;
  }
}
