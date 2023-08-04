const inputs = document.querySelectorAll(".form-style");
const submitBtn = document.querySelector(".send-btn");

let data = {
  name: "",
  email: "",
  mobile: "",
  text: "",
};

let dataArr = [];

async function logData() {
  let dataTmp = data;
  const response = await fetch("/assets/js/data.json", {
    method: "POST",
    body: JSON.stringify(dataTmp),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
}

submitBtn.addEventListener("click", function (e) {
  inputs.forEach(function (e) {
    dataArr.push(e.value);
  });
  data.name = dataArr[0];
  data.email = dataArr[1];
  data.mobile = dataArr[2];
  data.text = dataArr[3];
  logData();
  dataArr = [];
});
