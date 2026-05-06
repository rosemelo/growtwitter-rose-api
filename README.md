# Growtwitter API

API REST desenvolvida como desafio da Growdev, simulando uma rede social estilo Twitter (X).

O objetivo do projeto é permitir que usuários possam se cadastrar, autenticar, criar tweets, seguir outros usuários e interagir com posts.

---

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- JWT (JSON Web Token)
- bcrypt

---

## Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/rosemelo/growtwitter-rose-api
````

```

### 2. Entrar na pasta do projeto

```

```bash
cd growtwitter
```

---

### 3. Instalar dependências

```bash
npm install
```

---

### 4. Configurar variáveis de ambiente

Criar um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="sua_url_do_postgres"
JWT_SECRET="sua_chave_secreta"
```

---

### 5. Rodar migrations do Prisma

```bash
npx prisma migrate dev
```

---

### 6. Rodar o projeto

```bash
npm run dev
```

Servidor rodará em:

```
http://localhost:3000
```

---

## Autenticação

A API utiliza JWT.

Para acessar rotas protegidas, envie o token no header:

```
Authorization: Bearer SEU_TOKEN
```

---

## Rotas da API

### Usuários

* `POST /users` → Criar usuário
* `POST /login` → Login

---

### Tweets

* `POST /tweets` → Criar tweet (autenticado)

---

### Follow

* `POST /follow` → Seguir usuário (autenticado)
* `DELETE /unfollow` → Deixar de seguir (autenticado)

---

## Regras do sistema

* Usuário não pode seguir a si mesmo
* Tweets pertencem a um usuário
* Apenas usuários autenticados podem interagir
* Feed será baseado em:

  * Tweets próprios
  * Tweets de usuários seguidos

---

## Próximas funcionalidades

* Feed de tweets
* Likes em tweets
* Replies (respostas)
* Melhorias na autenticação

---

## Autor

Desenvolvido por **Rosenildes Melo**

```
