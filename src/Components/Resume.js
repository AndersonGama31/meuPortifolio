import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';
import { useTranslation } from 'react-i18next';
function Resume() {
    const { t } = useTranslation();
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={t('ResumeItem')} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={t('ResumeItem1')} />
                </div>
                <div className="resume-content">

                    <ResumeItem
                        year={'Ago 2022 - Out 2022'}
                        title={'Desenvolvedor Angular Júnior'}
                        subTitle={'SoulCode Academy'}
                        text={t('ResumeItem10')}
                    />
                    <ResumeItem
                        year={'Jan 2021 - Jan 2022'}
                        title={'Desenvolvimento de Expert Advisors e Indicadores'}
                        subTitle={'Freelancer'}
                        text={t('ResumeItem3')}
                    />
                    <ResumeItem
                        year={'Jan 2013 - Set 2020'}
                        title={'Técnico Eletrônico Pleno'}
                        subTitle={'M.Shimizu'}
                        text={t('ResumeItem2')}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={t('ResumeItem4')} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'Jan 2022 - Dez 2025'}
                        title={t('ResumeItem5')}
                        subTitle={'UNOPAR'}
                        text={t('ResumeItem11')}
                    />
                    <ResumeItem
                        year={'Abr 2022 - Out 2022'}
                        title={"FullStack Web Development Bootcamp"}
                        subTitle={"SoulCode Academy"}
                        text={t('ResumeItem6')}
                    />
                    <ResumeItem
                        year={'Jan 2011 - dec 2012'}
                        title={t('ResumeItem7')}
                        subTitle={'Jorge Street'}
                        text={t('')}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume