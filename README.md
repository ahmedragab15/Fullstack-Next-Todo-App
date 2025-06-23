# Full Stack Todo App with Next.js, Prisma, and MongoDB

This is a full-stack todo app built with Next.js, TypeScript, Prisma, and MongoDB. It incorporates various features and technologies to provide a comprehensive example of a modern web application.

## Features

- **Next.js & TypeScript:** Utilizes the power of Next.js for server-side rendering and TypeScript for type safety.
- **Prisma & MongoDB:** Implements Prisma as the database toolkit and MongoDB for data storage.
- **Server Actions:** Implements server-side actions for enhanced functionality.
- **Clerk for Authentication:** Utilizes Clerk for secure and easy authentication.
- **Add Todo to Logged In User:** Ensures that adding todos is restricted to logged-in users only.
- **Database Seeding:** Includes a database seeding mechanism for initial data population.
- **Shadcn UI:** Uses Shadcn UI for pre-built components, enhancing the app's visual appeal.
- **Toggle Dark Mode:** Incorporates a dark mode feature for user customization.
- **CRUD Operations:** Provides basic CRUD (Create, Read, Update, Delete) operations for managing todos.

## <a name="screenshots">📸 Screenshots</a>

   <img src="public/preview/sign-in.png">
  <br />

   <img src="public/preview/todos-darkmode.png" >
  <br />

   <img src="public/preview/todos-lightmode.png" >
  <br /> 
 
   <img src="public/preview/addtodo.png" >
  <br /> 
 
   <img src="public/preview/edittodo.png" >
  <br />

   <img src="public/preview/sign-out.png" >
 

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB server running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmedragab15/Fullstack-Next-Todo-App
   ```

2. Install dependencies:
   `npm install`
   3.Set up environment variables:

   Create a `.env` file in the root directory with the necessary environment variables. Include details such as `MongoDB` connection string, `Clerk API key`, etc.

3. Run the development server:
   `npm run dev`
   Open http://localhost:3000 in your browser to view the app.