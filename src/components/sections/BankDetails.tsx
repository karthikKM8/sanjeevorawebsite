import { motion } from "framer-motion";

export function BankDetails() {
  return (
    <section className="relative overflow-hidden bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
            Donate now to change someone's life!
          </h2>
          <p className="text-base text-foreground/80 mb-8 max-w-xl">
            You can do a bank transfer to the account details below. You can also use any UPI/BHIM payment, like PayTM, GPay, PhonePe, etc.
          </p>
          
          <div className="w-full max-w-2xl rounded-2xl border border-border/50 bg-background/50 p-6 sm:p-8 text-left space-y-4 text-base sm:text-lg shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
              <span className="text-muted-foreground mb-1 sm:mb-0">Account name:</span>
              <span className="font-bold text-foreground">SANJEEVORA VIDYA MISSION</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
              <span className="text-muted-foreground mb-1 sm:mb-0">Bank name:</span>
              <span className="font-bold text-foreground">IDFC FIRST</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
              <span className="text-muted-foreground mb-1 sm:mb-0">Account number:</span>
              <span className="font-bold text-foreground">10291782057</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
              <span className="text-muted-foreground mb-1 sm:mb-0">Branch:</span>
              <span className="font-bold text-foreground">R T NAGAR BRANCH</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
              <span className="text-muted-foreground mb-1 sm:mb-0">SWIFT code:</span>
              <span className="font-bold text-foreground">IDFBINBBMUM</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <span className="text-muted-foreground mb-1 sm:mb-0">IFSC:</span>
              <span className="font-bold text-foreground">IDFB0080167</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ORIGINAL 2-COLUMN LAYOUT (KEPT FOR FUTURE USE)
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-6">
              Donate now to change someone's life!
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl">
              You can do a bank transfer to the account details below. You can also use any UPI/BHIM payment, like PayTM, GPay, PhonePe, etc.
            </p>
            <div className="space-y-4 font-medium text-foreground text-lg">
              <p><span className="font-bold">Account name:</span> SANJEEVORA VIDYA MISSION</p>
              <p><span className="font-bold">Bank name:</span> IDFC FIRST</p>
              <p><span className="font-bold">Account number:</span> 10291782057</p>
              <p><span className="font-bold">Branch:</span> R T NAGAR BRANCH</p>
              <p><span className="font-bold">SWIFT code:</span> IDFBINBBMUM</p>
              <p><span className="font-bold">IFSC:</span> IDFB0080167</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-2xl border bg-white p-1 shadow-2xl relative overflow-hidden">
              <div className="bg-[#971426] rounded-t-xl px-6 py-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 skew-y-12 transform origin-top-left" />
                <div className="relative z-10">
                  <div className="mx-auto mb-5 inline-flex items-center justify-center bg-white px-5 py-2 rounded-md shadow-sm">
                    <span className="text-[#971426] font-extrabold text-xl tracking-tight">
                      IDFC FIRST <span className="font-semibold">Bank</span>
                    </span>
                  </div>
                  <div className="text-white font-bold text-lg tracking-wider">
                    SCAN QR CODE TO PAY
                  </div>
                </div>
              </div>
              
              <div className="bg-white px-6 py-10 text-center relative -mt-4 rounded-t-[2rem]">
                <div className="mx-auto mb-6 flex aspect-square w-64 items-center justify-center rounded-2xl border-4 border-dashed border-gray-200 bg-gray-50">
                  <p className="text-gray-400 font-semibold text-lg">QR Code Space</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h3 className="font-bold text-gray-900 text-lg">SANJEEVORA VIDYA MISSION</h3>
                  <p className="text-sm text-gray-500">Use any of these apps to scan the QR</p>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-bold text-gray-600">
                  <span className="text-[#000000]">UPI</span>
                  <span className="text-[#4285F4]">GPay</span>
                  <span className="text-[#00B9F1]">Paytm</span>
                  <span className="text-[#5F259F]">PhonePe</span>
                  <span className="text-[#2A824A]">BHIM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      */}
    </section>
  );
}
