import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const checkRecord = (s: string) => !/^.*(A.*A|L{3,}).*$/.test(s);
