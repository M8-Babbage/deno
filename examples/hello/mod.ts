/**
 * Capitalize the first letter of the given word.
 * @param word
 * @returns
 */
const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Say hello to the given name.
 * @param name
 */
const hello = (name: string): string => {
  return `Hello, ${capitalize(name)}!`;
};

export { hello };
