import imageLogo from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function generateRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const dynamicWord =
    reactDescriptions[generateRandom(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={imageLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {dynamicWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
