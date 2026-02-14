import { Metadata } from "next";
import { SignInUp } from "./components/SignInUp/SignInUp";

export const metadata: Metadata = {
  title: 'Login | Abricot.co',
};

export default function Login() {

  return (
    <main>
      <SignInUp isRegisterPage={false} />
    </main>
  );
}
