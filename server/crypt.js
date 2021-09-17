const crypto = require("crypto");
const passcode = "U2FsdGVkX19TXVr9iQp56sDRVp2/UV6c75vx5H+cXkVBE14+0NQv";
const crypt = (password) => {
    const cipher = crypto.createCipher('aes192', passcode);
    var encrypted = cipher.update(password , 'utf8','hex');
    encrypted+=cipher.final('hex');
    console.log(encrypted);
    return encrypted;
}

crypt("4io24me61")
crypt("0706");