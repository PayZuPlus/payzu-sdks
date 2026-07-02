# payzu-pix

SDK oficial Node.js da API PayZu Pix: depósitos, saques, transferências internas, infrações, relatórios e callbacks.

## Instalação

```bash
npm install payzu-pix
```

## Requisitos

- Node.js 18 ou superior (usa `fetch`, `Blob` e `FormData` nativos)
- Funciona em ESM (`import`) e CommonJS (`require`), com tipos TypeScript inclusos

## Uso rápido

```ts
import { PayZu } from 'payzu-pix';

const payzu = new PayZu({ token: process.env.PAYZU_TOKEN });

const charge = await payzu.pix.create({
  amount: 99.9,
  clientReference: 'order-1234',
  callbackUrl: 'https://seusite.com.br/webhooks/payzu',
});

console.log(charge.id, charge.qrCodeText);
```

## Autenticação

O token de acesso é emitido no onboarding. Aceita string fixa ou um provider (síncrono ou assíncrono), resolvido a cada chamada:

```ts
const payzu = new PayZu({ token: 'seu-token' });

const payzuComProvider = new PayZu({
  token: async () => buscarTokenNoCofre(),
});
```

### Whitelabel / endpoint próprio

Por padrão o SDK chama `https://api.payzu.processamento.com/v1`. Para whitelabels ou ambientes próprios, informe `baseUrl`:

```ts
const payzu = new PayZu({
  token: 'seu-token',
  baseUrl: 'https://api.seudominio.com.br/v1',
});
```

## Métodos

| Método | Endpoint | Retorno |
| ------ | -------- | ------- |
| `payzu.pix.create(params)` | `POST /pix` | `Transaction` |
| `payzu.pix.get(params)` | `GET /pix` | `Transaction` |
| `payzu.pix.qrCode(transactionId)` | `GET /pix/qr-code/{transactionId}` | `Blob` (PNG) |
| `payzu.pix.proof(id, options?)` | `GET /proof/{id}` | `Proof` |
| `payzu.withdraw.create(params)` | `POST /withdraw` | `Transaction` |
| `payzu.withdraw.get(params)` | `GET /withdraw` | `Transaction` |
| `payzu.withdraw.proof(id, options?)` | `GET /withdraw/proof/{id}` | `Proof` |
| `payzu.withdraw.fromQrCode(params)` | `POST /withdraw/qrcode` | `Transaction` |
| `payzu.withdraw.readQrCode(emv)` | `POST /pix/qrcode/read` | `QrCodeRead` |
| `payzu.withdraw.pixKey(pixKey)` | `GET /pix/key` | `PixKeyInfo` |
| `payzu.account.get()` | `GET /user` | `Account` |
| `payzu.account.balance()` | `GET /user/balance` | `Balance` |
| `payzu.reports.create(params)` | `POST /user/report` | `ReportJob` |
| `payzu.reports.get(id)` | `GET /user/report/{id}` | `ReportJob` |
| `payzu.reports.list(filters?)` | `GET /user/report` | `ReportList` |
| `payzu.reports.download(id)` | `POST /user/report/{id}/download` | `ReportDownload` |
| `payzu.reports.transactions(filters?)` | `GET /user/transactions` | `TransactionList` |
| `payzu.reports.transaction(id)` | `GET /user/transactions/{id}` | `TransactionDetail` |
| `payzu.callbacks.list(filters?)` | `GET /user/callbacks` | `CallbackList` |
| `payzu.callbacks.get(id)` | `GET /user/callbacks/{id}` | `CallbackDetail` |
| `payzu.callbacks.resend(transactionId)` | `POST /user/callbacks/resend/{transactionId}` | `ResendCallbackResult` |
| `payzu.callbacks.resendBatch(params)` | `POST /user/callbacks/resend` | `ResendCallbacksResult` |
| `payzu.infractions.list(filters?)` | `GET /user/infractions` | `InfractionList` |
| `payzu.infractions.get(id)` | `GET /user/infractions/{id}` | `InfractionDetail` |
| `payzu.infractions.defenses(infractionId)` | `GET /user/infractions/{id}/defenses` | `Defense[]` |
| `payzu.infractions.defense(infractionId, defenseId)` | `GET /user/infractions/{infractionId}/defenses/{defenseId}` | `Defense` |
| `payzu.infractions.createDefense(infractionId, defense, files?)` | `POST /user/infractions/{id}/defenses` | `Defense` |
| `payzu.internalTransfer.create(params)` | `POST /internal-transfer` | `Transaction` |
| `payzu.internalTransfer.get(params)` | `GET /internal-transfer` | `Transaction` |

## Tratamento de erros

Toda falha vira `PayZuError`, com `status`, `code`, `requestId` e `body` quando disponíveis. Falhas de rede usam `code: 'NETWORK_ERROR'`.

```ts
import { PayZu, PayZuError } from 'payzu-pix';

try {
  await payzu.pix.create({ amount: 0.5 });
} catch (error) {
  if (error instanceof PayZuError) {
    console.error(error.message, error.status, error.code, error.requestId);
  }
}
```

## Compatibilidade com 0.1.0

Todo o core gerado (APIs, modelos e runtime do OpenAPI Generator) continua exportado pelo pacote, então código escrito contra a 0.1.0 segue funcionando. Política de versionamento: a facade (`PayZu`, namespaces, `PayZuError`, aliases de tipo) é o contrato estável; o core gerado espelha o spec e pode mudar a cada regeneração.

## Contribuição

Não edite `src/generated`: o conteúdo é reescrito pelo bot a partir do `openapi.json`. Alterações de superfície pública vão na facade (`src/`). Rode `npm run build` e `npm test` antes de abrir PR.

## Licença

MIT
