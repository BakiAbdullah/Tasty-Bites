import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-16 p-10 bg-gray-900 text-gray-100">
        <div>
          <h2 className="font-bold text-3xl">TastyBites</h2>
          <p>Providing reliable service since 2013</p>
          <img src="/src/assets/Icons/footer.png" alt="" />
        </div>
        <div>
          <span className="footer-title">Catering</span>
          <a className="link link-hover">Corporate Events</a>
          <a className="link link-hover">Weddings And Galas</a>
          <a className="link link-hover">Special Events</a>
          <a className="link link-hover">Cooking Classes</a>
        </div>
        <div>
          <span className="footer-title">About us</span>

          <a className="link link-hover">Our Blog</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Shop</a>
        </div>
        <div>
          <span className="footer-title">What We Offer</span>

          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Testimonials</a>
          <a className="link link-hover">Baking School</a>
          <a className="link link-hover">Our Recipes</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">
            523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA
          </a>
          <a className="link link-hover">+ +1 (844) 123 456 78</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;