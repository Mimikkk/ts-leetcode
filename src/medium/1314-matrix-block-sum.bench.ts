import { benches } from "@shared/utilities/exercise.ts";
import { T_1314 } from "./1314-matrix-block-sum.ts";

benches([T_1314, ...T_1314.solutions], "matrixBlockSum");
