import { useEffect } from 'react';

export const YandexAuth = () => {
  useEffect(() => {
    // document.addEventListener('load', () => {
    //   window.YaAuthSuggest.init(
    //     {
    //       client_id: 'e7fe8ce8e9ff4eb9b282ed7a6a697398',
    //       response_type: 'token',
    //       redirect_uri: 'http://localhost:3000'
    //     },
    //     'http://localhost:3000',
    //     { view: 'default' }
    //   )
    //     .then(({ handler }) => handler())
    //     .then((data) => console.log('Сообщение с токеном', data))
    //     .catch((error) => console.log('Обработка ошибки', error));
    // });
  }, []);

  return <>1234</>;
};
