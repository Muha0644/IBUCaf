import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';

export default function Login() {
	function loginSucc(credResp: any) {
		const token: any = jwtDecode(credResp.credential)
		sessionStorage.setItem("email", token.email)
		setItem(token.name)
	}
	function loginF() {
		alert("bad login, goofy ahh mf")
	}
	function logout() {
		googleLogout()
		sessionStorage.setItem("email", "")
		setItem("")
	}

	var [item, setItem] = useState("")

	if (item.length == 0) return (<>
		<h2>Please log in to check out.</h2>
		<GoogleLogin onSuccess={loginSucc} onError={loginF} />
	</>)
	else return (<>
		<h2>Logged in as {item}</h2>
		<button onClick={logout}>Log me out, man!</button>
	</>)
}