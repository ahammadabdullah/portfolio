# Portfolio Deployment Guide

This guide covers how to deploy both versions of your portfolio to different platforms.

## 🚀 V1 (Original) Deployment

### Vercel Deployment (Recommended)

1. **Connect to GitHub**:

   - Push your V1 code to GitHub
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Set the project name to `portfolio-v1`

2. **Configure Environment Variables**:

   ```
   EMAIL_JS_SERVICE_ID=your_service_id
   EMAIL_JS_TEMPLATE_ID=your_template_id
   EMAIL_JS_PUBLIC_KEY=your_public_key
   ```

3. **Build Settings**:

   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Custom Domain**:
   - Add your main domain (e.g., `ahammadabdullah.com`)
   - Configure DNS records

## 🚀 V2 (Modern) Deployment

### Vercel Deployment for V2

1. **Connect V2 to GitHub**:

   - Push your V2 code to a separate GitHub repository
   - Import the V2 repository in Vercel
   - Set the project name to `portfolio-v2`

2. **Configure Environment Variables**:

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Build Settings**:

   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Custom Domain**:
   - Add subdomain `v2.ahammadabdullah.com`
   - Configure DNS records

## 🌍 DNS Configuration

### For Main Domain (V1)

```
Type: A
Name: @
Value: 76.76.19.61 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For V2 Subdomain

```
Type: CNAME
Name: v2
Value: cname.vercel-dns.com
```

## 📝 Update Version Switcher URLs

After deployment, update the URLs in both version switchers:

### V1 VersionSwitcher.tsx

```typescript
const versions = [
  {
    version: "V1",
    url: "https://ahammadabdullah.com",
    label: "Original",
    current: true,
  },
  { version: "V2", url: "https://v2.ahammadabdullah.com", label: "Modern" },
];
```

### V2 VersionSwitcher.tsx

```typescript
const versions = [
  { version: "V1", url: "https://ahammadabdullah.com", label: "Original" },
  {
    version: "V2",
    url: "https://v2.ahammadabdullah.com",
    label: "Modern",
    current: true,
  },
];
```

## 🔧 Alternative Deployment Options

### Netlify

1. **Build Settings**:

   - Build Command: `npm run build`
   - Publish Directory: `out` (for static export)

2. **Add to package.json**:
   ```json
   "scripts": {
     "export": "next build && next export"
   }
   ```

### GitHub Pages

1. **Enable Static Export**:

   - Add `output: 'export'` to `next.config.mjs`
   - Use `npm run build` to generate static files

2. **Deploy**:
   - Push to `gh-pages` branch
   - Enable GitHub Pages in repository settings

## 📊 Performance Optimization

### For Both Versions

1. **Image Optimization**:

   - Use Next.js Image component
   - Compress images before deployment

2. **Bundle Analysis**:

   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

3. **Environment Variables**:
   - Keep sensitive data in environment variables
   - Use different configs for development/production

## 🔐 Security

### HTTPS Configuration

- Both versions will automatically have HTTPS on Vercel
- Custom domains will have SSL certificates auto-generated

### Environment Variables

- Never commit `.env` files
- Use platform-specific environment variable settings

## 📈 Monitoring

### Analytics Setup

1. **Google Analytics**:

   - Add GA4 tracking code
   - Set up environment variables for tracking IDs

2. **Vercel Analytics**:
   - Enable in Vercel dashboard
   - Track performance metrics

## 🎯 SEO Optimization

### Meta Tags

- Both versions include proper meta tags
- Update Open Graph images
- Configure structured data

### Sitemap

- Generate sitemap.xml for both versions
- Submit to Google Search Console

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**:

   - Check Node.js version compatibility
   - Verify all dependencies are installed

2. **Environment Variables**:

   - Ensure all required env vars are set
   - Check variable names match exactly

3. **Domain Issues**:
   - Verify DNS propagation (use online tools)
   - Check SSL certificate status

### Support

- Vercel: Check dashboard for build logs
- GitHub: Review Actions tab for deployment status
- DNS: Use tools like `nslookup` or online DNS checkers

---

_Happy deploying! 🚀_
