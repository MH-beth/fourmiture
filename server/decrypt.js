const crypto = require("crypto");
const passcode = "U2FsdGVkX19TXVr9iQp56sDRVp2/UV6c75vx5H+cXkVBE14+0NQv";
const decrypt = () => {
    const decipher = crypto.createDecipher('aes192', passcode);
    var decrypted = decipher.update("aa77793af0c347a007a9773abee6b2f8" , 'hex', 'utf8');
    decrypted+= decipher.final('utf8');
    console.log(decrypted);
    return decrypted;
}

decrypt()