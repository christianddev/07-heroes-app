import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import Navbar from '../../components/ui/NavBar';

describe('NavBar.js', () => {
  const contextvalue = {
    dispath: jest.fn(),
    user: {
      logged: true,
      name: 'usuarioNavBar'
    }
  }

  test('should ', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextvalue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(contextvalue.user.name);
      
  })
    
})
