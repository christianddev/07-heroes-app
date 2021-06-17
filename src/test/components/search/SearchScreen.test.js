import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';
import { historyMock } from '../../fixtures/historyMock';

describe('SearchScreen.js', () => {

  test('should default valeus', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen}/>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
  })

  test('should search some hero (batman) using queryString', () => {
    const name = 'batman';
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?queryName=${name}`]}>
        <Route path="/search" component={SearchScreen}/>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe(name);
    expect(wrapper.find('.card-body').exists()).toBe(true);
    expect(wrapper.find('.alert-danger').exists()).toBe(false);
  })
  
  test('should error if dont found hero', () => {
    const name = 'batmannnn';
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?queryName=${name}`]}>
        <Route path="/search" component={SearchScreen}/>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe(name);
    expect(wrapper.find('.card-body').exists()).toBe(false);
    expect(wrapper.find('.alert-danger').exists()).toBe(true);
  })

  test('should call history.push', () => {
    const name = 'batmannnn';
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?queryName=${name}`]}>
        <Route path="/search" component={() => <SearchScreen history={historyMock} />}/>
      </MemoryRouter>
    );
    const inputTarget = {
      target: {
        name: 'name', 
        value: name
      } 
    };
    wrapper.find('input').simulate('change', inputTarget );

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect(historyMock.push).toHaveBeenCalledWith(`?queryName=${name}`);
  })

})
