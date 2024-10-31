create-sopi-app
create-sopi-app is a command-line tool that quickly scaffolds a new Next.js 14 project with TypeScript and ShadCN pre-installed. It’s designed for developers who want a streamlined way to set up projects with these technologies, with an optional integration for Prisma ORM.

Features
Next.js 14 with TypeScript: Start with the latest version of Next.js configured for TypeScript.
ShadCN Integrated: Styling and components are pre-installed for fast UI development.
Optional Prisma ORM Setup: Add Prisma ORM to your project with a single prompt, including a default .env.example and Prisma schema.
Easy and Fast Setup: Scaffold new projects instantly by running npx create-sopi-app.
Prerequisites
Node.js: Make sure you have Node.js installed (v14 or above).
npm: Recommended version is 6 or above (comes bundled with Node.js).
Installation
create-sopi-app can be run directly with npx without installation:

bash
Copy code
npx create-sopi-app
Usage
Running npx create-sopi-app will guide you through a few setup questions, and then it will create a new project directory based on your answers.

Run the CLI:
bash
Copy code
npx create-sopi-app
Follow the prompts:
Enter your project name (default: my-sopi-app).
Choose whether you want to add Prisma ORM to your project.
Start Developing:
After setup, navigate to your project directory and start the development server:
bash
Copy code
cd <your-project-name>
npm run dev
Project Structure
Your generated project will have the following structure:

csharp
Copy code
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
Example Output
Here's an example of the commands generated by the CLI:

vbnet
Copy code
$ npx create-sopi-app
Creating your Sopi Next.js app...
? Enter your project name: my-awesome-app
? Would you like to add Prisma ORM to the project? (Y/n) Y
Adding Prisma ORM...
Installing dependencies...
Setup complete! Run your app with the following commands:
  cd my-awesome-app
  npm run dev
Contributing
We welcome contributions! Feel free to fork this repository and submit pull requests. Please ensure your changes align with the project’s goals and follow the established coding standards.

Development Setup
Clone the repository:
bash
Copy code
git clone https://github.com/sepehrshapouri/create-sopi-app.git
Install dependencies:
bash
Copy code
npm install
Test the script locally:
bash
Copy code
node create-sopi-app.js
License
This project is licensed under the MIT License.
