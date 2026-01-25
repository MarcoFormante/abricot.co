import { SignInUp } from "../components/SignInUp/SignInUp";

export default function Inscription() {

  //   const req = await fetch("http://localhost:8000/auth/login",{
  //   method:"POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body:JSON.stringify({
  //     email: "alice@example.com",
  //     password: "password123",
  //   }),
  // })

  // const res = await req.json()
  

  return (
    <main>
      <SignInUp isRegisterPage={true}/>
    </main>
  );
}
