export default function ForumStats({ replies, views }) {
  return (
    <div className="discussion-stats">
      <div className="stat">
        <span className="stat-value">{replies}</span>
        <span className="stat-label">Replies</span>
      </div>
      <div className="stat">
        <span className="stat-value">{views}</span>
        <span className="stat-label">Views</span>
      </div>
    </div>
  );
}
