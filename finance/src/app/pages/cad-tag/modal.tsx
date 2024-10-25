import React, { useState } from 'react';
import { IModalContentProps } from '../../../components/modal/props';
import hookApi from '../../../hooks/api';
import Input from '../../../components/input';
import Button from '../../../components/button';
import ModalLayout from '../../../components/modal/layout';

export const dataTag = {
    nome: ''
};

export interface ITag {
    id: string;
    nome: string;
}

export interface ICadTag {
    nome: string;
}

interface ModalAddTagProps extends IModalContentProps {
    onTagAdded?: () => void;
}

const ModalAddTag: React.FC<ModalAddTagProps> = (props) => {
    const api = hookApi();

    const [newTag, setNewTag] = useState<ICadTag>(dataTag);

    const postTag = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await api.post('/api/tag/create', newTag);
            setNewTag(dataTag);
            props.onClose && props.onClose();
            props.onTagAdded && props.onTagAdded();
        } catch (error) {
            console.error('Erro ao adicionar conta: ', error);
        }
    };

    return (
        <ModalLayout {...props} onSubmitAsync={postTag} title={'Adicionar tag'}>
            <Input name='nome' label='Nome' type='text' value={newTag.nome}
                onChange={(e) => setNewTag({ ...newTag, nome: e.target.value })} />
            <Button type='submit' text='Adicionar' />
        </ModalLayout>
    );
};

export default ModalAddTag;
