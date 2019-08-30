export class Sort {

  constructor(public field: string, public direction: Direction) {
  }

  static fromString(s?: string): Sort | null {
    if (s) {
      const c = s.split(',');
      if (c.length === 2 && c[1].match(/(asc|desc)/i)) {
        const direction = c[1].toLowerCase() === 'asc' ? Direction.ASC : Direction.DESC;
        return new Sort(c[0], direction);
      }
    }
    return null;
  }

}

export enum Direction {
  ASC, DESC
}
