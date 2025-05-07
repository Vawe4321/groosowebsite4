import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'


const DynamicTermsAndConditionsBody = dynamic(() => import('../../components/termsandconditions/termsandconditions'))

const TermsAndConditions: NextPageWithLayout = () => {
    return (
        <>
            <DynamicTermsAndConditionsBody />
        </>
    )
}

TermsAndConditions.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default TermsAndConditions
