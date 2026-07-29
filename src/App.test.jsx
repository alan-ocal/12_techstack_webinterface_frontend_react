import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { describe, expect, it } from 'vitest'
import App from './App';

describe("App", () => {
    beforeEach(() => {
        render(<App />);
    });

   it('renders a Bootstrap Container "', () => {
        const container = document.querySelector('.container');
        expect(container).toBeInTheDocument();
    });
});