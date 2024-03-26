import { IoCheckmarkSharp } from "react-icons/io5";
import { SelectOption } from "../../constants/constants";

interface Props {
  options: SelectOption[];
  onSelect: (option: SelectOption) => void;
  selectedOption: SelectOption;
}

export const OptionsList = ({ options, onSelect, selectedOption }: Props) => {
  return (
    <ul className="border-default rounded-md p-1 absolute top-16 bg-[#ffff]">
      {options.map((option) => {
        const isOptionSelected = option.text === selectedOption.text;

        return (
          <li
            className="flex flex-col items-center rounded-md hover:bg-grey-hover py-1 px-8 cursor-pointer relative whitespace-nowrap"
            onClick={() => onSelect(option)}
            key={option.text}
          >
            {isOptionSelected && (
              <IoCheckmarkSharp className="absolute top-0 bottom-0 left-2 my-auto" />
            )}
            {option.text}
          </li>
        );
      })}
    </ul>
  );
};
