#!/bin/bash

# Function to prompt for project name
get_project_name() {
  read -p "Enter the project name: " projectName
}

# Function to display the menu and get user's choice
display_menu() {
  echo "Select an action:"
  echo "1. Clean"
  echo "2. Install"
  echo "3. Build"
  echo "4. Deploy"
  read -p "Enter your choice (1-4): " choice
}

# Function to handle cleaning options
clean_options() {
  echo "Select a clean option:"
  echo "1. Clean package"
  echo "2. Clean app"
  echo "3. Clean server"
  echo "4. Clean nodes"
  echo "5. Clean all"
  read -p "Enter your choice (1-5): " clean_choice

  case $clean_choice in
    1) rm -rf packages/**/dist;;
    2) rm -rf "apps/${projectName}/.next" "apps/${projectName}/out";;
    3) rm -rf servers/dist;;
    4) rm -rf pnpm-lock.yaml bun.lockb node_modules apps/**/node_modules packages/**/node_modules servers/node_modules;;
    5) 
      rm -rf packages/**/dist
      rm -rf "apps/${projectName}/.next" "apps/${projectName}/out"
      rm -rf servers/dist
      rm -rf pnpm-lock.yaml bun.lockb node_modules apps/**/node_modules packages/**/node_modules servers/node_modules
      ;;
    *) echo "Invalid choice";;
  esac
}

# Get project name from the user
get_project_name

# Display menu and get user's choice
display_menu

case $choice in
  1) 
    clean_options
    ;;
  2)
    echo "### Installing dependencies..."
    pnpm install
    pnpm pre:db
    pnpm pre:gql
    pnpm pre:build
    ;;
  3)
    echo "### Building app..."
    pnpm "app:${projectName}" build
    ;;
  4)
    echo "### Preparing app..."
    rm "app-${projectName}.7z"
    mv "apps/${projectName}/.next/static" "apps/${projectName}/.next/standalone/apps/${projectName}/.next/static"
    cp -r "apps/${projectName}/public" "apps/${projectName}/.next/standalone/apps/${projectName}/public"
    cd "apps/${projectName}/.next/standalone" || exit
    echo "### Compressing..."
    7z a -t7z "app-${projectName}.7z" *
    echo "### Compression complete: app-${projectName}.7z"
    mv "app-${projectName}.7z" "../../../../app-${projectName}.7z"
    ;;
  *)
    echo "Invalid choice"
    ;;
esac

echo "### DONE ###"
read -n 1 -s -r -p "Press any key to exit ..."
exit
