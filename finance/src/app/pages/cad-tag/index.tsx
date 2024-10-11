import React, { useEffect } from 'react';
import hookApi from '../../../hooks/api'
import AppLayout from '../../_layout'
import ButtonModal from '../../../components/button-modal';
import ModalAddTag from './modal';
import { FaPlus } from "react-icons/fa6";
import DisplayFlex from '../../../components/display/display-flex';
import Button from '../../../components/button';

export interface ICadTag {
    id: string;
    nome: string;
}

const CadTagView = () => {
    const api = hookApi();

    const [tags, setTags] = React.useState<Array<ICadTag>>([]);

    const getTags = async () => {
        try {
            const response = await api.get('/api/tag')
            setTags(response.data);
        } catch (error) {
            console.error('Erro ao obter tags: ', error);
        }
    }

    const excluirCartao = async (tag: ICadTag) => {
        try {
            await api.delete(`/api/tag/delete/${tag.id}`);
            getTags();
        } catch (error) {
            console.error('Erro ao excluir conta: ', error);
        }
    }

    useEffect(() => {
        getTags();
    }, [getTags, tags]);

    return (<AppLayout>
        {tags.map((tag, index) => (<DisplayFlex key={index}>
            <li>{tag.nome}</li>
            <Button text='Editar' />
            <Button text='Excluir' onClick={() => excluirCartao(tag)} />
        </DisplayFlex>))}
        <ButtonModal modal={ModalAddTag} titleModal='Adicionar tag'
            text='Acicionar' icon={FaPlus} />

    </AppLayout>)
}

export default CadTagView