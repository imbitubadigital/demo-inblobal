import React from 'react';
import {useFormContext} from 'react-hook-form';
import {SelectProps} from './interfaces';
import * as S from './styles';

const SelectRegister: React.FC<SelectProps> = ({
  name,
  title,
  placeholderText,
  options,
  disabled,
  isTeam = false,
  ...res
}) => {
  const {register} = useFormContext();
  const listOptions = options?.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <S.Container id={name} {...res} isTeam={isTeam}>
      <S.Label htmlFor={name}>{title}</S.Label>
      <S.Select
        name={name}
        defaultValue=""
        ref={register}
        required
        disabled={disabled}>
        <option value="" disabled>
          {placeholderText}
        </option>
        {listOptions}
      </S.Select>
    </S.Container>
  );
};

export default SelectRegister;
