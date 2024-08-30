# Trustle Backend Server

## Create/Edit `.env` file

The meaning of each variable can be found below: 

- `SECRET_KEY`: the secret key for user authentication
- `PORT`: port number that backend server will listen on
  - default port number is 8000
  - this is needed for only developing mode

<br />

---

### Set up environment on the operating system

> Linux, MacOs 

```bash
$ sudo apt install npm
```

<br />

> CentOS/RHEL

```bash
$ sudo yum install nodejs npm
```

<br />

> Windows

```bash
$ npm install
```

<br />

---

### Start project

<br />

> Start the app via `npm`

```bash
$ npm start
```

At this point, the app runs at `http://127.0.0.1:8000/` locally. 

<br />

---

### Build the project

<br />

> Build the app via `npm`

```bash
$ npm run build
```

<br />

---

### Start development project

<br />

> Start the app as development mode via `npm`

```bash
$ npm run dev
```

At this point, the app runs at `http://127.0.0.1:8000/` locally. 

<br />

### Version Information

- Node.js version: 18.15.0