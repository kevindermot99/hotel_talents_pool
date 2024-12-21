import React from "react";

function Trainers() {
  return (
    <div className="w-full h-fit min-h-[400px] py-20 px-16 max-lg:px-5 max-lg:pt-0 flex gap-5 items-start justify-between text-dark-text max-w-[1700px] mx-auto">
      <div className="w-full h-fit flex flex-col bg-[#EBEBEB] rounded-3xl relative overflow-clip">
        {/* lights */}
        <div className="w-[40%] rounded-full -z-0 blur-[100px] aspect-square absolute top-[-150px] right-[-160px] bg-[#7FA2CA]/60"></div>
        <div className="w-[40%] rounded-full -z-0 blur-[100px] aspect-square absolute bottom-[-150px] left-[-160px] bg-[#4D61BA]/35"></div>
        <div className="w-full h-full absolute top-0 z-10 flex flex-col items-center justify-center gap-1">
          <h1 className="text-6xl font-bold w-fit text-center tracking-tight">
            Trained by professionals
          </h1>
          <p className="text-lg font-medium max-w-[490px] pt-3 opacity-65">
            We offer hands-on training for aspiring
          </p>
          <div className="w-full h-fit flex items-center justify-center flex-wrap gap-2 mt-7">
            {[...Array(7)].map((_, index) => (
              <>
                {/* person */}
                <div className="flex flex-col items-center justify-center w-fit gap-2">
                  <div className="h-[80px] w-[80px] min-w-fit aspect-square rounded-full flex items-center justify-center overflow-hidden ">
                    <img
                      src="https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43abe18502.png"
                      className=" h-fit min-h-full w-full object-cover"
                    />
                  </div>
                  <h1 className="text-base font-medium tracking-tight max-w-[100px] text-center leading-5">
                    James Karekare
                  </h1>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
