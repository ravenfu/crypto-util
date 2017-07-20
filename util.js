'use strict'
/**
 * Created by raven on 2017/7/19.
 */

const crypto = require('crypto');

const BASE64 = 'base64',
    HEX = 'hex',
    UTF8 = 'utf8',
    MD5 = 'md5',
    AES_128_CBC = 'aes-128-cbc',

    base64Encode = (str, ie) => {
        return base64(str, ie, BASE64);
    },

    base64Decode = (str) => {
        return base64(str, BASE64)
    },

    base64 = (data, ie = UTF8, oe = UTF8) => {
        return new Buffer(data, ie).toString(oe)
    },

    md5Hex = (str) => {
        return crypto.createHash(MD5).update(str).digest(HEX)
    },

    aesCbcEncode = (str, key, iv, algorithm, ie, oe) => {
        return aesEncode(str, key, iv, AES_128_CBC, ie, oe)
    },

    aesCbcDecode = (str, key, iv, algorithm, ie, oe) => {
        return aesDecode(str, key, iv, AES_128_CBC, ie, oe)
    },

    aesEncode = (str, key, iv, algorithm, ie = UTF8, oe = BASE64) => {
        let cipher = crypto.createCipheriv(algorithm, key, iv);
        cipher.setAutoPadding(true)
        return cipher.update(str, ie, oe) + cipher.final(oe)
    },

    aesDecode = (str, key, iv, algorithm, ie = UTF8, oe = BASE64) => {
        let decipher = crypto.createDecipheriv(algorithm, key, iv);
        decipher.setAutoPadding(true);
        return decipher.update(str, oe, ie) + decipher.final(ie)
    },

    hmacMd5Hex = (str, key) => {
        return hmac(str, key, MD5).digest(HEX)
    },

    hmac = (str, key, algorithm) => {
        return crypto.createHmac(algorithm, key).update(str);
    };


module.exports = {
    base64Encode,
    base64Decode,
    base64,
    md5Hex,
    aesCbcEncode,
    aesCbcDecode,
    aesEncode,
    aesDecode,
    hmacMd5Hex,
    hmac
}