// React
import { useState } from 'react';
import { render } from '@testing-library/react';

// Vitest
import '@testing-library/jest-dom/vitest';

// Components
import { InlineInput, ThemeProvider, theme } from 'reablocks';
import React from 'react';
import { describe, it } from 'vitest';

const TestComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <InlineInput />
    </ThemeProvider>
  );
};

describe('Test', () => {
  it('Should render', () => {
    // Error related with reablocks
    render(<TestComponent />);
  });
});
