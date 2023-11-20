import { exercise } from "@shared/utilities/exercise";

const createHelloWorld = () => () => "Hello World";

exercise(createHelloWorld(), [[[], "Hello World"]]);
