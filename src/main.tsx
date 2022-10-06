import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App'
import { icon } from 'assets/icons';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <Helmet>
      <title>MyBinder</title>
      <meta name="MyBinder" content="Application for making portfolios, resumes and other personal pages" />
      <link rel="icon" href={icon} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Black+Han+Sans&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" /> 
    </Helmet>
    <App />
  </HelmetProvider>
)
