import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();
    return (
        <SkillsStyled>

            <Title title={'Hard Skills'} span={'my skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar
                        title={'CSS3'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'JAVASCRIPT'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'TYPESCRIPT'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'REACT JS'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'ANGULAR'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar
                        title={'MYSQL'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'JAVA'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'GIT'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'FIREBASE'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'SPRING BOOT'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'NEXTJS'}
                        width={'60%'}
                        text={'60%'}
                    />
                </div>

            </InnerLayout>
            <Title title={t('Skill')} span={'languages'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={t('Skill1')}
                        width={'100%'}
                        text={'100%'}
                    />
                    <ProgressBar
                        title={t('Skill2')}
                        width={'70%'}
                        text={'70%'}
                    />

                </div>

            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;