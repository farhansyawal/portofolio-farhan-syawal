import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-teal-400" />,
    title: "Email",
    value: "farhansawal20@gmail.com",
  },
  {
    icon: <Phone className="w-6 h-6 text-teal-400" />,
    title: "Telepon",
    value: "+62 858 9131 6971",
  },
  {
    icon: <MapPin className="w-6 h-6 text-teal-400" />,
    title: "Lokasi",
    value: "Jakarta, Indonesia",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactSection = () => {
  return (
    <FadeInWhenVisible>
      <section
        id="contacts"
        className="scroll-mt-24 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Judul */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-teal-400 mb-6 border-b-4 border-teal-600 inline-block">
              Contacts
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Info Kontak */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariant}
                  className="flex items-start space-x-4"
                >
                  {item.icon}
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form Kontak */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="bg-[#1e293b] rounded-xl shadow-lg p-6 space-y-6"
            >
              <motion.div variants={fadeInVariant}>
                <label className="block text-gray-300 font-medium mb-1">Nama</label>
                <input
                  type="text"
                  className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-[#0f172a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Nama Anda"
                />
              </motion.div>
              <motion.div variants={fadeInVariant}>
                <label className="block text-gray-300 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-[#0f172a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Email Anda"
                />
              </motion.div>
              <motion.div variants={fadeInVariant}>
                <label className="block text-gray-300 font-medium mb-1">Pesan</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-[#0f172a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                variants={fadeInVariant}
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300"
              >
                Kirim Pesan
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default ContactSection;
