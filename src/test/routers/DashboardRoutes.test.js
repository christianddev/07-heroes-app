import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import { AuthContext } from "../../auth/AuthContext"
import DashboardRoutes from "../../routers/DashboardRoutes"

describe('DashboardRoutes.js', () => {
  const contextvalue = {
    dispath: jest.fn(),
    user: {
      logged: true,
      name: 'usuarioXD100'
    }
  }
  test('should show DashboardRoutes', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextvalue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(contextvalue.user.name);
  })
})
