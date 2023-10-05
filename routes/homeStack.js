import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';

const screens = {
    Home:{
        screen: Home,
    },
    ReviewDetails:{
        screen:ReviewDetails
    },
    // About:{
    //     screen:About
    // }
}

const HomeStack = (screens)

export default createAppContainer(HomeStack);