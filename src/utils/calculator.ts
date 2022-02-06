export const calculator = (currencies: Array<any>, formData: any) => {
  let currInputValue: number = formData.input;
  let currInputCode: Array<string> = formData.inputCode.split("-");
  let currOutputCode: Array<string> = formData.outputCode.split("-");
  let convertToSumm: number = currInputCode[1] === "uzb" ? currInputValue : 0;

  for (let item of currencies) {
    if (item.stateCode === currInputCode[1]) {
      convertToSumm = item.oneSUM * currInputValue;
    }
  }
  let currOutputValue: number = convertToSumm;

  for (let item of currencies) {
    if (item.stateCode === currOutputCode[1]) {
      currOutputValue =
        Math.round((convertToSumm / item.oneSUM) * 10000) / 10000;
    }
  }
  console.log(currOutputValue);

  return {
    currInputValue: currInputValue,
    currInputCode: currInputCode,
    currOutputValue: currOutputValue,
    currOutputCode: currOutputCode,
  };
};
