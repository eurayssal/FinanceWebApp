import React from 'react'
import SiteLayout from '../_layout'
import { ImgBanner1Jss, BannerJss, CtaJss } from './jss'
import { FaArrowRight } from 'react-icons/fa'
import DisplayFlex from '../../components/display/display-flex'
import Banner1 from '../../assets/banner-1.svg';

const LandingPageView: React.FC = () => {
    return (<SiteLayout>
        <BannerJss>
            <DisplayFlex flexDirection='column' alignItems='flex-start'
                justifyContent='center' width={400} height={300} gap={32}>
                <DisplayFlex flexDirection='column'>
                    <h1>Organize suas finanças de forma fácil e rápida</h1>
                    <p>Tenha controle total dos seus gastos e aumente sua economia sem complicação.</p>
                </DisplayFlex>
                <CtaJss>Testar grátis<FaArrowRight /></CtaJss>
            </DisplayFlex>
            <ImgBanner1Jss src={Banner1} />
        </BannerJss>
    </SiteLayout>)
}

export default LandingPageView