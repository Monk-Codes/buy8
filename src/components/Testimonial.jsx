/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
 return (
  <div>
   <section className="text-gray-600 body-font font-button bg-amber-100">
    {/* main  */}
    <div className="container px-5 py-2 mx-auto">
     {/* Heading  */}
     <h1 className=" text-center text-3xl font-bold text-stone-900">Testimonials</h1>
     {/* para  */}
     <h2 className=" text-center text-2xl font-semibold mb-4">
      What our <span className=" text-amber-500">customers</span> are saying
     </h2>

     <div className="flex flex-wrap">
      {/* Testimonial 1 */}
      <div className="lg:w-1/3 lg:mb-0 mb-2 p-4">
       <div className="h-full text-center">
        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/Gs8YKW7/happy-man-svgrepo-com.png" />
        <p className="leading-relaxed">
         Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
        </p>
        <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Monk Codes</h2>
        <p className="text-gray-500">Senior Product Designer</p>
       </div>
      </div>

      {/* Testimonial 2 */}
      <div className="lg:w-1/3 lg:mb-0 mb-2 p-4">
       <div className="h-full text-center">
        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/swY04NS/woman-using-smartphone-svgrepo-com.png" />
        <p className="leading-relaxed">
         Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
        </p>
        <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Gauri</h2>
        <p className="text-gray-500">UI Develeoper</p>
       </div>
      </div>

      {/* Testimonial 3 */}
      <div className="lg:w-1/3 lg:mb-0 mb-2 p-4">
       <div className="h-full text-center">
        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/nsFNY7Z/vlogger.gif" />
        <p className="leading-relaxed">
         Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
        </p>
        <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-6 mb-4" />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">John</h2>
        <p className="text-gray-500">CTO</p>
       </div>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};

export default Testimonial;
