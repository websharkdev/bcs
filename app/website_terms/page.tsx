import GContactUs from "@/components/general/contacts/contacts.block";
import { ServiceType } from "@/components/general/contacts/schema";
import { BPolicy } from "@/components/general/policy";

const WebsiteTerms = () => {
    const sections = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <div className="min-h-screen">
        <BPolicy namespace="website_terms" sections={sections} />
        <GContactUs type={ServiceType.MAINTENANCE} minHeight="lg:min-h-[550px]"/>
    </div>
  )
}

export default WebsiteTerms
