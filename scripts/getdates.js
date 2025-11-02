
const currentYear = document.querySelector("#currentYear");

const today = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = today;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
