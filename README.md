#  Backend + Devops revison Project

A production-grade, fully containerized RESTful API for task management, engineered with Express.js 5, TypeScript, and Prisma ORM backed by PostgreSQL. This project demonstrates end-to-end software engineering best practices — from database design and secure authentication to Docker orchestration, automated CI/CD pipelines with GitHub Actions, comprehensive test coverage, and cloud deployment on AWS infrastructure.

## Tech Stack

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js 5
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT + bcrypt

### DevOps & Infrastructure
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions, Jenkins
- **Cloud**: AWS (ECS, ECR, RDS, EC2, Route 53, CloudWatch)
- **Reverse Proxy**: Nginx

### Testing
- **Test Framework**: Jest / Vitest
- **API Testing**: Supertest
- **Coverage**: NYC / c8

### Code Quality
- **Linting**: ESLint
- **Formatting**: Prettier
- **Validation**: Zod / Joi

## Current Features

- User registration and authentication
- JWT-based authorization middleware
- CRUD operations for todos
- User-specific todo management

---

## Learning Roadmap

### Phase 1: Prisma & SQL Fundamentals ✅ COMPLETED

**Goal**: Learn database modeling and Prisma ORM

- [x] Set up Prisma with PostgreSQL
- [x] Design database schema (User, Todo models)
- [x] Implement relationships (User has many Todos)
- [x] Create and run migrations
- [x] Implement CRUD operations using Prisma Client

---

### Phase 2: Docker & Docker Compose 🔄 IN PROGRESS

**Goal**: Containerize the application for consistent development and deployment

#### Tasks

- [ ] Create `Dockerfile` for the Node.js application
  - Multi-stage build for smaller image size
  - Production-ready configuration
- [ ] Create `docker-compose.yml`
  - Service for the Node.js app
  - Service for PostgreSQL database
  - Volume for database persistence
  - Environment variable management
- [ ] Create `.dockerignore` file
- [ ] Add health checks for services
- [ ] Document Docker commands in README

#### Key Concepts to Learn

- Dockerfile instructions (FROM, WORKDIR, COPY, RUN, CMD)
- Multi-stage builds
- Docker Compose service orchestration
- Volumes and networks
- Environment variable handling in containers
- Container health checks

#### Resources

