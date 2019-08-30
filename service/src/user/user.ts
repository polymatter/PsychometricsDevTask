export class User {
  id: number;
  birthDate: Date;
  firstName: string;
  lastName: string;
  gender: string;
  created: Date;

  toArray(): any[] {
    return [this.id, this.birthDate, this.firstName, this.lastName, this.gender, this.created];
  }
}
