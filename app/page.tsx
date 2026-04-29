'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Store, 
  CreditCard, 
  Smartphone, 
  Menu, 
  X, 
  ShieldCheck, 
  TrendingUp
} from 'lucide-react';

export default function KovaPOSLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img src="https://storage.googleapis.com/timetraq-public/other/img/Logo%20KovaPOS%20datar.png" alt="KovaPOS Logo" className="h-8 object-contain" />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#fitur" className="text-slate-600 hover:text-[#D3A698] text-sm font-medium transition-colors">Fitur</a>
              <a href="#solusi" className="text-slate-600 hover:text-[#D3A698] text-sm font-medium transition-colors">Solusi</a>
              <a href="#harga" className="text-slate-600 hover:text-[#D3A698] text-sm font-medium transition-colors">Harga</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="https://wa.me/6281310077331?text=Halo%2C%20saya%20tertarik%20untuk%20mencoba%20gratis%20KovaPOS." target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md">
                Coba Gratis
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-[#D3A698] transition-colors">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <a href="#fitur" onClick={toggleMenu} className="text-lg font-medium text-slate-900 border-b border-slate-100 pb-2 hover:text-[#D3A698]">Fitur</a>
              <a href="#solusi" onClick={toggleMenu} className="text-lg font-medium text-slate-900 border-b border-slate-100 pb-2 hover:text-[#D3A698]">Solusi</a>
              <a href="#harga" onClick={toggleMenu} className="text-lg font-medium text-slate-900 border-b border-slate-100 pb-2 hover:text-[#D3A698]">Harga</a>
              <a href="https://wa.me/6281310077331?text=Halo%2C%20saya%20tertarik%20untuk%20mencoba%20gratis%20KovaPOS." target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="bg-slate-800 text-center text-white py-3 rounded-xl font-medium mt-4 hover:bg-slate-900 transition block w-full">Coba Gratis</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#D3A698]/10 text-slate-800 rounded-full text-xs font-bold uppercase tracking-wider mb-8"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D3A698] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D3A698]"></span>
            </span>
            KovaPOS 2.0 Kini Tersedia
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl leading-tight"
          >
            Kelola Salon & Barbershop Lebih <span className="text-[#D3A698]">Praktis.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed"
          >
            Sistem Point of Sales (POS) khusus untuk Salon Kecantikan dan Barbershop. Kelola komisi kapster, membership pelanggan, dan transaksi dalam satu aplikasi cerdas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href="https://wa.me/6281310077331?text=Halo%2C%20saya%20melihat%20website%20KovaPOS%20dan%20tertarik%20untuk%20mulai%20coba%20gratis." target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group">
              Mulai Coba Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/6281310077331?text=Halo%2C%20saya%20ingin%20menjadwalkan%20demo%20aplikasi%20KovaPOS." target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              Jadwalkan Demo
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 relative mx-auto w-full max-w-4xl aspect-video rounded-3xl shadow-2xl border border-slate-200 overflow-hidden ring-4 ring-white"
          >
            <video 
              src="https://storage.googleapis.com/timetraq-public/other/img/Animasi%20Logo%20KovaPOS.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* SOLUSI SECTION */}
        <section id="solusi" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Solusi Cerdas untuk Skala Bisnis Anda</h2>
              <p className="text-slate-500 md:text-lg">Setiap salon dan barbershop punya tantangan berbeda. Sistem kami mensinkronisasi layanan kasir, komisi kapster, hingga absensi karyawan tanpa pusing.</p>
            </div>

            <div className="space-y-24">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D3A698]/10 text-[#D3A698] rounded-full text-sm font-bold tracking-wider">
                    <Store className="w-4 h-4" /> Transaksi Kasir
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">Pencatatan Transaksi & Printer Thermal</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">Catat setiap layanan potong rambut dan produk perawatan yang terjual dengan cepat. Terintegrasi langsung dengan printer thermal bluetooth untuk mencetak struk secara profesional.</p>
                  <ul className="space-y-3 pt-4">
                    {['Desain tombol layanan dan produk yang jelas', 'Koneksi sekali klik ke printer thermal', 'Support berbagai kemudahan metode bayar'].map((l, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#D3A698]" />
                        <span className="text-slate-700 font-medium">{l}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 w-full flex justify-center md:justify-end"
                >
                  <div className="relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[14px] border-slate-900 bg-slate-900 shadow-2xl group shrink-0">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-5 md:h-7 bg-slate-900 rounded-b-xl md:rounded-b-2xl w-1/2 mx-auto z-20"></div>
                    <div className="w-full h-full relative overflow-hidden rounded-[1.8rem] md:rounded-[2.2rem] bg-white">
                      <Image src="https://storage.googleapis.com/timetraq-public/other/img/Screenshot2" alt="KovaPOS Cashier" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-bold tracking-wider">
                    <BarChart3 className="w-4 h-4" /> Komisi & Gaji
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">Sistem Komisi & Penggajian Otomatis</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">Tidak perlu lagi pusing menghitung komisi manual. Sistem kami secara otomatis membagi komisi setiap kapster dan menghitung total gaji secara presisi.</p>
                  <ul className="space-y-3 pt-4">
                    {['Pembagian komisi fleksibel per layanan', 'Absensi karyawan sudah terintegrasi', 'Hitung dan bayar gaji dengan sekali klik'].map((l, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-slate-800" />
                        <span className="text-slate-700 font-medium">{l}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 w-full flex justify-center md:justify-start"
                >
                  <div className="relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[14px] border-slate-900 bg-slate-900 shadow-2xl group shrink-0">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-5 md:h-7 bg-slate-900 rounded-b-xl md:rounded-b-2xl w-1/2 mx-auto z-20"></div>
                    <div className="w-full h-full relative overflow-hidden rounded-[1.8rem] md:rounded-[2.2rem] bg-white">
                      <Image src="https://storage.googleapis.com/timetraq-public/other/img/Screenshot3" alt="KovaPOS Reporting" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D3A698]/10 text-[#D3A698] rounded-full text-sm font-bold tracking-wider">
                    <TrendingUp className="w-4 h-4" /> Keuangan & Laba
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">Analisis Pemasukan & Laba Bersih</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">Pantau terus performa bisnis dengan laporan penjualan harian hingga bulanan. Lihat detail pemasukan, metode pembayaran yang sering digunakan, serta perhitungan laba bersih secara otomatis tanpa repot rekap manual.</p>
                  <ul className="space-y-3 pt-4">
                    {['Laporan penjualan komprehensif', 'Analisis metode pembayaran favorit', 'Kalkulasi laba bersih real-time'].map((l, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#D3A698]" />
                        <span className="text-slate-700 font-medium">{l}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 w-full flex justify-center md:justify-end"
                >
                  <div className="relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[14px] border-slate-900 bg-slate-900 shadow-2xl group shrink-0">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-5 md:h-7 bg-slate-900 rounded-b-xl md:rounded-b-2xl w-1/2 mx-auto z-20"></div>
                    <div className="w-full h-full relative overflow-hidden rounded-[1.8rem] md:rounded-[2.2rem] bg-white">
                      <Image src="https://storage.googleapis.com/timetraq-public/other/img/Screenshot1" alt="KovaPOS Keuangan" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section id="fitur" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fitur Lengkap Salon & Barbershop</h2>
              <p className="text-slate-500 md:text-lg">Tinggalkan buku catatan dan cara manual. KovaPOS mengotomatisasi pengelolaan operasional Anda agar layanan ke pelanggan lebih maksimal.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <CreditCard className="w-6 h-6 text-[#D3A698]" />,
                  title: "Kasir & Transaksi Cepat",
                  desc: "Mencatat transaksi layanan kecantikan hingga penjualan produk dengan antarmuka yang sangat mudah dipahami, langsung cetak ke printer thermal."
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-slate-800" />,
                  title: "Membership & Loyalty",
                  desc: "Tingkatkan retensi pelanggan dengan sistem membership dan kumpulkan poin loyalitas untuk diskon atau layanan perawatan gratis."
                },
                {
                  icon: <Store className="w-6 h-6 text-[#D3A698]" />,
                  title: "Kalkulasi Komisi Otomatis",
                  desc: "Atur pembagian persentase atau nominal komisi untuk setiap kapster atau stylist dengan mudah, transparan, dan akurat."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-slate-800" />,
                  title: "Absensi & Shift Karyawan",
                  desc: "Pantau waktu kehadiran karyawan dan kelola pergantian jadwal absen staf secara real-time langsung dari dalam aplikasi POS."
                },
                {
                  icon: <Smartphone className="w-6 h-6 text-[#D3A698]" />,
                  title: "Penggajian Sekali Klik",
                  desc: "Sistem cerdas kami menggabungkan data absensi masuk dan riwayat komisi untuk menghitung total gaji per staf secara instan."
                },
                {
                  icon: <BarChart3 className="w-6 h-6 text-slate-800" />,
                  title: "Laporan Harian & Bulanan",
                  desc: "Akses detail pelaporan penjualan, layanan paling laris, dan performa setiap karyawan per hari atau bulan kapanpun dibutuhkan."
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-[#D3A698]/10 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="harga" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#D3A698]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-700/50 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D3A698]/10 text-[#D3A698] rounded-full text-xs font-bold uppercase tracking-wider mb-6">Harga Transparan</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Solusi Terbaik Harga <span className="text-[#D3A698]">Terjangkau.</span></h2>
                  <p className="text-slate-300 md:text-lg mb-8 max-w-lg mx-auto md:mx-0">Tingkatkan performa kasir dan pencatatan Anda tanpa biaya bulanan yang memberatkan. Sistem lengkap siap pakai.</p>
                  
                  <div className="flex items-baseline justify-center md:justify-start gap-2 bg-slate-800/50 inline-flex px-6 py-4 rounded-2xl border border-slate-700">
                    <span className="text-slate-400 text-lg font-medium">Mulai dari</span>
                    <span className="text-4xl md:text-5xl font-extrabold text-white">Rp 1.600</span>
                    <span className="text-[#D3A698] font-semibold text-lg">-an / hari</span>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-auto relative">
                  <div className="absolute inset-0 bg-[#D3A698] blur-xl opacity-30 rounded-full"></div>
                  <a 
                    href="https://wa.me/6281310077331" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative w-full md:w-auto bg-[#D3A698] hover:bg-[#c29688] text-slate-900 px-8 py-5 rounded-2xl text-lg font-bold transition-all flex flex-col items-center justify-center gap-2 shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-6 h-6" />
                      Hubungi via WhatsApp
                    </div>
                    <span className="text-sm font-medium opacity-80">0813 1007 7331</span>
                  </a>
                  <p className="text-sm text-slate-400 mt-6 text-center">Konsultasi gratis dengan tim spesialis kami.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 py-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-[#D3A698]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-slate-800/50 blur-3xl pointer-events-none" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Siap Mengembangkan Bisnis Anda?</h2>
            <p className="text-slate-300 md:text-lg mb-10 max-w-2xl mx-auto">Tingkatkan efisiensi kerja salon dan barbershop Anda untuk raih omset lebih maksimal dengan sistem POS cerdas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/6281310077331?text=Halo%2C%20saya%20tertarik%20untuk%20mendaftar%20dan%20mencoba%20gratis%20KovaPOS." target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:bg-slate-50 flex items-center justify-center gap-2 shadow-xl">
                Daftar Sekarang - Gratis 14 Hari
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-8 opacity-80">Tanpa kartu kredit. Integrasi awal kurang dari 15 menit.</p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center mb-2">
                <img src="https://storage.googleapis.com/timetraq-public/other/img/Logo%20KovaPOS%20BG.png" alt="KovaPOS Logo" className="h-28 object-contain -ml-2" />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
                Sistem Point of Sales khusus untuk Salon dan Barbershop terlengkap. Solusi cerdas untuk semua proses kelola operasional rutin.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Produk</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-[#D3A698] text-sm transition-colors">Aplikasi Kasir</a></li>
                <li><a href="#" className="text-slate-500 hover:text-[#D3A698] text-sm transition-colors">Manajemen Inventaris</a></li>
                <li><a href="#" className="text-slate-500 hover:text-[#D3A698] text-sm transition-colors">Aplikasi CRM</a></li>
                <li><a href="#" className="text-slate-500 hover:text-[#D3A698] text-sm transition-colors">Program Loyalitas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Perusahaan</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-[#D3A698] text-sm transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="text-slate-500 hover:text-[#D3A698] text-sm transition-colors">Karir</a></li>
                <li><a href="#" className="text-slate-500 hover:text-[#D3A698] text-sm transition-colors">Blog Update</a></li>
                <li><a href="#" className="text-slate-500 hover:text-[#D3A698] text-sm transition-colors">Kebijakan Privasi</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Hubungi Kami</h4>
              <p className="text-slate-500 text-sm mb-2 hover:text-[#D3A698] transition">
                <a href="mailto:akmalgumilar@gmail.com">akmalgumilar@gmail.com</a>
              </p>
              <p className="text-slate-500 text-sm mb-2 hover:text-[#D3A698] transition">
                <a href="https://wa.me/6281310077331" target="_blank" rel="noopener noreferrer">+62 813 1007 7331</a>
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© {(new Date().getFullYear())} KovaPOS Indonesia. Hak Cipta Dilindungi.</p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/kovapos" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
