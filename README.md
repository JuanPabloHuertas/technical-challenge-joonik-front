# Prueba Técnica - React Next.js 15

Aplicación desarrollada con React - Next.js 15.

## Tecnologías

- Next.js 15
- React 18
- TypeScript
- Material UI
- Jest

## Instalación

1. Clonar e instalar dependencias:

```bash
git clone https://github.com/JuanPabloHuertas/technical-challenge-joonik-front
cd technical-challenge-joonik-front
npm install
```

2. Configurar variables de entorno:

```bash
cp .env.example .env
```

### Variables Requeridas

```env
NEXT_PUBLIC_BACKEND_URL=https://localhost:8000
NEXT_PUBLIC_API_KEY=api-key-configurada-en-el-backend
```

## Comandos

```bash
npm run dev    # Desarrollo - localhost:3000
npm run build  # Construir para producción
npm run test   # Ejecutar tests
npm run lint   # Ejecutar ESLint
```

## Estructura

```
├── src/
│   ├── app/          # Pages y routing
│   ├── components/   # Componentes React
│   └── interfaces/    # Interfaces
├── public/          # Archivos estáticos
└── tests/          # Tests
```

## Características

- TypeScript
- Testing unitario
- UI responsive con Material UI
- Manejo seguro de variables de entorno
