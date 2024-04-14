// React
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Vitest
import '@testing-library/jest-dom/vitest';

// Components
import { DebouncedInput, DebouncedInputProps } from 'reablocks';
import React from 'react';
import { describe, it } from 'vitest';

type SearchInputProps = {
  value?: string;
  setValue?: (value: string) => void;
  placeholder?: string;
};

const TestComponent = () => {
  return <DebouncedInput data-testid="searchInputContainer" />;
};

describe('Test', () => {
  const user = userEvent.setup();

  it('Should render', async () => {
    render(<TestComponent />);
  });
});
