import { AuthReducer } from './auth.reducer';
import * as createAction from './auth.actions';
import * as fromSelectors from './auth.selector';
import {} from './auth.actions';
import { User } from './../../models/user.model';


describe('[User] Select User', () => {
  it('selectUser: should return selected user', () => {
    const selectUser = {
      1: { email: 'test@test.com', password: '123456' }
    };
    expect(fromSelectors.isAuthenticated.projector(User)).toEqual  
    });
});
