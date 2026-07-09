import { type HTMLInputTypeAttribute } from "react";
import { useFormContext, type FieldErrors } from "react-hook-form";
import type { emailValidationType } from "../schema/emailValidation";

const InputLabel = ({
  label,
  htmlFor,
  type,
  registerName,
  error,
}: {
  label: string;
  htmlFor: string;
  type?: HTMLInputTypeAttribute;
  registerName: keyof emailValidationType;
  error: FieldErrors<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>;
}) => {
  const { register } = useFormContext<emailValidationType>();

  return (
    <div className="flex flex-col">
      <label
        className="ml-2 mb-0.5 font-quinary italic font-normal text-[14px] text-[#2A2A2A]"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {htmlFor === "message" ? (
        <textarea
          {...register(registerName)}
          className="border-[#E2E2E2] bg-[#FBFBFB] border-2 rounded-lg py-1 px-2 min-h-40 resize-y align-top"
          id={htmlFor}
        />
      ) : (
        <input
          {...register(registerName)}
          className="border-[#E2E2E2] bg-[#FBFBFB] border-2 rounded-lg py-1 px-2"
          id={htmlFor}
          type={type}
        />
      )}

      {error[registerName] && (
        <span className="italic font-quinary ml-2 mt-0.5 text-[0.875rem] text-red-600">
          {error[registerName].message}
        </span>
      )}
    </div>
  );
};

export default InputLabel;
