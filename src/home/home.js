import React, {Component} from "react";
import Menu from 'antd/es/menu';
import Layout from 'antd/es/layout';

export default class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 'life',
        }
    }

    handleClick = e => {
        console.log('click', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        const {Header, Content, Sider} = Layout;
        return (
            <Layout>
                <Header className='header'>
                    <div className="logo"/>
                    <Menu onClick={this.handleClick} defaultSelectedKeys={[this.state.current]} mode='horizontal'
                          theme='dark' style={{lineHeight: '64px'}}>
                        <Menu.Item key="life"> Life </Menu.Item>
                        <Menu.Item key="champion"> Champion </Menu.Item>
                        <Menu.Item key="statistic"> Statistic </Menu.Item>
                        <Menu.Item key='setting'> Settings </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}