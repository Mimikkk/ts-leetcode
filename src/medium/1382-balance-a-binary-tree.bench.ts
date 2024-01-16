import { benches } from "@shared/utilities/exercise.js";
import { P1382_T } from "./1382-balance-a-binary-tree.js";

benches([P1382_T, ...P1382_T.solutions], "balanceBST");
