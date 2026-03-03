

import GContactUs from "@/components/general/contacts/contacts.block";
import { ServiceType } from "@/components/general/contacts/schema";
import { BPolicy } from "@/components/general/policy";

const PrivacyPolicy = () => {
    const sections = ['1', '2', '3', '4', '5', '6', '7', '8']

  return (
    <div className="min-h-screen">
        <BPolicy namespace="privacy_policy" sections={sections} />
        <GContactUs type={ServiceType.MAINTENANCE}/>
    </div>
  )
}

export default PrivacyPolicy