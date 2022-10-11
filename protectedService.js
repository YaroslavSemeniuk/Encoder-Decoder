const { generateKeys } = require('./security');
const { client } = require('./db/init.js');

// Abstract service which use our end-to-end encryption
class ProtectedService {
    async handshake () {
        // Now our public key (to encrypt the message) consists of the values of the variables "exponent" and "product",
        // and the private key (for decryption) of the values "functionResult" and "product".
        // const { exponent, product, functionResult } =  generateKeys();
        // return client.set()
        // db.ourData.publicKeyCoefficients.push(exponent, product)
        // db.ourData.privateKeyCoefficients.push(functionResult, product);

        // save their public key
        // db.theirData.publicKeyCoefficients.push(exponent, product);
    }

    async crypt() {
        // crypt file by their public key!
        // Then the message is encrypted according to the formula: crypt = smth ^ exponent % product
        // string -> in loop 'ABC'.charCodeAt(i++); - charNumber -> crypt = charNumber ^ exponent % product (number) -> to char
    }

    async decrypt() {
        // And the message is decrypted according to the formula: decrypt = crypt ^ functionResult % product
        // string -> in loop 'ABC'.charCodeAt(i++); - charNumber -> decrypt = crypt ^ functionResult % product (number) -> to char
    }
}

module.exports = new ProtectedService()
