import { add } from "@scope/add";
import { subtract } from "@scope/subtract";
import { assertEquals } from "jsr:@std/assert";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function subtractTest() {
  assertEquals(subtract(5, 2), 3);
});
