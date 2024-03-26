import { useEffect, useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { OptionsList } from "./OptionsList";
import { useClickedOutside } from "../../hooks/useClickedOutside";
import { SelectOption } from "../../constants/constants";
import { useLocation } from "react-router-dom";
import { Button } from "../Button";

interface Props {
  options: SelectOption[];
  selectName: string;
  onSelect: (option: SelectOption) => void;
}

export const Select = ({ options, onSelect, selectName }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption>({
    text: "",
  });

  const { pathname } = useLocation();

  const selectHandler = (option: SelectOption) => {
    setSelectedOption(option);
    setIsExpanded(false);
    onSelect(option);
  };

  const selectRef = useClickedOutside<HTMLDivElement>(() =>
    setIsExpanded(false)
  );

  useEffect(() => {
    setSelectedOption({ text: "" });
  }, [pathname]);

  return (
    <div
      className="flex flex-col items-center relative whitespace-nowrap"
      onClick={() => setIsExpanded(!isExpanded)}
      ref={selectRef}
    >
      <Button className="text-grey-dark px-4 py-4 flex gap-1 items-center">
        {selectedOption.text ? selectedOption.text : selectName}
        {isExpanded && <IoChevronUpSharp />}
        {!isExpanded && <IoChevronDownSharp />}
      </Button>
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
