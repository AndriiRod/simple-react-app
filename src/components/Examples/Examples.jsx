import TabButton from '../TabButton/TabButton.jsx';
import TabContent from '../TabContent/TabContent.jsx';
import { EXAMPLES } from '../../data.js';
import { useState } from 'react';

import './Examples.css';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const handleSelect = content => {
    setSelectedTopic(content.toLowerCase());
    console.log(selectedTopic);
  };
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={handleSelect}
        >
          Components
        </TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={handleSelect}>
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
        <TabContent {...EXAMPLES[selectedTopic]} />
      ) : (
        'Please select topic'
      )}
    </section>
  );
}
