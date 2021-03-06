/**
 * Created by hulingfangzi on 2018/6/6.
 */
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './syncLoading.scss';

@observer
export default class SyncLoading extends Component {
  render() {
    return (
      <div className="loadingContainer">
        <div className="connectLoader">
          <svg className="connectCircular" viewBox="25 25 50 50">
            <circle className="connectPath" cx="50" cy="50" r="22" fill="none" strokeWidth="3" strokeMiterlimit="10" />
          </svg>
        </div>
        <p className="loadingText">正在同步中</p>
        <p className="tipText">（本次同步将会耗时较长，您可以先返回页面进行其他操作）</p>
      </div>
    );
  }
}
