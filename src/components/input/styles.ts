import InputMask from 'react-input-mask';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

import { colors, cormorant } from '@/constants';

type InputProps = {
  size: number;
  rightAddons?: StaticImageData;
  isError?: boolean;
};

export const Input = styled(InputMask)<InputProps>`
  width: 100%;
  padding: 24px;
  font-size: ${(props) => props.size}px;
  color: ${colors.charCoal};
  border: 1px solid ${(props) => (props.isError ? colors.error : colors.border)};
  ${(props) => props.rightAddons && 'padding-right: 45px;'}
  border-radius: 5px;
  flex: 1 0 auto;
  &:focus {
    outline: none;
    border: 1px solid
      ${(props) => (props.isError ? colors.error : colors.charCoal)};
  }
`;

export const TextArea = styled.textarea<InputProps>`
  width: 100%;
  ${cormorant.style};
  padding: 24px;
  font-size: ${(props) => props.size}px;
  color: ${colors.charCoal};
  border: 1px solid ${colors.border};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid ${colors.charCoal};
  }
`;

export const Label = styled.label`
  font-size: 18px;
  margin-left: 16px;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  display: flex;
  align-content: stretch;
  flex-direction: column;
  & > p {
    position: absolute;
    margin-left: 16px;
    top: 10%;
    right: 5%;
  }
`;

export const RightAddons = styled(Image)`
  position: absolute;
  width: 30px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  position: absolute;
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;

export const StyledCheckbox = styled.div<{ checked?: boolean }>`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${(props) => (props.checked ? colors.pinkKisses : colors.white)};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;
  border: 1px solid
    ${(props) => (props.checked ? colors.white : colors.charCoal)};
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;
