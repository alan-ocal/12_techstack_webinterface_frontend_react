import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Products from './Products'

describe('Products', () => {
  it('renders every product', () => {
    render(<Products />)

    expect(screen.getByRole('heading', { name: 'Products' })).toBeInTheDocument()
    expect(screen.getByText('React Beginner')).toBeInTheDocument()
    expect(screen.getByText('React Intermediate')).toBeInTheDocument()
    expect(screen.getByText('React Advanced')).toBeInTheDocument()
  })
})