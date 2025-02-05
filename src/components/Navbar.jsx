import React, { Component } from 'react'
import { Menu, Header, Icon, Responsive, Sidebar } from 'semantic-ui-react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'

class Navbar extends Component {
  state = { visibleSidebar: false, modalOpen: false }

  handleModalOpen = () => {
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen
      }
    })
  }

  handleShowClick = () => this.setState({ visibleSidebar: true })
  handleSidebarHide = () => this.setState({ visibleSidebar: false })

  render() {
    const notMobile = { minWidth: Responsive.onlyMobile.maxWidth + 1 }
    let logOut, logIn, welcomeMessage, createRecipe

    if (this.props.currentUser.isSignedIn) {
      welcomeMessage = (
        <Menu.Item>
          <Header
            position='right'
            id="welcome-message"
          >
            Hello {this.props.currentUser.attributes.name}
          </Header>
        </Menu.Item>
      )
      logOut = (
        <Logout
          handleModalOpen={this.handleModalOpen}
        />
      )
      createRecipe = (
        <Menu.Item id='nav-create' as={NavLink} to='/recipes/create'>
          <Header position='right'>
            Create Recipe
          </Header>
        </Menu.Item>
      )
    } else {
      logIn = (
        <Menu.Item id='nav-login' className='fake-link-hover'>
          <Header
            position='right'
            onClick={this.handleModalOpen}>
            Log in
          </Header>
          <Login
            modalOpen={this.state.modalOpen}
            handleModalOpen={this.handleModalOpen}
          />
        </Menu.Item>
      )
    }

    return (
      <>
        <Responsive {...Responsive.onlyMobile}>
          <Menu id='navbar' borderless={true}>
            <Menu.Item
              as={NavLink}
              to='/'
              id='nav-home'>
              <Header position='left' className='navbar-header' background='#FCE8CE'>
                FOODHUB
            </Header>
            </Menu.Item>
            <Menu.Item onClick={this.handleShowClick} position='right' id="sidebar-menu">
              <Icon size="big" name="align justify" />
            </Menu.Item>
          </Menu>

          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            onHide={this.handleSidebarHide}
            vertical
            visible={this.state.visibleSidebar}
            onClick={this.handleSidebarHide}
            style={{ minWidth: "100%" }}
            id="mobile-menu"
          >
            <Menu.Menu>
              <Menu.Item
                as={NavLink}
                to='/'
                id='nav-home'
              >
                <Header position='left' className='navbar-header'>
                  FOODHUB
                </Header>
                <Icon name='food' size='large' />
              </Menu.Item>
              {welcomeMessage}
              {createRecipe}
              {logIn}
              {logOut}
            </Menu.Menu>
          </Sidebar>
        </Responsive>

        <Responsive {...notMobile}>
          <Menu id='navbar' borderless={true}>
            <Menu.Item
              as={NavLink}
              to='/'
              id='nav-home'
            >
              <Header className='navbar-header'>
                FOODHUB
              </Header>
            </Menu.Item>
            <Menu.Menu position='right'>
            {welcomeMessage}
            {createRecipe}
            {logIn}
            {logOut}
            </Menu.Menu>
          </Menu>
        </Responsive >
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps
)(Navbar);