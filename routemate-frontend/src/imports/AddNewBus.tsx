import svgPaths from "./svg-6rhw19ekzm";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[146px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[146px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#1e2939] text-[30px] top-[-2px] w-[198px]">Add New Bus</p>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-5.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p32fd5df0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-5.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p48d8800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <X />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex h-[36px] items-center justify-between ml-0 mt-0 relative w-[384px]" data-name="Container">
      <Heading />
      <Button />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[49.778px] left-0 rounded-[20px] top-0 w-[384px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[49.778px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[384px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap whitespace-pre">Bus Number (e.g., 12A)</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-481.33px] size-0 top-[-318px]" data-name="Option" />;
}

function ChevronDown() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="ChevronDown">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.8%_-4.45%_-21.7%_-4.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p2bfd0700} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.72" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[324px] pb-0 pt-[8px] px-[8px] rounded-[16px] size-[40px] top-[10.22px]" data-name="Container">
      <ChevronDown />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute h-[48.889px] left-0 rounded-[20px] top-[65.78px] w-[384px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      {[...Array(4).keys()].map((_, i) => (
        <Option key={i} />
      ))}
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[19px] not-italic text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap top-[15.22px] whitespace-pre">Select Bus Type</p>
      <Container1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[49.778px] left-0 rounded-[20px] top-[130.67px] w-[384px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[49.778px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[384px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap whitespace-pre">Driver Name</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Option1() {
  return <div className="absolute left-[-481.33px] size-0 top-[-448.67px]" data-name="Option" />;
}

function ChevronDown1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="ChevronDown">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.8%_-4.45%_-21.7%_-4.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p2bfd0700} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.78" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[324px] pb-0 pt-[8px] px-[8px] rounded-[16px] size-[40px] top-[8.56px]" data-name="Container">
      <ChevronDown1 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="absolute h-[48.889px] left-0 rounded-[20px] top-[196.44px] w-[384px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      {[...Array(3).keys()].map((_, i) => (
        <Option1 key={i} />
      ))}
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[20px] not-italic text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap top-[14.56px] whitespace-pre">Assign Route</p>
      <Container2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[49.778px] min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[2.5px] border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.778px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[57.89px] not-italic text-[20px] text-black text-nowrap top-[11.78px] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-gradient-to-r from-[#6412b4] grow h-[49.778px] min-h-px min-w-px relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#2c084e]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.778px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[52px] not-italic text-[20px] text-white top-[10.67px] w-[121px]">Add Bus</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[65.778px] items-start left-0 pb-0 pt-[16px] px-0 top-[261.33px] w-[384px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Form() {
  return (
    <div className="[grid-area:1_/_1] h-[327.111px] ml-0 mt-[60px] relative w-[384px]" data-name="Form">
      <TextInput />
      <Dropdown />
      <TextInput1 />
      <Dropdown1 />
      <Container3 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container />
      <Form />
    </div>
  );
}

export default function AddNewBus() {
  return (
    <div className="bg-[#dbd6e1] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Add new bus">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
          <Group />
        </div>
      </div>
    </div>
  );
}