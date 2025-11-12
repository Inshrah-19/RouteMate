import svgPaths from "./svg-47i3ip22qw";
import imgContainer from "figma:asset/f846b2791aa5e582a48cd7c426103951f47b8c90.png";

function Container() {
  return <div className="absolute h-[126px] left-[624.11px] top-[0.11px] w-[280px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[176px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#e7e1e6] box-border content-stretch flex flex-col h-[304px] items-start left-[-3px] pb-0 pt-[0.889px] px-[24.889px] top-[854px] w-[1356.23px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[68px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[86px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[68px] w-[86px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[97.028px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[97.028px]">
        <p className="bg-clip-text font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[35px] text-[rgba(0,0,0,0)] text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(44, 8, 78) 35.577%, rgb(100, 18, 180) 100%)" }}>
          RouteMate
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[-20.89px] top-[0.11px] w-[592px]" data-name="Container">
      <Container3 />
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[48px] left-[65.11px] top-[54.11px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#070e2a] text-[18px] top-[-2.11px] w-[443px]">Your intelligent companion for seamless city travel. Track buses in real-time, plan your journey, and never miss a ride.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[168px] left-[55.41px] top-[877.89px] w-[607.622px]" data-name="Container">
      <Container4 />
      <Paragraph />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-[696px] top-[878px] w-[287.389px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[38.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[97.403px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">{`Help & Support`}</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[47.875px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[84px] left-[696px] top-[918px] w-[287.389px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[7px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[24px] text-nowrap top-[-2.11px] whitespace-pre">f</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.792px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[5.792px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">t</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.014px] py-0 relative size-[50px]">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.528px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.528px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">in</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[696px] top-[1018px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Legal</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[82.556px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[99.931px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Terms of Service</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[82.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[168px] items-start left-[1016.11px] top-[877.89px] w-[287.389px]" data-name="Container">
      <Heading2 />
      <Container8 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[51.42px] top-[877.89px]">
      <Container5 />
      <Heading1 />
      <Container6 />
      <Container7 />
      <Container9 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[20px] leading-[20px] left-[51.42px] not-italic text-[#4a5565] text-[20px] top-[1096px] w-[798.53px]">© 2025 RouteMate. All rights reserved. Made with ❤️ for smart transportation.</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[-3px] top-[854px]">
      <Footer />
      <Group2 />
    </div>
  );
}

function Map() {
  return (
    <div className="absolute h-[22.4px] left-[803px] top-[65px] w-[19.274px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 23">
        <g id="Map">
          <path d={svgPaths.p345b8700} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M7.22776 2.8V16.8" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M12.0463 5.6V19.6" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Map1() {
  return (
    <div className="absolute h-[18.514px] left-[785.66px] top-[99px] w-[19.89px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Map">
          <path d={svgPaths.p3fa1af80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M7.45894 2.31429V13.8857" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M12.4316 4.62857V16.2" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[18.514px] items-start left-[812.22px] top-[98.96px] w-[81.606px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Live Tracking</p>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute h-[18.514px] left-[472.71px] top-[96.27px] w-[20.413px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
        <g clipPath="url(#clip0_3_7829)" id="Home">
          <path d={svgPaths.p2213f00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d={svgPaths.p19d45b00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_7829">
            <rect fill="white" height="18.5143" width="20.4135" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[472.71px] top-[96.27px]">
      <Home />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[18.514px] leading-[20px] left-[508.43px] not-italic text-[#4a5565] text-[20px] top-[96.27px] w-[58.179px]">Home</p>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_477)" id="Clock">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_477">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Timetable</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[33.326px] items-center left-[592.22px] px-[16px] py-0 rounded-[20px] top-[90.72px] w-[125.671px]" data-name="Button">
      <Clock />
      <Text5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[152.743px] left-[-49px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[8px] w-[194.949px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[24.686px] items-start left-[115.81px] top-[59px] w-[165.35px]" data-name="Text">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2c084e] text-[45px] w-[256px]">RouteMate</p>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="User">
          <path d={svgPaths.p23e99000} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-gradient-to-b from-[#2c084e] from-[22.596%] relative rounded-[2.98262e+07px] shrink-0 size-[48px] to-[#6412b4]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <User />
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChevronDown">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[44.434px] items-center left-[1218.92px] px-[8px] py-0 rounded-[20px] top-[81px] w-[97.985px]" data-name="Button">
      <Container11 />
      <ChevronDown />
    </div>
  );
}

function Button11() {
  return <div className="absolute h-[33.517px] left-[968.49px] rounded-[20px] top-[75px] w-[150.149px]" data-name="Button" />;
}

function Group1() {
  return (
    <div className="absolute contents left-[-49px] top-[-1px]">
      <div className="absolute bg-[#e7e1e6] h-[144.411px] left-[-3.5px] top-[-1px] w-[1357.5px]" />
      <div className="absolute bg-[#e7e1e6] h-[35.177px] left-[762.28px] rounded-[50px] top-[87.02px] w-[155.143px]" />
      <Map1 />
      <Text4 />
      <Group />
      <Button9 />
      <Container10 />
      <Text6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[14.811px] leading-[16px] left-[119.85px] not-italic text-[#3d3a3a] text-[25px] top-[102px] w-[198.011px]">Smart Transport</p>
      <Button10 />
      <Button11 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start left-[988px] top-[95px] w-[94px]" data-name="Text">
      <div className="h-[19px] relative shrink-0 w-[21px]" data-name="Vector">
        <div className="absolute inset-[-7.02%_-6.35%_-9.95%_-6.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
            <path d={svgPaths.p13c5f700} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f9fbff] text-[20px] w-[137px]">{` Favorites`}</p>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Heart">
          <path d={svgPaths.p39abe980} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-gradient-to-b from-[#6412b4] h-[60px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#2c084e] to-[90.865%] w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[60px] items-center justify-center relative w-[64px]">
        <Heart />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[434px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[0.22px] not-italic text-[#1e2939] text-[20px] top-[-1.78px] w-[130px]">Bus 12A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[295px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px]">Every 15 mins</p>
    </div>
  );
}

function Paragraph2() {
  return <div className="h-[24px] shrink-0 w-[361px]" data-name="Paragraph" />;
}

function Container13() {
  return (
    <div className="h-[57px] relative shrink-0 w-[285px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[57px] items-start relative w-[285px]">
        <Heading />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Central Station → Airport</p>
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap text-right whitespace-pre">Next arrival</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[20px] text-nowrap text-right whitespace-pre">2:30 PM</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[48px] relative w-[74px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[74px]">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[16px] h-[110px] items-center relative shrink-0 w-[408px]" data-name="Container">
      <Container12 />
      <Container13 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.0033927028998732567)+(var(--transform-inner-height)*0.9999942183494568)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.0033927028998732567)+(var(--transform-inner-width)*0.9999942183494568)))]" style={{ "--transform-inner-width": "74", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.806deg]">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4674)" id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, #008236)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4674">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[36.042px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#008236] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Track</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center left-0 rounded-[20px] top-0 w-[174.069px]" data-name="Button">
      <Navigation />
      <Text8 />
    </div>
  );
}

function Trash() {
  return (
    <div className="h-[14px] relative shrink-0 w-[16px]" data-name="Trash2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Trash2">
          <path d="M2 3.5H3.33333H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d={svgPaths.p11f3c620} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d="M6.66667 6.41667V9.91667" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d="M9.33331 6.41667V9.91667" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[61px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[61px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e7000b] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Remove</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[370.11px] pl-0 pr-[0.014px] py-0 rounded-[20px] top-[0.11px] w-[176px]" data-name="Button">
      <Trash />
      <Text9 />
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_7801)" id="Clock">
          <path d={svgPaths.p39ee6532} fill="var(--fill-0, #300431)" fillOpacity="0.92" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_7801">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[24px] relative shrink-0 w-[61px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[61px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[0.02px] not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Schedule</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[rgba(48,4,49,0.92)] content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[184.11px] rounded-[20px] top-[0.11px] w-[176px]" data-name="Button">
      <Clock1 />
      <Text10 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[48px] relative shrink-0 w-[546px]" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f7eeff] box-border content-stretch flex flex-col gap-[24px] h-[238px] items-start left-[16px] pb-[0.889px] pt-[24.889px] px-[24.889px] rounded-[16px] top-[42px] w-[591px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Heart1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Heart">
          <path d={svgPaths.p39abe980} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-gradient-to-b from-[#6412b4] h-[60px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#2c084e] to-[79.327%] w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[60px] items-center justify-center relative w-[64px]">
        <Heart1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[434px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[0.22px] not-italic text-[#1e2939] text-[20px] top-[-1.78px] w-[130px]">Bus 45B</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[295px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px]">Every 15 mins</p>
    </div>
  );
}

function Paragraph4() {
  return <div className="h-[24px] shrink-0 w-[361px]" data-name="Paragraph" />;
}

function Container21() {
  return (
    <div className="h-[57px] relative shrink-0 w-[285px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[57px] items-start relative w-[285px]">
        <Heading3 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Mall road → University</p>
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap text-right whitespace-pre">Next arrival</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[20px] text-nowrap text-right whitespace-pre">4:30 PM</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[48px] relative w-[74px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[74px]">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[16px] h-[110px] items-center relative shrink-0 w-[408px]" data-name="Container">
      <Container20 />
      <Container21 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.0033927028998732567)+(var(--transform-inner-height)*0.9999942183494568)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.0033927028998732567)+(var(--transform-inner-width)*0.9999942183494568)))]" style={{ "--transform-inner-width": "74", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.806deg]">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4674)" id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, #008236)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4674">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[36.042px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#008236] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Track</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center left-0 rounded-[20px] top-0 w-[174.069px]" data-name="Button">
      <Navigation1 />
      <Text11 />
    </div>
  );
}

function Trash1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[16px]" data-name="Trash2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Trash2">
          <path d="M2 3.5H3.33333H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d={svgPaths.p11f3c620} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d="M6.66667 6.41667V9.91667" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d="M9.33331 6.41667V9.91667" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[61px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[61px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e7000b] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Remove</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[370.11px] pl-0 pr-[0.014px] py-0 rounded-[20px] top-[0.11px] w-[176px]" data-name="Button">
      <Trash1 />
      <Text12 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[48px] relative shrink-0 w-[546px]" data-name="Container">
      <Button15 />
      <Button16 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#f7eeff] box-border content-stretch flex flex-col gap-[24px] h-[238px] items-start left-[18px] pb-[0.889px] pt-[24.889px] px-[24.889px] rounded-[16px] top-[306px] w-[591px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Clock2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Clock">
          <g clipPath="url(#clip0_3_7817)">
            <path d="M0 0H16V16H0V0Z" fill="var(--fill-0, #300431)" fillOpacity="0.92" />
            <path d={svgPaths.p39ee6532} fill="var(--fill-0, #300431)" fillOpacity="0.92" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
            <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
          </g>
          <path d="M15.5 0.5V15.5H0.5V0.5H15.5Z" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_3_7817">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[24px] relative shrink-0 w-[61px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[61px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[0.02px] not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Schedule</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[rgba(48,4,49,0.92)] content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[225px] rounded-[20px] top-[464px] w-[176px]" data-name="Button">
      <Clock2 />
      <Text13 />
    </div>
  );
}

function Heart2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Heart">
          <path d={svgPaths.p39abe980} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-gradient-to-b from-[#6412b4] h-[60px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#2c084e] to-[76.923%] w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[60px] items-center justify-center relative w-[64px]">
        <Heart2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[434px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[0.22px] not-italic text-[#1e2939] text-[20px] top-[-1.78px] w-[130px]">Bus 78C</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[295px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px]">Every 15 mins</p>
    </div>
  );
}

function Paragraph6() {
  return <div className="h-[24px] shrink-0 w-[361px]" data-name="Paragraph" />;
}

function Container29() {
  return (
    <div className="h-[57px] relative shrink-0 w-[285px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[57px] items-start relative w-[285px]">
        <Heading4 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Downtown → Hospital</p>
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap text-right whitespace-pre">Next arrival</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[20px] text-nowrap text-right whitespace-pre">1:30 AM</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[48px] relative w-[74px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[74px]">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[16px] h-[110px] items-center relative shrink-0 w-[408px]" data-name="Container">
      <Container28 />
      <Container29 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.0033927028998732567)+(var(--transform-inner-height)*0.9999942183494568)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.0033927028998732567)+(var(--transform-inner-width)*0.9999942183494568)))]" style={{ "--transform-inner-width": "74", "--transform-inner-height": "48" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.806deg]">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Navigation2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4674)" id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, #008236)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4674">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[36.042px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#008236] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Track</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center left-0 rounded-[20px] top-0 w-[174.069px]" data-name="Button">
      <Navigation2 />
      <Text14 />
    </div>
  );
}

function Clock3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_7801)" id="Clock">
          <path d={svgPaths.p39ee6532} fill="var(--fill-0, #300431)" fillOpacity="0.92" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_7801">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[24px] relative shrink-0 w-[61px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[61px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[0.02px] not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Schedule</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-[rgba(48,4,49,0.92)] content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[185.11px] rounded-[20px] top-[0.11px] w-[176px]" data-name="Button">
      <Clock3 />
      <Text15 />
    </div>
  );
}

function Trash2() {
  return (
    <div className="h-[14px] relative shrink-0 w-[16px]" data-name="Trash2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Trash2">
          <path d="M2 3.5H3.33333H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d={svgPaths.p11f3c620} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d="M6.66667 6.41667V9.91667" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d="M9.33331 6.41667V9.91667" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[61px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[61px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e7000b] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Remove</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[370.11px] pl-0 pr-[0.014px] py-0 rounded-[20px] top-[0.11px] w-[176px]" data-name="Button">
      <Trash2 />
      <Text16 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[48px] relative shrink-0 w-[546px]" data-name="Container">
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#f7eeff] box-border content-stretch flex flex-col gap-[24px] h-[238px] items-start left-[674px] pb-[0.889px] pt-[24.889px] px-[24.889px] rounded-[16px] top-[42px] w-[591px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[493px] left-[22px] top-[260px] w-[1252px]" data-name="Container">
      <Container19 />
      <Container27 />
      <Button17 />
      <Container35 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-49px] top-[-1px]">
      <Group3 />
      <Map />
      <Group1 />
      <div className="absolute h-[44.08px] left-[966px] top-[85px] w-[157.551px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 45">
          <path d={svgPaths.p34a86e00} fill="url(#paint0_linear_3_7827)" id="Rectangle 42" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_7827" x1="78.7757" x2="78.7757" y1="0" y2="44.08">
              <stop offset="0.139423" stopColor="#7031AD" />
              <stop offset="0.533654" stopColor="#2E1447" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Text7 />
      <Container36 />
      <p className="absolute font-['Poppins:Bold',sans-serif] h-[37px] leading-[20px] left-[38px] not-italic text-[#2c084e] text-[35px] top-[191px] w-[243px]">Favorites</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[34px] leading-[24px] left-[38px] not-italic text-[22px] text-black top-[228px] w-[343px]">Your most popular saved routes</p>
    </div>
  );
}

export default function FavoritesRemoved() {
  return (
    <div className="relative size-full" data-name="Favorites (removed)">
      <Group4 />
    </div>
  );
}