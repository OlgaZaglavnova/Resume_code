import React from 'react';
import ReactDom from 'react-dom';
import {Router, Switch, Route, HashRouter} from 'react-router-dom';
import {loadData, setIsOpen, setNavIsHidden} from './store/myActions';
import {createBrowserHistory} from 'history';

import {push} from 'connected-react-router';

import {Provider} from 'react-redux';
import {initStore} from './store/store';

import ResizablePanels from './components/ResizablePanel/ResizablePanel';

//import LeftNavBar from './components/LeftNavBar/LeftNavBar';
import LeftNavBarContainer from './containers/LeftNavBarContainer';
import RightTitleContainer from './containers/RightTitleContainer';
import StartPageContainer from './containers/StartPageContainer';
import AboutMeContainer from './containers/AboutMeContainer';
import EducationPageContainer from './containers/EducationPageContainer';
import MainEducationPageContainer from './containers/MainEducationPageContainer';
import AdditionalEducationPageContainer from './containers/AdditionalEducationPageContainer';
import QualificationPageContainer from './containers/QualificationPageContainer';
import ScillsPageContainer from './containers/ScillsPageContainer';
import SertificatesPageContainer from './containers/SertificatesPageContainer';
import SertificatePageContainer from './containers/SertificatePageContainer';
import ContactsPageContainer from './containers/ContactsPageContainer';
import PortfolioPageContainer from './containers/PortfolioPageContainer';

const store = initStore();
const history = createBrowserHistory();
store.dispatch(loadData());
const MainOnClickHandler =() => {
    store.dispatch(setIsOpen(false));
}
const goTopClickHandler = () => {
    window.scrollTo(0, 0);
}

//MAIN
class Main extends React.Component {
    constructor(props){
        super(props);
        this.windowPos = 0;
        this.scrolledDown= false;
    };
    // componentDidMount(){
    //     //console.log('Main did mount', store.dispatch(loadData()));
    //     history.push('/Resume');
    // };
    scrollHandler(e){
        //console.log('index.js scrollHandler', this.scrolledDown, window.pageYOffset);
        let tmpScrolledDown = this.scrolledDown;
        if (window.pageYOffset > this.windowPos){
            tmpScrolledDown = true;
        }else{
            tmpScrolledDown = false;
        }
        this.windowPos = window.pageYOffset;
        if (tmpScrolledDown != this.scrolledDown){
            this.scrolledDown = tmpScrolledDown;
            store.dispatch(setNavIsHidden(this.scrolledDown));
        }
        
    };
    componentDidMount () {
        window.addEventListener('scroll', this.scrollHandler);
    };
    
    render(){
        return <div>
            
            <div className="main">
                <div className="goTop" onClick={goTopClickHandler}><i className="fa fa-hand-pointer-o" aria-hidden="true"></i></div>
                <RightTitleContainer name="top" />
                {!this.scrolledDown && <LeftNavBarContainer isScrolledDown = {this.scrolledDown}/>}
                <Switch>
                    <Route exact path="/" component={StartPageContainer} />
                    <Route exact path="/aboutMe" component={AboutMeContainer} />
                    <Route exact path="/education" component={EducationPageContainer} />
                    <Route path="/education/main" component={MainEducationPageContainer} />
                    <Route path="/education/additional" component={AdditionalEducationPageContainer} />
                    <Route path="/qualification" component={QualificationPageContainer} />
                    <Route path="/scills" component={ScillsPageContainer} />
                    <Route path="/portfolio" component={PortfolioPageContainer} />
                    <Route exact path="/sertificates" component={SertificatesPageContainer} />
                    <Route path="/sertificates/:id" component={SertificatePageContainer} />
                    <Route path="/contacts" component={ContactsPageContainer} />
                </Switch>
            </div>
        </div>
    };
}

ReactDom.render(
    <Provider store={store}>
        <HashRouter>
           <Main />
        </HashRouter>
    </Provider>, document.getElementById('root'));

    // <ResizablePanels></ResizablePanels>