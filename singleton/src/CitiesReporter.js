import fs from "node:fs";

export default class CitiesReporter {
  constructor({ formaterStrategy }) {
    if (CitiesReporter._instance) {
      throw new Error("Já existe uma instancia dessa classe");
    }

    this._formaterStrategy = formaterStrategy;
    CitiesReporter._instance = this;
  }

  _read(filename) {
    this._cities_json = fs.readFileSync(filename);
  }

  _parseJSON() {
    this._cities = JSON.parse(this._cities_json);
  }

  report(filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }
}
