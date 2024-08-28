// hooks/useClipboard.ts
import { useState, useEffect } from 'react';

export function useClipboard() {
  const [canCopy, setCanCopy] = useState(false);

  useEffect(() => {
    setCanCopy(
      !!(
        typeof navigator !== 'undefined' &&
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === 'function'
      )
    );
  }, []);

  const copyToClipboard = (text: string) => {
    if (canCopy) {
      navigator.clipboard.writeText(text)
        .then(() => console.log('Copied to clipboard'))
        .catch(err => console.error('Failed to copy text: ', err));
    }
  };

  return { canCopy, copyToClipboard };
}