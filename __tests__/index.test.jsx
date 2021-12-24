import { render, screen, fireEvent, prettyDOM } from '@testing-library/react'
import Home from '../pages'
import MenuOption from '@components/menu-option'

describe('Home', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  it('renders a heading title', () => {
    render(<Home />)
    const heading = screen.getByText(/hi, my name is/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders a heading subtitle', () => {
    render(<Home />)
    const heading = screen.getByText(/Miguel/i)
    expect(heading).toBeInTheDocument()
  })

})

describe('Option Component', () => {
  it('renders a option component', () => {
    render(
      <MenuOption
        label={'this is label test'}
        href={'/test'}
        id={1}
      />
    )
    const heading = screen.getByText(/this is label test/i)
    expect(heading).toBeInTheDocument()
  })

  it('changes its color on hover', () => {
    render(
      <MenuOption
        label={'this is label test'}
        href={'/test'}
        id={1}
      />
    )
    fireEvent.mouseOver(screen.getByText(/this is label test/i));
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveClass('group-hover:opacity-100')
  })

  it('it should have required props', () => {
    render(
      <MenuOption
        label={'this is label test'}
        href={'/test'}
        id={1}
      />
    )
    fireEvent.mouseOver(screen.getByText(/this is label test/i));
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveClass('group-hover:opacity-100')
  })

})