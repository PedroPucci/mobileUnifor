// // config/apiConfig.js

// const LOCAL = "http://192.168.0.12:5000/api/v1";
// const PROD = "https://api.suaapiemproducao.com/v1"; // pode deixar assim por enquanto

// const BASE_URL = __DEV__ ? LOCAL : PROD;

// export default BASE_URL;

// config/apiConfig.js

const LOCAL = "http://192.168.0.9:5000/api/v1";
const PROD = "https://discplinamobilenoite.onrender.com/api/v1"; // sua URL real

const BASE_URL = __DEV__ ? LOCAL : PROD;

const fetchComTimeout = (url, options, timeout = 9000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Tempo limite excedido")), timeout)
    ),
  ]);
};

export { BASE_URL, fetchComTimeout };
