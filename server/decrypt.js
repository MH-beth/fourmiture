const crypto = require("crypto");
const passcode = "U2FsdGVkX19TXVr9iQp56sDRVp2/UV6c75vx5H+cXkVBE14+0NQv";
const decrypt = () => {
    const decipher = crypto.createDecipher('aes192', passcode);
    var decrypted = decipher.update("9e514464f2e709980b30f26b04e1c4a2" , 'hex', 'utf8');
    decrypted+= decipher.final('utf8');
    console.log(decrypted);
    return decrypted;
}

decrypt()