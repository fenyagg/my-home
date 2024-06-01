interface IYandexSuggestionConfig {
  client_id: string;
  response_type: string;
  redirect_uri: string;
}

interface IYandexSuggestionOptions {
  view?: string;
  parentId?: string;
  buttonSize?: string;
  buttonView?: 'main' | 'additional' | 'icon' | 'iconBG';
  buttonTheme?: 'light' | 'dark';
  buttonBorderRadius?: string;
  buttonIcon?: 'ya';
}

interface Window {
  YaAuthSuggest: {
    init: (config: IYandexSuggestionConfig, host: string, options: IYandexSuggestionOptions) => Promise<any>;
  };
}
