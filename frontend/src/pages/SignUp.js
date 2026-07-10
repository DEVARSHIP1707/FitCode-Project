import { useState} from "react";
import { useSignUp } from "../Hooks/useSignup";
const SignUp=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup,isLoading,error}=useSignUp()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        // console.log(email,password)
        await signup(email,password)
}
return (
    <form className="signup" onSubmit={handleSubmit}>
        <h4>Sign-Up</h4>
        <label>Email:</label>
        <input typ="email" onChange={(e)=>setEmail(e.target.value)}value={email}/>
        <label>Password:</label>
        <input typ="password" onChange={(e)=>setPassword(e.target.value)}value={password}/>
        <button disabled={isLoading}>Sign-Up</button>
        {error &&  <div className="error">{error}</div>}
    </form>
)
}
export default SignUp