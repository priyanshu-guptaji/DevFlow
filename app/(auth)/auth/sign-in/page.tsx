import SignInFormClient from '@/features/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'


const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gap-12 px-6 bg-gray-50 dark:bg-gray-900">
      
      <Image
        src="/login.svg"
        alt="Login"
        width={450}
        height={450}
        className="hidden md:block"
      />

      <SignInFormClient />
    </div>
  );
};

export default SignInPage