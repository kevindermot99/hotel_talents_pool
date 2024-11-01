import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Testimonials() {
  return (
    <div className="w-full py-10 px-16 max-lg:px-5 max-lg:pt-0 flex flex-col text-dark-text">
      <div className="w-full h-fit grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-lg:gap-3">
        <h1 className="text-3xl font-medium ">
          Real Stories, Real Inspiration
        </h1>
        <h1 className="text-sm text-dark-text/70 flex gap-4 flex-col">
          <span>What people are saying about us</span>
        </h1>
      </div>
      <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:mt-5 gap-5">
        {/* testimonial */}
        <div className="flex flex-col gap-4 items-center justify-center text-center bg-card-bg p-5 rounded-xl">
          <div className="flex items-center justify-start gap-7">
            <div className="h-16 w-auto aspect-square relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHdb4-6C8nWbyXb4v5ZRRING0GRxIpdoJ8LAWeciuxejHSDCo3Gi4bnQfvlAYry4A-gA&usqp=CAU"
                className="h-full w-full object-cover rounded-full"
              />
              <div className="bg-main-color text-white h-7 aspect-square rounded-full absolute bottom-0 right-[-14px] flex items-center justify-center ring-2 ring-card-bg">
                <FaTwitter />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
                <h1 className="font-medium tracking-tight">James Kabera</h1>
                <h1 className="text-sm text-dark-text/70">Kigali, RW</h1>
            </div>
          </div>
          <h1 className="text-sm text-dark-text p-1">Lorem cumque tempora obcaecati doloremque officia possimus id libero, accusantium hic! Tempore laudantium quibusdam, consequuntur laboriosam obcaecati eius?</h1>
        </div>
        {/* testimonial */}
        <div className="flex flex-col gap-4 items-center justify-center text-center bg-card-bg p-5 rounded-xl">
          <div className="flex items-center justify-start gap-7">
            <div className="h-16 w-auto aspect-square relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHdb4-6C8nWbyXb4v5ZRRING0GRxIpdoJ8LAWeciuxejHSDCo3Gi4bnQfvlAYry4A-gA&usqp=CAU"
                className="h-full w-full object-cover rounded-full"
              />
              <div className="bg-main-color text-white h-7 aspect-square rounded-full absolute bottom-0 right-[-14px] flex items-center justify-center ring-2 ring-card-bg">
                <FaTwitter />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
                <h1 className="font-medium tracking-tight">James Kabera</h1>
                <h1 className="text-sm text-dark-text/70">Kigali, RW</h1>
            </div>
          </div>
          <h1 className="text-sm text-dark-text p-1">Lorem cumque tempora obcaecati doloremque officia possimus id libero, accusantium hic! Tempore laudantium quibusdam, consequuntur laboriosam obcaecati eius?</h1>
        </div>
        {/* testimonial */}
        <div className="flex flex-col gap-4 items-center justify-center text-center bg-card-bg p-5 rounded-xl">
          <div className="flex items-center justify-start gap-7">
            <div className="h-16 w-auto aspect-square relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHdb4-6C8nWbyXb4v5ZRRING0GRxIpdoJ8LAWeciuxejHSDCo3Gi4bnQfvlAYry4A-gA&usqp=CAU"
                className="h-full w-full object-cover rounded-full"
              />
              <div className="bg-main-color text-white h-7 aspect-square rounded-full absolute bottom-0 right-[-14px] flex items-center justify-center ring-2 ring-card-bg">
                <FaTwitter />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
                <h1 className="font-medium tracking-tight">James Kabera</h1>
                <h1 className="text-sm text-dark-text/70">Kigali, RW</h1>
            </div>
          </div>
          <h1 className="text-sm text-dark-text p-1">Lorem cumque tempora obcaecati doloremque officia possimus id libero, accusantium hic! Tempore laudantium quibusdam, consequuntur laboriosam obcaecati eius?</h1>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
