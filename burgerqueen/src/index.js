import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF0000',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#39C6AE',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#009493',
    },
    inherit: {
      main: '#FFFFFF',
    },
    info: {
      main: '#E3E3E3',
    },
    success: {
      main: '#000000',
    },
  },
});
export default theme

    ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();