// 1.isValidNumber -Check Input is valid Binary, Decimal, Octal or HexaDecimal

const isValidNumber = (input, push) => {
  let arr = input.split("");
  let length = arr.length;
  let flag = false;

  for (let i = 0; i < length; i++) {
    switch (push) {
      case "b": //"b":binary
        if (arr[i] > 1 || isNaN(arr[i])) {
          flag = false;
          break;
        } else {
          flag = true;
        }
        break;

      case "d": //"d":decimal
        if (isNaN(arr[i])) {
          flag = false;
          break;
        } else {
          flag = true;
        }
        break;

      case "o": //"o":octal
        if (arr[i] > 7 || isNaN(arr[i])) {
          flag = false;
          break;
        } else {
          flag = true;
        }
        break;

      case "hd": //"hd":hexadecimal
        if (!isA2FCheck(arr[i])) {
          if (arr[i] < 0 || isNaN(arr[i])) {
            flag = false;
            break;
          } else {
            flag = true;
          }
        } else {
          flag = true;
        }
        break;

      default:
        return false;
    }
    if(!flag){
        break;
    }
  }
  return flag;
};

//2 Alphabet check for HexaDecimal - Check HexaDecimal contain Valid Alphabet Number

const isA2FCheck = (alphabet) => {
  switch (alphabet) {
    case "a":
    case "A":
    case "b":
    case "B":
    case "c":
    case "C":
    case "d":
    case "D":
    case "e":
    case "E":
    case "F":
    case "f":
      return true;
      break;
    default:
      return false;
  }
};

module.exports = { isValidNumber };
