export interface SelectOption {
  text: string;
  order?: string;
}

export const PER_PAGE_OPTIONS: SelectOption[] = [
  { text: "5" },
  { text: "10" },
  { text: "20" },
];

export const SORT_OPTIONS: SelectOption[] = [
  { text: "Price asc.", order: "asc" },
  { text: "Price desc.", order: "desc" },
];
