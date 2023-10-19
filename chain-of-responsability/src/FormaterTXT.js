import HandleFormater from "./HandleFormater.js";

export default class FormaterTXT extends HandleFormater {
  canHandle(format) {
    return format.toUpperCase() === "TXT";
  }

  output(cities) {
    let txt = `Relatório de Nomes de Cidades
  =============================\n`;

    for (let i = 0; i < cities.length; i++) {
      txt += `- ${cities[i]["Nome"]}\n`;
    }

    return txt;
  }
}
