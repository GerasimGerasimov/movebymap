import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState} from './types';
import { profile } from '@/models/profile/Profile';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '10.10.2019',
  },
  modules: {
    profile,
  },
};

export default new Vuex.Store<RootState>(store);

/*
export default new Vuex.Store({
  state: {
    version: '0.0.0 2019'
  },
  mutations: {

  },
  actions: {
    async Auth(this: Store<{}>): Promise<void> {
      try {
        console.log('Auth');
      } catch(error) {
        console.log('Auth:', error);
      }
    },
      // передаю имя и пароль, получаю токен
      async AUTH (this: Store<S>, {commit, dispatch}, payload) {
        try {
        } catch(error) {
        };
      },
  },
});
*/
