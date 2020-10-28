import {handleActions} from 'redux-actions';
import { loadData, setIsOpen, setNavIsHidden } from './myActions';
import {myData} from './myData';

const defaultState={
    myData: {}
};

export default handleActions({
    [loadData]:(state)=>{
        return {...state,
            isOpen: false,
            navIsHidden: false,
             myData
        }
    },
    [setIsOpen]:(state, {payload:{isOpenVal}})=>{
        return {...state,
            isOpen: isOpenVal,
            myData: {...state.myData}
        }
    },
    [setNavIsHidden]:(state, {payload:{navIsHiddenVal}})=>{
        return {...state,
            navIsHidden: navIsHiddenVal,
            myData: {...state.myData}
        }
    },
}, defaultState);