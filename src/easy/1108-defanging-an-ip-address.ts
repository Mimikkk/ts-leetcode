export {};

const defangIPaddr = (address: string) =>
  address.replaceAll('.', '[.]');
