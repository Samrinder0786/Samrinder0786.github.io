export default function Button({ as:Comp='button', className='', ...props }) {
  const cls = `btn btn-primary ${className}`;
  return <Comp className={cls} {...props} />;
}
