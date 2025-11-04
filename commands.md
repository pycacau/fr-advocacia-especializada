# Comandos para Responsividade e Melhorias no Projeto

## Comandos para Desenvolvimento

### Iniciar o servidor de desenvolvimento
```bash
npm run dev
```

### Construir o projeto para produção
```bash
npm run build
```

### Executar o servidor backend
```bash
npm run server
```

### Visualizar o build de produção
```bash
npm run preview
```

## Linguagens e Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Styled Components**: Biblioteca para estilização CSS-in-JS
- **Vite**: Ferramenta de build rápida para projetos modernos

### Backend
- **Node.js**: Ambiente de execução JavaScript no servidor
- **Express.js**: Framework web para Node.js
- **TypeScript**: Para tipagem no backend
- **CORS**: Middleware para permitir requisições cross-origin
- **Body-parser**: Middleware para parsing de corpos de requisição

### Outras Tecnologias
- **PrimeReact**: Biblioteca de componentes UI
- **React Icons**: Biblioteca de ícones para React
- **React Scroll Parallax**: Para efeitos de parallax
- **Puppeteer**: Para automação de navegador
- **JWT**: Para autenticação
- **Bcrypt**: Para hash de senhas

## Estrutura de Responsividade

### Breakpoints Utilizados
- **1024px ou altura 690px**: Ajustes para telas médias
- **850px**: Redução do tamanho da imagem parallax
- **821px**: Ajustes para tablets, redução de fonte e padding
- **600px**: Layout mobile, mudança para coluna, ocultação de elementos
- **480px**: Ajustes finais para dispositivos pequenos

### Melhorias de Responsividade Implementadas
1. **Layout Flexível**: Uso de flexbox para adaptação automática
2. **Media Queries**: Ajustes específicos para diferentes tamanhos de tela
3. **Ocultação de Elementos**: Elementos como `.branchBg` são ocultados em mobile
4. **Ajuste de Fontes**: Tamanhos de fonte reduzidos progressivamente
5. **Padding e Margins**: Ajustados para melhor aproveitamento do espaço
6. **Botões Responsivos**: Layout em coluna em dispositivos móveis

## Dicas para Manutenção da Responsividade

1. **Teste em Múltiplos Dispositivos**: Sempre teste em desktop, tablet e mobile
2. **Use Ferramentas de Desenvolvimento**: Chrome DevTools para simular dispositivos
3. **Considere Performance**: Otimize imagens e reduza efeitos em dispositivos móveis
4. **Acessebilidade**: Garanta que o site seja usável em todos os dispositivos
5. **Atualize Breakpoints**: Monitore novos dispositivos e ajuste conforme necessário

## Comandos Úteis para Desenvolvimento

### Limpar cache do npm
```bash
npm cache clean --force
```

### Reinstalar dependências
```bash
rm -rf node_modules package-lock.json && npm install
```

### Verificar vulnerabilidades
```bash
npm audit
```

### Executar linting (se configurado)
```bash
npm run lint
```

### Executar testes (se configurado)
```bash
npm test
