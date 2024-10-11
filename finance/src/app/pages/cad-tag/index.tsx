import React, { useEffect } from 'react';
import hookApi from '../../../hooks/api'
import AppLayout from '../../_layout'
import ButtonModal from '../../../components/button-modal';
import ModalAddTag from './modal';
import { FaPlus } from "react-icons/fa6";

export interface ICadConta {
    id: string;
    nome: string;
}

const CadTagView = () => {
    const api = hookApi();

    const [tags, setTags] = React.useState<Array<ICadConta>>([]);

    const getTags = async () => {
        try {
            const response = await api.get('/api/tag')
            setTags(response.data);
        } catch (error) {
            console.error('Erro ao obter tags: ', error);
        }
    }

    useEffect(() => {
        getTags();
    }, []);

    return (<AppLayout>
        {tags.map((tag, index) => (
            <li key={index}>{tag.nome}</li>
        ))}
        <ButtonModal modal={ModalAddTag} titleModal='Adicionar tag'
            text='Acicionar' icon={FaPlus} />

    </AppLayout>)
}

export default CadTagView