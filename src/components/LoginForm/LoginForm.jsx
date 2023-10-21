import { useForm } from 'react-hook-form';
import { loginFormSchema } from './LoginForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import Button from '@components/Button';
import PropTypes from 'prop-types';
import { InputTextController } from '@components/InputText';

const LoginForm = ({ onSubmit, isLoading }) => {
    const { control, handleSubmit, formState } = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const { isDirty } = formState;

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputTextController control={control} name="email" placeholder="Email" label="Email" />
            <InputTextController
                control={control}
                name="password"
                type="password"
                label="Mot de passe"
                placeholder="******"
            />
            <SubmitButton isDisabled={!isDirty} isLoading={isLoading} type="submit">
                Se connecter
            </SubmitButton>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
`;
const SubmitButton = styled(Button)`
    margin-top: 1rem;
`;

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

LoginForm.defaultProps = {
    onSubmit: () => {},
    isLoading: false,
};

export default LoginForm;
