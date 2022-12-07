import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";

function CheckoutPage() {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>checkout here:</h1>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div``;
export default CheckoutPage;
