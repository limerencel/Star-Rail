const myForm = document.getElementById("getUID");
const UID = document.getElementById("uid");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  localStorage.setItem("UID", UID.value);
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
});

//fetch data from mihomo API
async function fetchData() {
  const baseUrl = "https://api.mihomo.me/sr_info_parsed/";
  const lang = "cn";
  const uid = UID.value;
  try {
    const fetchURL = baseUrl + uid + "?lang=" + lang;
    console.log(fetchURL);
    const response = await fetch(fetchURL);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching data", response.status);
    }
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
