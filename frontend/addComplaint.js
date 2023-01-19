import { ethers } from "./ethers-5.2.esm.min.js";
import { abi, contractAddress } from "./constants.js";

document.addEventListener("DOMContentLoaded", () => {});

const connectBtn = document.getElementById("btn-connect");
connectBtn.onclick = connect;
const submitBtn = document.getElementById("btn-submit");
submitBtn.onclick = submit;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await ethereum.request({ method: "eth_requestAccounts" });
    connectBtn.innerHTML = "Connected";
    connectBtn.disabled = true;
  } else console.log("Not Found");
}

async function submit() {
  let name = document.getElementById("complainantName").value;
  let address = document.getElementById("complainantAddress").value;
  let incident = document.getElementById("incident").value;
  let time = document.getElementById("time").value;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const nameTransactionResponse = await contract.setComplainantDetails(
    name,
    address,
    incident,
    time
  );

  window.location.href = "/index.html";
}
