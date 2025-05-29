import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  external = false,
  icon,
  iconPosition = 'left',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    gradient: 'btn-gradient',
    ghost: 'btn-ghost',
  };

  const baseClasses = `btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={to} className={baseClasses}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <a
          href={href}
          className={baseClasses}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {buttonContent}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
};