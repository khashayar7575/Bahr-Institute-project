const charLimitter = (text: string, charCount: number) => {
  const formattedText =
    text.slice(0, charCount) + (text.length > charCount ? " . . . " : "");
  return formattedText;
};

export { charLimitter };
