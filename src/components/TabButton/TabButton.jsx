import './TabButton.css';
export default function TabButton({ children, onSelect, isSelected }) {
  console.log('Btn render');

  return (
    <li>
      <button
        className={isSelected ? 'active' : undefined}
        onClick={e => onSelect(e.target.textContent)}
      >
        {children}
      </button>
    </li>
  );
}
