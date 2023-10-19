import HandleFormater from "./HandleFormater.js";

export default class FormaterXML extends HandleFormater {
  canHandle(format) {
    return format.toUpperCase() === "XML";
  }

  output(cities) {
    let xml = `
     <sobre>Relatório de Nomes de Cidades</sobre>
    `;

    for (let i = 0; i < cities.length; i++) {
      xml += `     <cidade>${cities[i]["Nome"]}</cidade>\n`;
    }

    return xml;
  }
}
