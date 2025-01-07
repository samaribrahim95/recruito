import { testimonials } from "../../../data/testimonials";
import Carousel from "../../../shared/atoms/carousel";
import SecondaryButton from "../../../shared/atoms/secondary-button";

const Testimonials = () => {
  return (
    <div className="mb-24">
      <div className="text-center">
        <SecondaryButton text="Testimonials" customClasses="text-science-blue font-medium" action={() => null} />
        <h2 className="text-2xl font-bold max-w-4xl my-12 mx-auto">Don’t just take our word for it—see what our clients say about Recruito AI.</h2>
      </div>
      <Carousel>
          {
            testimonials.map((testimonial, index) => 
              <div key={index}>
                <div className="border p-5 mx-3 rounded-10">
                  <div className="flex gap-2 mb-5">
                    <img className="w-20 h-20 rounded-full object-cover" src={testimonial.photo} alt={testimonial.name} />
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-regent-gray">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="rounded-10 bg-light-gray/10 p-5">
                    {testimonial.review}
                  </div>
                </div>
              </div>
            )
          }
      </Carousel>
    </div>
  )
}

export default Testimonials;