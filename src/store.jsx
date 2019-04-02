import {init} from '@rematch/core'
import immerPlugin from './shared/immerPlugin.js'


// 引入所有的models
import * as models from './models'

const store = init({
    models,
    plugins: [immerPlugin()],
})

export default store

// export const {dispatch} = store