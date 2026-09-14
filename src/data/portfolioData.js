export const portfolioData = {
  personal: {
    name: "Aplan",
    githubUsername: "aplannst41",
    avatarUrl: "https://avatars.githubusercontent.com/u/214442519?v=4",
    title: "Fullstack Web & Mobile Engineer",
    roles: [
      "Fullstack Web & Mobile Engineer",
      "Mobile App Specialist (Flutter & Dart)",
      "Backend & RESTful API Developer (Laravel & PHP)",
      "System Software & Algorithm Engineer (C++)",
      "IT Infrastructure & Network Operations"
    ],
    tagline: "Membangun sistem digital tangguh yang mengubah kebutuhan bisnis menjadi software bernilai tinggi.",
    bio: "Mahasiswa Program Studi Sistem Informasi Universitas Malikussaleh (UNIMAL) yang berfokus pada rekayasa perangkat lunak Web & Mobile serta integrasi sistem informasi enterprise. Memiliki pengalaman praktis dalam merancang dan mengimplementasikan sistem 'Dashboard Monitoring Operasional' di Kantor Bandara UPBU Malikussaleh (Kemenhub) serta pemeliharaan infrastruktur TI. Memadukan analisis proses bisnis dengan penerapan kode bersih (Flutter, React, Laravel, C++), saya siap berkontribusi secara profesional dalam tim pengembang untuk menghadirkan solusi teknologi yang berdampak nyata bagi kemajuan industri.",
    location: "Aceh Utara / Terbuka untuk Remote & Relokasi",
    status: "Siap Berkontribusi: Full-Time / Kontrak / On-Site",
    email: "aplannst41@gmail.com",
    experienceYears: "2+",
    completedProjects: "6+",
    githubUrl: "https://github.com/aplannst41",
    socials: {
      github: "https://github.com/aplannst41",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },

  // Nilai Tambah & Alasan Perusahaan Memilih Aplan
  companyTrustPillars: [

    {
      id: "clean-architecture",
      title: "Clean Code & Mudah Dirawat",
      desc: "Menerapkan prinsip Object-Oriented Programming (OOP), modularitas, dan best practice industri agar tim Anda dapat mengembangkan kode jangka panjang tanpa technical debt.",
      metric: "Maintainable & Scalable"
    },
    {
      id: "full-lifecycle",
      title: "Full-Lifecycle Software Engineering",
      desc: "Menguasai alur menyeluruh: mulai dari analisis kebutuhan sistem informasi di UNIMAL, prototyping UI di Figma, integrasi API, hingga deployment cloud.",
      metric: "End-to-End Delivery"
    },
    {
      id: "work-ethic",
      title: "Komitmen Waktu & Komunikasi Proaktif",
      desc: "Disiplin terhadap tenggat waktu (deadline), adaptif terhadap budaya kolaboratif tim modern, dan transparan dalam pelaporan progress.",
      metric: "Disiplin & Akuntabel"
    }
  ],

  // Senior IT Structured Skills
  skillCategories: [
    {
      name: "Bahasa Pemrograman",
      description: "Bahasa inti yang dikuasai secara mendalam untuk logika sistem, arsitektur OOP, dan rekayasa perangkat lunak efisien.",
      skills: ["Dart", "JavaScript (ES6+)", "PHP", "C++", "SQL", "HTML5 & CSS3"]
    },
    {
      name: "Framework & Library",
      description: "Framework modern berstandar enterprise untuk antarmuka web interaktif dan aplikasi mobile cross-platform performa tinggi.",
      skills: ["Flutter", "React.js", "Laravel / Blade", "Tailwind CSS", "Bootstrap"]
    },
    {
      name: "Backend & Database",
      description: "Perancangan arsitektur basis data relasional, pengamanan endpoint, dan integrasi RESTful API yang konsisten.",
      skills: ["MySQL", "RESTful API", "Database Design", "JSON Data Modeling"]
    },
    {
      name: "Tools & Infrastruktur IT",
      description: "Ekosistem kolaborasi kode, automated deployment, manajemen jaringan LAN, dan pemeliharaan hardware.",
      skills: ["Git & GitHub", "IT Networking & LAN", "Hardware Troubleshooting", "Vercel", "VS Code", "Postman"]
    },
    {
      name: "UI/UX & Desain",
      description: "Penerjemahan kebutuhan pengguna ke dalam wireframe, user flow, desain antarmuka intuitif, dan prototipe interaktif.",
      skills: ["Figma", "UI/UX Prototyping", "Responsive Web Design"]
    }
  ],

  projects: [
    {
      id: "dashboard-bandara",
      title: "Dashboard Monitoring Operasional Bandara",
      category: "Web Application",
      description: "Sistem informasi terpadu yang dibangun untuk mengotomatisasi pencatatan dan pemantauan status operasional harian di Kantor Bandara Malikussaleh (UPBU). Menggantikan rekapitulasi konvensional menjadi visualisasi data yang cepat, akurat, dan terstruktur.",
      image: "https://opengraph.githubassets.com/1/aplannst41/dashboard-monitoring-bandara-",
      tags: ["PHP", "Laravel / Blade", "MySQL", "Bootstrap", "Sistem Monitoring"],
      githubUrl: "https://github.com/aplannst41/dashboard-monitoring-bandara-",
      liveUrl: "https://github.com/aplannst41/dashboard-monitoring-bandara-",
      highlight: "Proyek Riil Bandara UPBU",
      impact: "Meningkatkan efisiensi pelaporan operasional dan monitoring harian instansi penerbangan."
    },
    {
      id: "contact-guard",
      title: "ContactGuard — Web App Manajemen Kontak",
      category: "Web Application",
      description: "Aplikasi web modern untuk manajemen data kontak terenkripsi dengan arsitektur frontend JavaScript modular. Dideploy di Vercel dengan optimasi aset performa tinggi dan waktu muat di bawah 1 detik.",
      image: "https://opengraph.githubassets.com/1/aplannst41/ContactGuard",
      tags: ["JavaScript (ES6+)", "HTML5", "CSS3", "Vercel", "Clean Architecture"],
      githubUrl: "https://github.com/aplannst41/ContactGuard",
      liveUrl: "https://contact-guard.vercel.app",
      highlight: "Live Production on Vercel",
      impact: "Aplikasi aktif di production dengan load-time instan dan antarmuka responsif."
    },
    {
      id: "sistem-akademik",
      title: "Aplikasi Mobile Sistem Informasi Akademik",
      category: "Mobile App",
      description: "Aplikasi mobile cross-platform berbasis Flutter & Dart yang dirancang untuk efisiensi mobilitas mahasiswa dalam mengakses jadwal kuliah, kartu rencana studi, dan rekapitulasi nilai secara terpusat.",
      image: "https://opengraph.githubassets.com/1/aplannst41/Aplikasi-Sistem-Akademik",
      tags: ["Flutter", "Dart", "Cross-Platform", "State Management", "REST API"],
      githubUrl: "https://github.com/aplannst41/Aplikasi-Sistem-Akademik",
      liveUrl: "https://github.com/aplannst41/Aplikasi-Sistem-Akademik",
      highlight: "Flutter Mobile Solution",
      impact: "Mengintegrasikan antarmuka mobile modern dengan arsitektur data akademik yang terstruktur."
    },
    {
      id: "smart-app",
      title: "Smart App — Multi-Utility Mobile Engine",
      category: "Mobile App",
      description: "Solusi aplikasi utilitas mobile cerdas yang dirancang dengan state management efisien di Flutter, mengedepankan pengalaman pengguna yang mulus tanpa lag di berbagai resolusi layar smartphone.",
      image: "https://opengraph.githubassets.com/1/aplannst41/Smart-App",
      tags: ["Dart", "Flutter", "Clean Code", "Adaptive Layout"],
      githubUrl: "https://github.com/aplannst41/Smart-App",
      liveUrl: "https://github.com/aplannst41/Smart-App",
      highlight: "Mobile Architecture",
      impact: "Membuktikan penguasaan rendering 60 FPS dan arsitektur widget hierarkis di Flutter."
    },
    {
      id: "klasifikasi-adaptabilitas",
      title: "Sistem Komputasi Klasifikasi Adaptabilitas Mahasiswa",
      category: "Mobile / Machine Learning",
      description: "Aplikasi komputasi dan analisis cerdas berbasis C++ untuk mengolah dataset dan mengklasifikasikan pola adaptabilitas mahasiswa secara kuantitatif dengan ketepatan algoritma.",
      image: "https://opengraph.githubassets.com/1/aplannst41/Aplikasi-mobile-Klasifikasi-tingkat-adapibilitas-mahasiswa-terhadap-pembelajaran-daring",
      tags: ["C++", "Algoritma Komputasi", "Data Processing", "Logika Sistem"],
      githubUrl: "https://github.com/aplannst41/Aplikasi-mobile-Klasifikasi-tingkat-adapibilitas-mahasiswa-terhadap-pembelajaran-daring",
      liveUrl: "https://github.com/aplannst41/Aplikasi-mobile-Klasifikasi-tingkat-adapibilitas-mahasiswa-terhadap-pembelajaran-daring",
      highlight: "Komputasi Algoritma C++",
      impact: "Membuktikan pemahaman logika tingkat rendah (low-level) dan optimasi algoritma data."
    }
  ],

  experience: [
    {
      id: "exp-bandara",
      role: "IT Support & System Developer (Praktik Kerja / Magang Resmi)",
      company: "Kantor Bandara Malikussaleh (UPBU Kelas III Malikussaleh)",
      period: "Periode Magang Resmi",
      location: "Aceh Utara, Indonesia",
      description: "Dipercaya mengemban tanggung jawab teknologi informasi dan digitalisasi sistem di instansi penerbangan sipil:",
      points: [
        "Merancang dan membangun dari nol sistem 'Dashboard Monitoring Bandara' berbasis web untuk digitalisasi pelaporan dan pemantauan status fasilitas harian.",
        "Mengelola keandalan jaringan komputer (LAN), instalasi perangkat keras (hardware), printer server, dan infrastruktur kantor bandara tanpa downtime signifikan.",
        "Melakukan diagnosis cepat dan penanganan (troubleshooting) teknis terhadap insiden sistem hardware dan software guna menjamin kelancaran operasional bandara.",
        "Berkolaborasi langsung dengan staf operasional dan pimpinan unit untuk memastikan solusi IT menjawab kebutuhan kerja lapangan."
      ],
      skills: ["PHP & Blade", "Dashboard Monitoring", "Troubleshooting Hardware", "Jaringan LAN", "MySQL", "Kepatuhan SOP Bandara"]
    },
    {
      id: "exp-github",
      role: "Fullstack & Mobile Software Developer",
      company: "Koleksi Proyek Terbuka (GitHub @aplannst41)",
      period: "2024 — Sekarang",
      location: "Indonesia",
      description: "Konsisten mengimplementasikan arsitektur perangkat lunak modern dan mempublikasikan kode teruji ke repositori publik:",
      points: [
        "Membangun aplikasi mobile cross-platform berbasis Flutter & Dart dengan penataan state management dan struktur direktori profesional.",
        "Mengembangkan dan men-deploy web application (ContactGuard) ke platform cloud Vercel dengan standar performa responsif.",
        "Menerapkan struktur data dan implementasi algoritma klasifikasi berbasis C++ untuk pemecahan masalah komputasi kompleks."
      ],
      skills: ["Dart & Flutter", "JavaScript", "C++", "Git & GitHub", "Vercel", "RESTful API"]
    },
    {
      id: "edu-1",
      role: "S1 Sistem Informasi (Mahasiswa Aktif)",
      company: "Universitas Malikussaleh (UNIMAL)",
      period: "Sedang Menempuh Pendidikan",
      location: "Aceh Utara / Lhokseumawe, Indonesia",
      description: "Menempuh pendidikan kesarjanaan (S1) Program Studi Sistem Informasi dengan fokus pada analisis kebutuhan bisnis, rekayasa perangkat lunak, arsitektur basis data, dan pengembangan aplikasi enterprise:",
      points: [
        "Mengintegrasikan metodologi analisis proses bisnis sistem informasi dengan implementasi kode praktis (Flutter, Laravel, React).",
        "Mengimplementasikan proyek riil sistem informasi operasional instansi di Kantor Bandara UPBU Malikussaleh.",
        "Mendalami konsep Object-Oriented Programming (OOP), pemodelan sistem basis data relasional, dan perancangan arsitektur aplikasi web & mobile."
      ],
      skills: ["Sistem Informasi", "Analisis & Perancangan Sistem", "Database Relasional", "OOP", "Flutter & Dart", "Laravel"]
    }
  ]
};
