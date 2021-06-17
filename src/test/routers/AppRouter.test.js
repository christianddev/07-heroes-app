import React from 'react';
import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import AppRouter from "../../routers/AppRouter"
import { userMockLogged } from '../fixtures/userMock';

describe('AppRouter.js', () => {

  const contextvalue = {
    dispath: jest.fn(),
    user: {
      logged: false,
      name: ''
    }
  }

  test('should show Login if user has not authenticated', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextvalue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  })

  test('should show Marvel Component if user has authenticated', () => {
    const contextvalue = {
      dispath: jest.fn(),
      user: userMockLogged
    }
    const wrapper = mount(
      <AuthContext.Provider value={contextvalue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find('.navbar').exists()).toBeTruthy();
  })
})
