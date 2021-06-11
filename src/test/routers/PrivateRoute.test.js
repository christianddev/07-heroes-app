import React from 'react';
import { mount } from 'enzyme';
import PrivateRoute from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router';

describe('PrivateRoute.js', () => {
  const props = {
    location: {
      pathname: '/marvel',
      search: ''
    }
  }

  Storage.prototype.setItem = jest.fn();

  test('should show component if user has authentivated & set localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated= {true}
          component={ () => <span>ok</span>}
          {...props}
        />
      </MemoryRouter>
      );
    expect(wrapper.find('span').exists()).toBe(true);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  })

  test('should not show component if user has not authentivated & set localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated= {false}
          component={ () => <span>ok</span>}
          {...props}
        />
      </MemoryRouter>
      );
    expect(wrapper.find('span').exists()).toBe(false);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  })
    
})
