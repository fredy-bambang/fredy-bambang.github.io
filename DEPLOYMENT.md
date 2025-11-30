# 🚀 Deployment Guide - Local Build Workflow

## ✅ Deployment Berhasil!

Website Anda sudah di-push ke GitHub dan akan live di:
**https://fredy-bambang.github.io/**

---

## 📋 Workflow Deployment Lokal

### Option 1: Automatic dengan Script (Recommended)

```bash
# Jalankan script deploy
./quick-deploy.sh "Your commit message"

# Contoh:
./quick-deploy.sh "Update experience section"
./quick-deploy.sh "Add new project"
```

Script ini akan otomatis:
1. Build project
2. Copy files ke root
3. Commit dan push ke GitHub

### Option 2: Manual Step-by-Step

```bash
# 1. Build project
cd project
npm run build

# 2. Copy build files ke root
cd ..
rm -rf assets
cp -r dist/assets assets
cp dist/index.html index.html
rm -rf dist

# 3. Git commit & push
git add .
git commit -m "Update website"
git push origin main
```

---

## 🔄 Workflow Sehari-hari

### Update Konten
1. Edit file: `project/src/data/professional.ts`
2. Test lokal: `cd project && npm run dev`
3. Deploy: `./quick-deploy.sh "Update content"`

### Update Styling
1. Edit: `project/tailwind.config.js` atau component files
2. Test lokal: `cd project && npm run dev`
3. Deploy: `./quick-deploy.sh "Update design"`

### Update Component
1. Edit component di `project/src/components/` atau `project/src/views/`
2. Test lokal
3. Deploy

---

## 🎯 Quick Commands

```bash
# Development
cd project
npm run dev          # Start dev server at localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
./quick-deploy.sh "message"   # Build & deploy automatically

# Git
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push origin main # Push to GitHub
```

---

## 📝 Checklist Update Website

Setiap kali mau update:

- [ ] Edit content di `project/src/data/professional.ts`
- [ ] Test dengan `npm run dev` di folder project
- [ ] Check di browser (http://localhost:5173)
- [ ] Kalau OK, jalankan `./quick-deploy.sh "Update message"`
- [ ] Tunggu 1-2 menit, refresh https://fredy-bambang.github.io/

---

## 🐛 Troubleshooting

### Build Error
```bash
cd project
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Git Conflict
```bash
git status
git add .
git commit -m "Fix conflict"
git push origin main
```

### Website Tidak Update
1. Clear browser cache (Ctrl+Shift+R)
2. Wait 2-3 minutes untuk GitHub Pages propagate
3. Check commit di GitHub repository

---

## 📂 File Structure

```
fredy-bambang.github.io/
├── index.html              ← Built file (auto-generated)
├── assets/                 ← Built assets (auto-generated)
├── project/                ← Source code (edit here!)
│   ├── src/
│   │   ├── data/
│   │   │   └── professional.ts  ← UPDATE YOUR DATA HERE!
│   │   ├── components/
│   │   ├── views/
│   │   └── ...
│   └── package.json
├── quick-deploy.sh         ← Deployment script
└── DEPLOYMENT.md          ← This file
```

---

## 🎨 Common Updates

### Add New Experience
Edit `project/src/data/professional.ts`:
```typescript
export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Your New Company',
    position: 'Your Position',
    // ... etc
  },
  // ... existing experiences
]
```

### Add New Project
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'New Project',
    description: '...',
    technologies: ['Tech1', 'Tech2'],
    featured: true
  },
  // ... existing projects
]
```

### Update Skills
```typescript
export const skills = {
  languages: ['Go', 'PHP', 'TypeScript', 'JavaScript'],
  frameworks: ['Symfony', 'Laravel', 'Vue.js'],
  // ... etc
}
```

---

## 💡 Pro Tips

1. **Always test locally** dengan `npm run dev` sebelum deploy
2. **Commit often** dengan descriptive messages
3. **Keep backup** - Git sudah otomatis backup setiap commit
4. **Clear browser cache** kalau changes tidak muncul
5. **Check console** di browser DevTools untuk errors

---

## 🎊 Status Deployment

✅ GitHub Actions: **DISABLED** (manual build saja)
✅ Local Build: **ACTIVE**
✅ GitHub Pages: **ACTIVE**
✅ Domain: **https://fredy-bambang.github.io/**

---

## 🚀 Next Time You Want to Update

```bash
# 1. Edit your data
code project/src/data/professional.ts

# 2. Test locally
cd project && npm run dev

# 3. Deploy
cd .. && ./quick-deploy.sh "Update: added new project"
```

That's it! Simple! 🎉
