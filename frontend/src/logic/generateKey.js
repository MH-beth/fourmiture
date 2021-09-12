export const generatekey = () => {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    let res = [];
    for (let i = 0; i <= 20; i++) {
      res[i] = alphabet[Math.floor(Math.random() * alphabet.length - 1)];
    }
    return res.join("");
  };
  
  generatekey();
  