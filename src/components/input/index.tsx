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
import { ChangeEventHandler } from 'react';
import Paragraph from '../paragraph';
import { colors, cormorantLight } from '@/constants';
import { Schema } from 'yup';

export type InputProps = {
  type?: string;
  placeholder?: string;
  fontFamily?: string;
  name?: string;
  labelDescription?: string;
  checked?: boolean;
  size?: number;
  rightAddons?: StaticImageData;
  onClick?: (id?: string) => void;
  value?: string;
  onChange?: (value: string, name: string) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  error?: string | null;
  validation?: Schema;
  schemaName?: string;
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
  value,
  onChange,
  onFocus,
  error,
}: InputProps) {
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    onChange?.(e.target.value, e.target.name);
  };

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
          {labelDescription && (
            <Label className={fontFamily} htmlFor={name}>
              {labelDescription}
            </Label>
          )}
        </CheckboxContainer>
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
          onChange={handleChange}
          value={value}
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
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        isError={Boolean(error)}
      />
      {rightAddons && <RightAddons src={rightAddons} alt={''} />}
      {error && (
        <Paragraph
          size={16}
          fontFamily={cormorantLight.className}
          color={colors.error}
        >
          {error}
        </Paragraph>
      )}
    </InputContainer>
  );
}
