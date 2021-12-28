import React from 'react'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import * as S from './About.style'
import * as Icon from 'react-feather'

import computer from '@pub/computer.png'
import idCard from '@pub/idCard.png'
import video from '@pub/videoPlayer.png'

const AboutComponent: React.FC = () => {
    const skills = [
        'Kotlin',
        'Typescript',
        'Vue',
        'PostgreSQL',
        'MongoDB',
        'Prisma',
        'Fastify',
        'GraphQL',
    ]

    return (
        <S.AboutContainer id='about'>
            <S.InfoContainer>
                <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
                    <S.AboutHeader>About Me</S.AboutHeader>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                    <S.AboutDescription>
                        Hi! I'm Yujin, a developer of Endeavor from
                        California
                    </S.AboutDescription>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                    <S.AboutDescription>
                        I am a 15 year old developer who works on trying to improve,
                        as well as trying to innovate a little. My projects are all
                        using the most obscure languages just for fun.
                    </S.AboutDescription>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                    <S.AboutDescription>
                        I am currently using these launguages for my projects:
                    </S.AboutDescription>
                </ScrollAnimation>
                <S.SkillsContainer>
                    {skills.map((skill, index) => (
                        <ScrollAnimation
                            animateIn='animate__flipInX'
                            animateOnce={true}
                            key={index}
                        >
                            <S.SkillBox>
                                <Icon.ArrowRight style={{ marginRight: 5 }} />
                                {skill}
                            </S.SkillBox>
                        </ScrollAnimation>
                    ))}
                </S.SkillsContainer>
            </S.InfoContainer>
            <S.ImgBox style={{ width: 500, marginLeft: 700 }}>
                <img src={computer} alt='Computer' width={580} height={450} />
                <ParallaxProvider>
                    <S.ImgBox style={{ marginLeft: 300 }}>
                        <Parallax x={[-30, 30]}>
                            <img src={video} alt='Video Player' width={200} height={200} />
                        </Parallax>
                    </S.ImgBox>
                    <S.ImgBox style={{ marginTop: 200 }}>
                        <Parallax y={[-100, 100]}>
                            <img src={idCard} alt='ID Card' width={150} height={90} />
                        </Parallax>
                    </S.ImgBox>
                </ParallaxProvider>
            </S.ImgBox>
        </S.AboutContainer>
    )
}

export default AboutComponent