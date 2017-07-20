'use strict'
/**
 * Created by raven on 2017/7/20.
 */


const chai = require('chai');
const {expect} = chai;

const crypto_util = require('../util')

describe('crypto util test', () => {

    it('should return base64 encode',()=>{
        let r = crypto_util.base64Encode('haha')
        expect(r).to.equals('aGFoYQ==')
    })

    it('should return base64 decode',()=>{
        let r = crypto_util.base64Decode('aGFoYQ==')
        expect(r).to.equals('haha')
    })

    it('should return md5 hex',()=>{
        let r = crypto_util.md5Hex('haha')
        expect(r).to.equals('4e4d6c332b6fe62a63afe56171fd3725')
    })

    it('should return sha1 hex',()=>{
        let r = crypto_util.sha1Hex('haha')
        expect(r).to.equals('637d1f5c6e6d1be22ed907eb3d223d858ca396d8')
    })

    it('should return aes-128-cbc encode',()=>{
        let r = crypto_util.aes128CbcIvEncode('haha','1234567980123456','1234567980123456')
        expect(r).to.equals('9o4LXPQx1Oj0kxxZjSKQKQ==')
    })

    it('should return aes-128-cbc decode',()=>{
        let r = crypto_util.aes128CbcIvDecode('9o4LXPQx1Oj0kxxZjSKQKQ==','1234567980123456','1234567980123456')
        expect(r).to.equals('haha')
    })

    it('should hmac md5 encode',()=>{
        let r = crypto_util.hmacMd5Hex('haha','key')
        expect(r).to.equals('9fc14e28487a2e64dd86a92f9a4926e8')
    })

    it('should hmac sha1 encode',()=>{
        let r = crypto_util.hmacSha1Hex('haha','key')
        expect(r).to.equals('c6caa7aa8f52da773aaa1a6525a91f85cec70280')
    })
})
