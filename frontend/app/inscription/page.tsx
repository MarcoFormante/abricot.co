import { Metadata } from "next";
import { SignInUp } from "../components/SignInUp/SignInUp";

export const metadata: Metadata = {
  title: 'Inscription',
};

export default function Inscription() {

  return (
    <main>
      <SignInUp isRegisterPage={true}/>
    </main>
  );
}
