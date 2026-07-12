import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HiMiniServerStack } from "react-icons/hi2";
import { MdScreenshotMonitor } from "react-icons/md";
import { FaChevronDown, FaTools } from "react-icons/fa";
import type { ReactElement } from "react";

type OptionKey = "frontend" | "backend" | "tools";

type DropdownMenuProps = {
  value: OptionKey;
  onChange: (value: OptionKey) => void;
};

const options: Record<OptionKey, { icon: ReactElement; label: string }> = {
  frontend: { icon: <MdScreenshotMonitor />, label: "Front-End" },
  backend: { icon: <HiMiniServerStack />, label: "Back-End & Devops" },
  tools: { icon: <FaTools />, label: "Ferramentas" },
};

const DropdownMenuComponent = ({ value, onChange }: DropdownMenuProps) => {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="inline-flex max-w-70 items-center gap-2 rounded-4xl bg-dark-grey-800 px-4 py-2 font-medium text-white hover:bg-dark-grey-800 focus:outline-none"
        >
          <span className="flex items-center gap-2 w-full h-full">
            {options[value].icon}
          </span>
          <FaChevronDown className="size-5" aria-hidden="true" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-48 origin-top rounded-md bg-dark-grey-800 shadow-lg ring-1 ring-black/10 focus:outline-none transition duration-100 ease-out data-[state=closed]:opacity-0 data-[state=closed]:scale-95 data-[state=open]:opacity-100 data-[state=open]:scale-100"
        >
          {(Object.keys(options) as OptionKey[]).map((key) => (
            <DropdownMenu.Item
              key={key}
              onSelect={() => onChange(key)}
              className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-white outline-none data-highlighted:bg-dark-grey-800 cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                {options[key].icon} {options[key].label}
              </span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuComponent;
