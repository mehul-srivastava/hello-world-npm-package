const helloWorld = (name) => {
  if (typeof name !== "string") throw new TypeError("Name should be a string!");
  return `Hello ${name}. I belong to the @mehul-srivastava/hello-world NPM package!`;
};

module.exports = helloWorld;
