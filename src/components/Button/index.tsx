// Style
import { Wrap, StyledButton, Loader } from './style'

// Interfaces
import { IButtonProps } from '../../interfaces/Button'
import { FC } from 'react';

export const Button: FC<IButtonProps> = ({ text = '', isLoading = false }) => {
    return (
        <Wrap>
            <StyledButton title="Search" disabled={isLoading} type='submit'>{isLoading ? <Loader /> : text}</StyledButton>
        </Wrap>
    );
};