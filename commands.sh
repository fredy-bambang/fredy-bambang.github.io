#!/bin/bash

# Quick Start Commands for Fredy Bambang Personal Website
# ========================================================

echo "🚀 Fredy Bambang Personal Website - Quick Commands"
echo "=================================================="
echo ""

# Development
alias dev="cd project && npm run dev"
alias build="cd project && npm run build"
alias preview="cd project && npm run preview"

# Common Tasks
alias install="cd project && npm install"
alias clean="cd project && rm -rf node_modules dist && npm install"
alias check="cd project && npm run type-check"

# Git
alias push="git add . && git commit -m 'Update content' && git push origin main"
alias status="git status"

echo "Available commands:"
echo ""
echo "  dev       - Start development server"
echo "  build     - Build for production"
echo "  preview   - Preview production build"
echo "  install   - Install dependencies"
echo "  clean     - Clean install (if errors)"
echo "  check     - TypeScript type check"
echo "  push      - Git add, commit, push to main"
echo "  status    - Git status"
echo ""
echo "Quick Start:"
echo "  1. cd project"
echo "  2. npm install"
echo "  3. npm run dev"
echo "  4. Open http://localhost:5173"
echo ""
echo "Deploy:"
echo "  git push origin main"
echo "  (GitHub Actions will auto-deploy)"
echo ""
