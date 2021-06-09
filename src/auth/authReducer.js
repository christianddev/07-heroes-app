import {types} from '../types/types';

// const statec = {
//     name: 'David',
//     logged: true
// };

const authReducer = (user = {}, action)=>  {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return user;
    }
}
export default authReducer;