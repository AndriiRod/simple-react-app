import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
import Examples from './components/Examples.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const handleSelect = content => {
    setSelectedTopic(content.toLowerCase());
    console.log(selectedTopic);
  };

  console.log('App Render');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map(item => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={handleSelect}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={handleSelect}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={handleSelect}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={handleSelect}
            >
              State
            </TabButton>
          </menu>
          {selectedTopic ? (
            <Examples {...EXAMPLES[selectedTopic]} />
          ) : (
            'Please select topic'
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
