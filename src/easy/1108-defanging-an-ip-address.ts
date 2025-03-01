import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const defangIPaddr = (address: string) => address.replaceAll(".", "[.]");
