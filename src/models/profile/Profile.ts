import { Module } from 'vuex';
import { getters } from './Getters';
import { actions } from './Actions';
import { mutations } from './Mutations';
import { ProfileState } from './types';
import { RootState } from '@/store/types';

export const state: ProfileState = {
    user: undefined,
    error: false,
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
