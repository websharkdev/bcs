import GContactUs from "@/components/general/contacts/contacts.block";
import { BPolicy } from "@/components/general/policy";

const WebsiteTerms = () => {
    const sections = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <div className="min-h-screen">
        <BPolicy namespace="website_terms" sections={sections} />
        <GContactUs />
    </div>
  )
}

export default WebsiteTerms
