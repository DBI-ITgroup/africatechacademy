import { FaEye, FaBullseye, FaChartLine, FaGlobeAfrica, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20 bg-white-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800">ABOUT US</h2>
          <div className="w-12 h-1 bg-[#FFA500] mx-auto mt-1 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              AfricaTech Academy is an independent, forward-looking digital
              skills training institution established in 2025 as a spin-off of
              DBI Academy, the renowned training division of DBI Intelligent
              Technology Group (Pty) Ltd.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              AfricaTech Academy was born out of a bold vision to scale DBI
              Academy’s impact across the African continent. While rooted in
              the foundational work and curriculum of DBI Academy, it now
              operates as a separate entity with its own identity, governance,
              and geographic mandate.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              AfricaTech Academy’s main goal is to transform Africa from being
              a technology consumer into a technology producer, empowering the
              continent to take ownership of its digital future.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="border-l border-gray-300 pl-8 space-y-10">

            {/* VISION */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0B2C5F] w-12 h-12 flex items-center justify-center rounded-full">
                <FaEye className="text-white" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Our Vision</h4>
                <p className="text-gray-700 text-m">
                  Attain digital sovereignty and take responsibility for our
                  future through innovation and digital transformation.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-300"></div>

            {/* MISSION */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full">
                <FaBullseye className="text-white" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Our Mission</h4>
                <p className="text-gray-700 text-m">
                  To unlock Africa’s full potential by delivering accessible,
                  high-quality, industry-aligned digital skills training,
                  preparing youth and professionals to participate fully in
                  Africa’s digital economy.
                </p>

                <p className="text-gray-700 text-xl mt-6">
                  AfricaTech Academy maintains a strong legacy from DBI Academy
                  but is now charting its own course to meet Africa’s digital
                  talent needs head-on.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* WHY SECTION */}
        <h2 className="font-semibold text-xl text-gray-800 mb-3 mt-20 text-center">
          WHY AFRICATECH ACADEMY
        </h2>

        <p className="text-gray-700 text-m">
          After nearly a decade of empowering South African learners,
          educators, and professionals through DBI Academy’s Cisco-aligned
          programmes, it became clear that the need for accessible, future-
          focused ICT training was not limited to one country. AfricaTech
          Academy established a dual digital skills training model that
          leverages local qualification from QCTO and industry-related
          certifications from global vendors such as CompTIA, Microsoft,
          Cisco, among others, focusing on skilling and upskilling IT
          professionals to infuse a culture of lifelong learning. The decision
          to establish AfricaTech Academy reflects:
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden h-32 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2C5F] to-[#02142b]"></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            <div className="relative p-5 h-full flex flex-col justify-end text-white">
              <div className="flex items-center gap-3 mb-2">
                <FaBullseye className="text-[#FFA500] text-xl" />
                <h3 className="text-lg font-semibold">South Africa Focus</h3>
              </div>
              <p className="text-sm text-gray-200">
                Strengthening digital skills training to build a 4IR-ready workforce.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden h-32 group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-950"></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            <div className="relative p-5 h-full flex flex-col justify-end text-white">
              <div className="flex items-center gap-3 mb-2">
                <FaChartLine className="text-[#FFA500] text-xl" />
                <h3 className="text-lg font-semibold">Growing Demand</h3>
              </div>
              <p className="text-sm text-gray-200">
                Meeting the need for scalable and affordable ICT training across Africa.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden h-32 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#0b2c1b]"></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            <div className="relative p-5 h-full flex flex-col justify-end text-white">
              <div className="flex items-center gap-3 mb-2">
                <FaGlobeAfrica className="text-[#FFA500] text-xl" />
                <h3 className="text-lg font-semibold">Pan-African Vision</h3>
              </div>
              <p className="text-sm text-gray-200">
                Expanding digital training through scalable delivery models across Africa.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative rounded-xl overflow-hidden h-32 group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            <div className="relative p-5 h-full flex flex-col justify-end text-white">
              <div className="flex items-center gap-3 mb-2">
                <FaLightbulb className="text-[#FFA500] text-xl" />
                <h3 className="text-lg font-semibold">Innovation & Impact</h3>
              </div>
              <p className="text-sm text-gray-200">
                Driven by leadership focused on innovation, growth, and social impact.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;