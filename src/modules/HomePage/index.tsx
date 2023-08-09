// Style
import { Wrap, Search } from './style'

// Components
import { Button, Input, UserBlock, NotFound } from '../../components'

// Form
import { useForm, SubmitHandler } from "react-hook-form";

// Hooks
import { FC, useState } from 'react'

// Interfaces
import { INotFound, TUserInfo, IUserInfoSuccess, TFormValues } from '../../interfaces/HomePage'

export const HomePage: FC = () => {

    // States
    const [userInfo, setUserInfo] = useState<IUserInfoSuccess>({ login: '', bio: '', avatar_url: '', isError: false });
    const [notFound, setNoFound] = useState<INotFound>({ open: false, text: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Form
    const form = useForm<TFormValues>();
    const { handleSubmit, register } = form;

    // Request to Github API
    const getUser = async ({ search }: TFormValues) => {
        const response = await fetch(`https://api.github.com/users/${search}`);
        return await response.json()
    };

    // Submit Form
    const onSubmit: SubmitHandler<TFormValues> = async ({ search }: TFormValues) => {
        setIsLoading(true)
        try {
            const data: TUserInfo = await getUser({ search })
            if (data.isError) {
                setNoFound({ open: true, text: 'No such account exists. Try a different user name.' })
                setUserInfo({ login: '', bio: '', avatar_url: '', isError: false })
            } else {
                setUserInfo(data)
            }
        } catch (e) {
            setNoFound({ open: false, text: 'Something went wrong, try later.' })
            console.log('e', e)
        }
        setIsLoading(false)
    };

    const handleChange = () => {
        setNoFound({ open: false, text: '' })
    };

    return (
        <Wrap>
            <Search onChange={handleChange} onSubmit={handleSubmit(onSubmit)}>
                <Input isLoading={isLoading} name="search" register={register} rules={{ required: 'You must enter your user name', minLength: 1 }} />
                <Button isLoading={isLoading} text='Search' />
            </Search>
            <UserBlock userInfo={userInfo} />
            <NotFound open={notFound.open} text={notFound.text} />
        </Wrap>
    );
};