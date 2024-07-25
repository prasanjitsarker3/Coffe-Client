# The Daily Cup

The Daily Cup is an e-commerce website specializing in tea and coffee. The website offers various features including product searching, filtering, product categorization, top products, and similar product recommendations. Users can add multiple products to their cart, proceed to checkout by filling in login information, and selecting a payment option (cash or online). SSL Commerce is integrated for online payments. The website includes dashboards for both users and administrators. Administrators can receive and confirm orders, among other actions. Upon order confirmation, an email containing order details is sent for processing and delivery. Users can provide feedback after receiving their products.

# Table of Contents

Features, Technologies Used, Installation, Environment Variables, Project Structure, Scripts, Contributing

# Features

- Product Management: Search, filter, and view products by category, top products, and similar products.
- Shopping Cart: Add multiple products to the cart.
- Checkout Process: Fill in login information, select payment option (cash or online), and complete the purchase.
- Payment Integration: Utilize SSL Commerce for online payments.
- Admin Dashboard: Manage and confirm orders, send order confirmation and delivery processing emails.
- User Dashboard: View and manage personal orders and provide feedback on products.

# Technologies Used

- Frontend Framework: Next.js
- State Management: Redux, Redux Persist
- UI Components: @nextui-org/react, Tailwind CSS
- Charts and Graphs: ApexCharts, React-ApexCharts
- Form Handling: React Hook Form, @hookform/resolvers
- Animations: Framer Motion
- Date Handling: Day.js
- Utilities: JWT Decode, Zod
- File Handling: Sharp
- PDF Generation: React-to-PDF
- Miscellaneous: React Player, Swiper, Sonner

# Project Structure

`The project is structured as follows:
/the-daily-cup
   /public
   /src
      /app
      /pages
      /layout
      /styles
    /components
    /utils
    /hooks
.env
package.json
tsconfig.json
README.md
`

- /components: Contains React components.
- /pages: Contains Next.js pages.
- /styles: Contains global and component-specific styles.
- /utils: Contains utility functions and constants.

# Installation

Clone the repository:

```js
 git clone https://github.com/prasanjitsarker3/Coffe-Client
 cd the-daily-cup

```

# Install dependencies:

```js
   npm install
```

# Run the development server:

```js
   npm run dev
```

# Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features, enhancements, or bug fixes. For detailed information on how to contribute, please refer to the Contributing Guidelines.

- Github: `https://github.com/prasanjitsarker3/Coffe-Client`
- Live: `https://tea-client.vercel.app`
