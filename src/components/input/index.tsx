import { StaticImageData } from 'next/image';
import {
  Input,
  Label,
  InputContainer,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  TextArea,
  RightAddons,
} from './styles';

type Props = {
  type?: string;
  placeholder?: string;
  fontFamily?: string;
  name?: string;
  labelDescription?: string;
  checked?: boolean;
  size?: number;
  rightAddons?: StaticImageData;
  onClick?: (id?: string) => void;
};

export function InputComponent({
  placeholder,
  fontFamily,
  type = 'text',
  name,
  labelDescription,
  checked,
  size = 24,
  onClick,
  rightAddons,
}: Props) {
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

  if (type === 'textarea') {
    return (
      <InputContainer>
        <TextArea
          placeholder={placeholder}
          className={fontFamily}
          name={name}
          size={size}
        />
      </InputContainer>
    );
  }

  return (
    <InputContainer>
      <Input
        type={type}
        placeholder={placeholder}
        className={fontFamily}
        rightAddons={rightAddons}
        name={name}
        size={size}
      />
      {rightAddons && <RightAddons src={rightAddons} alt={''} />}
    </InputContainer>
  );
}
