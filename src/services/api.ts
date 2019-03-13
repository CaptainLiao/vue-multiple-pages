import requst from './request/index'

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
