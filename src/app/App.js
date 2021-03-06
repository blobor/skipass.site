import React, { Component, PropTypes } from 'react'
import { Match } from 'react-router'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Search from './containers/Search'
import Skipass from './skipasses/Skipass.container'
import SkipassGridList from './skipasses/SkipassGridList.container'
import About from './about'
import Header from './containers/Header'
import Footer from './components/Footer'

import { getMuiTheme } from './core/mui-theme'
import { MuiThemeProvider } from 'material-ui/styles'

import { fetchStoredSkipasses } from './core/actions/stored-skipasses.actions'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

class App extends Component {
  componentDidMount () {
    this.props.initialize()
  }

  render () {
    const { userAgent } = this.props
    const muiTheme = getMuiTheme(userAgent)

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='app'>
          <Header />
          <main className='app__container'>
            <Match exactly pattern='/' component={Search} />
            <Match exactly pattern='/skipasses' component={SkipassGridList} />
            <Match exactly pattern='/skipasses/:id' component={Skipass} />
            <Match exactly pattern='/about' component={About} />
          </main>
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  userAgent: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    initialize: () => {
      dispatch(fetchStoredSkipasses())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
