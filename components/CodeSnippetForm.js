'use client';
import { useState } from 'react';
<<<<<<< HEAD
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
=======
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9
import styles from './CodeSnippetForm.module.css';

export default function CodeSnippetForm() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
  const router = useRouter();
  const { addSnippet } = useApp();
=======
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' }
  ];

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Phase 2: simulate API, then add to global state
    setTimeout(() => {
      const newItem = addSnippet({ language, code });
      setIsSubmitting(false);
      setCode('');
      router.push(`/snippets/${newItem.id}`);
    }, 700);
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log({ code, language });
      setIsSubmitting(false);
      setCode('');
    }, 1000);
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Share Your Code</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
<<<<<<< HEAD
          <label htmlFor="language" className={styles.label}>Language</label>
          <select id="language" value={language} onChange={(e)=>setLanguage(e.target.value)} className={styles.select} required>
            {languages.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
=======
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
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9
          </select>
        </div>

        <div className={styles.formGroup}>
<<<<<<< HEAD
          <label htmlFor="code" className={styles.label}>Your Code</label>
          <textarea id="code" value={code} onChange={(e)=>setCode(e.target.value)} className={styles.textarea} rows={10} required />
        </div>

        <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
          {isSubmitting ? 'Sharing…' : 'Share Snippet'}
=======
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
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9
        </button>
      </form>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9
