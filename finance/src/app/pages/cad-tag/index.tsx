import React, { useEffect } from 'react';
import hookApi from '../../../hooks/api';
import AppLayout from '../../_layout';
import ButtonModalUi from '../../../components/button-modal';
import ModalAddTag, { dataTag, ITag } from './modal';
import { FaPlus } from "react-icons/fa6";
import DisplayFlex from '../../../components/display/display-flex';
import Button from '../../../components/button';
import ModalLayout from '../../../components/modal/layout';
import Input from '../../../components/input';
import ModalEditTag from './modal-edit';

export interface ICadTag {
    id: string;
    nome: string;
}

const CadTagView = () => {
    const api = hookApi();

    const [open, setOpen] = React.useState(false);
    const [tags, setTags] = React.useState<Array<ICadTag>>([]);
    const [newTag, setNewTag] = React.useState(dataTag);
    const [editag, setEditTag] = React.useState<ICadTag | null>(null);

    const getTags = async () => {
        try {
            const response = await api.get('/api/tag');
            setTags(response.data);
        } catch (error) {
            console.error('Erro ao obter tags: ', error);
        }
    };

    const excluirTag = async (tag: ICadTag) => {
        try {
            await api.delete(`/api/tag/delete/${tag.id}`);
            getTags();
        } catch (error) {
            console.error('Erro ao excluir conta: ', error);
        }
    };

    const editarTag = async (): Promise<void> => {
        try { 
            if (editag && editag.id) {
                console.log('Dados enviados para atualização:', { id: editag.id, nome: newTag.nome });

                const response = await api.put<ICadTag>(
                    `api/tag/update/${editag.id}`,
                    {id: editag.id,
                         nome: newTag.nome }
                );
    
                setTags((prev) => {
                    const updatedTags = prev.map((t) =>
                        t.id === response.data.id ? response.data : t
                    );
                    return updatedTags;
                });
    
                setEditTag(null);
                setNewTag(dataTag);
                setOpen(false);
                getTags();
            } else {
                console.error('Edit tag ID is null:', editag);
            }
        } catch (error) {
            console.log('Erro ao editar tag: ', error);
        }
    };
    
    const handleEditClick = (tag: ICadTag) => {
        setEditTag(tag);
        setNewTag({nome: tag.nome});
        setOpen(true);
    };

    useEffect(() => {
        getTags();
    }, []);

    return (<AppLayout>
                        {tags.map((tag, index) => (
                <DisplayFlex key={index}>
                    <li>{tag.nome}</li>
                    <ButtonModalUi titleModal="Editar tag" 
                        text="Editar"
                        modal={(props) => (
                            <ModalEditTag 
                                {...props} 
                                tag={tag} 
                                onTagUpdated={getTags} />
                        )}
                    />
            <Button text="Excluir" onClick={() => excluirTag(tag)} />
                </DisplayFlex>
            ))}

            
            <ButtonModalUi titleModal="Adicionar tag" text="Adicionar" icon={FaPlus} 
            modal={(props) => <ModalAddTag {...props} onTagAdded={getTags} />} />
        </AppLayout>);
};

export default CadTagView;
