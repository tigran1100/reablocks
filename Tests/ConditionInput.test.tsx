// React
import { useState } from 'react';
import { render } from '@testing-library/react';

// Vitest
import '@testing-library/jest-dom/vitest';

// Components
import { InlineInput } from 'reablocks';
import React from 'react';
import { describe, it } from 'vitest';

const TestComponent = () => {
  return <InlineInput />;
};

describe('Test', () => {
  it('Should render', () => {
    // Error related with reablocks
    render(<TestComponent />);
  });
});
