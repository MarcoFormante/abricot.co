import { SignInUp } from "./components/SignInUp/SignInUp";

export default function Login() {

  return (
    <main>
      <SignInUp isRegisterPage={false} />
    </main>
  );
}
