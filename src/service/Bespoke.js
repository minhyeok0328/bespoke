import Http from '@/service/Http';

export default class Bespoke {
  constructor() {
    this.http = new Http();
  }

  async getInterior() {
    const interiorItems = await this.http.get('/interiors');

    return interiorItems;
  }
}
