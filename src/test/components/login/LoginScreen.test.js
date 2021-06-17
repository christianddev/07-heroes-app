import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";

import LoginScreen from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";
import { historyMock } from "../../fixtures/historyMock";

describe("LoginScreen.js", () => {
  const contextValue = {
    dispatch: jest.fn(),
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );

  test("show LoginScreen", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("show call handleLogin", () => {
    const handleClick = wrapper.find('button').prop('onClick');
    const dispatch = {'payload': {'name': 'David'}, type: types.login}

    handleClick();
    expect(contextValue.dispatch).toHaveBeenCalledWith(dispatch);
    expect(historyMock.replace).toHaveBeenCalledWith('/');
    localStorage.setItem('lastPath', '/dc')
    handleClick();
    expect(historyMock.replace).toHaveBeenCalledWith('/dc');
  });
});
