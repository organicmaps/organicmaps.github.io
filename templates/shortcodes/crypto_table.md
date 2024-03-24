<p id="crypto-table" />

{{ trans(key='name', lang=lang) }} | {{ trans(key='token', lang=lang) }} | {{ trans(key='address', lang=lang) }}
:-------------|:-----|:----------------------------------------------------------
Bitcoin       | BTC  | [{{ config.extra.btc }}](bitcoin:{{ config.extra.btc }}?message=Donation)
Ethereum      | ETH  | [{{ config.extra.eth }}](ethereum:{{ config.extra.eth }})
Tether/ERC20  | USDT | {{ config.extra.eth }}
Tron          | TRX  | [{{ config.extra.trx }}](tron:{{ config.extra.trx }})
Tether/TRC20  | USDT | {{ config.extra.trx }}
Litecoin      | LTC  | [{{ config.extra.ltc }}](litecoin:{{ config.extra.ltc }})
Bitcoin Cash  | BCH  | [{{ config.extra.bch }}](bitcoincash:{{ config.extra.bch }})
Binance Coin  | BNB  | [{{ config.extra.bnb }}](bnb:{{ config.extra.bnb }})
Algorand      | ALGO | [{{ config.extra.algo }}](algorand://{{ config.extra.algo }})
Cardano       | ADA  | [{{ config.extra.ada }}](cardano:{{ config.extra.ada }})
XRP           | XRP  | [{{ config.extra.xrp }}](ripple:{{ config.extra.xrp }})
Solana        | SOL  | {{ config.extra.sol }}
ShibaINU/ERC20| SHIB | {{ config.extra.eth }}
Dogecoin      | DOGE | [{{ config.extra.doge }}](dogecoin:{{ config.extra.doge }})
Monero        | XMR  | [{{ config.extra.xmr }}](monero:{{ config.extra.xmr }})
ZCash         | ZEC  | [{{ config.extra.zec }}](zcash:{{ config.extra.zec }})
