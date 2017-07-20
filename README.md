# crypto-util

code easier

```
crypto_util.base64Encode('haha')
// aGFoYQ==


crypto_util.base64Decode('aGFoYQ==')
// haha


crypto_util.md5Hex('haha')
// 4e4d6c332b6fe62a63afe56171fd3725


crypto_util.sha1Hex('haha')
// 637d1f5c6e6d1be22ed907eb3d223d858ca396d8


crypto_util.aes128CbcIvEncode('haha','1234567980123456','1234567980123456')
// 9o4LXPQx1Oj0kxxZjSKQKQ==


crypto_util.aes128CbcIvDecode('9o4LXPQx1Oj0kxxZjSKQKQ==','1234567980123456','1234567980123456')
// haha


crypto_util.hmacMd5Hex('haha','key')
// 9fc14e28487a2e64dd86a92f9a4926e8


crypto_util.hmacSha1Hex('haha','key')
// c6caa7aa8f52da773aaa1a6525a91f85cec70280
```