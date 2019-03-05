import requst from './request'

export default {
  querySome(config?:object) {
    return requst({
      method: 'POST',
      url: '/api/v1/apply/querySome/1/1',
      data: {},
      ...config
    })
  }
}
