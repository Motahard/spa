import {
  Input,
  Label,
  InputContainer,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from './styles';

type Props = {
  type?: string;
  placeholder?: string;
  fontFamily?: string;
  isTextarea?: boolean;
  name?: string;
  labelDescription?: string;
  checked?: boolean;
  onClick?: (id?: string) => void;
};

export function InputComponent({
  placeholder,
  fontFamily,
  type = 'text',
  isTextarea = false,
  name,
  labelDescription,
  checked,
  onClick,
}: Props) {
  if (isTextarea) return null;

  if (type === 'checkbox') {
    return (
      <InputContainer>
        <CheckboxContainer>
          <HiddenCheckbox checked={checked} />
          <StyledCheckbox checked={checked} onClick={() => onClick?.(name)}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
        {labelDescription && (
          <Label className={fontFamily} htmlFor={name}>
            {labelDescription}
          </Label>
        )}
      </InputContainer>
    );
  }

  return (
    <InputContainer>
      <Input
        type={type}
        placeholder={placeholder}
        className={fontFamily}
        name={name}
      />
    </InputContainer>
  );
}
