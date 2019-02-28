module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = [];
  for (let i = 0; i<str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++ ) {
      if (str[i] == bracketsConfig[j][1]) {
        if (bracketsConfig[j][1] == bracketsConfig[j][0]) {
          if (arr[arr.length - 1] == str[i]) {
            arr.pop();
            console.log(arr);
            continue;
          } else {
          arr.push(str[i]);
          console.log(arr)
          continue;
        }
      }
      if (arr.length == 0) {
        return false;
        } else if (arr[arr.length - 1] != bracketsConfig[j][0]) {
          return false;
        } else if (arr[arr.length - 1] == bracketsConfig[j][0]) {
          arr.pop();
          break;
        }
        } else if (str[i] == bracketsConfig[j][0]) {
          arr.push(str[i]);
        } else {
          continue;
        }
      }
    }
    if (arr.length == 0) {
    return true;
    } else {
    return false;
  }
}
