import React, { Component } from 'react'
import { fullWhite } from 'material-ui/styles/colors'
import { Drawer, IconButton, AppBar } from 'material-ui'
import { NavigationMenu } from 'material-ui/svg-icons'

class AppNavDrawer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({
      open: !this.state.open
    })
  }

  handleClose () {
    this.setState({
      open: false
    })
  }

  render () {
    return (
      <div>
        <IconButton
          onTouchTap={this.handleToggle}>
          <NavigationMenu color={fullWhite} />
        </IconButton>
        <Drawer open={this.state.open}
          docked={false}
          onRequestChange={this.handleClose}>
          <AppBar
            title='Buka'
            showMenuIconButton={false} />
        </Drawer>
      </div>
    )
  }
}

export default AppNavDrawer
