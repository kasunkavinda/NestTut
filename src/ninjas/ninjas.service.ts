import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'ninjaA', weapon: 'stars' },
    { id: 2, name: 'ninjaB', weapon: 'nunchucks' },
  ];

  getNinjas(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.filter((item) => item.weapon === weapon);
    }
    return this.ninjas;
  }

  getSingleNinja(id: string) {
    const numberId = parseInt(id);
    if (id) {
      const filteredNinjas = this.ninjas.filter((item) => item.id === numberId);
      if (filteredNinjas.length === 0) throw new Error('No Ninjas');
      return filteredNinjas;
    }
    return this.ninjas;
  }
}
