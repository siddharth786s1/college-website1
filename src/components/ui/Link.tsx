import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  ...props 
}) => {
  // You would typically use a router link component here (e.g., from React Router)
  // For now, we'll use a regular anchor tag
  return (
    <a 
      href={href} 
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};