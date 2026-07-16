import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import type { optionsStack } from "../Skills";
import { RiCloseLine } from "react-icons/ri";
import { MdScreenshotMonitor } from "react-icons/md";
import { HiMiniServerStack } from "react-icons/hi2";
import { FaCheck, FaChevronDown, FaTools } from "react-icons/fa";

const DropdownMenu = ({
  option,
  setState,
}: {
  option: optionsStack;
  setState: React.Dispatch<React.SetStateAction<optionsStack>>;
}) => {
  return (
    <Menu>
      <div className="relative">
        <MenuButton className="rounded-4xl bg-dark-grey-800 px-4 py-2 text-sm font-medium text-white shadow-md h-9 data-hover:bg-dark-grey-800 data-open:bg-dark-grey-800">
          <div className="flex gap-5.5 items-center h-full">
            {option === "frontend" && <MdScreenshotMonitor size={20} />}
            {option === "backend" && <HiMiniServerStack size={20} />}
            {option === "tools" && <FaTools size={20} />}
            <FaChevronDown size={16} />
          </div>
        </MenuButton>
        <MenuItems
          transition
          modal={false}
          className="absolute top-0 right-0 z-50 w-52 origin-top-right rounded-3xl bg-dark-grey-800 p-4.5 pt-5 text-sm text-white shadow-lg focus:outline-none transition ease-out data-closed:scale-90 data-closed:opacity-0 data-enter:duration-200 data-leave:duration-150"
        >
          <MenuItem>
            {({ close }) => (
              <button className="absolute right-2 top-3" onClick={close}>
                <RiCloseLine size={28} strokeWidth={0.765} />
              </button>
            )}
          </MenuItem>

          <span className="uppercase ml-0.5 tracking-wider text-white opacity-15 text-[12px] font-default">
            Stack
          </span>

          <div className="my-1.5">
            <MenuItem>
              <button
                onClick={() => setState("frontend")}
                className="flex w-full gap-1.5 items-center rounded-md px-2.5 py-3 data-focus:bg-white/10"
              >
                <MdScreenshotMonitor />
                Front-End
                {option === "frontend" && (
                  <FaCheck className="ml-auto opacity-20 size-2.5" />
                )}
              </button>
            </MenuItem>

            <MenuSeparator className="w-full my-1 mx-auto h-px bg-white opacity-10" />

            <MenuItem>
              <button
                onClick={() => setState("backend")}
                className="flex w-full gap-1.5 items-center rounded-md px-2.5 py-2 data-focus:bg-white/10"
              >
                <HiMiniServerStack />
                Back-End
                {option === "backend" && (
                  <FaCheck className="ml-auto opacity-20 size-2.5" />
                )}
              </button>
            </MenuItem>

            <MenuSeparator className="w-full my-1 mx-auto h-px bg-white opacity-10" />

            <MenuItem>
              <button
                onClick={() => setState("tools")}
                className="flex w-full gap-1.5 items-center rounded-md px-2.5 py-2 data-focus:bg-white/10"
              >
                <FaTools />
                Ferramentas
                {option === "tools" && (
                  <FaCheck
                    className="ml-auto opacity-20 size-2.5"
                    opacity={20}
                  />
                )}
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </div>
    </Menu>
  );
};

export default DropdownMenu;
