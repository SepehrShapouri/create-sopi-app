#!/usr/bin/env node
const { execSync } = require('child_process');
const inquirer = require('inquirer');
const degit = require('degit');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Creating your Sopi Next.js app...');

  // Prompt for project name
  const { projectName, usePrisma } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
      default: 'my-sopi-app'
    },
    {
      type: 'confirm',
      name: 'usePrisma',
      message: 'Would you like to add Prisma ORM to the project?',
      default: false
    }
  ]);

  // Clone the base template using degit
  const emitter = degit('your-username/sopi-template', { cache: false, force: true });
  await emitter.clone(projectName);

  // Navigate to the new project directory
  const projectPath = path.join(process.cwd(), projectName);

  // Create additional files if Prisma is chosen
  if (usePrisma) {
    console.log('Adding Prisma ORM...');
    
    // Install Prisma
    execSync(`cd ${projectPath} && npm install prisma @prisma/client`, { stdio: 'inherit' });

    // Create Prisma folder and files
    fs.mkdirSync(path.join(projectPath, 'prisma'));
    fs.writeFileSync(path.join(projectPath, 'prisma', 'schema.prisma'), `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }
      
      generator client {
        provider = "prisma-client-js"
      }

      // Add your models here
    `);
    
    // Add example .env file
    fs.writeFileSync(path.join(projectPath, '.env.example'), 'DATABASE_URL="postgresql://user:password@localhost:5432/mydb"');
    console.log('.env.example and Prisma schema have been added.');
  }

  // Install project dependencies
  console.log('Installing dependencies...');
  execSync(`cd ${projectPath} && npm install`, { stdio: 'inherit' });

  console.log('Setup complete! Run your app with the following commands:');
  console.log(`cd ${projectName}`);
  console.log(`npm run dev`);
})();
