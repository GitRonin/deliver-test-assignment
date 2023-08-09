// Styles
import { Wrap, Avatar, Bio, Link, UserName, Info } from './style'

// Hooks
import React, { useState, useEffect, FC } from 'react'

// Interfaces
import { IUserBlockProps } from 'src/interfaces/UserBlock';
import { IUserInfoSuccess } from 'src/interfaces/HomePage';

export const UserBlock: FC<IUserBlockProps> = ({ userInfo }) => {
    // States
    const [info, setInfo] = useState<IUserInfoSuccess>({ login: '', bio: '', avatar_url: '', isError: false });

    useEffect(() => {
        setInfo(userInfo)
    }, [userInfo])

    if (!info.login) {
        return <></>;
    }

    return (
        <Wrap>
            <Avatar src={info.avatar_url} alt='img' />
            <Info>
                <UserName>{info.login}</UserName>
                <Bio>{info.bio}</Bio>
                <Link href={`https://github.com/${info.login}`} target={'_blank'}>{`https://github.com/${info.login}`}</Link>
            </Info>
        </Wrap>
    );
};