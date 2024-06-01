import { useEffect } from 'react';

export const YandexAuth = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js';
    // script.onload = () => {
    //   window.YaAuthSuggest.init(
    //     {
    //       client_id: 'e7fe8ce8e9ff4eb9b282ed7a6a697398',
    //       response_type: 'token',
    //       redirect_uri: 'http://localhost:3000'
    //     },
    //     'http://localhost',
    //     { view: 'default' }
    //   )
    //     .then(({ handler }) => handler())
    //     .then((data) => console.log('Сообщение с токеном', data))
    //     .catch((error) => console.log('Обработка ошибки', error));
    // };
    document.body.appendChild(script);
  }, []);

  return <>1234</>;
};
