const axios = require("axios");

const BaseUrl='https://www.metaweather.com/api/location/search/?query=san'



const getData = async () => {
  try {
    var response = await fetch(`${BaseUrl}`, {
      method: "Get",
      mode: "cors",
      headers: { "content-type": "application/json ; charset:utf-8" },
    });
    var result = await response.json();
    return result;
  } catch (e) {
    return false;
  }
};


export { getData, BaseUrl };
