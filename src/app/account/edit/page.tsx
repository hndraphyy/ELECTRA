import type { Metadata } from "next";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Container from "@/components/layouts/Container";
import SidebarAccount from "@/components/layouts/sidebar/SidebarAccount";
import EditAccount from "@/components/features/manageAccount/EditAccount";

export const metadata: Metadata = {
  title: "Edit Account",
};

export default function AccountPage() {
  return (
    <SectionWrapper className="pt-30 sm:pt-30 md:pt-20 lg:pt-20">
      <Container>
        <div className="md:flex border border-gray-300 rounded-md min-h-full">
          <SidebarAccount />
          <EditAccount />
        </div>
      </Container>
    </SectionWrapper>
  );
}
