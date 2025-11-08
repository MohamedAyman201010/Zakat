import CryptoJS from "crypto-js";
import axios from "axios";

class ApiClass {
  constructor() {
    // ====== Constants ======
    this.ApiToken = "TTRgG@i$$ol@m$Wegh77";
    this.DataToken = "Zakat"; 
    this.AES256Key = "SL@C$@rd2023$$AlMedad$Soft$2022$";
    this.BackendBaseUrl = "https://framework.md-license.com:8093/emsserver.dll/ERPDatabaseWorkFunctions/";
  }

  // ====== Execute Procedure ======
  async ExecuteProcedure({ ProcedureName, ParametersValues, DataToken }) {
    const jsonData = {
      ApiToken: this.ApiToken,
      Data: this.encrypt({
        ParametersValues,
        ProcedureName,
        DataToken: DataToken || this.DataToken
      }),
    };

    try {
      const { data }  = await axios.post(
        this.BackendBaseUrl + "ExecuteProcedure",
        jsonData,
      );

      const status = this.decrypt(data.Result);

      // throw for errors
      if (status !== 200) {
        throw new Error(this.decrypt(data?.Error));
      }

      // success
      return {
        status,
        Data: this.decrypt(data?.Data),
        error: this.decrypt(data.Error),
        ServerTime: this.decrypt(data?.ServerTime),
      };

    } catch (error) {
      return {
        status: null,
        Data: null,
        error: error?.message,
        ServerTime: null,
      };
    }
  }

  // ====== Functions Encryption ======
  AsciiConverter(key = "") {
    return [...key].map(char => char.charCodeAt(0));
  }

  ArrayResizer(arr = [], newSize, defaultValue = 0) {
    return [...arr, ...Array(Math.max(0, newSize - arr.length)).fill(defaultValue)].slice(0, newSize);
  }

  getKeyAndIV() {
    const asciiArr = this.AsciiConverter(this.AES256Key);
    const toHex = nums =>
      CryptoJS.enc.Hex.parse(nums.map(n => n.toString(16).padStart(2, "0")).join(""));
    return {
      encodedKey: toHex(this.ArrayResizer(asciiArr, 32)),
      iv: toHex(this.ArrayResizer(asciiArr, 16))
    };
  }

  encrypt(data) {
    try {
      const plaintext = typeof data === "object" ? JSON.stringify(data) : String(data);
      const { encodedKey, iv } = this.getKeyAndIV();
      return CryptoJS.AES.encrypt(plaintext, encodedKey, { iv }).toString();
    } catch (error) {
      return { "Encryption failed:": error.message };
    }
  }

  decrypt(encryptedData) {
    try {
      const { encodedKey, iv } = this.getKeyAndIV();
      const decrypted = CryptoJS.AES.decrypt(encryptedData.replaceAll("\r\n", ""), encodedKey, { iv })
        .toString(CryptoJS.enc.Utf8);
      try {
        return JSON.parse(decrypted);
      } catch {
        return decrypted;
      }
    } catch (error) {
      return { "Decryption failed:": error.message };
    }
  }
}

export default ApiClass;
