"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function AuthForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // handleLogin logic
  }

  async function handleSignUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // handleSignUp logic
  }

  let signInMessage = "Sign In";
  if (isSigningIn) {
    signInMessage = "Signing In";
  } else if (isNewUser) {
    signInMessage = "Sign Up";
  }

  const signUpMessage = <p>Email sent! Check your email to confirm sign up.</p>;

  return (
    <form onSubmit={isNewUser ? handleSignUp : handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        className=""
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        className=""
        placeholder="Password"
      />
      <button type="submit">{signInMessage}</button>
      <p>
        {isNewUser ? (
          <>
            Already have an account?{" "}
            <button type="button" onClick={() => setIsNewUser(false)}>
              Sign In
            </button>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <button type="button" onClick={() => setIsNewUser(true)}>
              Sign Up
            </button>
          </>
        )}
      </p>
      {isSigningUp && signUpMessage}
    </form>
  );
}
