import { forwardRef } from 'react';

type Props = {
  isDisabled: boolean;
};

const CopyButton = forwardRef(
  ({ isDisabled }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const handleCopyText = () => {
      if (!navigator) return;
      if (ref !== null && typeof ref !== 'function') {
        navigator.clipboard.writeText(ref?.current?.innerText || '');
      }
    };

    // TODO: add success state

    return (
      <button
        onClick={handleCopyText}
        disabled={isDisabled}
        className="bg-blue-800 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors disabled:bg-gray-600"
      >
        Copy text
      </button>
    );
  }
);

export default CopyButton;
