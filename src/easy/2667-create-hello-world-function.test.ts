import { exercise } from "@shared/utilities/exercise.ts";

const createHelloWorld = () => () => "Hello World";

exercise(createHelloWorld(), [[[], "Hello World"]]);
