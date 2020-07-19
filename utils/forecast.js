const request = require("postman-request");

const forecast = function (latitude, longitude, callback) {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    process.env.WEATHERSTACK_ID +
    `&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Weather service not available", undefined);
    } else if (response.body.success === false) {
      callback("Location parameters are missing", undefined);
    } else {
      callback(undefined, {
        latitude,
        longitude,
        temperature: response.body.current.temperature,
        chance_rain: response.body.current.precip,
      });
    }
  });
};

module.exports = forecast;
