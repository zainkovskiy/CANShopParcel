import React from "react";
import ReactDOM from 'react-dom';

import './style.scss';
import { App } from 'components/App';

const rootNode = document.getElementById('root')

ReactDOM.render(
  <App/>,
  // <div>test</div>,
  rootNode
)