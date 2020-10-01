class VigenereCipheringMachine {
  constructor(parametr) {
    this.isStraight=parametr;
  }

  encrypt(message, key) {
    if (message && key) {
      if(this.isStraight === false){
        return this.crypt(
          message.split("").reverse().join("").toUpperCase(), this.filterKey(key)
         ).split('').reverse().join('');
      } else {
        return this.crypt(message.toUpperCase(), this.filterKey(key));
      }
    } else {
      throw new Error();
    }
  }
  decrypt(message, key) {
    if (message && key) {
      key = this.filterKey(key);
      for (var i = 0; i < key.length; i++) {
        key[i] = (26 - key[i]) % 26;
      }
      if(this.isStraight === false){
        return this.crypt(message, key);
      } else{
        return this.crypt(message, key);
      }
      
    } else {
      throw new Error();
    }
  }

  crypt(input,key){
    var output = "";
    for (var i = 0, j = 0; i < input.length; i++) {
      var c = input.charCodeAt(i);
      if (this.isUppercase(c)) {
        output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
        j++;
      } else if (this.isLowercase(c)) {
        output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
        j++;
      } else {
        output += input.charAt(i);
      }
    }
    return output;
  }

  filterKey(key) {
    var result = [];
    for (var i = 0; i < key.length; i++) {
      var c = key.charCodeAt(i);
      if (this.isLetter(c))
        result.push((c - 65) % 32);
    }
    return result;
  }

  isLetter(c) {
    return this.isUppercase(c) || this.isLowercase(c);
  }
  
  isUppercase(c) {
    return 65 <= c && c <= 90;
  }
  
  isLowercase(c) {
    return 97 <= c && c <= 122;
  }
}
module.exports = VigenereCipheringMachine;