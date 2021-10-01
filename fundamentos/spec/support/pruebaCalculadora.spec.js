describe("Calculadora", () => {
  it("opera", () => {
    num1 = 2,
    num2 = 2;
    let result;

    result = suma(num1, num2);
    expect(result).toBe(4);
  });
});

describe("Calculadora-resta", () => {
    it("resta", () => {
      let a = 2,
        b = 2;
      let result;
  
      result = resta(a, b);
      expect(result).toBe(0);
    });
  });

  describe("Calculadora-multiplicacion", () => {
    it("multiplicacion", () => {
      let a = 2,
        b = 2;
      let result;
  
      result = multiplicacion(a, b);
      expect(result).toBe(4);
    });
  });


  describe("Calculadora-division", () => {
    it("division", () => {
      let a = 2,
        b = 2;
      let result;
  
      result = division(a, b);
      expect(result).toBe(1);
    });
  });



