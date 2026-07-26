import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom";
import { describe, expect, it } from 'vitest'
import App from './App';

describe("App", () => {
    beforeEach(() => {
        render(<App />);
    });

    it("renders the heading", () => {
        expect(
            screen.getByRole("heading",{ level: 1 })
        ).toBeInTheDocument();
    });

    it('displays the formatted user name', () => {
        expect(
            screen.getByRole("heading")
        ).toHaveTextContent("Hello, GIS Analyst/Developer Serb Ocal");
    });

    it('renders the profile image', () => {
        const profileImage = screen.getByRole("img");
        expect(profileImage).toBeInTheDocument();
    });
});