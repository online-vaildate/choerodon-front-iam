/**
 * Created by hulingfangzi on 2018/5/28.
 */
import { observable, action, computed } from 'mobx';
import axios from 'Axios';
import store from 'Store';

@store('RouteStore')
class RouteStore {

}

const routeStore = new RouteStore();

export default routeStore;