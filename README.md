# Implementando controle de acesso no NodeJs

Utilizaremos o pacote [express-acl](https://github.com/nyambati/express-acl) para controlar o acesso as rotas da nossa aplicação

## Instalação

Use o gerenciador de pacotes [yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/) para instalar as dependência do projeto.

```bash
yarn install
```

## Uso

O diretório **base-struct** contem a base do código utilizado, apenas com as rotas base e o controller responsavel por gerar o nosso token.

Já o **final-project** contêm o código finalizado com a implementação do controle de acesso.

## Rotas

### Login

**enviar:** credenciais de login.

**Request:**

```json
POST
Accept: application/json
Content-Type: application/json

{
    "email": "peter@gmail.com",
    "role": "admin"
}
```

**Successful Response:**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "user": {
    "email": "peter@gmail.com"
  },
  "token": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}
```

## Contributing

Pull requests são bem-vindas. Para mudanças importantes, abra um problema primeiro para discutir o que você gostaria de mudar.

## License

[MIT](https://choosealicense.com/licenses/mit/)
