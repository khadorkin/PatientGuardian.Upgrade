import React from "react";
import configureMockStore from "redux-mock-store";
import Navbar from "./index";
import thunkMiddleware from 'redux-thunk';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { profileState, item, nextProps, DashboardState } from './mockData'
// import { navigation } from './mockData'

Enzyme.configure({ adapter: new Adapter() });
// import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunkMiddleware],
  mockStore = configureMockStore(middlewares);



jest.mock('jsencrypt', () => ({encryptPassword: 'mockJSEncrypt'}))


jest.mock('react-native-background-task', () => ({rnbt: 'mockRNBackgroundTask'}))

jest.mock('react-native-firebase', () => ({rnfb: 'mockRNFirebase'}))

jest.mock('rn-fetch-blob', () => ({reactNativeFetchBlob: 'mockRNFetchBlob'}))

jest.mock('react-navigation-redux-helpers', () => ({reactNavigationReduxHelpers: 'mockReactNavigationReduxHelpers'}))

jest.mock('../../../utils/signalrUtility', () => ({signalrUtility: 'mockSignalrUtility'}))

jest.mock('../../../redux/store', () => ({Store: 'mockStore'}))

jest.mock('../../../routes', () => ({routes: 'mockRoutes'}))
jest.mock('@ptomasroos/react-native-multi-slider', () => ({reactNativeMultiSlider: 'mockRNMultiSlider'}))


describe('Navbar component', () => {


  it('should be handling Navbar', () => {
    const store = mockStore({}),

      context = { store },
      wrapper = shallow(
        <Navbar  hideUpdate= {true} title={"Sample Title"} onClickBackButton={jest.fn()} onClickUpdate = {jest.fn()}/>,
        { context },
      );

    inst = wrapper.instance();

  });

  it('should be handling Navbar', () => {
    const store = mockStore({}),

      context = { store },
      wrapper = shallow(
        <Navbar  hideUpdate= {false}/>,
        { context },
      );

    inst = wrapper.instance();

  });
})