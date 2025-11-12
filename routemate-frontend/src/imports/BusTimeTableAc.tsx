import svgPaths from "./svg-2de6cg4zgo";
import imgContainer from "figma:asset/f846b2791aa5e582a48cd7c426103951f47b8c90.png";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#2c084e] text-[35px] text-nowrap top-[-1.78px] whitespace-pre">Bus Timetables</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[25px] text-black text-nowrap top-[-2.11px] whitespace-pre">Complete schedules for all routes</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[14px] p-[10px] top-[-0.11px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">AC Only</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-gradient-to-t from-[#2c084e] from-[31.749%] h-[48px] left-[110.22px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#6612b4] to-[99.537%] top-[0.22px] w-[110.625px]" data-name="Button">
      <Frame />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(74,85,101,0.54)] h-[48px] left-[-9.78px] rounded-[20px] top-[0.22px] w-[100.361px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[15px] not-italic text-[16px] text-black text-nowrap top-[12px] whitespace-pre">All Buses</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(74,85,101,0.54)] h-[48px] left-[240.22px] rounded-[20px] top-[0.22px] w-[100.361px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[10.56px] not-italic text-[16px] text-black text-nowrap top-[12.22px] whitespace-pre">Green Bus</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[97.778px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[97.778px] items-start pb-[0.889px] pt-[24.889px] px-[24.889px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[71px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[78px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[197.14%] left-[-34.6%] max-w-none top-[-48.57%] w-[172.06%]" src={imgContainer} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[71px] w-[78px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[31.986px] left-0 top-0 w-[176.083px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[0.22px] not-italic text-[#1e2939] text-[24px] top-[-1.56px] w-[118px]">Bus E-03</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-[31.99px] w-[176.083px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Central Station → Airport</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#fbd9fa] box-border content-stretch flex h-[28px] items-start left-[0.22px] px-[12px] py-[4px] rounded-[16px] top-[60.44px] w-[103px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">AC Express</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-[176.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[87.986px] relative w-[176.083px]">
        <Heading2 />
        <Paragraph1 />
        <Text />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-[256.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[87.986px] items-center relative w-[256.083px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Map">
          <path d={svgPaths.p35d75a00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M7.5 2.5V15" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M12.5 5V17.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2.11px] whitespace-pre">Track Route</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[48px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[157.75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center px-[24px] py-0 relative w-[157.75px]">
        <Map />
        <Text1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[87.986px] items-center justify-between relative w-full">
          <Container5 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Departure Time</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Arrival Time</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">ETA/Status</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-gradient-to-r from-[58.654%] from-[rgba(149,12,151,0.2)] h-[56px] left-[0.89px] to-[rgba(49,4,49,0.04)] top-[0.89px] w-[1148.44px]" data-name="Container">
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">6:00 AM</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">6:45 AM</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container8 />
      <Text7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[56.889px] left-0 top-0 w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text5 />
      <Text6 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">8:30 AM</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">9:15 AM</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container10 />
      <Text11 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[56.889px] left-0 top-[56.89px] w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text9 />
      <Text10 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">11:00 AM</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">11:45 AM</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container12 />
      <Text15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[56.889px] left-0 top-[113.78px] w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text13 />
      <Text14 />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">2:30 PM</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">3:15 PM</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container14 />
      <Text19 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[56.889px] left-0 top-[170.67px] w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text17 />
      <Text18 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">5:00 PM</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">5:45 PM</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container16 />
      <Text23 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[56.889px] left-0 top-[227.56px] w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text21 />
      <Text22 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">8:00 PM</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">8:45 PM</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container18 />
      <Text27 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[56px] left-0 top-[284.44px] w-[1148.44px]" data-name="Container">
      <Text25 />
      <Text26 />
      <Text28 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[340.444px] left-[0.89px] top-[56.89px] w-[1148.44px]" data-name="Container">
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[398.222px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="h-[398.222px] overflow-clip relative rounded-[inherit] w-full">
        <Container7 />
        <Container20 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-[24px] h-[575.986px] items-start ml-0 mt-0 pb-[0.889px] pt-[32.889px] px-[32.889px] relative rounded-[16px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container6 />
      <Container21 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[71px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[78px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[197.14%] left-[-34.6%] max-w-none top-[-48.57%] w-[172.06%]" src={imgContainer} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[71px] w-[78px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[31.986px] left-0 top-0 w-[176.083px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[0.22px] not-italic text-[#1e2939] text-[24px] top-[-1.56px] w-[118px]">Bus R-02</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-0 top-[31.99px] w-[176.083px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Leamarket → Thatta</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute bg-[#fbd9fa] box-border content-stretch flex h-[28px] items-start left-[0.22px] px-[12px] py-[4px] rounded-[16px] top-[60.46px] w-[78px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">AC Only</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-[176.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[87.986px] relative w-[176.083px]">
        <Heading4 />
        <Paragraph2 />
        <Text29 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-[256.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[87.986px] items-center relative w-[256.083px]">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Map1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Map">
          <path d={svgPaths.p35d75a00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M7.5 2.5V15" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M12.5 5V17.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2.11px] whitespace-pre">Track Route</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[48px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[157.75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center px-[24px] py-0 relative w-[157.75px]">
        <Map1 />
        <Text30 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[87.986px] items-center justify-between relative w-full">
          <Container25 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Departure Time</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Arrival Time</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[24px] left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">ETA/Status</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-gradient-to-r from-[58.654%] from-[rgba(149,12,151,0.2)] h-[56px] left-[0.89px] to-[rgba(49,4,49,0.04)] top-[0.89px] w-[1148.44px]" data-name="Container">
      <Text31 />
      <Text32 />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">7:00 AM</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">11:45 AM</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container28 />
      <Text36 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[56.889px] left-0 top-0 w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text34 />
      <Text35 />
      <Text37 />
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">7:30 AM</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">12:00 PM</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container30 />
      <Text40 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[56.889px] left-0 top-[56.89px] w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text38 />
      <Text39 />
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">10:00 AM</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">2:45 PM</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container32 />
      <Text44 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[56.889px] left-0 top-[113.78px] w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text42 />
      <Text43 />
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">1:30 PM</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">5:15 PM</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container34 />
      <Text48 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[56.889px] left-0 top-[170.67px] w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text46 />
      <Text47 />
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">2:00 PM</p>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">6:45 PM</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container36 />
      <Text52 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[56.889px] left-0 top-[227.56px] w-[1148.44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text50 />
      <Text51 />
      <Text53 />
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">3:00 PM</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">7:45 PM</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container38 />
      <Text56 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[56px] left-0 top-[284.44px] w-[1148.44px]" data-name="Container">
      <Text54 />
      <Text55 />
      <Text57 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[340.444px] left-[0.89px] top-[56.89px] w-[1148.44px]" data-name="Container">
      <Container29 />
      <Container31 />
      <Container33 />
      <Container35 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[398.222px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="h-[398.222px] overflow-clip relative rounded-[inherit] w-full">
        <Container27 />
        <Container40 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-[24px] h-[575.986px] items-start ml-0 mt-0 pb-[0.889px] pt-[32.889px] px-[32.889px] relative rounded-[16px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container26 />
      <Container41 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[71px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[78px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[197.14%] left-[-34.6%] max-w-none top-[-48.57%] w-[172.06%]" src={imgContainer} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[71px] w-[78px]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[31.986px] left-0 top-0 w-[176.083px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[0.22px] not-italic text-[#1e2939] text-[24px] top-[-1.56px] w-[118px]">Bus R-03</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-0 top-[31.99px] w-[176.083px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Main Road → University</p>
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute bg-[#fbd9fa] box-border content-stretch flex h-[28px] items-start left-[0.22px] px-[12px] py-[4px] rounded-[16px] top-[60.44px] w-[103px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">Only AC</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-[176.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[87.986px] relative w-[176.083px]">
        <Heading5 />
        <Paragraph3 />
        <Text58 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-[256.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[87.986px] items-center relative w-[256.083px]">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Map2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Map">
          <path d={svgPaths.p35d75a00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M7.5 2.5V15" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M12.5 5V17.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text59() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2.11px] whitespace-pre">Track Route</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[48px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[157.75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center px-[24px] py-0 relative w-[157.75px]">
        <Map2 />
        <Text59 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[87.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[87.986px] items-center justify-between relative w-full">
          <Container45 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Departure Time</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Arrival Time</p>
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute h-[24px] left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">ETA/Status</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-gradient-to-r from-[66.674%] from-[rgba(149,12,151,0.2)] h-[56px] relative shrink-0 to-[rgba(49,4,49,0.04)] w-[1148.44px]" data-name="Container">
      <Text60 />
      <Text61 />
      <Text62 />
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">6:30 AM</p>
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">7:10 AM</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text65() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container48 />
      <Text65 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[56.889px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text63 />
      <Text64 />
      <Text66 />
    </div>
  );
}

function Text67() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">9:00 AM</p>
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">9:40 AM</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text69() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container50 />
      <Text69 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[56.889px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text67 />
      <Text68 />
      <Text70 />
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">12:00 PM</p>
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">12:40 PM</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text73() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text74() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container52 />
      <Text73 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[56.889px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text71 />
      <Text72 />
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">3:00 PM</p>
    </div>
  );
}

function Text76() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">3:40 PM</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text77() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container54 />
      <Text77 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[56.889px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text75 />
      <Text76 />
      <Text78 />
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[16px] w-[356.139px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">6:00 PM</p>
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute h-[24px] left-[396.14px] top-[16px] w-[356.153px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">6:40 PM</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#00c950] relative rounded-[2.98262e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text81() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.597px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[51.597px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[768.29px] top-[16px] w-[356.139px]" data-name="Text">
      <Container56 />
      <Text81 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Text79 />
      <Text80 />
      <Text82 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[2.67e_-5px] h-[283.556px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container51 />
      <Container53 />
      <Container55 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[341.333px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[341.333px] items-start p-[0.889px] relative w-full">
          <Container47 />
          <Container58 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[519.097px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[519.097px] items-start pb-[0.889px] pt-[32.889px] px-[32.889px] relative w-full">
          <Container46 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1088px] items-start relative shrink-0 w-full" data-name="Container">
      <Group2 />
      <Group3 />
      <Container60 />
    </div>
  );
}

function TimetableScreen() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[56.89px] top-[463.89px] w-[1216px]" data-name="TimetableScreen">
      <Container />
      <Container2 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return <div className="absolute h-[126px] left-[624.11px] top-[0.11px] w-[280px]" data-name="Container" />;
}

function Container63() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[176px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#e7e1e6] box-border content-stretch flex flex-col h-[329px] items-start left-0 pb-0 pt-[0.889px] px-[24.889px] top-[2476px] w-[1330px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none" />
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[68px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[86px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[68px] w-[86px]" />
    </div>
  );
}

function Text83() {
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

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[-20.89px] top-[0.11px] w-[592px]" data-name="Container">
      <Container65 />
      <Text83 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[48px] left-[65.11px] top-[54.11px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#070e2a] text-[18px] top-[-2.11px] w-[443px]">Your intelligent companion for seamless city travel. Track buses in real-time, plan your journey, and never miss a ride.</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[168px] left-[56.89px] top-[2524.89px] w-[592px]" data-name="Container">
      <Container66 />
      <Paragraph4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-[681px] top-[2525px] w-[280px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[38.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[97.403px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">{`Help & Support`}</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[47.875px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[84px] left-[681px] top-[2565px] w-[280px]" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Text84() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.792px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[5.792px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">t</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.014px] py-0 relative size-[50px]">
        <Text84 />
      </div>
    </div>
  );
}

function Text85() {
  return (
    <div className="h-[30px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[7px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[24px] text-nowrap top-[-2.11px] whitespace-pre">f</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text85 />
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.528px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.528px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">in</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text86 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[681px] top-[2665px]" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Legal</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[82.556px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[99.931px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Terms of Service</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[82.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[168px] items-start left-[992.89px] top-[2524.89px] w-[280px]" data-name="Container">
      <Heading6 />
      <Container70 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[53px] top-[2524.89px]">
      <Container67 />
      <Heading3 />
      <Container68 />
      <Container69 />
      <Container71 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[20px] leading-[20px] left-[53px] not-italic text-[#4a5565] text-[20px] top-[2743px] w-[778px]">© 2025 RouteMate. All rights reserved. Made with ❤️ for smart transportation.</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-[2476px]">
      {[...Array(2).keys()].map((_, i) => (
        <Footer key={i} />
      ))}
      <Group4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#2c084e] text-[24px]">Plan Your Journey</p>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Search">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.875 13.875" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text87() {
  return (
    <div className="h-[24px] relative shrink-0 w-[99.514px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[99.514px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[18px] text-nowrap text-white top-[-2.11px] whitespace-pre">Search Routes</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#6412b4] from-[13.462%] gap-[8px] h-[58px] items-center left-[959.11px] pl-[32px] pr-0 py-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#2c084e] to-[55.288%] top-[0.13px] w-[205px]" data-name="Button">
      <Search />
      <Text87 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[57.778px] left-0 rounded-[20px] top-0 w-[345.583px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[57.778px] items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative rounded-[inherit] w-[345.583px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">From (Source location)</p>
      </div>
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function MapPin() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[18.89px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_434)" id="MapPin">
          <path d={svgPaths.p399b3500} id="Vector" stroke="var(--stroke-0, #2C084E)" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #2C084E)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_434">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[57.778px] left-0 top-0 w-[345.583px]" data-name="Container">
      <TextInput />
      <MapPin />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[57.778px] left-0 rounded-[20px] top-0 w-[345.583px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[57.778px] items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative rounded-[inherit] w-[345.583px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">To (Destination)</p>
      </div>
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[18.89px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_464)" id="Navigation">
          <path d={svgPaths.p3b004e00} id="Vector" stroke="var(--stroke-0, #2C084E)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_464">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[57.778px] left-[361.58px] top-0 w-[345.583px]" data-name="Container">
      <TextInput1 />
      <Navigation />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute bg-white h-[56.889px] left-0 rounded-[20px] top-0 w-[219.556px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Filter() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[18.89px]" data-name="Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_456)" id="Filter">
          <path d={svgPaths.p3bb38a00} id="Vector" stroke="var(--stroke-0, #2C084E)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_456">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[57.778px] left-[723.17px] top-0 w-[219.556px]" data-name="Container">
      <Dropdown />
      <Filter />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[57.778px] relative shrink-0 w-full" data-name="Container">
      <Button15 />
      <Container72 />
      <Container73 />
      <Container74 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-[777.11px] not-italic text-[#2c084e] text-[18px] top-[18.13px] w-[147px]">Sort by Time</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[#b992de] box-border content-stretch flex flex-col gap-[24px] h-[179.542px] items-start left-[45px] pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] top-[221px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading1 />
      <Container75 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[2805px] left-0 top-0 w-[1330px]" data-name="App">
      <TimetableScreen />
      <Group5 />
      <Container76 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute left-[487px] size-[20px] top-[104px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Home">
          <path d={svgPaths.p2213f00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M7.5 18.3333V10H12.5V18.3333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[487px] top-[104px]">
      <Home />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[522px] not-italic text-[#4a5565] text-[20px] text-nowrap top-[104px] whitespace-pre">Home</p>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_5813)" id="Clock">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_5813">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text88() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Timetable</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[595px] px-[16px] py-0 rounded-[20px] top-[96px] w-[123.125px]" data-name="Button">
      <Clock />
      <Text88 />
    </div>
  );
}

function Map3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Map">
          <path d={svgPaths.p35d75a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M7.5 2.5V15" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M12.5 5V17.5" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text89() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Live Tracking</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[750px] px-[16px] py-0 rounded-[20px] top-[96px] w-[142.056px]" data-name="Button">
      <Map3 />
      <Text89 />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Heart">
          <path d={svgPaths.p193c2780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text90() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.514px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[56.514px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Favorites</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[936px] pl-[16px] pr-0 py-0 rounded-[20px] top-[96px] w-[116.514px]" data-name="Button">
      <Heart />
      <Text90 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute left-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[106px] top-[38px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute left-[-36.79%] max-w-none size-[180.19%] top-[-38.68%]" src={imgContainer} />
      </div>
    </div>
  );
}

function Text91() {
  return (
    <div className="absolute content-stretch flex h-[26.667px] items-start left-[123px] top-[66px] w-[162px]" data-name="Text">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2c084e] text-[45px] text-nowrap whitespace-pre">RouteMate</p>
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

function Container78() {
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

function Button19() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-[1164px] px-[8px] py-0 rounded-[20px] top-[90px]" data-name="Button">
      <Container78 />
      <ChevronDown />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#e7e1e6] h-[156px] left-0 top-0 w-[1330px]" />
      <div className="absolute bg-[#e7e1e6] h-[156px] left-0 top-0 w-[1330px]" />
      <div className="absolute bg-gradient-to-b from-[#7031ad] h-[38px] left-[600px] rounded-[50px] to-[#2e1447] to-[72.596%] top-[94px] w-[152px]" />
      <Group1 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Container77 />
      <Text91 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[123px] not-italic text-[#3d3a3a] text-[25px] text-nowrap top-[111.32px] whitespace-pre">Smart Transport</p>
      <Button19 />
    </div>
  );
}

function BusTimetablesAcOnly() {
  return (
    <div className="absolute h-[2805px] left-0 top-0 w-[1330px]" data-name="Bus Timetables (AC only)">
      <App />
      <Group />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <BusTimetablesAcOnly />
    </div>
  );
}

export default function BusTimeTableAc() {
  return (
    <div className="relative size-full" data-name="BusTimeTableAC">
      <Group6 />
    </div>
  );
}