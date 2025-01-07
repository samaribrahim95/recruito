import { faqs } from "../../../data/faqs"
import CollpaseTabs from "../../../shared/atoms/collapse-tabs"
import SecondaryButton from "../../../shared/atoms/secondary-button"

const FAQs = () => {
  return (
    <div className="bg-[url('/src/assets/images/dots-bg.png')] mb-24">
      <div className="pt-24 bg-gradient-to-b from-royal-blue/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <SecondaryButton text="FAQs" customClasses="text-science-blue font-medium mb-10" action={() => null} />
          </div>
          <CollpaseTabs tabs={faqs} />
        </div>
      </div>
    </div>
  )
}

export default FAQs