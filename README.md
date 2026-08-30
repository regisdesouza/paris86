# 🗼 Paris86

Aplicação fullstack com tema parisiense, integrando um frontend em **React** com um backend em **Spring Boot** via **Axios**.

---

## 🛠️ Tecnologias

### Frontend
- [React](https://react.dev/) + Vite
- CSS Modules
- [Axios](https://axios-http.com/) — requisições HTTP (GET, POST)

### Backend
- [Spring Boot](https://spring.io/projects/spring-boot) (Java)
- REST API

---

## 📁 Estrutura do Projeto

```
paris86/
├── frontend/   # Aplicação React
└── backend/    # Aplicação Spring Boot
```

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [Java JDK](https://www.oracle.com/java/technologies/downloads/) (17+)
- Uma IDE para Java — recomendado: [IntelliJ IDEA](https://www.jetbrains.com/idea/) ou [Eclipse](https://www.eclipse.org/)

---

### 1. Backend — Spring Boot

1. Abra a pasta `backend/` na sua IDE
2. Aguarde o Maven baixar as dependências
3. Localize a classe principal (geralmente anotada com `@ParisApplication`) e clique em **Run**

O servidor vai subir em: `http://localhost:8080`

---

### 2. Frontend — React

Abra um terminal na pasta `frontend/` e rode:

```bash
# Instala as dependências
npm install

# Inicia o servidor de desenvolvimento
npm run dev
```

O frontend vai subir em: `http://localhost:5173`

> ⚠️ **Importante:** suba o backend **antes** do frontend para que as requisições Axios funcionem corretamente.

---

## ✨ Funcionalidades

### 🍽️ Cardápio
Exibe os itens disponíveis do restaurante, buscados do backend via Axios (GET). O cliente navega pelo cardápio e escolhe o que quiser pedir.

### 🧾 Monte seu prato
O cliente seleciona os itens do cardápio e monta o próprio prato diretamente na interface — de forma interativa, escolhendo o que vai compor o pedido.

### 📋 Comanda
Após montar o prato, o pedido é exibido como uma comanda na tela — reunindo todos os itens selecionados. A comanda é enviada ao backend via Axios (POST) para ser registrada.

---

## 🔗 Integração Frontend ↔ Backend

O frontend se comunica com a API do Spring Boot usando **Axios**. Exemplo de requisição:

```js
// GET
const response = await axios.get('http://localhost:8080/rota');

// POST
await axios.post('http://localhost:8080/rota', { dado: 'valor' });
```

Certifique-se de que o backend está configurado para aceitar requisições do frontend (CORS habilitado).

