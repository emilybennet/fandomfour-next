import Link from "next/link";
import styled from "styled-components";

const Anchor = styled.a`
  background: ${props => props.theme.yellow};
  border-radius: 3px;
  color: ${props => props.theme.black};
  cursor: pointer;
  display: block;
  font-family: ${props => props.theme.poppins};
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: 3.2px;
  padding: 12px 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.15s;

  &:hover {
    background: ${props => props.theme.gold};
  }

  &[disabled] {
    background: transparent;
    border: 1px solid ${props => props.theme.yellow};
    color: ${props => props.theme.yellow};
    cursor: default;
  }

  &:not(:last-child) {
    margin-bottom: 2em;
    margin-right: 2em;
  }
`;

const Button = ({ text, url = false, ...props }) => {
  if (url)
    return (
      <Link href={url} passHref>
        <Anchor style={props.style}>{text}</Anchor>
      </Link>
    );

  return (
    <Anchor as="span" disabled {...props}>
      {text}
    </Anchor>
  );
};

export default Button;
