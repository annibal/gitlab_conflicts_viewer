import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import { Breadcrumb } from 'antd'

function MergeRequestsPage() {
    return (
        <PageWrapper title="Bill">
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Root</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
            </div>
        </PageWrapper>
    )
}

export default MergeRequestsPage