import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import config from './config';
import axios from 'axios';
import { Provider } from 'react-redux';

const serverRender = () => {
  return (
  axios.get(`${config.serverUrl}/api/aggregate`)
  .then(resp => {
    const initialData = resp.data.data || [];
    return {
      initialMarkup: ReactDOMServer.renderToString(
        <Provider>
        <App initialData={initialData} />
        </Provider>,
      ),
      initialData
    }; 
  })
  .catch(err => {
    //console.log(err);
    return err;
  })
  );
}


export default serverRender;
