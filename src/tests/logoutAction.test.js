import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup } from '@testing-library/react';
import { logout, logoutSuccess, logoutRequest, logoutError } from '../redux/actions/authLogout';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
  login: {},
});

const historyMock = { push: jest.fn() };


describe('LOGOUT - ACTIONS', () => {

  afterEach(cleanup);

  it('should logout user successfully', async () => {

    mockAxios.get.mockResolvedValue({
      status: 200,
      data: {
        message: "Logout successfully",
        isLoggedIn: false
      },
    });

    const results = await store.dispatch(
      await logout(historyMock)
    );

    const token = localStorage.getItem('token')
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://phanton-back-ft-logout--xiikam.herokuapp.com/api/v1/auth/logout',
    
    );
  });

  it('should not logout user successfully', async () => {
    mockAxios.get.mockRejectedValue({
      data: {
        message: 'error',
      }
    });

    const results = await store.dispatch(
      await logout(historyMock)
    );
  });
});
