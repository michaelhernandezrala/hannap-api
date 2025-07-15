# TypeScript Express Skeleton

🚀 **Production-ready Express.js boilerplate with TypeScript, comprehensive middleware, and modern development tools for building scalable REST APIs**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%3E%3D5.0.0-blue)](https://www.typescriptlang.org/)

## 🌟 Features

- **TypeScript First**: Full TypeScript support with strict configuration
- **Modern Express.js**: Latest Express.js v5 with ES modules
- **Security**: Helmet, CORS, rate limiting, and request validation
- **API Documentation**: OpenAPI 3.0 with Swagger UI integration
- **Logging**: Winston logger with structured logging and console formatting
- **Code Quality**: ESLint, Prettier, and pre-commit hooks with Husky
- **Development Tools**: Hot reload, TypeScript compilation, and path aliases
- **Git Workflow**: Conventional commits with Commitizen and CommitLint
- **Production Ready**: Compression, error handling, and environment configuration

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/michaelhernandezrala/typescript-express-skeleton.git
cd typescript-express-skeleton
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` file with your configuration:

```env
ENV=development
PORT=3000
LOG_LEVEL=debug
```

### 4. Start development server

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### 5. View API Documentation

Open your browser and navigate to `http://localhost:3000/docs` to view the Swagger UI documentation.

## 📁 Project Structure

```
src/
├── app.ts                     # Express app configuration
├── server.ts                  # Server entry point
├── config/
│   └── config.ts             # Environment configuration
├── constants/
│   └── error-codes.constants.ts # Error code constants
├── controllers/
│   └── v1/
│       └── system.controller.ts # System controllers
├── docs/
│   └── openapi.yaml          # OpenAPI specification
├── interfaces/               # TypeScript interfaces
├── lib/                      # External libraries and utilities
├── middlewares/
│   ├── openapi.middleware.ts # OpenAPI validation middleware
│   ├── rate-limiter.middleware.ts # Rate limiting middleware
│   └── request-logger.middleware.ts # Request logging middleware
├── models/                   # Data models
├── services/                 # Business logic services
├── types/
│   └── common/
│       ├── api.type.ts       # API type definitions
│       └── config.type.ts    # Configuration types
└── utils/
    ├── logger.ts            # Winston logger configuration
    └── response-helper.ts   # Response utility functions
```

## 🛠️ Available Scripts

### Development

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build TypeScript to JavaScript
npm run build:watch  # Build with watch mode
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking
```

### Git Workflow

```bash
npm run commit       # Interactive commit with Commitizen
npm run prepare      # Install Husky hooks
```

### Utility

```bash
npm run clean        # Remove build directory
```

## 🔧 Configuration

### Environment Variables

| Variable    | Description                          | Default       |
| ----------- | ------------------------------------ | ------------- |
| `ENV`       | Environment (development/production) | `development` |
| `PORT`      | Server port                          | `3000`        |
| `LOG_LEVEL` | Winston log level                    | `info`        |

### TypeScript Configuration

The project uses a strict TypeScript configuration with:

- **Target**: ES2022
- **Module**: ES2022
- **Strict mode**: Enabled
- **Path aliases**: Configured for clean imports
- **Source maps**: Enabled for debugging

### Path Aliases

```typescript
import controller from '@/controllers/v1/system.controller';
import logger from '@/utils/logger';
import config from '@/config/config';
```

## 📚 API Documentation

The project includes comprehensive API documentation using OpenAPI 3.0:

- **Swagger UI**: Available at `/docs`
- **OpenAPI Spec**: Located at `src/docs/openapi.yaml`
- **Request Validation**: Automatic validation using `express-openapi-validator`

### Example Endpoint

```yaml
/health:
  get:
    summary: Health check endpoint
    responses:
      200:
        description: API is healthy
```

## 🔒 Security Features

### Implemented Security Measures

- **Helmet**: Security headers
- **CORS**: Cross-Origin Resource Sharing
- **Rate Limiting**: 100 requests per 15 minutes
- **Request Validation**: OpenAPI schema validation
- **Input Sanitization**: JSON body parsing with size limits

### Rate Limiting Configuration

```typescript
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Maximum 100 requests per window
  message: {
    error: 'Too many requests, please try again later.',
    retryAfter: '15 minutes',
  },
});
```

## 📝 Logging

The project uses Winston for structured logging with:

- **Console output**: Colorized and formatted
- **JSON format**: Structured logging for production
- **Log levels**: Configurable via environment variable
- **Request logging**: Automatic HTTP request/response logging

### Logger Usage

```typescript
import logger from '@/utils/logger';

logger.info({ message: 'Server started', port: 3000 });
logger.error({ message: 'Database connection failed', error: err });
```

## 🔀 Git Workflow

### Conventional Commits

The project enforces conventional commits using:

- **CommitLint**: Validates commit messages
- **Commitizen**: Interactive commit creation
- **Husky**: Pre-commit hooks

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Pre-commit Hooks

- **Lint-staged**: Runs on staged files
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Type checking**: TypeScript validation

## 🚀 Deployment

### Building for Production

```bash
npm run build
npm run start
```

### Production Considerations

- Set `ENV=production` in environment variables
- Configure appropriate `LOG_LEVEL` for production
- Set up process manager (PM2, Docker, etc.)
- Configure reverse proxy (Nginx, Apache)
- Set up monitoring and health checks

## 🧪 Testing

The skeleton is ready for testing integration. Recommended testing tools:

- **Jest**: Unit and integration testing
- **Supertest**: HTTP assertions
- **MSW**: API mocking

## 📦 Dependencies

### Production Dependencies

- **express**: Web framework
- **helmet**: Security middleware
- **cors**: Cross-origin resource sharing
- **winston**: Logging library
- **express-rate-limit**: Rate limiting
- **express-openapi-validator**: API validation
- **compression**: Response compression

### Development Dependencies

- **typescript**: TypeScript compiler
- **eslint**: Code linting
- **prettier**: Code formatting
- **husky**: Git hooks
- **commitizen**: Conventional commits
- **tsx**: TypeScript execution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting: `npm run lint && npm run type-check`
5. Commit using conventional commits: `npm run commit`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- TypeScript team for type safety
- All contributors and maintainers of the dependencies used

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/michaelhernandezrala/typescript-express-skeleton/issues)
- **Repository**: [GitHub Repository](https://github.com/michaelhernandezrala/typescript-express-skeleton)

---

**Happy coding! 🎉**
