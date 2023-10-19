import HandleFormater from "./HandleFormater.js";

export default class FormaterCSV extends HandleFormater {
  canHandle(format) {
    return format.toUpperCase() === "CSV";
  }

  output(cities) {
    let csv = `Relatório de Nomes de Cidades
  =============================\n`;

    for (let i = 0; i < cities.length; i++) {
      csv += `| ${cities[i]["Nome"]} |\n`;
    }

    return csv;
  }
}
