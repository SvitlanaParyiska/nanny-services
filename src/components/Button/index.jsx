import { ButtonStyle } from './Button.styled';

function Button({ type, padding, color, text, handleClick }) {
  return (
    <ButtonStyle
      type={type}
      $padding={padding}
      color={color}
      onClick={() => handleClick()}
    >
      {text}
    </ButtonStyle>
  );
}

export default Button;
