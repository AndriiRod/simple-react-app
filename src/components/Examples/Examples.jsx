import TabButton from '../TabButton/TabButton.jsx';
import TabContent from '../TabContent/TabContent.jsx';
import { EXAMPLES } from '../../data.js';
import { useState } from 'react';
import Section from '../Section.jsx';
import Tabs from '../Tabs.jsx';

import './Examples.css';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const handleSelect = content => {
    setSelectedTopic(content.toLowerCase());
    console.log(selectedTopic);
  };

  let tabContetnt = <p>Please select topic</p>;

  if (selectedTopic) {
    tabContetnt = <TabContent {...EXAMPLES[selectedTopic]} />;
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={e => handleSelect(e.target.textContent)}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={e => handleSelect(e.target.textContent)}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={e => handleSelect(e.target.textContent)}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={e => handleSelect(e.target.textContent)}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContetnt}
      </Tabs>
    </Section>
  );
}
