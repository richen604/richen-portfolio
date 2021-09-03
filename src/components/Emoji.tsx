import React from 'react';

interface IEmojiProps {
  label?: string;
  symbol: string;
}

const Emoji: React.FunctionComponent<IEmojiProps> = ({
  label,
  symbol,
}: IEmojiProps) => (
  <span
    className="emoji"
    role="img"
    aria-label={label}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);

Emoji.defaultProps = {
  label: '',
};

export default Emoji;
