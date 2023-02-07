(async()=>{
    const contractAddress="0xD4Fc541236927E2EAf8F27606bD7309C1Fc2cbee";
    const contractABI=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "CreateYourUniqueId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "IDs",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
    const contractInstance = new web3.eth.Contract(contractABI,contractAddress);
    const result=await contractInstance.methods.IDs("123Gaurav@3").call();
    if(result==false){
        await contractInstance.methods.CreateYourUniqueId("123Gaurav@3").send({from:"0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"});
        console.log("Successfull in generating your ID");
    }
    else{
        console.log("ID is already generated! Aboring");
    }
    
})()
// the above code is made on basis of the smart contract aatached to it and int that samrt contract we have a mapping
// now the concept is that this contract help user to create there id but that id should be unique so we used mapping which 
// will help in checking that whether the the id put is unique or not 

// this javascript can be used in web applications to help developers and user get and generate unique id respectively
