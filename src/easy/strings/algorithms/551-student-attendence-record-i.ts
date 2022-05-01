export {};

const checkRecord = (s: string) => !/^.*(A.*A|L{3,}).*$/.test(s);
