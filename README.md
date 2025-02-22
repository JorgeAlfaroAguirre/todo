# TODO App

## Crear App

## Dependencias

- react-hook-form

## Vercel

npm run build
npm run preview
vercel
vercel --prod

## Componentes

### TodoForm

form>div.mb-3>label.form-label

## Matar procesos pegados

1. Buscar el proceso

```powershell
netstat -ano | findstr :5173
```

2. Resultado

```powershell
$ netstat -ano | findstr :5173
TCP [::1]:5173 [::]:0 LISTENING 37592
TCP [::1]:5173 [::1]:56024 ESTABLISHED 37592
TCP [::1]:56024 [::1]:5173 ESTABLISHED 36972
```

3. Matar el proceso

```powershell
taskkill /PID 37592 /F
```
