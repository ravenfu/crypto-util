'use strict'
/**
 * Created by raven on 2017/7/19.
 */

const crypto = require('crypto');

const HEX = 'hex',
    UTF8 = 'utf8',
    MD5 = 'md5',
    SHA1 = 'sha1',
    AES_128_CBC = 'aes-128-cbc',
    AES_128_ECB = 'aes-128-ecb',
    AES_192_CBC = 'aes-192-cbc',
    AES_192_ECB = 'aes-192-ecb',
    AES_256_CBC = 'aes-256-cbc',
    AES_256_ECB = 'aes-256-ecb',
    BASE64 = 'base64',
    BF = 'bf',
    BF_CBC = 'bf-cbc',
    BF_CFB = 'bf-cfb',
    BF_ECB = 'bf-ecb',
    BF_OFB = 'bf-ofb',
    CAST = 'cast',
    CAST_CBC = 'cast-cbc',
    CAST5_CBC = 'cast5-cbc',
    CAST5_CFB = 'cast5-cfb',
    CAST5_ECB = 'cast5-ecb',
    CAST5_OFB = 'cast5-ofb',
    DES = 'des',
    DES_CBC = 'des-cbc',
    DES_CFB = 'des-cfb',
    DES_ECB = 'des-ecb',
    DES_EDE = 'des-ede',
    DES_EDE_CBC = 'des-ede-cbc',
    DES_EDE_CFB = 'des-ede-cfb',
    DES_EDE_OFB = 'des-ede-ofb',
    DES_EDE3 = 'des-ede3',
    DES_EDE3_CBC = 'des-ede3-cbc',
    DES_EDE3_CFB = 'des-ede3-cfb',
    DES_EDE3_OFB = 'des-ede3-ofb',
    DES_OFB = 'des-ofb',
    DES3 = 'des3',
    DESX = 'desx',
    RC2 = 'rc2',
    RC2_40_CBC = 'rc2-40-cbc',
    RC2_64_CBC = 'rc2-64-cbc',
    RC2_CBC = 'rc2-cbc',
    RC2_CFB = 'rc2-cfb',
    RC2_ECB = 'rc2-ecb',
    RC2_OFB = 'rc2-ofb',
    RC4 = 'rc4',
    RC4_40 = 'rc4-40',
    SEED = 'seed',
    SEED_CBC = 'seed-cbc',
    SEED_CFB = 'seed-cfb',
    SEED_ECB = 'seed-ecb',
    SEED_OFB = 'seed-ofb';

const base64Encode = (str, ie) => {
        return base64(str, ie, BASE64);
    },

    base64Decode = (str) => {
        return base64(str, BASE64)
    },

    base64 = (data, ie = UTF8, oe = UTF8) => {
        return new Buffer(data, ie).toString(oe)
    },

    md5Hex = (str) => {
        return md5(str).digest(HEX)
    },

    md5 = (str) => {
        return crypto.createHash(MD5).update(str)
    },

    sha1Hex = (str) => {
        return sha1(str).digest(HEX)
    },

    sha1 = (str) => {
        return crypto.createHash(SHA1).update(str)
    },

    aes128CbcIvEncode = (str, key, iv, algorithm, ie, oe) => {
        return cipherIvEncode(str, key, iv, AES_128_CBC, ie, oe)
    },

    aes128CbcIvDecode = (str, key, iv, algorithm, ie, oe) => {
        return cipherIvDecode(str, key, iv, AES_128_CBC, ie, oe)
    },

    cipherIvEncode = (str, key, iv, algorithm, ie = UTF8, oe = BASE64) => {
        let cipher = crypto.createCipheriv(algorithm, key, iv);
        cipher.setAutoPadding(true)
        return cipher.update(str, ie, oe) + cipher.final(oe)
    },

    cipherIvDecode = (str, key, iv, algorithm, ie = UTF8, oe = BASE64) => {
        let decipher = crypto.createDecipheriv(algorithm, key, iv);
        decipher.setAutoPadding(true);
        return decipher.update(str, oe, ie) + decipher.final(ie)
    },

    cipherEncode = (str, key, algorithm, ie = UTF8, oe = BASE64) => {
        let cipher = crypto.createCipher(algorithm, key);
        cipher.setAutoPadding(true)
        return cipher.update(str, ie, oe) + cipher.final(oe)
    },

    cipherDecode = (str, key, algorithm, ie = UTF8, oe = BASE64) => {
        let decipher = crypto.createDecipher(algorithm, key);
        decipher.setAutoPadding(true);
        return decipher.update(str, oe, ie) + decipher.final(ie)
    },

    hmacMd5Hex = (str, key) => {
        return hmac(str, key, MD5).digest(HEX)
    },

    hmacSha1Hex = (str, key) => {
        return hmac(str, key, SHA1).digest(HEX)
    },

    hmac = (str, key, algorithm) => {
        return crypto.createHmac(algorithm, key).update(str);
    },

    hex = (str) => {
        return str.digest(HEX)
    }
    ;


module.exports = {
    base64Encode,
    base64Decode,
    base64,
    md5Hex,
    md5,
    sha1Hex,
    sha1,
    aes128CbcIvEncode,
    aes128CbcIvDecode,
    cipherIvEncode,
    cipherIvDecode,
    hmacMd5Hex,
    hmacSha1Hex,
    hmac
};