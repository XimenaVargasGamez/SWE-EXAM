# Software Engineer Test | Ximena Vargas Gámez | 2025

**About the Project**
This is a Next.js application built for the LKMX Software Engineer recruitment test, demonstrating web development practices, and database integration. For the development of it, the following stack was used:

- Next.js
- Tailwind CSS
- Supabase
- Prisma
- Docker

Deployment
- Google Cloud

Design Tools
- Figma (https://www.figma.com/design/QI76Urfa8vo4vcfwkJD1Xx/Examen-LKMX?node-id=0-1&t=5SmTF0Ij5FxwkIwT-1)


*NOTE*
The comments made throught the files were generated with Claude AI


**Project Requirements**

1. Project:
   - Next.js + TypeScript
   - Separate structure
2. Docker
   - Dockerfile for the app
   - docker-compose with:
     Next.js app
     PostgreSQL database
3. Endpoints
   - GET /api/health (status check)
   - GET /api/users and POST /api/users (PostgreSQL connection)
   - GET /api/analytics (additional business logic)
4. Interface
   - Page displaying a list of users
   - Form to create/update users
   - Styling with Tailwind or another library (optional)


**Project Requirement Validation**

**1. Project Structure - COMPLETED**
    - Next.js + TypeScript implemented in `src/` directory
    - Organized structure: components, services, types, lib, and app folders

**2. Docker - COMPLETED**
    - Dockerfile with production optimizations
    - docker-compose.yml with Next.js app

**3. Endpoints - COMPLETED**
    - `/api/health` - System health check
    - `/api/users` - User CRUD operations with PostgreSQL
    - `/api/analytics` - Business logic and data aggregation

**4. Interface - COMPLETED**
    - User list page (`/usuarios/list`)
    - User registration form (`/usuarios/register`)
    - Full Tailwind CSS styling throughout


**Project Structure**

```
my-next-app/
├── src/
│   ├── app/                   # Next.js App Router
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


**Steps to Opening**

1. Clone repository with:
   git clone https://github.com/XimenaVargasGamez/SWE-EXAM.git
   cd my-next-app

2. If necesary modify environment variables.

3. In your terminal run the following command: docker-compose up -d
   (If you can’t find your terminal do:
   [for Windows] Ctrl + `
   [for Mac] Cmd + J)

4. This command builds the image for the application

5. Access the app through: localhost:3000


**Future Improvements**

- Security: Current, the project lacks any security mechanisms, implementing appropriate measures, such as authentication and authorization, would significantly impact the system.

- Performance Optimization: The application currently exhibits slow execution, therefore applying performance optimization techniques would improve responsiveness and overall user experience.

- Code Quality: As this was the first time Next.js was utilized, combined with tight time constraints, the resulting codebase is not as clean or maintainable as desired. Refactoring the code to adhere to the best practices would improve readability, maintainability, and scalability.
