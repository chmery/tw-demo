import { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { OptionsList } from "./OptionsList";
import { useClickedOutside } from "../../hooks/useClickedOutside";

interface Props {
  options: string[];
  name: string;
  onSelect: (option: string) => void;
}

export const Select = ({ options, onSelect, name }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState("");

  const selectHandler = (option: string) => {
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
      <div className="px-4 py-4 gap-1 flex items-center justify-center border-default hover:bg-hover rounded-md cursor-pointer">
        <span className="text-grey-dark">{selected ? selected : name}</span>
        {isExpanded && <IoChevronUpSharp className="text-grey-dark" />}
        {!isExpanded && <IoChevronDownSharp className="text-grey-dark" />}
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
