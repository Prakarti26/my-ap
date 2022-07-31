import { useRouter } from 'next/router';
import React from 'react'
import Navbar from '../components/Navbar'

export default function Unauthorized() {
    const router = useRouter();
    const {message} = router.query;
  return (
    <>
      <Navbar
        companyname="MyShoppingPlace"
        homename="Home"
        aboutname="About Us"
        logo="vercel.svg"
      />
      <h1 className='text-xl'>Access Denied</h1>
      {message && <div className='mb-4 text-red-500'>{message}</div>}
    </>
  );
}
