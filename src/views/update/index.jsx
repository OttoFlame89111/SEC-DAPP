import { useState, useEffect } from 'react';
import axios from 'axios';

function Update(){
	const [walletAddress, setWalletAddress] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	let [NewName, setNewName] = useState(name);
	let [NewEmail, setNewEmail] = useState(email);
	let [NewAddress, setNewAddress] = useState(address);
	//const [user, setUser] = useState(null);

	const handleGetAddress = async () => {
		if (typeof window.ethereum !== "undefined") {
		  const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		  });
		  setWalletAddress(accounts[0]);
		}
		axios.get(`/${walletAddress}`)
		.then(res => {setName(res.data.name);
						setEmail(res.data.email);
						setAddress(res.data.address);})
		.catch(err =>{
			alert("還沒註冊就想修改資料阿!先去註冊");
			window.location.replace('/#/create'); 
			console.error(err)
		});
	};

	useEffect(() => {
		handleGetAddress();
	},[walletAddress]);

	let saveTheName="";
	let saveTheEmail="";
	let saveTheAddress="";
	const UpdateSubmit = async (e) => {
		if(NewName===''){
			saveTheName=name;
		}
		else{
			saveTheName=NewName;
		}
		if(NewEmail===''){
			saveTheEmail=email;
		}
		else{
			saveTheEmail=NewEmail;
		}
		if(NewAddress===''){
			saveTheAddress=address;
		}
		else{
			saveTheAddress=NewAddress;
		}

		e.preventDefault();
		const user = {
			walletAddress:walletAddress,
			name: saveTheName,
			email: saveTheEmail,
			address: saveTheAddress,
		};
	  
		axios
		.put(`/${walletAddress}`, user)
		.then((response) => {
			//console.log(response.data);
			alert("Data update succesfully");
		})
		.catch((error) => {
			console.log(error);
		});
	}

	return(
		<>
		<img src={require('../../img/ownerbanner.jpg')} style={{ width: "100%" }} alt=""></img>
			<h1>修改個人資料 </h1>
			<h3>錢包地址:{walletAddress}</h3><br/>
			<form action="">
				<input type="text" defaultValue={name} 
				 onChange={(e) => setNewName(e.target.value)} /><br/>
				<input type="email" defaultValue={email}
				 onChange={(e) => setNewEmail(e.target.value)} /><br/>
				<input type="text" defaultValue={address}
				 onChange={(e) => setNewAddress(e.target.value)} /><br/>
				 <div style={{marginTop: 110}}
            ></div>
				<button type="submit"
				onClick={UpdateSubmit}>修改</button>
			</form>
  
		</>
	);
}
export default Update;