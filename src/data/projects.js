export const projects = [
  {
    id: 1,
    title: "Librento (Library Management System)",
    description:
      "Librento is a comprehensive library management system built to handle book and member operations efficiently. It includes user login/signup, member and book CRUD operations, borrow/return tracking, and a modern dashboard with real-time stats, charts, and logs. Developed using MERN stack and Redux Toolkit, the app emphasizes clean UI/UX, role-based access, and fast, reactive state management.",
    image: "/librento.png",
    tech: ["React", "Node.js", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/swastikpratik/librento",
    demo: "https://librento.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "EzyBuy (E-Commerce Platform)",
    description:
      "EzyBuy is a full-stack e-commerce web application designed to deliver a seamless shopping experience. It features user authentication, a dynamic product catalog, category-based filtering, search functionality, and a secure Stripe-powered payment gateway. The platform also includes a robust admin panel for managing inventory, orders, and real-time analytics. Built with a scalable architecture using TypeScript, React, Node.js, and MongoDB.",
    image: "/ezybuy.png",
    tech: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "RTK",
    ],
    github: "https://github.com/swastikpratik/ezybuy",
    demo: "https://ezy-buy-frontend.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "FuelTheGrind (Micro-donation Platform)",
    description:
      "FuelTheGrind is a minimal and efficient donation platform designed for creators and freelancers. It supports secure Razorpay payments, real-time success/failure tracking, and user authentication using NextAuth. The UI is clean and responsive, optimized for quick transactions and engagement. Built with Next.js and Tailwind CSS, it provides a scalable and developer-friendly micro-funding experience.",
    image: "/fuelthegrind.png",
    tech: ["Next.js", "Tailwind CSS", "Razorpay", "NextAuth"],
    github: "https://github.com/swastikpratik/fuelthegrind",
    demo: "https://fuelthegrind.vercel.app",
    featured: true,
  },
];
