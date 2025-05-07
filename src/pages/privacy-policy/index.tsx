import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'


const DynamicPrivacyPolicyBody = dynamic(() => import('../../components/privacy-policy/privacy-policy'))

const PrivacyPolicy: NextPageWithLayout = () => {
    return (
        <>
            <DynamicPrivacyPolicyBody />
        </>
    )
}

PrivacyPolicy.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default PrivacyPolicy
