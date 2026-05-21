# @payzu/pix

SDK Node.js oficial para a [API PayZu Pix](https://docs.payzu.com.br).

## Instalação

```bash
npm install @payzu/pix
```

## Uso

```ts
import { Configuration, PixOperationsApi } from '@payzu/pix';

const config = new Configuration({
  accessToken: process.env.PAYZU_TOKEN,
  basePath: 'https://api.payzu.processamento.com/v1',
});

const pix = new PixOperationsApi(config);

const charge = await pix.postPix({
  postPixRequest: {
    amount: 99.90,
    clientReference: 'order-1234',
    callbackUrl: 'https://seusite.com.br/webhooks/payzu',
  },
});

console.log(charge.qrCodeText);
```

## Links

- Doc: [docs.payzu.com.br](https://docs.payzu.com.br)
- OpenAPI: [docs.payzu.com.br/openapi.json](https://docs.payzu.com.br/openapi.json)
- Issues: [github.com/PayZuPlus/payzu-sdks/issues](https://github.com/PayZuPlus/payzu-sdks/issues)
