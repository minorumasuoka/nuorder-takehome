import React, { FC, useState, useEffect, useRef } from 'react';
import API from '../API';
import useKeyCode from '../hooks/useKeyCode';
import Issue from './Issue';
import {
  Wrapper,
  SearchBox,
  Issues,
} from './Autocomplete.style';

const UP_KEY = 38;
const DOWN_KEY = 40;

const Autocomplete: FC = () => {
  const [term, setTerm] = useState('');
  const [issues, setIssues] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [keyCode, keyPressed] = useKeyCode('keydown');
  const searchBoxRef: any = useRef();
  const issuesListRef: any = useRef();

  useEffect(() => {
    API.getIssues().then(setIssues);
  }, []);

  useEffect(() => {  
    const keyHandler = new Map<number, any>([
      [UP_KEY, (currentSelected: number) => currentSelected > 0 ? currentSelected - 1 : -1],
      [DOWN_KEY, (currentSelected: number) => currentSelected < filteredIssues().length - 1 ? currentSelected + 1 : currentSelected]
    ]).get(keyCode!);

    if(!keyHandler) return;

    setSelected(keyHandler);
  }, [keyPressed]);

  useEffect(() => {
    if(selected === -1) {
      searchBoxRef.current?.focus();
    }else {
      issuesListRef.current?.children[selected]?.focus();
    }    
  }, [selected]);

  const handleInputChange = ({ target: { value } }: any) => {
    setTerm(value);
    setSelected(-1);
  };

  const filteredIssues = () => {
    const regex = (text: string) => new RegExp(text, 'i');
    
    return issues.filter((issue: any) =>
      term && (
        regex(term).test(issue.title) ||
        issue.labels.some(({ name }: any) => regex(term).test(name))
      )
    );
  }; 

  return (
    <Wrapper>
      <h1>Issues Autocomplete </h1>
      <SearchBox
        ref={searchBoxRef}
        value={term}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {filteredIssues().length > 0 && 
        <Issues ref={issuesListRef}>
          {filteredIssues().map((issue: any, index: number) => (
            <Issue
              key={issue.id}
              title={issue.title}
              labels={issue.labels}
              selected={index === selected}              
            />
          ))}
        </Issues>
      }
    </Wrapper>
  );
};

export default Autocomplete;