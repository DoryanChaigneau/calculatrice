module.exports = {

  additioner : (a, b) => {
    return a + b;
  },

  soustraire : (a, b) => {
    return a - b;
  },

  multiplication : (a, b) => {
    return a * b;
  },

  division : (a, b) => {
    if (b === 0) {
      throw new Error('Division par zéro impossibles.');
    }
  },

  pourcentage : (a, prct) => {
    let result = CalculService.multiplication(a, prct);
    result = CalculService.division(result, 100);
    return result;
  },

  pow: (a) => {
    return CalculService.multiplication(a,a);
  }

};
