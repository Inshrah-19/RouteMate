import svgPaths from "./svg-e4mrji4wcs";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[142.889px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[142.889px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#1e2939] text-[30px] top-[-2px] w-[239px]">Add New Route</p>
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
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-between ml-0 mt-0 relative w-[384px]" data-name="Container">
      <Heading />
      <Button />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[49.778px] left-0 rounded-[20px] top-0 w-[384px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[49.778px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[384px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(26,32,44,0.5)] text-nowrap whitespace-pre">Route Name (e.g., R-10)</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[49.778px] left-0 rounded-[20px] top-[65.78px] w-[384px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[49.778px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[384px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(26,32,44,0.5)] text-nowrap whitespace-pre">Source Location</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute h-[49.778px] left-0 rounded-[20px] top-[131.56px] w-[384px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[49.778px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[384px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(26,32,44,0.5)] text-nowrap whitespace-pre">Destination</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute h-[49.778px] left-0 rounded-[20px] top-[197.33px] w-[384px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[49.778px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[384px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(26,32,44,0.5)] text-nowrap whitespace-pre">Operating Hours</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[49.778px] min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[2.5px] border-solid border-white inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.778px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[52.89px] not-italic text-[#4a5565] text-[24px] text-nowrap top-[11.78px] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-gradient-to-r from-[#6412b4] grow h-[49.778px] min-h-px min-w-px relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#2c084e]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.778px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[39px] not-italic text-[20px] text-white top-[12.89px] w-[148px]">Add Route</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-start left-0 pb-0 pt-[16px] px-0 top-[263.11px] w-[384px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Form() {
  return (
    <div className="[grid-area:1_/_1] h-[328.889px] ml-0 mt-[60px] relative w-[384px]" data-name="Form">
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <TextInput3 />
      <Container1 />
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

function AddNewRoute() {
  return (
    <div className="absolute bg-[#dbd6e1] box-border content-stretch flex flex-col gap-[24px] h-[452.889px] items-start left-0 pb-0 pt-[32px] px-[32px] rounded-[20px] top-0 w-[448px]" data-name="Add new route">
      <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <AddNewRoute />
    </div>
  );
}

export default function AddNewRoute1() {
  return (
    <div className="relative size-full" data-name="AddNewRoute">
      <Group1 />
    </div>
  );
}