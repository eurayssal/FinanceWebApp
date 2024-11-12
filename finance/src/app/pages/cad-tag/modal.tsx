import React from 'react';
import { IModalContentProps } from '../../../components/modal/props';
import hookApi from '../../../hooks/api';
import Input from '../../../components/input';
import ButtonUi from '../../../components/button';
import ModalLayout from '../../../components/modal/layout';
import FormUi from '../../../components/form';

interface ModalAddTagProps extends IModalContentProps {
    onTagAdded?: () => void;
}

const ModalAddTag: React.FC<ModalAddTagProps> = (props) => {
    const api = hookApi();

    const [data, setData] = React.useState<any>('');

    const postTag = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await api.post('/api/tag/create', data);
            props.onClose && props.onClose();
            props.onTagAdded && props.onTagAdded();
        } catch (error) {
            console.error('Erro ao adicionar conta: ', error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    return (<ModalLayout {...props} title={'Adicionar tag'}>
        <FormUi onSubmitAsync={postTag}>
            <Input name='nome' label='Nome' type='text' onChange={handleInputChange} />
            <ButtonUi type='submit' text='Adicionar' />
        </FormUi>
    </ModalLayout>);
};

export default ModalAddTag;
