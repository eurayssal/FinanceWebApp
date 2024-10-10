import React from 'react'
import Button from '../components/button'
import SiteLayout from './_layout'
import { useNavigate } from 'react-router-dom';

const LandingPageView: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate('/entrar');

    return (<SiteLayout>
        <Button text='Entrar' onClick={handleClick} />
        <Button text='Registrar' variant='secondary' />
    </SiteLayout>)
}

export default LandingPageView