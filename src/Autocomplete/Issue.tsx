import React, { FC } from 'react';
import { Wrapper, Label } from './Issue.style';

type Props = {
  title: string,
  labels: [],
  selected: boolean
};

const Issue: FC<Props> = ({ title, labels, selected }) => {
  return (
    <Wrapper tabIndex={-1} selected={selected}>
      <p>{title}</p>
      <p>
        {labels.map(({ id, name, color }) => (
          <Label key={id} bgColor={color}>{name}</Label>
        ))}
      </p>
    </Wrapper>
  );
};

export default Issue;