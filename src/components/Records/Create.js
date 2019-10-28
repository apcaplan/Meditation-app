import React from 'react'

import axios from 'axios'
import apiUrl from '../../apiConfig'

export const RecordCreate = (props) => {

  const record = {
    date: date,
    timer: 0,
    howFeel: '',
    meditaitonQualities: '',
    otherNotes: ''
      },
      createdRecordId: null
    }
  }

  handleSubmit = event => {
      event.preventDefault()

      axios({
        url: `${apiUrl}/journal`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token token=${this.props.user.token}`
        },
        data: {
          record: this.state.record
        }
      })
        .then(res => this.setState({ createdRecordId: res.data.record.id }))
        .catch(console.error)
    }

    render () {

  return (
  )
}
}

export default RecordCreate
