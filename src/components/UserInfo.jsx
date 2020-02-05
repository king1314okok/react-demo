import React, { Component } from 'react'
import { Button } from 'antd'

class UserInfo extends Component {
  render() {
    const vertical = {
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    }
    return (
      <div>
        <div style={vertical}>
          This is UserInfo div
        </div>
        <Button type="primary">click</Button>
      </div>
    )
  }
}

export default UserInfo