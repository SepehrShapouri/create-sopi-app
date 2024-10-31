# create-sopi-app

🚀 A command-line tool to scaffold a Next.js 14 project pre-configured with TypeScript and ShadCN, designed to help you set up your projects quickly. It also offers an optional Prisma ORM integration for data modeling.

## ✨ Features

- Next.js 14 with TypeScript pre-configured
- ShadCN styles and components pre-installed for UI consistency
- Optional Prisma ORM setup, including `.env.example` and Prisma schema
- Zero config: All dependencies installed and configurations handled for you

## 📋 Prerequisites

- Node.js v14 or higher
- npm v6 or higher (comes with Node.js)

## 🛠️ Installation

You can run `create-sopi-app` directly with npx:

```bash
npx create-sopi-app
```

## 🧑‍💻 Usage

Running `npx create-sopi-app` will guide you through a few setup questions and generate a new project directory based on your responses.

1. **Run the CLI:**

   ```bash
   npx create-sopi-app
   ```

2. **Answer Prompts:**
   - Project name: Specify the name for your new project.
   - Prisma ORM: Choose if you want to add Prisma ORM for database management.

3. **Start Developing:**
   Navigate to the project folder and run the development server:

   ```bash
   cd <your-project-name>
   npm run dev
   ```

## 📂 Project Structure

Your generated project will have the following structure:

```
<project-name>/
├── .env.example          # Environment variable template
├── prisma/               # Prisma directory (if selected)
│   └── schema.prisma     # Basic Prisma schema
├── public/               # Public assets
├── src/                  # Main project files
│   ├── pages/            # Next.js pages
│   ├── components/       # ShadCN components
│   └── styles/           # Global styles
├── package.json
└── tsconfig.json         # TypeScript configuration
```

## Example Output

```bash
$ npx create-sopi-app
Creating your Sopi Next.js app...
? Enter your project name: my-awesome-app
? Would you like to add Prisma ORM to the project? (Y/n) Y
Adding Prisma ORM...
Installing dependencies...
Setup complete! Run your app with the following commands:
  cd my-awesome-app
  npm run dev
```

## 🤝 Contributing

Contributions are welcome! Follow the steps below to set up the development environment:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/create-sopi-app.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Test locally:
   ```bash
   node create-sopi-app.js
   ```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.