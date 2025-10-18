Run the server. Open the workspace in backend, not root
```
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Acess on local device:
```
http://localhost:8000/docs
```

command `ipconfig` to get ip address (ipv4) + port
eg:
```
http://192.168.1.153:8000/docs
```

prisma gen
```
npx prisma@5.17.0 generate
```

```
npx prisma@5.17.0 db push
```