import type { Metadata } from "next";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Container from "@/components/layouts/Container";
import SidebarAccount from "@/components/layouts/sidebar/SidebarAccount";
import InfoAccount from "@/components/features/manageAccount/InfoAccount";

export const metadata: Metadata = {
  title: "Edit Account",
};

export default function AccountPage() {
  return (
    <SectionWrapper>
      <Container>
        <div className="md:flex border border-gray-300 rounded-md min-h-full">
          <SidebarAccount />
          <InfoAccount />
        </div>
      </Container>
    </SectionWrapper>
  );
}
