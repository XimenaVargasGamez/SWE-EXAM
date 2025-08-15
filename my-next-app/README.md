# Software Engineer Test - Next.js Application

This is a comprehensive Next.js application built for the Software Engineer recruitment test, demonstrating modern web development practices, containerization, and database integration.

## 🏗️ Project Overview

This application showcases:

- **Next.js 15** with TypeScript and App Router
- **PostgreSQL** database with Prisma ORM
- **Docker** containerization for both app and database
- **RESTful API** endpoints with proper error handling
- **Modern UI** with Tailwind CSS and responsive design
- **Real-time analytics** and user management system

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Docker and Docker Compose
- PostgreSQL (if running locally without Docker)

### Option 1: Local Development (Recommended for Development)

1. **Clone and install dependencies:**

```bash
git clone <your-repo-url>
cd my-next-app
npm install
```

2. **Set up environment variables:**

```bash
cp .env.example .env.local
# Edit .env.local with your database credentials
```

3. **Set up database:**

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed database (optional)
npx prisma db seed
```

4. **Start development server:**

```bash
npm run dev
```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Docker Deployment (Recommended for Production)

1. **Build and start all services:**

```bash
docker-compose up --build
```

2. **Access the application:**

- **Next.js App**: [http://localhost:3000](http://localhost:3000)
- **PostgreSQL**: localhost:5432
- **Database Credentials**:
  - Database: `mynextapp`
  - Username: `postgres`
  - Password: `postgres123`

3. **Stop services:**

```bash
docker-compose down
```

## 📁 Project Structure

```
my-next-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API endpoints
│   │   │   ├── health/        # Health check endpoint
│   │   │   ├── users/         # User management API
│   │   │   └── analytics/     # Analytics API
│   │   ├── usuarios/          # User management pages
│   │   ├── analiticas/        # Analytics dashboard
│   │   └── salud/             # System health page
│   ├── components/            # Reusable UI components
│   ├── services/              # Business logic services
│   ├── types/                 # TypeScript type definitions
│   └── lib/                   # Utility libraries (database)
├── prisma/                    # Database schema and migrations
├── Dockerfile                 # Application container
├── docker-compose.yml         # Multi-service orchestration
└── README.md                  # This file
```

## 🔌 API Endpoints

### Health Check

- **GET** `/api/health` - System health and database connectivity

### User Management

- **GET** `/api/users` - Retrieve all users
- **POST** `/api/users` - Create new user
  ```json
  {
    "username": "string",
    "email": "string"
  }
  ```

### Analytics

- **GET** `/api/analytics` - System analytics
  - Total users count
  - New users in last 7 days

## 🗄️ Database Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  username  String   @unique
  createdAt DateTime @default(now())
}
```

## 🐳 Docker Configuration

### Services

- **app**: Next.js application (port 3000)
- **postgres**: PostgreSQL 15 database (port 5432)

### Features

- Multi-stage Docker builds for optimization
- Health checks for both app and database
- Persistent volume for database data
- Proper networking between services

### Commands

```bash
# Build and start
docker-compose up --build

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

## 🧪 Testing

### Running Tests

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

```bash
npm run test:coverage
```

## 📊 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
npm run db:studio    # Open Prisma Studio

# Testing
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 🌍 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
DIRECT_URL="postgresql://username:password@localhost:5432/database_name"

# Next.js
NODE_ENV="development"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

## 🚀 Deployment

### Google Cloud Run (Recommended)

1. **Build and push Docker image:**

```bash
# Build image
docker build -t gcr.io/YOUR_PROJECT_ID/my-next-app .

# Push to Google Container Registry
docker push gcr.io/YOUR_PROJECT_ID/my-next-app
```

2. **Deploy to Cloud Run:**

```bash
gcloud run deploy my-next-app \
  --image gcr.io/YOUR_PROJECT_ID/my-next-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1
```

### Alternative: Vercel

```bash
npm install -g vercel
vercel --prod
```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Failed**

   - Ensure PostgreSQL is running
   - Check environment variables
   - Verify database credentials

2. **Docker Build Fails**

   - Clear Docker cache: `docker system prune -a`
   - Ensure Docker has sufficient resources

3. **Prisma Migration Issues**
   - Reset database: `npx prisma migrate reset`
   - Regenerate client: `npx prisma generate`

### Logs and Debugging

```bash
# View application logs
docker-compose logs app

# View database logs
docker-compose logs postgres

# Access database directly
docker-compose exec postgres psql -U postgres -d mynextapp
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Docker Documentation](https://docs.docker.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is created for the Software Engineer recruitment test.

---

**Note**: This application demonstrates professional software engineering practices including proper architecture, containerization, database design, and API development. It's designed to showcase skills in modern web development and DevOps practices.
