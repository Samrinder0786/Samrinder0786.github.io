'use client';
import { useState } from 'react';
import styles from './CodeSnippetForm.module.css';

export default function CodeSnippetForm() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log({ code, language });
      setIsSubmitting(false);
      setCode('');
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Share Your Code</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="language" className={styles.label}>
            Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={styles.select}
            required
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="code" className={styles.label}>
            Your Code
          </label>
          <textarea
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={styles.textarea}
            rows={10}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Sharing...' : 'Share Snippet'}
        </button>
      </form>
    </div>
  );
}