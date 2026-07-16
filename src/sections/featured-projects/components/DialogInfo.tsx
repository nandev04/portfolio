import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoClose } from "react-icons/io5";

const DialogInfo = ({
  isOpen,
  setIsOpen,
  title,
  completedAt,
  linkApp,
  description,
  mainStack,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  completedAt: string;
  linkApp?: string;
  description: string;
  mainStack: string[];
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 sm:p-10 bg-[rgba(0,0,0,0.7)]">
          <div className="relative w-full max-w-5xl">
            <DialogPanel className="w-full relative isolate border bg-[#f9f9f9] p-6 sm:p-12 rounded-2xl sm:rounded-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-[612px]:flex items-end">
                  <DialogTitle
                    className="relative font-senary text-3xl sm:text-5xl ml-4 sm:ml-5 mix-blend-difference text-[#dfdfdf] before:content-[''] before:absolute before:left-0.5 before:bottom-2 sm:before:bottom-3.5 before:translate-y-1/2
              before:-translate-x-1/2 before:h-2.5 sm:before:h-4 before:w-2.5 sm:before:w-4 before:bg-[#dfdfdf] before:rounded-full before:mix-blend-difference"
                  >
                    {title}
                  </DialogTitle>
                  <p className="font-quinary align-bottom mt-1.5 ml-1.5 italic text-[12px] min-[612px]:my-1.5 min-[612px]:mt-0">
                    (concluído em {completedAt})
                  </p>
                </div>
                <button
                  className="bg-dark-grey-700 p-1 rounded-full hover:bg-dark-grey-800 shrink-0 w-7 h-7 sm:w-10 sm:h-10"
                  onClick={() => setIsOpen(false)}
                >
                  <IoClose color="white" size={"100%"} />
                </button>
              </div>
              <Description
                className={
                  "bg-[#EDEDED] p-4 sm:p-6 pb-10 sm:pb-20 rounded-xl font-quinary text-dark-grey-700 text-sm sm:text-base"
                }
              >
                {description}
                {linkApp && (
                  <p className="mt-4">
                    🌐 Link da aplicação:{" "}
                    <a
                      className="text-blue-600 underline"
                      href="https://www.easylist.app.br/"
                    >
                      easylist.app.br
                    </a>
                  </p>
                )}
              </Description>

              <div className="mt-6 sm:mt-8 ml-4 sm:ml-5 mb-4">
                <div className=" relative">
                  <span
                    className="h-1 w-4.5 bg-dark-grey-700 absolute bottom-1"
                    aria-hidden="true"
                  />
                  <h3 className="relative font-primary leading-none uppercase text-dark-grey-700 text-lg sm:text-2xl tracking-wide ml-7">
                    Tecnologias Principais
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-5 mt-4 ml-7">
                  {mainStack.map((stack) => (
                    <span className=" bg-dark-grey-800 text-[#f6f6f6] font-default px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-[14px]">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DialogInfo;
