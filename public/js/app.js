console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const result = document.querySelector(".temperature");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = e.target[0].value;

  const url = "http://localhost:3000/weather?address=" + searchTerm;

  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    response.json().then((data) => {
      if (data.error) {
        result.innerHTML = data.error;
        console.error(data.error);
      } else {
        result.innerHTML = `Temperature right now: ${data.forecast.temperature}°C`;
      }
    });
  });
});
