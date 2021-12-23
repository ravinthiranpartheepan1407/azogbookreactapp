import { render, screen } from '@testing-library/react';
import App from './App';
import SearchBar from './searchbar';
import Footer from './footer';

describe('It has azog and book app text', ()=>{
  test('renders learn react link', () => {
    render(<SearchBar />);
    const linkElement = screen.getByText("Azog Book Directory");
    expect(linkElement).toBeInTheDocument();
  });
  test('It has Book App text', ()=>{
    render(<SearchBar />);
    const bookApp = screen.getByText("Find Your Perfect Book To Read");
    expect(bookApp).toBeInTheDocument();
  })
})

describe('footer text test', ()=>{
  test('It has social networks', ()=>{
    render(<Footer />);
    const socialNetworks = screen.getByText("Get connected with me on social networks:");
    expect(socialNetworks).toBeInTheDocument();
  })
  test('It has Book store title', ()=>{
    render(<Footer />);
    const bookStoretitle = screen.getByText("Azog Book Store");
    expect(bookStoretitle).toBeInTheDocument();
  })
})
