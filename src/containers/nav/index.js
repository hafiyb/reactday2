import React from 'react'
import './nav.css'

import MenuList from '../../components/menuList'
import MenuSection from '../../components/menuSection'

import Icon1 from '../../assets/images/icon_1.png'
import Icon2 from '../../assets/images/icon_2.png'
import Icon3 from '../../assets/images/icon_3.png'
import Icon4 from '../../assets/images/icon_4.png'
import Icon5 from '../../assets/images/icon_5.png'
import Icon6 from '../../assets/images/icon_6.png'
import Icon7 from '../../assets/images/icon_7.png'
import Icon8 from '../../assets/images/icon_8.png'
import Icon9 from '../../assets/images/icon_9.png'
import Icon10 from '../../assets/images/icon_10.png'
import Logo from '../../assets/images/shreklogo.png'


export default class Nav extends React.Component{
    render(){
        return(
            <nav>
                {/* <h1>Nav</h1>
                <div>
                    <MenuList icon={Icon1} title="Dashboard" noti=""/>
                    <MenuList icon={Icon2} title="Conversations" noti="1"/>
                    <MenuList icon={Icon3} title="Calendar" noti=""/>
                </div>
                <MenuSection sectionTitle="Recruitment">
                    <h4>Recruitment</h4>
                    <MenuList icon={Icon4} title="Jobs" noti=""/>
                    <MenuList icon={Icon5} title="Candidates" noti=""/>
                    <MenuList icon={Icon6} title="Career Site" noti=""/>
                </MenuSection>
                <MenuSection sectionTitle="Title Two">
                    <h4>Company</h4>
                    <MenuList icon={Icon7} title="Team" noti=""/>
                    <MenuList icon={Icon8} title="Settings" noti=""/>
                </MenuSection> */}

                <div>
                    <img src={Logo} id="shrek"></img>
                </div>
                <div style={{margin:'50px 0'}}>
                    <MenuList icon={Icon1} title="New Releases" noti=""/>
                    <MenuList icon={Icon2} title="Most Popular" noti=""/>
                    <MenuList icon={Icon3} title="Recommended" noti=""/>
                    <MenuList icon={Icon4} title="Top Chart" noti=""/>
                </div>
                    <MenuList icon={Icon5} title="My Collection" noti=""/>
                    <MenuList title="Bookmark" noti=""/>
                    <MenuList  title="History" noti=""/>
                    <MenuList title="Subscriptions" noti=""/>
                
            </nav>

        )
    }
}