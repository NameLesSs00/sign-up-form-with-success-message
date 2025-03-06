"use client";
import Image from "next/image";
import illustrationMobile from "@/app/assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "@/app/assets/images/illustration-sign-up-desktop.svg";

import { FormData, FormProps } from "@/app/data/data";
import { useRouter } from "next/navigation";
import { useState } from "react";

function StayUpdated(props: FormProps) {
  return (
    <>
      <h1 className="text-xl font-bold w-[90%] mx-auto sm:text-4xl ">
        {props.header}
      </h1>
      <p className="w-[90%] mx-auto my-6">{props.text}</p>
      <section>
        <div className="flex w-[90%] mx-auto">
          <div className="object-fill h-7 w-7 mr-2">
            <Image src={props.icon} alt="A nice icon"></Image>
          </div>
          <p className="relative bottom-1 text-sm">{props.paragraphs[0]}</p>
        </div>
      </section>
      <section className="my-3 ">
        <div className="flex w-[90%] mx-auto">
          <div className="object-fill h-7 w-7 mr-2">
            <Image src={props.icon} alt="A nice icon"></Image>
          </div>
          <p className="relative bottom-1 text-sm">{props.paragraphs[1]}</p>
        </div>
      </section>
      <section>
        <div className="flex w-[90%] mx-auto">
          <div className="object-fill h-7 w-7 mr-2">
            <Image src={props.icon} alt="A nice icon"></Image>
          </div>
          <p className="relative bottom-1 text-sm">{props.paragraphs[2]}</p>
        </div>
      </section>
    </>
  );
}
function ImgMobile() {
  return (
    <div className="sm:hidden w-full">
      <div className="relative w-full h-[200px] rounded-b-lg overflow-hidden">
        <Image
          src={illustrationMobile}
          alt="A nice img"
          objectFit="cover"
          fill
        />
      </div>
    </div>
  );
}

function ImgDesktop() {
  return (
    <div className="hidden sm:flex ml-auto h-full relative justify-center items-center">
      <Image src={illustrationDesktop} alt="A nice img" fill />
    </div>
  );
}

function Form({}) {
  const [emailData, setEmailData] = useState("");
  const [validEmail, setvalidEmail] = useState(true);
  const router = useRouter();

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailData(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailData }),
      });
      if (response.ok) {
        setvalidEmail(true);
        // here the email is vaild
        router.push(`/success?user=${encodeURIComponent(emailData)}`);
      } else {
        setvalidEmail(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between w-[90%] mx-auto mb-2">
          <p className=" font-bold text-sm">Email address</p>
          {/*this should be only shown when the input is not vaild  */}
          {!validEmail && (
            <p className="ml-5 font-bold text-sm text-red-500">
              Valid email required
            </p>
          )}
        </div>
        <label htmlFor="email"></label>
        <input
          onChange={handleEmailInput}
          type="email"
          name="email"
          id="email"
          placeholder="email@company.com"
          value={emailData}
          className={`cursor-pointer  flex w-[90%] mx-auto h-12 border rounded-md pl-4 text-base ${
            !validEmail
              ? "border-red-500 bg-red-100 text-red-600"
              : "border-[#888] hover:border-black"
          }`}
        />

        <button className="text-white bg-[hsl(234,29%,20%)] flex justify-center items-center w-[90%] mx-auto h-12 rounded-md mt-5 cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:shadow-orange-500/40 hover:transition-shadow duration-300 shadow-lg">
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
}

export default function Product() {
  return (
    /*main container*/
    <div className=" grid grid-cols-1 bg-white sm:grid-cols-[1fr_1fr] h-screen sm:h-[30rem] sm:w-[40rem] sm:rounded-[20px] ">
      <section className="sm:order-2 sm:p-1">
        <ImgMobile />
        <ImgDesktop />
      </section>

      <section className=" sm:flex sm:items-center sm:p-">
        <div className="flex flex-col sm:order-1 ">
          <StayUpdated {...FormData[0]} />
          <Form />
        </div>
      </section>
    </div>
  );
}
