import ScheduleForm from "./scheduleForm";


export default function ScheduleDedication() {
  return (
    <>
      <section className="bg-[#A35A4B] py-8 md:py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center px-4 sm:px-8 md:px-16 lg:px-32 pb-8">
            <h3 className="text-2xl md:text-3xl lg:text-[40px] text-white font-semibold">
              Please provide your personal dedication, song, voice and text in the box below
            </h3>
            <p className="text-sm md:text-[16px] text-[#D5D5D5] mt-2">
              Upon completing you written dedication and payment, a receipt will be sent to your inbox so that you
              confirm your purchase.
            </p>
            <p className="text-sm md:text-[16px] text-[#D5D5D5] mt-2">Please note: Inappropriate language or dedication will not be permitted.</p>
          </div>
          <ScheduleForm />
        </div>
      </section>
    </>
  )
}
