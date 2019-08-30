import { Sort } from './sort';

export class Pageable {

  constructor(public page: number, public size: number, public sort: Sort) {
  }

  static from(obj: any, def: Pageable) {
    let page = Number(obj.page) || def.page;
    let size = Number(obj.size) || def.size;
    let sort = Sort.from(obj.sort) || def.sort;
    return new Pageable(page, size, sort);
  }

}
