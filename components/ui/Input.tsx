'use client';

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from 'react';

interface BaseInputProps {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseInputProps {}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, Omit<BaseInputProps, 'leftIcon' | 'rightIcon'> {}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, BaseInputProps {
  options: { value: string; label: string }[];
}

const baseInputStyles = `
  w-full px-4 py-3 rounded-xl
  bg-primary-800/50 border border-steel-700/50
  text-white placeholder-steel-500
  focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500
  transition-all duration-200
  disabled:opacity-50 disabled:cursor-not-allowed
`;

const labelStyles = 'block text-sm font-medium text-steel-300 mb-2';
const errorStyles = 'border-error focus:ring-error/50 focus:border-error';
const hintStyles = 'text-xs text-steel-500 mt-1';
const errorTextStyles = 'text-xs text-error mt-1';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className={labelStyles}>
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-500">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`
              ${baseInputStyles}
              ${error ? errorStyles : ''}
              ${leftIcon ? 'pl-11' : ''}
              ${rightIcon ? 'pr-11' : ''}
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-steel-500">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className={errorTextStyles}>{error}</p>}
        {hint && !error && <p className={hintStyles}>{hint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className={labelStyles}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={`
            ${baseInputStyles}
            ${error ? errorStyles : ''}
            min-h-[120px] resize-y
            ${className}
          `}
          {...props}
        />
        {error && <p className={errorTextStyles}>{error}</p>}
        {hint && !error && <p className={hintStyles}>{hint}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, leftIcon, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className={labelStyles}>
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-500 pointer-events-none">
              {leftIcon}
            </div>
          )}
          <select
            ref={ref}
            id={inputId}
            className={`
              ${baseInputStyles}
              ${error ? errorStyles : ''}
              ${leftIcon ? 'pl-11' : ''}
              appearance-none cursor-pointer
              ${className}
            `}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-steel-500 pointer-events-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && <p className={errorTextStyles}>{error}</p>}
        {hint && !error && <p className={hintStyles}>{hint}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Input;
