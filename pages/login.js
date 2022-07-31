import Link from "next/link";
import { useEffect } from "react";
import {signIn,useSession} from 'next-auth/react';
import { useForm } from "react-hook-form";
import { getError } from "../utlis/error";
import { toast } from "react-toastify";
import {useRouter} from 'next/router';
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";


function LoginScreen() {
  const {data: session} = useSession();
  const router = useRouter();
  const { redirect } = router.query;
 useEffect(() => {
   if (session?.user) {
     router.push(redirect || "/");
   }
 }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    // console.log(email,password);
    try{
      const result = await signIn('credentials',{
        redirect: false,
        email,
        password,
      });
      if(result.error){
        toast.error(result.error);
      }
    }catch(err){
        toast.error(getError(err));
    }
  };
  return (
    <>
    <Navbar
        companyname="MukulKamwala"
        homename="Home"
        aboutname="About Us"
        logo="vercel.svg"
      />
    <div>
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_]+.[a-zA-Z0-9_.]+$/i,
                message: "Please enter valid email",
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 6, message: "password is more than 5 chars" },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link href="register">Register</Link>
        </div>
      </form>
    </div>
    </>
  );
}
export default dynamic(() => Promise.resolve(LoginScreen), { ssr: false });