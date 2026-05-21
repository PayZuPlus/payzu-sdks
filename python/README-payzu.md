# payzu-pix

SDK Python oficial para a [API PayZu Pix](https://docs.payzu.com.br).

## Instalação

```bash
pip install payzu-pix
```

## Uso

```python
import payzu_pix
from payzu_pix.rest import ApiException

config = payzu_pix.Configuration(
    host='https://api.payzu.processamento.com/v1',
    access_token=os.environ['PAYZU_TOKEN'],
)

with payzu_pix.ApiClient(config) as client:
    api = payzu_pix.PixOperationsApi(client)
    charge = api.post_pix(post_pix_request={
        'amount': 99.90,
        'clientReference': 'order-1234',
        'callbackUrl': 'https://seusite.com.br/webhooks/payzu',
    })
    print(charge.qr_code_text)
```

## Links

- Doc: [docs.payzu.com.br](https://docs.payzu.com.br)
- OpenAPI: [docs.payzu.com.br/openapi.json](https://docs.payzu.com.br/openapi.json)
- Issues: [github.com/PayZuPlus/payzu-sdks/issues](https://github.com/PayZuPlus/payzu-sdks/issues)
