#!/usr/bin/env bash
set -euo pipefail

# Configuration des chemins
APP_DIR="/home/user/Documents/jouskaio.me/WEB-Jouskaio.me"
SRC_DIR="${GITHUB_WORKSPACE:-}"

echo "🚀 Début du déploiement..."

# Synchronisation ou Mise à jour Git
if [ -n "${SRC_DIR}" ] && [ -d "${SRC_DIR}" ]; then
    echo "📦 Mode self-hosted: synchronisation depuis GITHUB_WORKSPACE"
    rsync -av --delete \
        --exclude ".git" \
        --exclude ".github" \
        --exclude "node_modules" \
        --exclude ".next" \
        --exclude "dist" \
        --exclude "storybook-static" \
        --exclude ".env" \
        --exclude ".env.local" \
        --exclude ".env.production" \
        "${SRC_DIR}/" "${APP_DIR}/"
else
    echo "📡 Mode remote: mise à jour via Git"
    cd "${APP_DIR}"
    git fetch origin
    git reset --hard origin/main
fi

cd "${APP_DIR}"

# Nettoyage des builds précédents
echo "🧹 Nettoyage des anciens builds..."
find . -name ".next" -type d -prune -exec rm -rf {} +
find . -name "dist" -type d -prune -exec rm -rf {} +
find . -name "storybook-static" -type d -prune -exec rm -rf {} +

# Installation des dépendances
echo "📥 Installation des dépendances..."
yarn install --frozen-lockfile --ignore-engines

# Build du monorepo
echo "🏗️  Build du monorepo (Turbo)..."
yarn build

# Build de Storybook
echo "📚 Build de Storybook..."
export NODE_OPTIONS="--max-old-space-size=4096"
yarn workspace @jouskaio/ui build-storybook
unset NODE_OPTIONS

# Relance des services PM2
echo "🔄 Redémarrage des services PM2..."
if command -v pm2 > /dev/null; then
    # Suppression des anciens processus pour éviter les conflits de configuration
    pm2 delete WEB-jouskaio.me WEB-storybook || true
    pm2 start apps/web/ecosystem.config.js --update-env
    pm2 save
else
    echo "⚠️ PM2 n'est pas installé, les services n'ont pas été redémarrés."
fi

echo "✅ Déploiement terminé avec succès !"
