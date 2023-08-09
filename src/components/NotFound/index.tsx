// Style
import { FC } from 'react';
import { Wrap, Text } from './style'

// Interfaces
import { INotFoundProps } from 'src/interfaces/NotFound';

export const NotFound: FC<INotFoundProps> = ({ open, text }) => {

    if (!open) {
        return <></>
    }

    return (
        <Wrap>
            <Text>
                {text}
            </Text>
        </Wrap >
    )
};