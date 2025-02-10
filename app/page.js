'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = ['about', 'skills', 'education', 'contact'];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-blue-600">My Kisah</span>
            <div className="flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  } capitalize px-2 py-1 transition-colors`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 min-h-screen flex flex-col items-center justify-center p-6">
        <main className="w-full max-w-3xl bg-white text-gray-900 shadow-xl rounded-lg overflow-hidden">
          {/* About Section */}
          <section className={`${activeTab === 'about' ? 'block' : 'hidden'}`}>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-40 h-40 relative">
                  <Image
                    src="/image/Profil.jpg"
                    alt="Profile Picture"
                    width={160}
                    height={160}
                    className="rounded-full border-4 border-white"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-bold">Restu Fajar Pratama</h1>
                  <p className="text-xl opacity-90">Mahasiswa Sistem Informasi</p>
                  <p className="mt-2 text-sm opacity-75">
                    "Ingin Menjadi Programmer Handal, Namun Enggan Ngoding"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Tentang Saya</h2>
                <p className="text-gray-700">
                  Saya adalah mahasiswa Sistem Informasi di Ma'soem University yang memiliki
                  ketertarikan dalam pengembangan web dan teknologi modern. Saat ini sedang fokus
                  mempelajari Next.js dan React untuk mengembangkan aplikasi web yang modern dan efisien.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Informasi Pribadi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      restufajarpratama69@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      +62 857-0064-8159
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Skills Section */}
          <section className={`p-8 ${activeTab === 'skills' ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Keahlian</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Pengembangan Web</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Next.js', level: 25 },
                    { name: 'React.js', level: 25 },
                    { name: 'HTML & CSS', level: 85 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>


          {/* Education Section */}
          <section className={`p-8 ${activeTab === 'education' ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Pendidikan</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold">Ma'soem University</h3>
                <p className="text-gray-600">Sistem Informasi</p>
                <p className="text-gray-500 text-sm">2023 - Sekarang</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold">SMK Negeri 6 Garut</h3>
                <p className="text-gray-600">Teknik Komputer dan Jaringan</p>
                <p className="text-gray-500 text-sm">2020 - 2023</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold">SMP Negeri 1 Nagreg</h3>
                <p className="text-gray-600">Sekolah Menengah Pertama</p>
                <p className="text-gray-500 text-sm">2017 - 2020</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold">SD Negeri 1 Nagreg</h3>
                <p className="text-gray-600">Sekolah Dasar</p>
                <p className="text-gray-500 text-sm">2011 - 2017</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className={`p-8 ${activeTab === 'contact' ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Kontak & Media Sosial</h2>
            <div className="space-y-4">
              <a
                href="mailto:restufajarpratama69@gmail.com"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <span>restufajarpratama69@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/restufajar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span>linkedin.com/in/restufajar</span>
              </a>
              <a
                href="https://github.com/Restu-FP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Github className="w-5 h-5 text-blue-600" />
                <span>github.com/Restu-FP</span>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}