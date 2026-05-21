# payzu/pix

SDK PHP oficial para a [API PayZu Pix](https://docs.payzu.com.br).

## Instalação

```bash
composer require payzu/pix
```

## Uso

```php
<?php
use PayZuPix\Configuration;
use PayZuPix\Api\PixOperationsApi;
use GuzzleHttp\Client;

$config = Configuration::getDefaultConfiguration()
    ->setHost('https://api.payzu.processamento.com/v1')
    ->setAccessToken(getenv('PAYZU_TOKEN'));

$api = new PixOperationsApi(new Client(), $config);
$charge = $api->postPix([
    'amount' => 99.90,
    'clientReference' => 'order-1234',
    'callbackUrl' => 'https://seusite.com.br/webhooks/payzu',
]);

echo $charge->getQrCodeText();
```

## Links

- Doc: [docs.payzu.com.br](https://docs.payzu.com.br)
- OpenAPI: [docs.payzu.com.br/openapi.json](https://docs.payzu.com.br/openapi.json)
- Issues: [github.com/PayZuPlus/payzu-sdks/issues](https://github.com/PayZuPlus/payzu-sdks/issues)
