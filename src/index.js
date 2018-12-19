import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {

    Route,

    NavLink,

    BrowserRouter

} from "react-router-dom";

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('root')
);

