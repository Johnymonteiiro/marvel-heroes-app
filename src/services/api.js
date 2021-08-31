/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import md5 from "md5";

const Api = () => {
  //Kyes

  /*
  Nota: Caso não funcione, bote a sua chave API
  
   */

  const publicKey = "a9bf48d04ac1fe36d639f16a2d4717d6";
  const privateKey = "58e5b04f0aa79463a340c2679d08e14d11c214b4";
  const ts = Number(new Date());
  const hash = md5(ts + privateKey + publicKey);
  const dados = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public/`,
    params: {
      ts,
      apikey: publicKey,
      hash,
    },
  });

  return dados;
};

export default Api;
