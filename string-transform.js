class StringClasses {
  constructor(input) {
    this.input = input;
  }

  toLower() {
    return this.input.toLowerCase();
  }
  toUpper() {
    return this.input.toUpperCase();
  }

  toCamelCase() {
    const list = this.input.split(" ");
    const camelCase = list.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    return camelCase.join("");
  }

  toPascalCase() {
    const list = this.input.split(" ");
    const PascalCase = list.map((word, index) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return PascalCase.join("");
  }
  toSnakeCase() {
    return this.input.replace(/\s+/g, "_").toLowerCase();
  }
  toKebabCase() {
    return this.input.replace(/\s+/g, "-").toLowerCase();
  }
}

const entry = new StringClasses("hello world");
console.log(entry.toCamelCase());
console.log(entry.toSnakeCase());
console.log(entry.toKebabCase());
console.log(entry.toPascalCase());
