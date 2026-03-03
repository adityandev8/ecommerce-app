# Swag Labs E-Commerce App (React + Vite)

A simple e-commerce frontend inspired by the famous [Sauce Demo](https://www.saucedemo.com/) testing site.

Built with modern React tools to practice routing, state management, persistence, and responsive UI.

![Products Page Screenshot](public/products-screenshot.png)  
*(Add a screenshot later if you want)*

## Features

- User login (classic Sauce Demo credentials)
- Product listing with sorting (A→Z, Z→A, low→high, high→low)
- Product detail page
- Add / Remove from cart toggle
- Persistent cart using localStorage (survives refresh & tab close)
- Cart page with quantity controls & total
- Responsive header (centered title + right-aligned cart icon with badge)
- Footer with social links (hidden on login page)
- React Router for navigation
- Tailwind CSS for styling

## Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: react-router-dom v6
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: lucide-react
- **Persistence**: browser localStorage
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ecommerceapp.git
cd ecommerceapp

# Install dependencies
npm install
# or
yarn install