import { ButtonContainer, ButtonLink } from './styles';

export type Props = {
  type: 'button' | 'link' | 'submit';
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
  variant?: 'primary' | 'secondary';
};

const Button = ({
  type,
  children,
  title,
  to,
  onClick,
  variant = 'primary',
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
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
