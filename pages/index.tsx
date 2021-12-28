import React from 'react'

import Head from '@components/Head'
import Cursor from '@components/Cursor'
import SmoothScroll from '@components/SmoothScroll'
import Navbar from '@components/Navbar/Navbar'
import HomeComponent from '@components/Home/Home'
import AboutComponent from '@components/About/About'
import WorkComponent from '@components/Work/Work'
import ProjectsComponent from '@components/Projects/Projects'
import Footer from '@components/Footer/Footer'

import globalStyle from '@css/global.style'
import 'animate.css/animate.min.css'
import { ContentWrapper } from '@css/theme.config'
import { MouseContext } from '@lib/Mouse/MouseContext'

const Home: React.FC = () => {
    globalStyle()

    return (
        <ContentWrapper>
            <Navbar location='portfolio' />
            <Head
                title='Home'
                description="👋 I'm Yujin, a 15yo developer."
            />
            <Cursor />
            <SmoothScroll />
            <HomeComponent />
            <AboutComponent />
            <WorkComponent />
            <ProjectsComponent />
            <Footer />
        </ContentWrapper>
    )
}

export default Home