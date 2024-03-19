import { IoCheckmarkSharp } from "react-icons/io5";

interface Props {
  options: string[];
  onSelect: (option: string) => void;
  selected: string;
}

export const OptionsList = ({ options, onSelect, selected }: Props) => {
  return (
    <div className="border-default rounded-md p-1 absolute top-12 bg-[#ffff]">
      {options.map((option) => {
        const isOptionSelected = option === selected;

        return (
          <div
            className="rounded-md hover:bg-hover py-1 px-8 cursor-pointer relative"
            onClick={() => onSelect(option)}
            key={option}
          >
            {isOptionSelected && (
              <IoCheckmarkSharp className="absolute top-0 bottom-0 left-2 my-auto" />
            )}
            <span>{option}</span>
          </div>
        );
      })}
    </div>
  );
};
