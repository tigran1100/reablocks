// React
import { useState, useRef } from 'react';
import { render } from '@testing-library/react';

// Vitest
import '@testing-library/jest-dom/vitest';

// Components
// import { Checkbox } from './Checkbox';
import { Checkbox } from 'reablocks';
import React from 'react';
import { describe, expect, it } from 'vitest';

const TestComponent = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Checkbox
      checked={checked}
      label="Check me"
      onChange={() => setChecked(!checked)}
      intermediate={true}
      disabled={false}
      size="small"
    />
  );
};

describe('Test', () => {
  it('Should render', async () => {
    // Error related with reablocks
    // TypeError: Cannot read properties of undefined (reading 'checkbox')
    render(<TestComponent />);
  });
});
