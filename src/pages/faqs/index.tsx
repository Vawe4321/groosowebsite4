import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'


const DynamicFaqBody = dynamic(() => import('../../components/faq/faq'))

const Faq: NextPageWithLayout = () => {
    return (
        <>
            <DynamicFaqBody />
        </>
    )
}

Faq.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Faq
