import fs from "node:fs";
import FormaterXML from "./FormaterXML.js";
import FormaterCSV from "./FormaterCSV.js";
import FormaterHTML from "./FormaterHTML.js";
import FormaterTXT from "./FormaterTXT.js";

export default class CitiesReporter {
  constructor({ input }) {
    this.input = input;

    this.handleBase = new FormaterXML();
    const csvHandler = new FormaterCSV();
    const htmlHandler = new FormaterHTML();
    const jsonHandler = new FormaterTXT();

    this.handleBase.sextNext(csvHandler);
    csvHandler.sextNext(htmlHandler);
    htmlHandler.sextNext(jsonHandler);
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
    return this.handleBase.handle(this._cities, this.input);
  }
}
