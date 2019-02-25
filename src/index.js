module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = bracketsConfig.split('');
  brackets = brackets.sort();
  for (let i=0; i<brackets.length; i++) {
    if ((brackets[i] == "'") || (brackets[i] == ",")|| (brackets[i] == " ")) {
      brackets.splice(i, 1);
        }
    }
}
