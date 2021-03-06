/// ********************************************************************///
///                      DO NOT EDIT MANUALLY!                          ///
/// The file will be overwritten when using 'npm run generate reducer'  ///
/// Please edit the template file (/scripts/templates/rootReducer.mst)  ///
/// if you need to make any changes.                                    ///
/// ********************************************************************///

import {combineReducers, routerReducer} from 'redux-seamless-immutable'

{{#reducers}}
import {{name}} from '{{{path}}}'
{{/reducers}}

const rootReducer = combineReducers({
  {{#reducers}}
  {{name}},
  {{/reducers}}
  routing: routerReducer
})

export default rootReducer

export default function* rootSaga() {
  yield [
    
  ]
}