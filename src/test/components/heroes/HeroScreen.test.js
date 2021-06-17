import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import HeroScreen from '../../../components/heroes/HeroScreen'
import { historyMock, historyMock10 } from "../../fixtures/historyMock"

describe('HeroScreen.js', () => {

  test('should redirect component if not found URL args', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={historyMock}/>
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBe(true);
  })
  
  test('should Hero data', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  })
  
  test('should return previous screen (push)', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
        <Route 
          path="/hero/:heroId" 
          component={() => <HeroScreen history={historyMock} />} />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  })
  
  test('should return previous screen (goBack)', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
        <Route 
          path="/hero/:heroId" 
          component={() => <HeroScreen history={historyMock10} />} />
      </MemoryRouter>
    );
    
    wrapper.find('button').prop('onClick')();
    expect(historyMock10.push).not.toHaveBeenCalled()
    expect(historyMock10.goBack).toHaveBeenCalledTimes(1);
  })

  test('should call redirect if hero dont exist', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-hulkKKKKK']}>
        <Route 
          path="/hero/:heroId" 
          component={() => <HeroScreen history={historyMock10} />} />
      </MemoryRouter>
    );
    
    expect(wrapper.text()).toBe('');
  })
})
