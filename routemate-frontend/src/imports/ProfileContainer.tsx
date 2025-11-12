import svgPaths from "./svg-hc2uxug234";

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Inshrah</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">inshrah@gmail.com</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[60.875px] items-start left-[0.89px] pb-[0.889px] pt-[12px] px-[16px] top-[8.89px] w-[222.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="User">
          <path d={svgPaths.p23e99000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.403px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[39.403px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Profile</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[36px] items-center left-[0.89px] pl-[16px] pr-0 py-0 top-[69.76px] w-[222.222px]" data-name="Button">
      <User />
      <Text />
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Settings">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
          <path d={svgPaths.pf067bc0} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[49.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[49.75px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[36px] items-center left-[0.89px] pl-[16px] pr-0 py-0 top-[105.76px] w-[222.222px]" data-name="Button">
      <Settings />
      <Text1 />
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="HelpCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4645)" id="HelpCircle">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
          <path d={svgPaths.p1190c980} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4645">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[97.403px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[97.403px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">{`Help & Support`}</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[36px] items-center left-[0.89px] pl-[16px] pr-0 py-0 top-[141.76px] w-[222.222px]" data-name="Button">
      <HelpCircle />
      <Text2 />
    </div>
  );
}

function LogOut() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LogOut">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="LogOut">
          <path d={svgPaths.p12257fa0} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d={svgPaths.p2c1f680} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          <path d="M14 8H6" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[43.917px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#e7000b] text-[14px] text-nowrap whitespace-pre">Logout</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[36px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <LogOut />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[44.889px] items-start left-[0.89px] pb-0 pt-[8.889px] px-0 top-[185.76px] w-[222.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Button3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[0.89px] top-[8.89px]">
      <Container />
      <Button />
      <Button1 />
      <Button2 />
      <Container1 />
    </div>
  );
}

export default function ProfileContainer() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Profile container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Group />
    </div>
  );
}