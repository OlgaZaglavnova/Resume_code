import {createActions} from 'redux-actions';

export const {loadData, setIsOpen, setNavIsHidden} = createActions({
    LOAD_DATA: () => ({}),
    SET_IS_OPEN: (isOpenVal) =>({isOpenVal}),
    SET_NAV_IS_HIDDEN: (navIsHiddenVal) =>({navIsHiddenVal})
});