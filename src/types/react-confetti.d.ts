declare module 'react-confetti' {
  import * as React from 'react';

  interface ConfettiProps {
    width?: number;
    height?: number;
    numberOfPieces?: number;
    recycle?: boolean;
    // allow other props
    [key: string]: any;
  }

  const Confetti: React.FC<ConfettiProps>;
  export default Confetti;
}
