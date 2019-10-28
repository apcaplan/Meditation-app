import apiUrl from '../apiConfig'
import axios from 'axios'
import messages from '../components/Auth/AutoDismissAlert/messages'

export const recordPractice = (record, user) => {
  return axios({
    url: apiUrl + '/records',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      record: {
        date: record.date,
        timer: record.timer,
        howFeel: record.howFeel,
        meditationQualities: record.meditationQualities,
        otherNotes: record.otherNotes
      }
    }
  })
}

export const showHistory = (user) => {
  return axios({
    url: apiUrl + '/records',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const getRecord = (record, user) => {
  return axios({
    url: apiUrl + `/records/${record.id}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const editRecord = (props, user, record) => {
  return axios({
    url: apiUrl + `/records/${props.match.params.id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { record }
  })
    .then(() => this.props.alert({
      heading: 'Successfully Made Changes',
      message: messages.editSuccess,
      variant: 'success'
    }))
    .catch(error => {
      console.error(error)
      this.props.alert({
        heading: 'Failed to make changes',
        message: messages.editFailure,
        variant: 'failed'
      })
    })
}

export const create = (user, data) => {
  return axios({
    url: `${apiUrl}/records`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${user.token}`
    },
    data: { record: data.record }
  })
}

export const update = (id, user, data) => {
  return axios({
    url: `${apiUrl}/records/${id}`,
    headers: { Authorization: `Token token=${user.token}` },
    method: 'PATCH',
    data: { data }
  })
}

export const destroy = (id, user) => {
  return axios({
    url: `${apiUrl}/records/${id}`,
    headers: { Authorization: `Token token=${user.token}` },
    method: 'DELETE'
  })
    .then(() => alert({
      heading: 'Successfully Deleted Record',
      message: messages.destroySuccess,
      variant: 'success'
    }))
    .catch(error => {
      console.error(error)
      alert({
        heading: 'Delete Record Failed',
        message: messages.destroyFailure,
        variant: 'failed'
      })
    })
}
