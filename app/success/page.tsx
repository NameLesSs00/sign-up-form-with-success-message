"use client";

import Image from "next/image";
import iocn1 from "@/app/assets/images/icon-list.svg";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("user"); // Get the `user` query parameter

  const router = useRouter();

  function handleOnClick() {
    router.back(); // Navigate back
  }

  return (
    <div className="h-screen flex flex-col sm:h-[60%] sm:w-[40%] sm:rounded-3xl sm:bg-white sm:shadow-lg sm:mx-auto sm:my-auto sm:p-10">
      {/* Icon */}
      <div className="rounded-full mb-6 mt-auto ml-7 sm:ml-0">
        <Image
          src={iocn1}
          width={60}
          height={60}
          alt="A nice icon"
          className="object-fill"
        />
      </div>

      {/* Header */}
      <h1 className="font-bold text-4xl mb-5 ml-7 sm:ml-0">Thanks for subscribing!</h1>

      {/* Message */}
      <p className="text-md sm:text-sm text-[hsl(0,0%,28%)] ml-7 sm:ml-0 sm:mb-8">
        A confirmation email has been sent to{" "}
        <span className="font-bold text-black">{userEmail}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>

      {/* Button */}
      <div className="w-full flex justify-center mt-auto mb-4">
        <button
          onClick={handleOnClick}
          className="text-white bg-[hsl(234,29%,20%)] flex justify-center items-center w-[90%] h-12 rounded-md cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:shadow-orange-500/40 hover:transition-shadow duration-300 shadow-lg sm:w-full"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}