"use client";

import SectionWrapper from "@/components/layouts/SectionWrapper";
import Container from "@/components/layouts/Container";

import SidebarAccount from "../../layouts/sidebar/SidebarAccount";
import InfoAccount from "./InfoAccount";

export default function Account() {
  return (
    <SectionWrapper>
      <Container>
        <div className="bg-white rounded-lg shadow-md border border-gray-300 flex">
          <SidebarAccount />
          <InfoAccount />
        </div>
      </Container>
    </SectionWrapper>
  );
}
