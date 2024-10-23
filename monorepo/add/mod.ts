import chalk from "chalk"

export function add(a: number, b: number): number {
  console.log(chalk.green("add"))
  return a + b
}
