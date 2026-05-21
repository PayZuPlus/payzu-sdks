# payzupix

SDK Go oficial para a [API PayZu Pix](https://docs.payzu.com.br).

## Instalação

```bash
go get github.com/PayZuPlus/payzu-sdks/go
```

## Uso

```go
import payzupix "github.com/PayZuPlus/payzu-sdks/go"

cfg := payzupix.NewConfiguration()
cfg.Servers = payzupix.ServerConfigurations{{URL: "https://api.payzu.processamento.com/v1"}}
client := payzupix.NewAPIClient(cfg)

ctx := context.WithValue(context.Background(), payzupix.ContextAccessToken, os.Getenv("PAYZU_TOKEN"))

req := payzupix.PostPixRequest{
    Amount: 99.90,
    ClientReference: payzupix.PtrString("order-1234"),
    CallbackUrl: payzupix.PtrString("https://seusite.com.br/webhooks/payzu"),
}
charge, _, err := client.PixOperationsAPI.PostPix(ctx).PostPixRequest(req).Execute()
```

## Links

- Doc: [docs.payzu.com.br](https://docs.payzu.com.br)
- OpenAPI: [docs.payzu.com.br/openapi.json](https://docs.payzu.com.br/openapi.json)
- Issues: [github.com/PayZuPlus/payzu-sdks/issues](https://github.com/PayZuPlus/payzu-sdks/issues)
