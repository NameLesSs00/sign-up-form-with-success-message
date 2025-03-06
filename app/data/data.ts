import { StaticImageData } from "next/image";
import iocn1 from "@/app/assets/images/icon-list.svg"

export interface FormProps {
  icon:StaticImageData;
  header:string;
  text:string
  paragraphs:[string,string,string];
}

export const FormData : FormProps[] = [
  {
    icon:iocn1,
    header:"Stay updated!",
    text:"Join 60,000+ product managers receiving monthly updates on:",
    paragraphs:[
      "Product discovery and building what matters",
      "Measuring to ensure updates are a success",
      "And much more!"
    ]
  }
  //i could add more data here to make this componets more useful for latter.

]