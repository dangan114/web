import React, { Component } from 'react'
import './styles.css'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { Menu, Drawer } from 'antd';

const breakpoint = 600

function MainMenu() {
    const state = {
        isOpenDrawer: false
    }

    const onShowDrawer = () => {
        this.setState({ isOpenDrawer: true })
    }

    const onCloseDrawer = () => {
        this.setState({ isOpenDrawer: false })
    }

    const buildMenu = (isMobile) => (
        <Menu mode={`${isMobile ? 'inline' : 'horizontal'}`} className="menu">
            <Menu.Item className="menu-item">
                <Link to="/Home">HOME</Link>
            </Menu.Item>
            <Menu.Item className="menu-item">
                <Link to="/About">ABOUT</Link>
            </Menu.Item>
            <Menu.Item className="menu-item">
                <Link to="/Contact">CONTACT</Link>
            </Menu.Item>
        </Menu>
    )

    return (
        <div className="menu-container">
            <MediaQuery minWidth={breakpoint + 1}>
                {this.buildMenu(false)}
            </MediaQuery>

            <MediaQuery maxWidth={breakpoint}>
                <div className="drawer-handle" onClick={this.onShowDrawer}>
                    <i className="fas fa-bars"/>
                </div>
                <Drawer
                    placement='left'
                    closable={false}
                    onClose={this.onCloseDrawer}
                    visible={this.state.isOpenDrawer}
                >
                    {this.buildMenu(true)}
                </Drawer>
            </MediaQuery>
        </div>
    )
    
}

export default MainMenu