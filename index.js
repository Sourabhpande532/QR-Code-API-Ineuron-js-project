const userInput = document.getElementById("input");
const userClick = document.getElementById("submit");
const qrCodeImg = document.getElementById("img");
const loader = document.getElementById("loader");

userClick.addEventListener("click", () => {
  getUserInput(userInput.value);
});

const getUserInput = (getValue) => {
  // getValue = getValue.trimStart();
  if (getValue.length == "") {
    alert("Please fullfilled your Empty");
  } else {
    // Api url
    const url = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${getValue}`;
    qrCodeImg.classList.toggle("hidden"); // on ➡️ Off turnIntoOn to 'Off'
    loader.classList.toggle("hidden"); // Off ➡️ On turnIntoOff to 'On'
    // fetchDatafromApi
    const fetchApi = async () => {
      await fetch(url).then((res) => {
        //when we use fetch methode it return promises
        qrCodeImg.setAttribute("src", res.url);
      });
      setTimeout(() => {
        loader.classList.toggle("hidden"); // on ➡️ Off turnIntoOn to 'Off'
        qrCodeImg.classList.toggle("hidden"); // Off ➡️ On turnIntoOff to 'On'
        userInput.value = "";
      }, 2000);
    };
    fetchApi();
  }
};
