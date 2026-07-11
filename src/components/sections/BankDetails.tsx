import { motion } from "framer-motion";

export function BankDetails() {
  return (
    <section className="relative overflow-hidden bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 flex flex-col items-center"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4 lg:whitespace-nowrap">
            Donate now to change someone's life!
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            You can do a bank transfer to the account details below. You can also use any UPI/BHIM payment, like PayTM, GPay, PhonePe, etc.
          </p>
        </motion.div>

        {/* Single Unified Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-5xl rounded-3xl border border-border/50 bg-card shadow-xl overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Left: Bank Details */}
          <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
            <h3 className="font-display text-2xl font-bold mb-2">Bank Account Details</h3>
            
            <div className="space-y-4 text-base sm:text-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground mb-1 sm:mb-0">Account name:</span>
                <span className="font-bold text-foreground sm:text-right">SANJEEVORA VIDYA MISSION</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground mb-1 sm:mb-0">Bank name:</span>
                <span className="font-bold text-foreground sm:text-right">IDFC FIRST</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground mb-1 sm:mb-0">Account number:</span>
                <span className="font-bold text-foreground sm:text-right">10291782057</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground mb-1 sm:mb-0">Branch:</span>
                <span className="font-bold text-foreground sm:text-right">R T NAGAR BRANCH</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground mb-1 sm:mb-0">SWIFT code:</span>
                <span className="font-bold text-foreground sm:text-right">IDFBINBBMUM</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-muted-foreground mb-1 sm:mb-0">IFSC:</span>
                <span className="font-bold text-foreground sm:text-right">IDFB0080167</span>
              </div>
            </div>
          </div>

          {/* Right: QR Code */}
          <div className="w-full lg:w-1/2 bg-gray-50/50 border-t lg:border-t-0 lg:border-l border-border/50 flex flex-col relative">
            <div className="bg-[#971426] px-6 py-6 text-center relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-white/5 skew-y-12 transform origin-top-left" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between mx-auto max-w-sm gap-4">
                <div className="inline-flex items-center justify-center bg-white px-4 py-1.5 rounded-md shadow-sm">
                  <span className="text-[#971426] font-extrabold text-lg tracking-tight">
                    IDFC FIRST <span className="font-semibold">Bank</span>
                  </span>
                </div>
                <div className="text-white font-bold text-base tracking-wider text-center sm:text-right">
                  SCAN TO PAY
                </div>
              </div>
            </div>
            
            <div className="p-8 sm:p-10 flex-grow flex flex-col items-center justify-center text-center">
              <div className="mb-6 flex aspect-square w-56 sm:w-64 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden p-3">
                <img src="/QR.png" alt="Scan to donate" className="w-full h-full object-contain" />
              </div>
              
              <div className="mb-6 inline-flex items-center justify-center bg-white rounded-xl px-5 py-3 border border-gray-200 shadow-sm">
                <span className="text-gray-500 font-semibold mr-2">UPI ID:</span>
                <span className="text-lg sm:text-xl font-bold text-[#971426]">sanjeevora@idfcbank</span>
              </div>
              
              <div className="space-y-1 mb-6">
                <h3 className="font-bold text-gray-900 text-lg">SANJEEVORA VIDYA MISSION</h3>
                <p className="text-sm text-gray-500">Use any of these apps to scan the QR</p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-bold text-gray-600 mt-auto">
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
    </section>
  );
}
