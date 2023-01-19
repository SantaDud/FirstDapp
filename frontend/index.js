import { ethers } from "./ethers-5.2.esm.min.js";
import { abi, contractAddress } from "./constants.js";

document.addEventListener("DOMContentLoaded", async function () {
  let complaints = await getAllTransactions();
  for (let i = 0; i < complaints.length; i++) {
    let base = document.createElement("div");
    base.className = "row justify-content-center";

    let number = document.createElement("div");
    number.className = "col mt-3";
    let name = document.createElement("div");
    name.className = "col mt-3";
    let address = document.createElement("div");
    address.className = "col mt-3";
    let incident = document.createElement("div");
    incident.className = "col mt-3";
    let date = document.createElement("div");
    date.className = "col mt-3";

    let editBtnBase = document.createElement("div");
    editBtnBase.className = "col mt-3";
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline-warning";
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", async () => {
      window.location.href = "/updateComplaint.html";
      localStorage.setItem("index", complaints[i][0]);
    });
    editBtnBase.appendChild(editBtn);
    let deleteBtnBase = document.createElement("div");
    deleteBtnBase.className = "col mt-3";
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteTransaction(complaints[i][0]);
    });
    deleteBtnBase.appendChild(deleteBtn);

    number.innerHTML = complaints[i][0];
    name.innerHTML = complaints[i][2];
    address.innerHTML = complaints[i][3];
    incident.innerHTML = complaints[i][4];
    date.innerHTML = complaints[i][5];

    base.appendChild(number);
    base.appendChild(name);
    base.appendChild(address);
    base.appendChild(incident);
    base.appendChild(date);
    base.appendChild(editBtnBase);
    base.appendChild(deleteBtnBase);

    document.getElementById("main").appendChild(base);
  }
  //   console.log(complaints);
});

const connectBtn = document.getElementById("btn-connect");
connectBtn.onclick = connect;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await ethereum.request({ method: "eth_requestAccounts" });
    connectBtn.innerHTML = "Connected";
    connectBtn.disabled = true;
  } else console.log("Not Found");
}

async function getAllTransactions() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const transactionResponse = await contract.returnComplaints();
  return transactionResponse;
}

async function deleteTransaction(index) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const transactionResponse = await contract.removeComplaint(index);
  window.location.href = "/index.html";
  return transactionResponse;
}
