import { LuMail, LuPhone } from "react-icons/lu";

import socials from "@/data/socials.json";
import SocialButton from "@/components/social-button";

export default function ContactPage() {
  return (
    <div className="md:p-[36px] flex flex-col gap-[40px] p-[24px]">
      <ContactPageHeader />
      <hr className="border-neutral-700" />
      <ContactInfo />
      <div className="mt-[40px]">
        <Socials />
      </div>
    </div>
  );
}

function ContactPageHeader() {
  return (
    <div className="flex flex-col gap-[8px]">
      <h1 className="text-[36px] font-bold">Contact</h1>
      <span className="text-neutral-400">I'm always excited to chat!</span>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="flex justify-between text-neutral-200 font-light md:max-w-[600px] flex-col md:flex-row gap-[24px]">
      <div className="flex flex-row items-center gap-[8px]">
        <div className="text-[24px] bg-neutral-700/80 rounded-full p-[12px]">
          <LuMail />
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] text-neutral-400">Email</span>
          <span>realbencyrus@gmail.com</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-[8px]">
        <div className="text-[24px] bg-neutral-700/80 rounded-full p-[12px]">
          <LuPhone />
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] text-neutral-400">Phone</span>
          <span>+1 (587) 832-4402</span>
        </div>
      </div>
    </div>
  );
}

function Socials() {
  const filteredSocials = socials.filter(
    (social) => social.name === "Instagram" || social.name === "LinkedIn"
  );

  return (
    <div>
      <h3 className="text-[24px] font-medium">I am also available on:</h3>
      <div className="flex justify-between text-neutral-200 font-light md:max-w-[800px] flex-col md:flex-row gap-[24px] mt-[40px]">
        {filteredSocials.map((social) => (
          <SocialButton key={social.name} social={social} />
        ))}
      </div>
    </div>
  );
}
