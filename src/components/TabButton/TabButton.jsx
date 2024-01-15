import './TabButton.css';
export default function TabButton({ children, isSelected, ...onClick }) {
  console.log('Btn render');

  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...onClick}>
        {children}
      </button>
    </li>
  );
}
