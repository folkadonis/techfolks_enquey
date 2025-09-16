# Techfolks Website Inquiry Application

A modern, responsive React application for Techfolks - a professional website building company. This application allows potential clients to inquire about website development services and automatically sends email notifications.

## 🌟 Features

### ✨ Professional Design
- **Modern, Clean Interface**: Contemporary UI with a tech-focused aesthetic
- **Responsive Layout**: Mobile-first design that works on all devices
- **Professional Color Scheme**: Blue and gray tones with accent colors
- **Custom Typography**: Clean, readable fonts with Google Fonts integration

### 🏗️ Core Sections
1. **Header/Navigation**: Company branding with responsive navigation
2. **Hero Section**: Compelling headline with value proposition
3. **Services Overview**: Comprehensive service listings
4. **Why Choose Us**: Company benefits and trust indicators
5. **Portfolio Gallery**: Filterable project showcase
6. **Testimonials**: Auto-playing client testimonials carousel
7. **Contact Form**: Comprehensive inquiry form with validation
8. **Footer**: Company information and links

### 📧 Email Notification System
- **Automated Notifications**: Emails sent to Techfolks for new inquiries
- **Client Auto-Response**: Thank you emails sent to potential clients
- **Professional Templates**: Formatted email templates with all inquiry details
- **EmailJS Integration**: Reliable email delivery service

### 🔧 Technical Features
- **Form Validation**: Real-time validation with helpful error messages
- **Loading States**: Visual feedback during form submission
- **Success/Error Handling**: User-friendly status messages
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Mobile Responsive**: Touch-optimized interface for all devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- EmailJS account (for email functionality)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure EmailJS** (See [EmailJS Setup Guide](./EMAILJS_SETUP.md))
   - Create EmailJS account
   - Set up email service
   - Create email templates
   - Update configuration in `src/services/emailService.ts`

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application should load automatically

## 📧 EmailJS Configuration

The application uses EmailJS for email functionality. Follow these steps:

1. **Create EmailJS Account**: Visit [EmailJS.com](https://www.emailjs.com/)
2. **Setup Email Service**: Connect your email provider
3. **Create Templates**: Set up business notification and client auto-response templates
4. **Update Configuration**: Edit `src/services/emailService.ts` with your credentials

For detailed instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

## 🏗️ Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for best performance.

### `npm test`
Launches the test runner in interactive watch mode.

## 📁 Project Structure

```
techfolks-inquiry/
├── public/
│   ├── index.html          # HTML template with SEO meta tags
│   ├── robots.txt          # Search engine crawler instructions
│   └── manifest.json       # Web app manifest
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Services.tsx    # Services overview
│   │   ├── WhyChooseUs.tsx # Benefits section
│   │   ├── Portfolio.tsx   # Project gallery
│   │   ├── Testimonials.tsx# Client testimonials
│   │   ├── ContactForm.tsx # Inquiry form
│   │   └── Footer.tsx      # Site footer
│   ├── services/
│   │   └── emailService.ts # EmailJS integration
│   ├── App.tsx            # Main application component
│   └── index.css          # Global styles and Tailwind CSS
└── EMAILJS_SETUP.md       # EmailJS configuration guide
```

## 🎨 Customization

### Colors & Branding
- Edit `tailwind.config.js` to customize the color scheme
- Update `src/index.css` for global styles
- Modify component files for specific styling changes

### Content
- Update company information in components
- Modify service offerings in `Services.tsx`
- Customize testimonials in `Testimonials.tsx`
- Edit portfolio items in `Portfolio.tsx`

## 🚀 Deployment

### Production Build
```bash
npm run build
```
This creates a `build` folder with optimized production files.

### Deployment Options
- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Import project for instant deployment
- **Traditional Hosting**: Upload `build` folder contents to your web server

## 🛠️ Technologies Used

- **React 19**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **EmailJS**: Email service integration

## 📞 Contact

**Techfolks Contact Information:**
- **Email**: techfolksweb@gmail.com
- **Phone**: 8838829679
- **Services**: Website Building & Development

---

**Built with ❤️ by Techfolks Team**
