import authReducer from "../../auth/authReducer";
import { types } from "../../types/types";
import { userMock } from "../fixtures/userMock";

describe('authReducer.js', () => {
    test('should return default state(user)', () => {
        const user = authReducer(userMock, {type: 'someAction'});
        expect(user).toEqual(userMock);
    })

    test('should authenticate & set el username', () => {
        const payload = {
            name: 'userXDXD',
            logged: false
        }
        const user = authReducer(userMock, {type: types.login, payload});
        expect(user.name).toBe(payload.name);
        expect(user.logged).toBeTruthy();
    })

    test('should delete username & set logged to false', () => {
        const user = authReducer(userMock, {type: types.logout});
        expect(user).toEqual({logged: false});
    })
})
