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
