// Style
import { Wrap, StyledInput } from './style'

// Interfaces
import { IInputProps } from '../../interfaces/Input'
import { FC } from 'react';

export const Input: FC<IInputProps> = ({ rules, name, register, isLoading = false }) => {
    return (
        <Wrap>
            <StyledInput title="Enter user name" disabled={isLoading} {...register(name, rules)} />
        </Wrap>
    );
};