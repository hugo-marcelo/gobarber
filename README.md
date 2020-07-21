<h1 align="center">
  <img alt="GoBarber" title="gobarber" src=".github/logo.svg" width="200px" />
</h1>

<h3 align="center">
  GoBarber: back-end, front-end web e mobile
</h3>

<p align = "center">
<a href="https://www.codefactor.io/repository/github/hugo-marcelo/gobarber"><img src="https://www.codefactor.io/repository/github/hugo-marcelo/gobarber/badge" alt="CodeFactor" /></a>
<img alt = "Última confirmação do Github" src = "https://img.shields.io/github/last-commit/hugo-marcelo/gobarber">
<img alt = "Idioma principal do GitHub" src = "https://img.shields.io/github/languages/top/hugo-marcelo/gobarber">
<img alt = "GitHub" src = "https://img.shields.io/github/license/hugo-marcelo/gobarber.svg">
<a href="https://www.codacy.com/manual/hugo-marcelo/gobarber?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hugo-marcelo/gobarber&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/147d0b2836734c79b7ee5ea035f065b4"/></a>
</p>

## :gear: Back-end

### :information_source: Deploy

- https://gobarber-js-api.herokuapp.com

### :information_source: Instruções Back-end

#### Executando back-end

```bash

# criar estrutura do banco de dados Postgres
yarn typeorm migration:run

# iniciar servidor da aplicação
yarn dev:server

```

---

## :computer: Front-end

### :information_source: Deploy

- https://gobarber-js-web.herokuapp.com

### :information_source: Instruções Front-end

```bash
#instalar os pacotes e dependências
yarn

# iniciar a aplicação web
yarn start
```

---

## :iphone: Mobile

### :information_source: Instruções Mobile (iOS)

```bash
#instalar os pacotes e dependências
yarn

# iniciar o aplicativo no emulador do iOS
yarn ios
```

### :information_source: Instruções Mobile (Android)

```bash
#instalar os pacotes e dependências
yarn
```

Alterar a variável baseURL em `/src/services/api.js` colocando o ip local ou do emulador

```bash
# inicializar o aplicativo no emulador do Android
yarn android
```

---

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## :clap: Obrigado

[Rocketseat](https://rocketseat.com.br/) pelo bootcamp!
