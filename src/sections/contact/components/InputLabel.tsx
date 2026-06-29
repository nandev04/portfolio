import { type HTMLInputTypeAttribute } from "react";

const InputLabel = ({
  label,
  htmlFor,
  type,
}: {
  label: string;
  htmlFor: string;
  type?: HTMLInputTypeAttribute;
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        className="border-[#E2E2E2] border-2 rounded-lg p-1"
        id={htmlFor}
        type={type}
      />
    </>
  );
};

export default InputLabel;
