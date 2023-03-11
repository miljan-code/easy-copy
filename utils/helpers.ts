export const putCursorAtTheEndOf = (ref: React.RefObject<HTMLDivElement>) => {
  ref.current?.focus();

  const range = document.createRange();
  range.selectNodeContents(ref.current!);
  range.collapse(false);

  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
};

export const preventRichText = (
  e: ClipboardEvent,
  ref: React.RefObject<HTMLDivElement>
) => {
  e.preventDefault();
  const plainText = e.clipboardData?.getData('text/plain') || '';
  ref.current!.innerText = plainText;
  putCursorAtTheEndOf(ref);
};
