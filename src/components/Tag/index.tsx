import { TagContainer } from './styles';

export type Props = {
  size?: 'small' | 'large';
  children: string;
};

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer className="tag" size={size}>
    {children}
  </TagContainer>
);

export default Tag;
