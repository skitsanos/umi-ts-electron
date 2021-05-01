import React from 'react';
import {Layout} from 'antd';
import AppTitle from '@/components/AppTitle';
import {ApiOutlined} from '@ant-design/icons';

const {Header, Content} = Layout;
export default () => <Layout className={'app'}>
    <Header className={'app-header'}>
        <AppTitle icon={<ApiOutlined/>}
                  title={'ACME APP'}
                  subTitle={'The app that does it all'}/>
    </Header>
    <Content>
        It works, like really:)
        Electron <span id="electron-version"></span>
    </Content>
</Layout>;