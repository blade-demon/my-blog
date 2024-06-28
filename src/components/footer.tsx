import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 徐紫微，权利所有。
      </small>
      <p className="text-xs">
        <span className="font-semibold">关于本博客:</span> 使用 React & Next.js
        (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion,
        React Email & Resend 构建，并托管于 Vercel上。
      </p>
    </footer>
  );
}
