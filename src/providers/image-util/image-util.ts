import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import * as B64toArrBuff from 'base64-arraybuffer';

@Injectable()
export class ImageUtilProvider {

  constructor() {}

  b64ToBlob(b64Data: string): Blob {
    let contentType = 'image/png';
    let sliceSize = 512;

    b64Data = b64Data.replace(/data\:image\/(jpeg|jpg|png)\;base64\,/gi, '');

    let byteCharacters = atob(b64Data); //decode base64
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);

      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }

      let byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    let blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  blobTob64(blob: Blob): Promise<any> {
    return new Promise((resolve) => {
      let reader = new FileReader();

      reader.onloadend = function (e) {
        resolve(reader.result); // base64 string
      };

      reader.readAsText(blob);
    });
  }

  uint8ArrayToB64(uint8Array: Uint8Array): string {
    // Add header to raw base64 according to the syntax of the data URI scheme
    return 'data:image/jpeg;base64,' + B64toArrBuff.encode(uint8Array);
  }

  b64ToBuffer(b64Data: string): Buffer {
    // Remove header before saving to database
    let BASE64_MARKER = ";base64,";
    let parts = b64Data.split(BASE64_MARKER);

    let arrBuff = B64toArrBuff.decode(parts[1]); // Base64 to ArrayBuffer

    return Buffer.from(arrBuff); // ArrayBuffer to Buffer
  }

}
