import { ethers } from "./ethers-5.2.esm.min.js";
import { abi, contractAddress } from "./constants.js";

document.addEventListener("DOMContentLoaded", async () => {
  let complaint = await getSingleComplaint(localStorage.getItem("index"));
  document.getElementById("complainantName").value = complaint[2];
  document.getElementById("complainantAddress").value = complaint[3];
  document.getElementById("incident").value = complaint[4];
  document.getElementById("time").value = complaint[5];
});

const submitBtn = document.getElementById("btn-submit");
submitBtn.onclick = updateComplaint;

async function getSingleComplaint(index) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const transactionResponse = await contract.getSingleComplaint(index);
  return transactionResponse;
}

async function updateComplaint() {
  let name = document.getElementById("complainantName").value;
  let address = document.getElementById("complainantAddress").value;
  let incident = document.getElementById("incident").value;
  let time = document.getElementById("time").value;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const transactionResponse = await contract.updateComplaint(
    localStorage.getItem("index"),
    name,
    address,
    incident,
    time
  );

  window.location.href = "/index.html";
}
