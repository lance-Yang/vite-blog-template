import { Layout, Typography } from 'antd'
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
const { Footer, Content } = Layout

import Header from './Header'
import LayoutRight from './LayoutRight'
import SpinLoading from '../Spinner'


const { Text } = Typography;

const LayoutPage = ({ children }: { children?: ReactNode }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <div className='layout_header'>
        <Header />
      </div>
      <div style={{overflow:'auto',height:'100%'}}>
        <Content className='layout_content'>
          <div className='content_left'>
            <React.Suspense fallback={<SpinLoading />}>
              <Outlet />
            </React.Suspense>
          </div>
          <div className='content_right'>
            <LayoutRight />
          </div>
        </Content>
      </div>
      {/* <Footer className='layout_footer'>
        <div >
          <Text type="secondary">Ant Design (secondary)</Text>
        </div>
      </Footer> */}
    </Layout>
  )
}
export default LayoutPage
