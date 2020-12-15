import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup } from '@testing-library/react';
import { registrationAction } from '../redux/actions/registrationAction';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
  register: {},
});

window.alert = jest.fn();

describe('ACTIONS', () => {
  afterEach(cleanup);

  it('should not register user', async () => {
    window.alert.mockClear();
    mockAxios.post.mockRejectedValue({
      response: {
        data: {
          message: 'error',
        },
      },
    });

    const results = await store.dispatch(
      await registrationAction({       
        email: 'example@email.com',
        firstname: 'Grand mopao',
        lastname: 'maestro',
        gender: 'Malee',
        address: 'kacyiru',
        roleError: 'This role',
        dateofbirth: '12/12/1993', })
    );
    console.log(results);
  });
});
