import { useState } from 'react'
import { Calendar, CheckSquare, MapPin, BookOpen, Phone, FileText, ChevronLeft, FirstAidKit, Menu } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const features = [
  { key: 'schedule', title: 'Jadwal Dokter', icon: Calendar, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { key: 'checklist', title: 'Ceklis Persyaratan Rujukan', icon: CheckSquare, color: 'text-teal-600', bg: 'bg-teal-50' },
  { key: 'map', title: 'Peta Fasilitas Kesehatan', icon: MapPin, color: 'text-sky-600', bg: 'bg-sky-50' },
  { key: 'education', title: 'Edukasi Kesehatan', icon: BookOpen, color: 'text-teal-600', bg: 'bg-teal-50' },
  { key: 'contact', title: 'Narahubung FKTP', icon: Phone, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { key: 'guide', title: 'Panduan Rujukan', icon: FileText, color: 'text-sky-600', bg: 'bg-sky-50' },
]

function FeatureCard({ title, Icon, color, bg, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 rounded-2xl ${bg} p-4 hover:shadow-md active:scale-[0.99] transition-all duration-200 w-full`}
    >
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center bg-white/80 ${color} shadow-sm`}>
        <Icon size={24} />
      </div>
      <div className="text-left">
        <p className="text-gray-900 font-semibold leading-snug">{title}</p>
        <p className="text-gray-500 text-xs">Tap untuk membuka</p>
      </div>
    </button>
  )
}

function HeaderHero() {
  return (
    <div className="relative w-full h-56 overflow-hidden rounded-3xl">
      <Spline
        scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 p-5 flex items-center">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-1 h-10 w-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
            <FirstAidKit className="text-teal-400" size={24} />
          </div>
          <div>
            <h1 className="text-white text-lg font-semibold tracking-tight">Selamat Datang di MEDILINK</h1>
            <p className="text-teal-100 text-[13px] leading-snug mt-1">
              Sistem Informasi Tata Rujukan Kesehatan Kota Bogor
            </p>
            <p className="text-cyan-200 text-xs mt-1">Terhubung, Terarah, Sehat</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TopBar({ title, onBack }) {
  return (
    <div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-teal-100 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {onBack ? (
          <button onClick={onBack} className="h-9 w-9 grid place-items-center rounded-xl bg-teal-50 text-teal-700">
            <ChevronLeft size={20} />
          </button>
        ) : (
          <button className="h-9 w-9 grid place-items-center rounded-xl bg-teal-50 text-teal-700">
            <Menu size={18} />
          </button>
        )}
        <span className="font-semibold text-teal-900">{title}</span>
      </div>
      <div className="h-8 w-8 rounded-full bg-teal-100" />
    </div>
  )
}

function ScheduleScreen() {
  const slots = [
    { doctor: 'dr. Andini, Sp.PD', unit: 'Penyakit Dalam', time: '09:00 - 12:00' },
    { doctor: 'dr. Bagus, Sp.A', unit: 'Anak', time: '10:00 - 12:00' },
    { doctor: 'dr. Citra, Sp.OG', unit: 'Obgyn', time: '13:00 - 16:00' },
  ]
  return (
    <div className="p-4 space-y-3">
      {slots.map((s, i) => (
        <div key={i} className="flex items-center justify-between rounded-2xl border border-teal-100 p-4">
          <div>
            <p className="font-semibold text-teal-900">{s.doctor}</p>
            <p className="text-xs text-teal-700/70">{s.unit}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-cyan-700">{s.time}</p>
            <button className="mt-2 text-xs px-3 py-1.5 rounded-lg bg-teal-500 text-white">Ambil Antrian</button>
          </div>
        </div>
      ))}
    </div>
  )
}

function ChecklistScreen() {
  const items = [
    'Surat Pengantar dari FKTP',
    'Fotokopi KTP & Kartu BPJS',
    'Hasil Pemeriksaan Penunjang',
    'Ringkasan Medis',
  ]
  return (
    <div className="p-4">
      <div className="rounded-2xl border border-teal-100 p-4">
        {items.map((it, i) => (
          <label key={i} className="flex items-start gap-3 py-2">
            <input type="checkbox" className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 rounded" />
            <span className="text-teal-900 text-sm">{it}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function MapScreen() {
  return (
    <div className="p-4 space-y-3">
      <div className="rounded-2xl overflow-hidden border border-teal-100">
        <div className="aspect-[16/9] bg-gradient-to-br from-teal-50 to-cyan-50 grid place-items-center text-teal-700">
          <MapPin className="text-teal-600" size={28} />
          <span className="sr-only">Peta Fasilitas Kesehatan</span>
        </div>
      </div>
      <div className="text-xs text-teal-700/80">Gunakan peta interaktif ini untuk melihat lokasi RS dan FKTP terdekat.</div>
    </div>
  )
}

function EducationScreen() {
  const articles = [
    { title: 'Cek Tekanan Darah Secara Berkala', tag: 'Pencegahan' },
    { title: 'Pola Makan Sehat untuk Keluarga', tag: 'Gizi' },
    { title: 'Kenali Tanda Darurat Medis', tag: 'Edukasi' },
  ]
  return (
    <div className="p-4 space-y-3">
      {articles.map((a, i) => (
        <div key={i} className="rounded-2xl border border-teal-100 p-4">
          <p className="text-xs text-teal-600">{a.tag}</p>
          <p className="font-semibold text-teal-900 mt-1">{a.title}</p>
          <button className="mt-3 text-xs text-teal-700 underline">Baca Selengkapnya</button>
        </div>
      ))}
    </div>
  )
}

function ContactScreen() {
  const contacts = [
    { name: 'Puskesmas Bogor Tengah', phone: '0251-123456', alt: '0812-3456-7890' },
    { name: 'Klinik Harmoni', phone: '0251-654321', alt: '0813-9876-5432' },
  ]
  return (
    <div className="p-4 space-y-3">
      {contacts.map((c, i) => (
        <div key={i} className="flex items-center justify-between rounded-2xl border border-teal-100 p-4">
          <div>
            <p className="font-semibold text-teal-900">{c.name}</p>
            <p className="text-xs text-teal-700/70">{c.phone} · {c.alt}</p>
          </div>
          <a href={`tel:${c.alt}`} className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500 text-white">Hubungi</a>
        </div>
      ))}
    </div>
  )
}

function GuideScreen() {
  const steps = [
    'Kunjungi FKTP dan dapatkan surat pengantar',
    'Lengkapi berkas persyaratan',
    'Pilih rumah sakit rujukan sesuai kebutuhan',
    'Ikuti jadwal pemeriksaan dan simpan bukti',
  ]
  return (
    <div className="p-4">
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="h-6 w-6 rounded-full bg-teal-500 text-white text-xs grid place-items-center mt-0.5">{i + 1}</span>
            <p className="text-sm text-teal-900">{s}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Home({ onOpen }) {
  return (
    <div className="space-y-5">
      <HeaderHero />
      <div className="grid grid-cols-2 gap-3 px-1">
        {features.map((f) => (
          <FeatureCard
            key={f.key}
            title={f.title}
            Icon={f.icon}
            color={f.color}
            bg={f.bg}
            onClick={() => onOpen(f.key)}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('home')

  const renderScreen = () => {
    switch (active) {
      case 'schedule':
        return <ScheduleScreen />
      case 'checklist':
        return <ChecklistScreen />
      case 'map':
        return <MapScreen />
      case 'education':
        return <EducationScreen />
      case 'contact':
        return <ContactScreen />
      case 'guide':
        return <GuideScreen />
      default:
        return <Home onOpen={setActive} />
    }
  }

  const titleMap = {
    home: 'MEDILINK',
    schedule: 'Jadwal Dokter',
    checklist: 'Ceklis Persyaratan',
    map: 'Peta Faskes',
    education: 'Edukasi Kesehatan',
    contact: 'Narahubung FKTP',
    guide: 'Panduan Rujukan',
  }

  return (
    <div className="min-h-screen bg-white text-teal-900">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        <TopBar title={titleMap[active]} onBack={active !== 'home' ? () => setActive('home') : undefined} />

        <main className="flex-1 overflow-y-auto px-4 pb-24">
          {renderScreen()}
        </main>

        <nav className="fixed bottom-0 left-0 right-0">
          <div className="mx-auto max-w-md px-4 pb-5">
            <div className="rounded-2xl border border-teal-100 bg-white shadow-lg p-2 grid grid-cols-3 gap-2">
              <button onClick={() => setActive('schedule')} className={`flex flex-col items-center gap-1 py-2 rounded-xl ${active==='schedule' ? 'bg-teal-50 text-teal-700' : 'text-teal-700/70'}`}>
                <Calendar size={18} />
                <span className="text-[11px]">Jadwal</span>
              </button>
              <button onClick={() => setActive('map')} className={`flex flex-col items-center gap-1 py-2 rounded-xl ${active==='map' ? 'bg-teal-50 text-teal-700' : 'text-teal-700/70'}`}>
                <MapPin size={18} />
                <span className="text-[11px]">Peta</span>
              </button>
              <button onClick={() => setActive('guide')} className={`flex flex-col items-center gap-1 py-2 rounded-xl ${active==='guide' ? 'bg-teal-50 text-teal-700' : 'text-teal-700/70'}`}>
                <FileText size={18} />
                <span className="text-[11px]">Panduan</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
