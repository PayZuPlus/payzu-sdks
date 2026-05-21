# PayZu SDKs

SDKs oficiais para a API PayZu Pix, gerados automaticamente do [OpenAPI](./openapi.json).

| Linguagem | Pacote                                                                                  |
| --------- | --------------------------------------------------------------------------------------- |
| Node.js   | `@payzu/pix`                                                                            |
| Python    | `payzu-pix`                                                                             |
| Go        | `github.com/PayZuPlus/payzu-sdks/go`                                                    |
| PHP       | `payzu/pix`                                                                             |

## Documentação

- Doc: [docs.payzu.com.br](https://docs.payzu.com.br)
- Postman: [dev.payzu.com.br](https://dev.payzu.com.br)
- OpenAPI: [openapi.json](./openapi.json)

## Uso

```ts
import { PayZu } from '@payzu/pix';

const payzu = new PayZu({ token: process.env.PAYZU_TOKEN });

const charge = await payzu.pix.create({
  amount: 99.90,
  clientReference: 'order-1234',
  callbackUrl: 'https://seusite.com.br/webhooks/payzu',
});
```

## Sincronização

`openapi.json` é mantido em paridade com [docs.payzu.com.br/openapi.json](https://docs.payzu.com.br/openapi.json). Workflow `generate.yml` regenera SDKs diariamente.

## Suporte

[suporte.payzu.com.br](https://suporte.payzu.com.br)
