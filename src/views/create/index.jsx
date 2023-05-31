import { useState, useEffect } from 'react';

function Create(){
	const [walletAddress, setWalletAddress] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		try{
			let result;
			if(walletAddress!==""&&name!==""&&email!==""&&address!==""){
				result = await fetch(
				'http://localhost:5000/register', {
					method: "post",
					body: JSON.stringify({ walletAddress, name, email, address }),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			}else{
				const massage="資料尚未填寫完全"
				throw massage;
			}
			result = await result.json();
			console.warn(result);
			if (result) {
				alert("Data saved succesfully");
				setEmail("");
				setName("");
				setAddress("");
			}
		}
		catch(e){
			if (e instanceof SyntaxError) {
				alert("此帳號已被註冊過");
			} else {
				alert(e);
			}
		}
	}
	const handleGetAddress = async () => {
	  if (typeof window.ethereum !== "undefined") {
		const accounts = await window.ethereum.request({
		  method: "eth_requestAccounts",
		});
		setWalletAddress(accounts[0]);
	  }
	};
  
	useEffect(() => {
	  handleGetAddress();
	}, []);
	return (
		<>
		<img src={require('../../img/ownerbanner.jpg')} style={{ width: "100%" }} alt=""></img>
			<h1>輸入個人資料 </h1>
			<h3>錢包地址:{walletAddress}</h3><br/>
			<form action="">
				<input type="text" placeholder="姓名"
				value={name} onChange={(e) => setName(e.target.value)} /><br/>
				<input type="email" placeholder="email"
				value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
				<input type="text" placeholder="地址"
				value={address} onChange={(e) => setAddress(e.target.value)} /><br/>
				<div style={{marginTop: 110}}
            ></div>
				<button type="submit"
				onClick={handleOnSubmit}>送出</button>
				
			</form>
  
		</>
	);
}

export default Create;