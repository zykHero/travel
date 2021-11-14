import { Injectable } from '@angular/core';
import jsrsasign from 'jsrsasign';
import { commonParams } from '../const/common-params';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  encryption(content) {
    //创建一个对象
    let rsa = new jsrsasign.RSAKey();
    //使用公钥加密
    let publicKey = `-----BEGIN PUBLIC KEY-----\n${commonParams.publicKey}\n-----END PUBLIC KEY-----`;
    console.log(publicKey)
    // let publicKey = `${commonParams.publicKey}`;    
    rsa = jsrsasign.KEYUTIL.getKey(publicKey);
    let enc = jsrsasign.KJUR.crypto.Cipher.encrypt(content, rsa);
    //转换成Base64格式
    let base64Sign = jsrsasign.hextob64(enc);
    return base64Sign;
  }
}
