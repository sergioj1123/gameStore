import { ButtonContainer, ButtonLink } from './styles';

export type Props = {
  type: 'button' | 'link' | 'submit';
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

const Button = ({
  type,
  children,
  title,
  to,
  onClick,
  variant = 'primary',
  disabled,
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    );
  }
  return (
    <ButtonLink type="link" title={title} to={to as string}>
      {children}
    </ButtonLink>
  );
};
export default Button;