- [Docker Official Docs](https://docs.docker.com/get-started/)
- [Dockerizing a Node.js App](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Docker Compose for Node.js + PostgreSQL](https://docs.docker.com/compose/)

---

### Phase 3: Testing

**Goal**: Write comprehensive tests to ensure code quality and reliability

#### Tasks

- [ ] Set up testing framework (Jest or Vitest)
- [ ] Configure test database (separate from development)
- [ ] Write unit tests
  - Service layer tests
  - Utility function tests
- [ ] Write integration tests
  - API endpoint tests using Supertest
  - Database operation tests
- [ ] Write authentication tests
  - Registration flow
  - Login flow
  - Protected route access
- [ ] Add test coverage reporting
- [ ] Add npm scripts for running tests

#### Key Concepts to Learn

- Unit vs Integration vs E2E testing
- Mocking and stubbing
- Test database management
- Test isolation and cleanup
- Code coverage metrics
- Test-driven development (TDD) basics

#### Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Vitest Documentation](https://vitest.dev/guide/)
- [Supertest for API Testing](https://github.com/ladjs/supertest)
- [Testing Prisma](https://www.prisma.io/docs/guides/testing)

---

### Phase 4: CI/CD with GitHub Actions

**Goal**: Automate testing, building, and deployment workflows

#### Tasks

- [ ] Create `.github/workflows` directory
- [ ] Set up CI pipeline (`ci.yml`)
  - Trigger on push/PR to main branch
  - Install dependencies
  - Run linting (add ESLint if not present)
  - Run tests
  - Build TypeScript
- [ ] Set up CD pipeline (`deploy.yml`)
  - Build Docker image
  - Push to container registry (Docker Hub / AWS ECR)
  - Deploy to AWS (after Phase 5)
- [ ] Add status badges to README
- [ ] Configure branch protection rules
- [ ] Set up GitHub Secrets for sensitive data

#### Key Concepts to Learn

- GitHub Actions workflow syntax
- Jobs, steps, and actions
- Environment variables and secrets
- Matrix builds
- Caching dependencies
- Workflow triggers (push, PR, schedule)
- Artifacts and outputs

#### Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions for Node.js](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)
- [Docker Build and Push Action](https://github.com/docker/build-push-action)

---

### Phase 5: AWS Deployment

**Goal**: Deploy the application to AWS cloud infrastructure

#### Option A: AWS ECS (Elastic Container Service) - Recommended for Docker

- [ ] Set up AWS account and configure AWS CLI
- [ ] Create ECR (Elastic Container Registry) repository
- [ ] Push Docker image to ECR
- [ ] Create ECS Cluster
- [ ] Create Task Definition
- [ ] Create ECS Service with Fargate
- [ ] Set up Application Load Balancer
- [ ] Configure RDS PostgreSQL instance
- [ ] Set up VPC, Security Groups, and networking
- [ ] Configure environment variables with AWS Secrets Manager

#### Option B: AWS EC2 (Simpler, more traditional)

- [ ] Launch EC2 instance
- [ ] Install Docker on EC2
- [ ] Set up RDS PostgreSQL
- [ ] Configure security groups
- [ ] Deploy using Docker Compose on EC2
- [ ] Set up Nginx as reverse proxy (optional)

#### Option C: AWS App Runner (Simplest)

- [ ] Create App Runner service from ECR image
- [ ] Configure auto-scaling
- [ ] Set up RDS PostgreSQL
- [ ] Connect services

#### Additional AWS Tasks

- [ ] Set up custom domain with Route 53 (optional)
- [ ] Configure SSL/TLS certificates with ACM
- [ ] Set up CloudWatch for logging and monitoring
- [ ] Implement auto-scaling policies
- [ ] Set up cost alerts and budgets

#### Key Concepts to Learn

- AWS IAM (roles, policies, users)
- VPC, subnets, security groups
- Container orchestration (ECS/Fargate)
- Managed database services (RDS)
- Load balancing and auto-scaling
- Infrastructure as Code basics (consider Terraform/CloudFormation later)

#### Resources

- [AWS ECS Getting Started](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started.html)
- [Deploying Node.js to AWS](https://aws.amazon.com/getting-started/hands-on/deploy-nodejs-web-app/)
- [AWS Free Tier](https://aws.amazon.com/free/)

---

### Phase 6: Advanced Improvements (Bonus)

**Goal**: Level up with production-grade enhancements

#### Tasks

- [ ] Add ESLint and Prettier for code quality
- [ ] Implement request validation (Zod or Joi)
- [ ] Add API documentation (Swagger/OpenAPI)
- [ ] Implement rate limiting
- [ ] Add structured logging (Winston or Pino)
- [ ] Set up error monitoring (Sentry)
- [ ] Implement database connection pooling
- [ ] Add Redis for caching (optional)
- [ ] Implement soft deletes for todos
- [ ] Add pagination for todo lists

---

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd prismalearning

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and JWT secret

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

### Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/todoapp"
JWT_SECRET="your-secret-key"
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### Todos (Protected - requires JWT)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todo` | Get all todos for user |
| POST | `/api/todo` | Create a new todo |
| PUT | `/api/todo/:id` | Update a todo |
| DELETE | `/api/todo/:id` | Delete a todo |

---

## Project Structure

```
prismalearning/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── src/
│   ├── config/             # Configuration files
│   ├── controllers/        # Route handlers
│   ├── middlewares/        # Express middlewares
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── server.ts           # App entry point
├── package.json
├── tsconfig.json
└── README.md
```

---

## Progress Tracker

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 1: Prisma & SQL | ✅ Done | 100% |
| Phase 2: Docker | 🔄 In Progress | 0% |
| Phase 3: Testing | ⏳ Pending | 0% |
| Phase 4: CI/CD | ⏳ Pending | 0% |
| Phase 5: AWS | ⏳ Pending | 0% |
| Phase 6: Advanced | ⏳ Pending | 0% |

---

## License

ISC
