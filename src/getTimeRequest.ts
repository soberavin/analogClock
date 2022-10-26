export default function getTimeReq() {
  return fetch("https://worldtimeapi.org/api/ip", {
    method: "GET"
  })
    .then((response) => response.json())
    .then((val) => {
      return val;
    });
}