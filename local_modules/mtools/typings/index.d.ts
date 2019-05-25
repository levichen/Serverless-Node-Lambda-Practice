declare namespace Mtools {

  interface Person {
    name: string;
    age: number;
    address: string;
  }

  type People = Mtools.Person[]
} 