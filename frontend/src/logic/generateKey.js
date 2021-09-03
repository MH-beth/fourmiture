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
      res[i] = alphabet[Math.round(Math.random() * alphabet.length - 1)];
    }
    console.log(res);
    console.log(res.join(""));
    return res.join("");
  };
  
  generatekey();
  