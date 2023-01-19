export const abi = [
  {
    inputs: [],
    name: "addComplaint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "complaints",
    outputs: [
      {
        internalType: "uint256",
        name: "complaintNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "complainant",
        type: "address",
      },
      {
        internalType: "string",
        name: "complainantName",
        type: "string",
      },
      {
        internalType: "string",
        name: "complainantAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "incident",
        type: "string",
      },
      {
        internalType: "string",
        name: "timeOfIncident",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getSingleComplaint",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "complaintNumber",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "complainant",
            type: "address",
          },
          {
            internalType: "string",
            name: "complainantName",
            type: "string",
          },
          {
            internalType: "string",
            name: "complainantAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "incident",
            type: "string",
          },
          {
            internalType: "string",
            name: "timeOfIncident",
            type: "string",
          },
        ],
        internalType: "struct Complaint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastComplaint",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "complaintNumber",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "complainant",
            type: "address",
          },
          {
            internalType: "string",
            name: "complainantName",
            type: "string",
          },
          {
            internalType: "string",
            name: "complainantAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "incident",
            type: "string",
          },
          {
            internalType: "string",
            name: "timeOfIncident",
            type: "string",
          },
        ],
        internalType: "struct Complaint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeComplaint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "returnComplaints",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "complaintNumber",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "complainant",
            type: "address",
          },
          {
            internalType: "string",
            name: "complainantName",
            type: "string",
          },
          {
            internalType: "string",
            name: "complainantAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "incident",
            type: "string",
          },
          {
            internalType: "string",
            name: "timeOfIncident",
            type: "string",
          },
        ],
        internalType: "struct Complaint[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_complainant",
        type: "address",
      },
    ],
    name: "setComplainant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_address",
        type: "string",
      },
      {
        internalType: "string",
        name: "_incident",
        type: "string",
      },
      {
        internalType: "string",
        name: "_time",
        type: "string",
      },
    ],
    name: "setComplainantDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "setComplaintNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_address",
        type: "string",
      },
      {
        internalType: "string",
        name: "_incident",
        type: "string",
      },
      {
        internalType: "string",
        name: "_time",
        type: "string",
      },
    ],
    name: "updateComplaint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const contractAddress = "0x38112919D514F3119485c95B8a0950073812d208";
