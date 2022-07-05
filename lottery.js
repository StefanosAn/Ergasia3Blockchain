import web3 from './web3';

const address = '0x137b5dbf09e557f51a467eeb56c5d6fe722e372f'; //'0x4654CA21215B3dC0337E3bd8a808ad02B2694fAF';//'0x81885A0A97B53CB09576351Ed71Cd9917F94Fd27';

const abi = 
[
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AmIWinner",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DeclareWinners",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "Reveal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "beneficiary",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "biddersItem1",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "biddersItem2",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "biddersItem3",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "biditem1",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "biditem2",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "biditem3",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "destroySmartContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOwnerAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "lottery",
				"type": "uint256"
			}
		],
		"name": "getWinnerByLottery",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "items",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemTokens",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lotteryHistory1",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lotteryHistory2",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lotteryHistory3",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lotteryId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reset",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "visitor",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


// [	
// 		{
// 			"constant": false,
// 			"inputs": [],
// 			"name": "enter",
// 			"outputs": [],
// 			"payable": true,
// 			"stateMutability": "payable",
// 			"type": "function"
// 		},
// 		{
// 			"constant": false,
// 			"inputs": [],
// 			"name": "pickWinner",
// 			"outputs": [],
// 			"payable": false,
// 			"stateMutability": "nonpayable",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [],
// 			"payable": true,
// 			"stateMutability": "payable",
// 			"type": "constructor"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [],
// 			"name": "getPlayers",
// 			"outputs": [
// 				{
// 					"name": "",
// 					"type": "address[]"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [],
// 			"name": "manager",
// 			"outputs": [
// 				{
// 					"name": "",
// 					"type": "address"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [
// 				{
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "players",
// 			"outputs": [
// 				{
// 					"name": "",
// 					"type": "address"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "view",
// 			"type": "function"
// 		}
	
// ];

export default new web3.eth.Contract(abi, address);
