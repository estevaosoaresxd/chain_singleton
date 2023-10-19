import CitiesReporter from "./src/CitiesReporter.js";

const [cmd, script, param1] = process.argv,
  filename = "./data/cidades-2.json";

let reporter = new CitiesReporter({
  input: param1,
});

let output = reporter.report(filename);

console.log(output);
