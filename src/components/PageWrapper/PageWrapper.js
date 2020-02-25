import React from 'react'
import { Layout } from 'antd'
const { Content } = Layout;

function PageWrapper({ children }) {
    return (
        <Layout>
            <Content>
                {children}
            </Content>
        </Layout>
    )
}

export default PageWrapper