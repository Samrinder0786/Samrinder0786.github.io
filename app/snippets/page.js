'use client';
import CodeSnippetForm from '@/components/CodeSnippetForm';
import styles from './snippets.module.css';
import { useApp } from '@/context/AppContext';
import SnippetList from '@/components/SnippetList';

export default function SnippetsPage() {
  const { snippets } = useApp();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Share Code Snippet</h1>
      <CodeSnippetForm />
      <h2 className={styles.title} style={{marginTop:'2rem'}}>Recent Snippets</h2>
      <SnippetList items={snippets} />
    </div>
  );
}