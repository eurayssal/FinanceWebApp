import React, { useState } from 'react'
import { IModalContentProps } from '../../../components/modal/props'
import Form from '../../../components/form'
import hookApi from '../../../hooks/api'
import Input from '../../../components/input'
import Button from '../../../components/button'

const dataTag = {
    nome: ''
}

export interface ITag {
    id: string,
    nome: string;
}

export interface ICadTag {
    nome: string;
}

const ModalAddTag: React.FC<IModalContentProps> = ({
    onClose
}) => {
    const api = hookApi();

    const [newTag, setNewTag] = useState<ICadTag>(dataTag)

    const postTag = async () => {
        try {
            await api.post('/api/tag/create', newTag);
            setNewTag(dataTag);
            onClose()
        } catch (error) {
            console.error('Erro ao adicionar conta: ', error);
        }
    }

    return (<Form onSubmitAsync={postTag}>
        <Input name='nome' label='Nome' type='text' value={newTag.nome} onChange={(e) => setNewTag({ ...newTag, nome: e.target.value })} />
        <Button type='submit' text='Adicionar' />
    </Form >)
}

export default ModalAddTag