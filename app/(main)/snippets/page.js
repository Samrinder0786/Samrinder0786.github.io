'use client';
import CodeSnippetForm from '@/components/CodeSnippetForm';
import styles from './snippets.module.css'; // Correct import path

export default function SnippetsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Share Code Snippet</h1>
      <CodeSnippetForm />
    </div>
  );
}