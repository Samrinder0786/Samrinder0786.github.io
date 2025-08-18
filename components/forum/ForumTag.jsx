export default function ForumTag({ value }) {
  // Conditional color by tag
  const tone = value === 'react' ? 'bg-blue-100'
              : value === 'nextjs' ? 'bg-black text-white'
              : 'bg-gray-100';
  return <span className={`tag ${tone}`}>{value}</span>;
}
