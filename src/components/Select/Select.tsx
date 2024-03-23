import { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { OptionsList } from "./OptionsList";
import { useClickedOutside } from "../../hooks/useClickedOutside";
import { SelectOption } from "../../constants/constants";

interface Props {
  options: SelectOption[];
  selectText: string;
  onSelect: (option: SelectOption) => void;
}

export const Select = ({ options, onSelect, selectText }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption>({
    text: "",
  });

  const selectHandler = (option: SelectOption) => {
    setSelectedOption(option);
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
      <div className="px-4 py-4 gap-1 flex items-center justify-center border-default hover:bg-hover rounded-md cursor-pointer whitespace-nowrap">
        <span className="text-grey-dark ">
          {selectedOption.text ? selectedOption.text : selectText}
        </span>
        {isExpanded && <IoChevronUpSharp className="text-grey-dark" />}
        {!isExpanded && <IoChevronDownSharp className="text-grey-dark" />}
      </div>
      {isExpanded && (
        <OptionsList
          options={options}
          onSelect={selectHandler}
          selectedOption={selectedOption}
        />
      )}
    </div>
  );
};
