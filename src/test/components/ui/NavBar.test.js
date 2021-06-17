import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import Navbar from '../../../components/ui/Navbar';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import { userMockLogged } from '../../fixtures/userMock';
import { historyMock } from '../../fixtures/historyMock';

describe('Pruebas en <Navbar />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: userMockLogged
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('userMocklogged');
  });

  test('debe de llamar el logout y el usar history', () => {
    wrapper.find('button').prop('onClick')();
    const logout = { type: types.logout };

    expect(contextValue.dispatch).toHaveBeenCalledWith(logout);
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  })

})
