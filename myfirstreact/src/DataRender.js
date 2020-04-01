import React, { Component } from 'react'
 class DataRender extends Component {

    renderTableData(){
        return this.state.users.map()
    }

    render() {
        return (
          <div>
              <table>
                  <tbody>
                      {this.renderTableData()}
                  </tbody>
              </table>
          </div>
        )
    }
}

export default DataRender
