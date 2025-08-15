# Software Engineer Test | Ximena Vargas Gámez | 2025

**About the Project**
This is a Next.js application built for the LKMX Software Engineer recruitment test, demonstrating web development practices, and database integration. For the development of it, the following stack was used: 

- Next.js
- Tailwind CSS
- PostgreSQL
    Supabase
- Prisma
- Docker

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

4. This command builds images for both the database and the application, 

5. Access the app through: localhost:3000

**Future Improvements**
- Security: Current, the project lacks any security mechanisms, implementing appropriate measures, such as authentication and authorization, would significantly impact the system.

- Performance Optimization: The application currently exhibits slow execution, therefore applying performance optimization techniques would improve responsiveness and overall user experience.

- Code Quality: As this was the first time Next.js was utilized, combined with tight time constraints, the resulting codebase is not as clean or maintainable as desired. Refactoring the code to adhere to the best practices would improve readability, maintainability, and scalability.