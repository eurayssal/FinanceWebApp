import React, { useEffect, useState } from 'react';
import { IModalContentProps } from '../../../components/modal/props';
import hookApi from '../../../hooks/api';
import Input from '../../../components/input';
import Button from '../../../components/button';
import ModalLayout from '../../../components/modal/layout';
import FormUi from '../../../components/form';

export interface ICadTag {
    id: string;
    nome: string;
}

interface ModalEditTagProps extends IModalContentProps {
    tag: ICadTag;
    onTagUpdated?: () => void;
}

const ModalEditTag: React.FC<ModalEditTagProps> = ({ tag, onTagUpdated, ...props }) => {
    const api = hookApi();
    
    const [updatedTag, setUpdatedTag] = useState<ICadTag>(tag);

    useEffect(() => {
        setUpdatedTag(tag);
    }, [tag]);

    const putTag = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await api.put(`/api/tag/update/${updatedTag.id}`, updatedTag);
            onTagUpdated && onTagUpdated();
            props.onClose && props.onClose();
        } catch (error) {
            console.error('Erro ao editar tag: ', error);
        }
    };

    return (<ModalLayout {...props}  title={'Editar tag'}>
        <FormUi onSubmitAsync={putTag}>

            <Input name='nome' label='Nome' type='text' value={updatedTag.nome}
                onChange={(e) => setUpdatedTag({ ...updatedTag, nome: e.target.value })} />
            <Button type='submit' text='Salvar' />
                </FormUi>
        </ModalLayout>);
};

export default ModalEditTag;
