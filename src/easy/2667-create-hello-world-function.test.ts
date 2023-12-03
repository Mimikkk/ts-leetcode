import { exercise } from "@shared/utilities/exercise.js";

const createHelloWorld = () => () => "Hello World";

exercise(createHelloWorld(), [[[], "Hello World"]]);
