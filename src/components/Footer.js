import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div className="top-footer">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Comfy Sloth</span>
        </h5>
        <h5>All rights reserved</h5>
      </div>
      <div>
        <a
          href="https://raziwebdeveloper.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed with ❤ by raziwebdeveloper.com
        </a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .top-footer {
    display: flex;
  }
  a {
    color: var(--clr-white);
    font-weight: 200;
  }
  @media (min-width: 776px) {
    flex-direction: column;
  }
`;

export default Footer;
