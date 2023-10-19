export default class HandleFormater {
  constructor() {
    this._nextFormater = null;
  }

  sextNext(formater) {
    this._nextFormater = formater;
  }

  handle(data, format) {
    if (this.canHandle(format)) {
      return this.output(data);
    } else if (this._nextFormater) {
      return this._nextFormater.handle(data, format);
    } else {
      throw new Error("Formato não encontrado.");
    }
  }

  canHandle(format) {
    throw new Error("O método canHandle deve ser implementado nas classes.");
  }

  output(data) {
    throw new Error("O método output deve ser implementado nas classes.");
  }
}
