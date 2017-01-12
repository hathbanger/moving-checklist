import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

class App extends Component {

  // componentDidMount() {
  //   console.log('invoca loaded');
  //   // <?php $campaign_id = get_field('advertiser_campaign_id') ?>
    
  //   var clientId = Invoca.Tools.readUrl("clientId");

  //   if(!Invoca.Tools.readCookie("invocaCookie")){
  //     // console.log('setting cookie as its not here');
  //     if(clientId){
  //       // console.log('setting via param bc we found it in the url: ', clientId)
  //       Invoca.Tools.setCookie("invocaCookie", clientId , 7);
  //     } 
  //     else {
  //       // console.log('setting via php bc we didnt find a clientId param: ', <?php print "'".$campaign_id."'" ?>)
  //       Invoca.Tools.setCookie("invocaCookie", clientId, 7);
  //     }

  //   } 
  //   else {
  //     var cookie = Invoca.Tools.readCookie("invocaCookie");
  //     // console.log('we read a cookie so we didnt set it again: ', cookie);
  //   }

  //   Invoca.PNAPI.integration({
  //     networkId: 1219,
  //     numberToReplace: {},
  //     campaignIdOverrideParam: 'clientId'
  //   });    
  // }

  render() {
    const { dispatch, tasks } = this.props
    
    return (
      <div>
        <Home
          dispatch={dispatch}
          tasks={this.props.tasks}
        />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  
  const { toggleTask, selectedProvider } = state
  const { tasks } = toggleTask
  
  return {
    tasks
  }
}

export default connect(mapStateToProps)(App)

