export function precedenciaOperadores(num1, num2, num3) {
  return {
    comParenteses: (num1 + num2) * num3,
    semParenteses: num1 + num2 * num3
  };
}