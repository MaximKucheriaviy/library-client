export const RFTtoStorage = (value: string): void => {
  window.localStorage.setItem("RFT", value);
};

export const getRFTfromStorage = (): string | null => {
  const value = window.localStorage.getItem("RFT");
  return value;
};
