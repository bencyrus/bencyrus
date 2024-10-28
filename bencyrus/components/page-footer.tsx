import { LuMail, LuPhone } from "react-icons/lu";

export default function PageFooter() {
  return (
    <div className="mt-[20px]">
      <hr className="border-neutral-700" />
      <div className="mt-[42px] mb-[6px]">
        <div>
          <h2 className="text-[22px] font-medium">Want to get in touch?</h2>
          <p className="text-[14px] text-neutral-400 font-light">
            I am always excited to chat!
          </p>
        </div>
        <div className="flex justify-between mt-[36px] text-neutral-200 font-light md:w-[510px] flex-col md:flex-row gap-[24px]">
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
      </div>
    </div>
  );
}
