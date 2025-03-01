import { exercise } from "@shared/utilities/exercise.ts";

import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const celsiusToKalvin = (c: number): number => c + 273.15;
const celsiusToFahrenheit = (c: number): number => (c * 9) / 5 + 32;
const convertTemperature = (celsius: number): [number, number] => [
  celsiusToKalvin(celsius),
  celsiusToFahrenheit(celsius),
];

exercise(convertTemperature, [
  [[36.5], [309.65, 97.7]],
  [[122.11], [395.26, 251.798]],
]);
