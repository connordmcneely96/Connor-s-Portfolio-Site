#!/bin/bash

echo "🔍 Verifying Developer Content Changes"
echo "======================================="
echo ""

# Check files
echo "✓ Checking files..."

if grep -q "Full-Stack Developer" app/page.tsx; then
    echo "  ✅ Homepage subtitle added"
else
    echo "  ❌ Homepage subtitle NOT found"
fi

if grep -q "Technical Stack" app/page.tsx; then
    echo "  ✅ Technical Stack section added"
else
    echo "  ❌ Technical Stack section NOT found"
fi

if [ ! -d "app/coaching" ]; then
    echo "  ✅ Coaching directory removed"
else
    echo "  ❌ Coaching directory still exists"
fi

if ! grep -q "Coaching" app/components/Navigation.tsx; then
    echo "  ✅ Coaching link removed from navigation"
else
    echo "  ❌ Coaching link still in navigation"
fi

if grep -q "Professional Dashboard" app/dashboard/page.tsx; then
    echo "  ✅ Dashboard updated"
else
    echo "  ❌ Dashboard NOT updated"
fi

if grep -q "Full-Stack Developer | AI Engineer" app/layout.tsx; then
    echo "  ✅ Metadata updated"
else
    echo "  ❌ Metadata NOT updated"
fi

echo ""
echo "✓ Checking deployment files..."

if [ -f ".github/workflows/cloudflare-production.yml" ]; then
    echo "  ✅ Cloudflare workflow created"
else
    echo "  ❌ Cloudflare workflow NOT found"
fi

if [ -f "DEPLOYMENT_GUIDE.md" ]; then
    echo "  ✅ Deployment guide created"
else
    echo "  ❌ Deployment guide NOT found"
fi

echo ""
echo "======================================="
echo "Verification complete!"
echo ""
echo "Next steps:"
echo "1. Run: npm run dev"
echo "2. Open: http://localhost:3000"
echo "3. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)"
