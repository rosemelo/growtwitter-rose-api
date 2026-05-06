# Growtwitter API

API REST desenvolvida como desafio da Growdev, simulando uma rede social estilo Twitter (X).

Permite cadastro de usuários, autenticação, criação de tweets, follow entre usuários e interações com posts.

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
cd growtwitter-rose-api
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
* `POST /login` → 
* `GET /users/:id` → Buscar usuário

---

### Tweets

* `POST /tweets` → Criar tweet (autenticado)
* `POST /tweets/:id/reply` → Responder tweet
* `GET /feed` → Listar feed personalizado

---

### Likes

* `POST /tweets/:id/like` → Curtir tweet
* `DELETE /tweets/:id/like` → Remover curtida

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
## Deploy

A API está hospedada no Render:

  https://growtwitter-rose-api.onrender.com

---

## Próximas funcionalidades

* Paginação
* Upload de imagem de perfil
* Edição de perfil
* Refresh Token
* Testes automatizados

---

## Autor

Desenvolvido por **Rosenildes Melo**

```
