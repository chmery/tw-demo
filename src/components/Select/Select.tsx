import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { OptionsList } from "./OptionsList";
import { useClickedOutside } from "../../hooks/useClickedOutside";

interface SelectProps {
  options: string[] | number[];
  onSelect: (option: string | number) => void;
}

export const Select = ({ options, onSelect }: SelectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const selectHandler = (option: number | string) => {
    setSelected(option);
    setIsExpanded(false);
    onSelect(option);
  };

  const selectRef = useClickedOutside<HTMLDivElement>(() =>
    setIsExpanded(false)
  );

  return (
    <div
      className="flex flex-col items-center relative"
      onClick={() => setIsExpanded(!isExpanded)}
      ref={selectRef}
    >
      <div className="w-16 py-2 gap-1 flex items-center justify-center border-default hover:bg-hover rounded-md cursor-pointer">
        <span>{selected}</span>
        <IoChevronDownSharp className="text-grey-dark" />
      </div>
      {isExpanded && (
        <OptionsList
          options={options}
          onSelect={selectHandler}
          selected={selected}
        />
      )}
    </div>
  );
};
