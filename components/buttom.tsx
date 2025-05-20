import { FC } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  text: string;
  onClick?: () => void;
  link?: string;
};

const Button: FC<ButtonProps> = ({ variant = 'primary', text, onClick, link }) => {
  const baseClasses = 'px-4 py-4 transition-colors duration-300 font-semibold';
  const variantClasses = variant === 'primary' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800';

  return link ? (
    <a href={link} className={`${baseClasses} ${variantClasses}`} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;