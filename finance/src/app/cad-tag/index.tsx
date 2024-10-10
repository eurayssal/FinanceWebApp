import React from 'react';
import hookApi from '../../hooks/api'
import AppLayout from '../_layout'
import ModalUi from '../../components/modal';

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

    React.useEffect(() => {
        getTags();
    }, []);

    return (<AppLayout>
        {tags.map((tag, index) => (
            <li key={index}>{tag.nome}</li>
        ))}

    </AppLayout>)
}

export default CadTagView