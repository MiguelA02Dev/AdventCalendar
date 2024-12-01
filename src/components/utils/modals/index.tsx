"use client";
import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";

interface Props {
  open: boolean;
  setOpen: (state: boolean) => void;
  background: string;
  color: string;
  secondColor?: string;
  icon?: string;
  title: string;
  message: string;
  url?: string;
}
const Modal: React.FC<Props> = ({
  open,
  setOpen,
  icon,
  title,
  message,
  url,
}) => {

  const handleClose = () => {
    setOpen(false);
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={`relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 border-2 border-dashed border-[#A20A0A]`}
          >
            <div>
              <div className="mx-auto flex size-24 items-center justify-center rounded-full">
                <Image src={icon ?? ""} width={110} height={110} alt="logo" />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h3"
                  style={{
                    color: "#A20A0A",
                  }}
                  className={`text-lg font-semibold font-belleza`}
                >
                  {title}
                </DialogTitle>
                <div className="mt-2">
                  <p
                    style={{ color: "#122721" }}
                    className="text-base font-belleza"
                  >
                    {message}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => handleClose()}
                style={{
                  backgroundColor: "#A20A0A",
                  color: "white",
                }}
                className="inline-flex w-full font-belleza justify-center rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Recoger
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
