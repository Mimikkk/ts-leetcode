import { benches } from "@shared/utilities/exercise.ts";
import { P1382_T } from "./1382-balance-a-binary-tree.ts";

benches([P1382_T, ...P1382_T.solutions], "balanceBST");
