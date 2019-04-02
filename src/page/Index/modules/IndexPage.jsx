import {createModel } from '@rematch/core'
import {listDecorationLWorkOrder} from '../../../services/getData'

const initState = Object.freeze({
    obj: {
        a: 1,
        b:2
    }, 
    data: {
      currentIndex:1,
      pageSize:10,
      carPlateNo: '',
      refWoNo: '',
      vin: '',
      woNo: '',
      woStatusCode: '',
      bizTypeCode: '',
      settleateEndDate: '',
      settleateStartDate: '',
      workOrderEndDate: '',
      workOrderStartDate: ''
    }
})

export default createModel ({
    name: 'indexPage',
    state: {
        ...initState
    },
    effects: {
      async ListDecorationLWorkOrder (data)  {
        const res = await listDecorationLWorkOrder (data)
        console.log(res)
      }
    },
    reducers: {
        RESET_STATE (state, payload) {
            return { ...initState}
          },
          SET_STATE (state, payload) {
            Object.keys(payload).forEach( (key) => {
              if (state[key] !== undefined && payload[key] !== undefined) {
                state[key] = payload[key]
              }
            })
          }
        }
}) 