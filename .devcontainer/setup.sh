#!/bin/bash
set -e

echo "Setting up Provenarc development environment..."

# Start PostgreSQL if not running
pg_ctlcluster 16 main start 2>/dev/null || true
sleep 2

# Create database and user
sudo -u postgres psql -c "CREATE USER provenarc WITH PASSWORD 'provenarc';" 2>/dev/null || true
sudo -u postgres psql -c "CREATE DATABASE provenarc OWNER provenarc;" 2>/dev/null || true

# Write .env if it doesn't exist
if [ ! -f .env ]; then
  cat > .env << EOF
DATABASE_URL=postgresql://provenarc:provenarc@localhost:5432/provenarc
SESSION_SECRET=provenarc-codespaces-dev-secret
NODE_ENV=development
PORT=5000
EOF
  echo ".env created"
fi

# Push schema to database
npm run db:push

echo ""
echo "✓ Setup complete. Run: npm run dev"
