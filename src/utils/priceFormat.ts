export default function priceFormat(n: number | string): string {
  if (typeof n === "string") {
    n = Number(n);
  }

  const reversedNumberArr: string[] = String(n).split("").reverse();

  //3자리씩 끊어서 쉼표 추가
  const formattedArray: string[] = reversedNumberArr.reduce(
    (result: string[], digit: string, index: number) => {
      if (index !== 0 && index % 3 === 0) {
        result.push(",");
      }
      result.push(digit);
      return result;
    },
    [],
  );

  const formattedNumber = formattedArray.reverse().join("");

  return formattedNumber;
}
