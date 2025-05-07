import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'


const DynamicAboutUs    = dynamic(() => import('../../components/aboutUs/aboutUs'))

const   About: NextPageWithLayout = () => {
    return (
        <>
            <DynamicAboutUs />
        </>
    )
}

About.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default About
