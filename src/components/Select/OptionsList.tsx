import { IoCheckmarkSharp } from "react-icons/io5";
import { SelectOption } from "../../constants/constants";
import { IoMdArrowDown } from "react-icons/io";

interface Props {
  options: SelectOption[];
  onSelect: (option: SelectOption) => void;
  selectedOption: SelectOption;
}

export const OptionsList = ({ options, onSelect, selectedOption }: Props) => {
  return (
    <ul className="border-default rounded-md p-1 absolute top-12 sm:top-16 bg-[#ffff]">
      {options.map((option) => {
        const isOptionSelected =
          option.text === selectedOption.text &&
          option.order === selectedOption.order;
        return (
          <li
            className="flex items-center gap-x-2 rounded-md hover:bg-grey-hover py-1 px-8 cursor-pointer relative whitespace-nowrap"
            onClick={() => onSelect(option)}
            key={`${option.text}${option.order && option.order}`}
          >
            {isOptionSelected && (
              <IoCheckmarkSharp className="absolute top-0 bottom-0 left-2 my-auto" />
            )}
            {option.text}
            {option.order && (
              <IoMdArrowDown
                className={option.order === "asc" ? "rotate-180" : ""}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
