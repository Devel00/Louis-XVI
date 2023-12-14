import React from "react";
import { AiOutlineCar, AiOutlineCustomerService, AiOutlineShop } from "react-icons/ai";
import Footer from "./Footer";
import { data } from "../data/data";

const IdeaCategory = () => {
  return (
    <div className="">
      <div className="bg-[#eeeeee] pt-8 pb-8">
        <div className="max-w-[1700px] mx-auto flex justify-between items-center">
          <div><img
                className="w-[50px] h-[50px]"
                src={data[13].image}
                />
          </div>
          <div><input type="text" className="w-[600px] h-[60px] rounded-full shadow-lg"></input></div>
          <div><img
                className="w-[70px] h-[70px]"
                src={data[9].image}
                />
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1400px] mx-auto">
          <div className="py-[50px] flex justify-center">
           <img
            className="absolute w-[1045px] h-[340px] object-cover"
            alt="Absolutvision"
            src={data[12].image}
          />
          <div className="absolute w-[1047px] h-[346px] bg-[#89840a99]" />
          <p className="font-bold text-[#ffffff] text-[50px] absolute pt-[140px]">
            تو هم ایده هایی داری و دوست داری عملیش کنی !
          </p>
          </div>
          <div className="font-bold text-accent-200 text-[48px] pt-[400px] pb-[50px]">
            دسته‌بندی مورد نظرت رو انتخاب کن
          </div>
          <div className="grid grid-cols-2 gap-10 mb-[250px]">
            
            <div className="shadow-lg flex p-5">
              <div>
              <AiOutlineCar className="w-[100px] h-[100px] text-accent-200"/>
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">
                  طبیعت
                </span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به طبیعت
                </span>
              </div>
            </div>
            
            <div className="shadow-lg flex p-5">
              <div>
              <AiOutlineCustomerService className="w-[100px] h-[100px] text-accent-200"/>
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">
                 تفریحی
                </span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به تفریحی
                </span>
              </div>
            </div>
            
            <div className="shadow-lg flex p-5">
              <div>
              <AiOutlineShop className="w-[100px] h-[100px] text-accent-200"/>
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">
                  آموزشی
                </span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به آموزشی
                </span>
              </div>
            </div>
            
            <div className="shadow-lg flex p-5">
              <div>
              <AiOutlineCar className="w-[100px] h-[100px] text-accent-200"/>
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">
                  طبیعت
                </span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به طبیعت
                </span>
              </div>
            </div>
            
            <div className="shadow-lg flex p-5">
              <div>
              <AiOutlineCar className="w-[100px] h-[100px] text-accent-200"/>
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">
                  طبیعت
                </span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به طبیعت
                </span>
              </div>
            </div>
            
            <div className="shadow-lg flex p-5">
              <div>
              <AiOutlineCustomerService className="w-[100px] h-[100px] text-accent-200"/>
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">
                  تفریحی
                </span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به تفریحی
                </span>
              </div>
            </div>
            
            <div className="shadow-lg flex p-5">
              <div>
              <AiOutlineShop className="w-[100px] h-[100px] text-accent-200"/>
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">
                 آموزشی
                </span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به آموزشی
                </span>
              </div>
            </div>
            
            <div className="shadow-lg flex p-5">
              <div>
              <AiOutlineCar className="w-[100px] h-[100px] text-accent-200"/>
              </div>
              <div className="text-right mr-10">
                <span className="text-[32px] font-semibold block">
                  طبیعت
                </span>
                <span className="text-[28px] block text-[#aaaaaa]">
                  ایده های مربوط به طبیعت
                </span>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IdeaCategory;





// <div className="bg-[#ffffff] flex flex-row justify-center w-full">
//       <div className="bg-[#ffffff] w-[1440px] h-[2244px] relative">
//         <div className="absolute w-[1440px] h-[136px] top-0 left-0 bg-bg-200">
//           <div className="absolute w-[400px] h-[58px] top-[38px] left-[551px] bg-[#ffffff] rounded-[100px] shadow-[0px_4px_4px_#00000040]" />
//           <img
//             className="!shadow-[0px_4px_4px_#00000040] !absolute !left-[58px] !bg-white !top-[38px]"
//             rectangleClassName="!bg-accent-100"
//             rectangleClassNameOverride="!bg-accent-100"
//             src={data[9].image}
//           />
//           <img className="absolute w-[50px] h-[50px] top-[54px] left-[1364px]" alt="Vector"  src={data[13].image} />
//         </div>
//         <div className="absolute w-[1047px] h-[346px] top-[226px] left-[213px]">
//           <img
//             className="absolute w-[1045px] h-[339px] top-[7px] left-[2px] object-cover"
//             alt="Absolutvision"
//             src={data[12].image}
//           />
//           <div className="absolute w-[1047px] h-[346px] top-0 left-0 bg-[#89840a99]" />
//           <p className="top-[156px] left-[24px] [font-family:'Vazirmatn-Black',Helvetica] font-black text-white text-[48px] text-center absolute tracking-[0] leading-[normal] [direction:rtl]">
//             تو هم ایده هایی داری و دوست داری عملیش کنی !
//           </p>
//         </div>
//         <p className="top-[658px] left-[452px] [font-family:'Vazirmatn-Black',Helvetica] font-black text-accent-200 text-[40px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//           دسته بندی مورد نظرت رو انتخاب کن
//         </p>
//         <div className="absolute w-[497px] h-[142px] top-[809px] left-[767px]">
//           <div className="relative w-[493px] h-[142px] bg-white shadow-[0px_4px_4px_#00000040]">
//             <AiOutlineCar className="!absolute !w-[94px] !h-[94px] !top-[16px] !left-[382px]" />
//             <div className="absolute top-[28px] left-[272px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-black text-[30px] tracking-[0] leading-[normal] [direction:rtl]">
//               طبیعت
//             </div>
//             <p className="w-[293px] top-[85px] left-[66px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-[#0000004c] text-[24px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//               ایده های مربوط به طبیعت
//             </p>
//           </div>
//         </div>
//         <div className="absolute w-[497px] h-[142px] top-[1291px] left-[765px]">
//           <div className="relative w-[493px] h-[142px] bg-white shadow-[0px_4px_4px_#00000040]">
//             <AiOutlineCar className="!absolute !w-[94px] !h-[94px] !top-[16px] !left-[382px]" />
//             <div className="absolute top-[28px] left-[272px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-black text-[30px] tracking-[0] leading-[normal] [direction:rtl]">
//               طبیعت
//             </div>
//             <p className="w-[293px] top-[85px] left-[66px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-[#0000004c] text-[24px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//               ایده های مربوط به طبیعت
//             </p>
//           </div>
//         </div>
//         <div className="absolute w-[497px] h-[142px] top-[1052px] left-[216px]">
//           <div className="relative w-[493px] h-[142px] bg-white shadow-[0px_4px_4px_#00000040]">
//             <AiOutlineCar className="!absolute !w-[94px] !h-[94px] !top-[16px] !left-[382px]" />
//             <div className="absolute top-[28px] left-[272px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-black text-[30px] tracking-[0] leading-[normal] [direction:rtl]">
//               طبیعت
//             </div>
//             <p className="w-[293px] top-[85px] left-[66px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-[#0000004c] text-[24px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//               ایده های مربوط به طبیعت
//             </p>
//           </div>
//         </div>
//         <div className="absolute w-[497px] h-[142px] top-[1534px] left-[214px]">
//           <div className="relative w-[493px] h-[142px] bg-white shadow-[0px_4px_4px_#00000040]">
//             <AiOutlineCar className="!absolute !w-[94px] !h-[94px] !top-[16px] !left-[382px]" />
//             <div className="absolute top-[28px] left-[272px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-black text-[30px] tracking-[0] leading-[normal] [direction:rtl]">
//               طبیعت
//             </div>
//             <p className="w-[293px] top-[85px] left-[66px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-[#0000004c] text-[24px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//               ایده های مربوط به طبیعت
//             </p>
//           </div>
//         </div>
//         <div className="absolute w-[497px] h-[142px] top-[1048px] left-[767px]">
//           <div className="absolute w-[497px] h-[142px] top-0 left-0">
//             <div className="relative w-[493px] h-[142px] bg-white shadow-[0px_4px_4px_#00000040]">
//               <div className="top-[28px] left-[269px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-black text-[30px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//                 آموزشی
//               </div>
//               <p className="w-[328px] top-[85px] left-[31px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-[#0000004c] text-[24px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//                 ایده های مربوط به مسایل آموزشی
//               </p>
//             </div>
//           </div>
//           <AiOutlineShop className="!absolute !w-[100px] !h-[100px] !top-[17px] !left-[379px]" />
//         </div>
//         <div className="absolute w-[497px] h-[142px] top-[1530px] left-[765px]">
//           <div className="absolute w-[497px] h-[142px] top-0 left-0">
//             <div className="relative w-[493px] h-[142px] bg-white shadow-[0px_4px_4px_#00000040]">
//               <div className="top-[28px] left-[269px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-black text-[30px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//                 آموزشی
//               </div>
//               <p className="w-[328px] top-[85px] left-[31px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-[#0000004c] text-[24px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//                 ایده های مربوط به مسایل آموزشی
//               </p>
//             </div>
//           </div>
//           <AiOutlineShop className="!absolute !w-[100px] !h-[100px] !top-[17px] !left-[379px]" />
//         </div>
//         <div className="absolute w-[497px] h-[142px] top-[809px] left-[215px]">
//           <div className="absolute w-[497px] h-[142px] top-0 left-0">
//             <div className="relative w-[493px] h-[142px] bg-white shadow-[0px_4px_4px_#00000040]">
//               <div className="top-[28px] left-[257px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-black text-[30px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//                 تفریحات
//               </div>
//               <p className="w-[293px] top-[85px] left-[66px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-[#0000004c] text-[24px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//                 ایده های مربوط به تفریح
//               </p>
//             </div>
//           </div>
//           <AiOutlineCustomerService className="!absolute !w-[94px] !h-[108px] !top-[17px] !left-[388px]" />
//         </div>
//         <div className="absolute w-[497px] h-[142px] top-[1291px] left-[213px]">
//           <div className="absolute w-[497px] h-[142px] top-0 left-0">
//             <div className="relative w-[493px] h-[142px] bg-white shadow-[0px_4px_4px_#00000040]">
//               <div className="top-[28px] left-[257px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-black text-[30px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//                 تفریحات
//               </div>
//               <p className="w-[293px] top-[85px] left-[66px] [font-family:'Vazirmatn-SemiBold',Helvetica] font-semibold text-[#0000004c] text-[24px] absolute tracking-[0] leading-[normal] [direction:rtl]">
//                 ایده های مربوط به تفریح
//               </p>
//             </div>
//           </div>
//           <AiOutlineCustomerService className="!absolute !w-[94px] !h-[108px] !top-[17px] !left-[388px]" />
//         </div>
//         <div className="bg-[#ffffff] flex flex-row justify-center w-full">
//       dkjfggss
//     </div>
//       </div>
//       </div>
