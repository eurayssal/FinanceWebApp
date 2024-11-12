import React, { useEffect } from 'react';
import hookApi from '../../../hooks/api';
import AppLayout from '../../_layout';
import ButtonModalUi from '../../../components/button-modal';
import ModalAddTag from './modal';
import { FaPlus, FaPen, FaTrash } from "react-icons/fa6";
import DisplayFlex from '../../../components/display/display-flex';
import ButtonUi from '../../../components/button';
import ModalEditTag from './modal-edit';
import { CardJss, SectionJss } from './jss';
import DropdownUi from '../../../components/dropdown';
import { useNavigate } from 'react-router-dom';

export interface ICadTagModel {
    id: string;
    nome: string;
}

const CadTagView = () => {
    const api = hookApi();

    const [data, setData] = React.useState<Array<ICadTagModel>>([])

    const getTags = async () => {
        try {
            const response = await api.get('/api/tag');
            setData(response.data);
        } catch (error) {
            console.error('Erro ao obter tags: ', error);
        }
    };

    const excluirTag = async (tag: ICadTagModel) => {
        try {
            await api.delete(`/api/tag/delete/${tag.id}`);
            getTags();
        } catch (error) {
            console.error('Erro ao excluir conta: ', error);
        }
    };

    useEffect(() => {
        getTags();
    }, []);

    const navigate = useNavigate();

    return (<AppLayout>
        <SectionJss>
            <DisplayFlex gap={16} flexDirection='column'>

                <DisplayFlex justifyContent='flex-end'>
                    <ButtonModalUi text="Adicionar" icon={FaPlus}
                        modal={(props) => <ModalAddTag {...props} onTagAdded={getTags} />} />
                </DisplayFlex>

                <DisplayFlex gap={4} flexDirection='column'>
                    {data.map((item, index) => (
                        <CardJss>
                            <DisplayFlex key={index} alignItems='center' justifyContent='space-between' gap={16}>
                                <p>{item.nome}</p>
                                <DisplayFlex gap={8}>
                                    <ButtonModalUi variant='icon' icon={FaPen}
                                        modal={(props) => (<ModalEditTag {...props} tag={item} onTagUpdated={getTags} />)} />
                                    <ButtonUi variant='icon' icon={FaTrash} onClick={() => excluirTag(item)} />
                                </DisplayFlex>
                            </DisplayFlex>
                        </CardJss>
                    ))}
                </DisplayFlex>

            </DisplayFlex>

            <div style={{ height: '150vh' }}></div>
            <DropdownUi options={[{ title: 'dasnjud', onClick: () => navigate('/app/home') },
            { title: 'dasnjud', onClick: () => navigate('/app/home') }
            ]} />
        </SectionJss>
    </AppLayout>);
};

export default CadTagView;
