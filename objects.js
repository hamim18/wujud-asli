const objects = [
  {
    category: "tambahan",
    emoji: "🔋", name: "Baterai Remote",
    preview: `Kamu itu baterai remote.
Semua orang santai selama hidupnya lancar. Begitu channel nggak bisa pindah, baru panik. Remote dipukul-pukul, dibalik, digoyang.
Lucunya? Yang disalahin remotenya. Kamu tetap diam di belakang, nggak pernah disebut namanya.`,
    full_dark: `Kamu habis pelan-pelan untuk kenyamanan orang lain.
Tidak ada yang tanya kamu masih ada tenaga atau tidak.
Begitu lemah, kamu diganti.
Cepat.
Tanpa terima kasih.

Dan yang lebih parah?
Kamu terbiasa dengan itu.`,
    full_advice: `Energi itu bukan untuk semua orang.
Kalau kamu terus memberi tanpa memilih, kamu cuma akan jadi sumber daya darurat.
Beberapa orang memang lebih baik dibiarkan nonton layar kosong.`
  },

  {
    category: "tambahan",
    emoji: "🧦", name: "Kaos Kaki Hilang Sebelah",
    preview: `Kamu kaos kaki hilang sebelah.
Semua orang pernah kehilanganmu. Tidak ada yang tahu kamu ke mana.
Mesin cuci? Bawah kasur? Portal dimensi lain?
Misteri nasional.`,
    full_dark: `Kamu merasa tidak lengkap tanpa pasangan.
Padahal bisa jadi yang hilang bukan pasanganmu — tapi versimu yang dulu.
Kamu terus mencari yang cocok, sampai lupa ukuranmu sendiri.`,
    full_advice: `Sendirian bukan rusak.
Lebih baik satu yang pas daripada dua yang dipaksakan.
Yang hilang tidak selalu harus ditemukan.
Kadang memang harus dilepas.`
  },

  {
    category: "tambahan",
    emoji: "🖊️", name: "Pulpen Tanpa Tutup",
    preview: `Kamu pulpen tanpa tutup.
Masih bisa nulis. Masih berguna.
Tapi selalu ada rasa “kurang”.
Kalau ada pulpen lain yang lebih lengkap, kamu langsung ditinggal di laci.`,
    full_dark: `Kamu terlalu terbuka terlalu lama.
Tanpa batas, tanpa pelindung.
Akhirnya kering sendiri.
Dan waktu sudah tidak bisa menulis lagi, orang bilang kamu rusak.
Padahal kamu cuma tidak pernah dijaga.`,
    full_advice: `Batas itu bukan dingin.
Itu perlindungan.
Kalau kamu terus dibiarkan terbuka, bukan orang lain yang habis — kamu.`
  },

  {
    category: "tambahan",
    emoji: "📎", name: "Penjepit Kertas",
    preview: `Kamu penjepit kertas.
Kerjamu menyatukan yang berantakan.
Orang memuji dokumennya rapi.
Tidak ada yang memuji kamu.`,
    full_dark: `Kamu sibuk merapikan hidup orang lain.
Tapi hidupmu sendiri berantakan.
Kamu jadi perekat hubungan, tapi tidak punya yang merekatkanmu.`,
    full_advice: `Tidak semua kekacauan harus kamu selesaikan.
Sesekali biarkan kertasnya berserakan.
Kamu bukan lem dunia.`
  },

  {
    category: "tambahan",
    emoji: "🪣", name: "Ember Bocor",
    preview: `Kamu ember bocor.
Orang tetap isi kamu walau tahu airnya menetes.
Bukan karena kamu kuat.
Tapi karena mereka malas cari yang lain.`,
    full_dark: `Bocornya bukan cuma retakan kecil.
Itu luka lama yang tidak pernah diperbaiki.
Kamu terus diisi, terus kosong lagi.
Dan kamu mulai percaya memang itu fungsi hidupmu.`,
    full_advice: `Tambal dulu sebelum minta diisi.
Kalau tidak, semua yang masuk cuma lewat.
Dan kamu akan terus merasa kosong — walau terlihat penuh.`
  },

  {
    category: "tambahan",
    emoji: "🔦", name: "Senter",
    preview: `Kamu itu senter.
Dicari waktu mati lampu. Dipeluk waktu gelap.
Begitu listrik nyala lagi?
Kamu dilempar ke laci.
Hubungan kalian musiman.`,
    full_dark: `Kamu cuma dibutuhkan saat orang takut.
Bukan karena kamu istimewa —
tapi karena tidak ada pilihan lain.
Itu bukan sayang.
Itu panik.

Dan kamu tahu itu…
tapi tetap menyala setiap kali dipanggil.`,
    full_advice: `Jangan hanya bersinar saat orang lain gelap.
Kalau kamu terus jadi cahaya darurat,
kamu tidak akan pernah jadi pilihan utama.`
  },

  {
    category: "tambahan",
    emoji: "📌", name: "Sticky Note",
    preview: `Kamu sticky note.
Penuh pengingat penting.
“Jangan lupa.”
“Telepon dia.”
“Bayar ini.”

Begitu tugasnya selesai?
Kamu dikelupas. Selesai.`,
    full_dark: `Kamu jadi tempat orang menitip beban sementara.
Karena kamu mudah ditempel.
Dan mudah dilepas.

Mereka lega.
Kamu? Dibuang pelan-pelan.`,
    full_advice: `Tidak semua pesan harus kamu tampung.
Belajar bilang, “tempel di tempat lain.”
Kertas kecil pun punya batas.`
  },

  {
    category: "tambahan",
    emoji: "🧲", name: "Magnet Kulkas",
    preview: `Kamu magnet kulkas.
Lucu. Oleh-oleh. Pernah spesial.
Sekarang tugasmu nahan struk belanja yang bahkan tidak penting.

Dari suvenir, jadi penjaga tagihan.`,
    full_dark: `Kamu menempel di tempat yang bukan milikmu.
Bukan karena nyaman —
tapi karena takut jatuh kalau lepas.

Menempel bukan selalu berarti setia.
Kadang cuma takut sendirian.`,
    full_advice: `Cari tempat yang memang kamu pilih.
Bukan sekadar tempat yang kebetulan lengket.`
  },

  {
    category: "tambahan",
    emoji: "🪟", name: "Jendela Berembun",
    preview: `Kamu jendela berembun.
Orang lihat dunia lewat kamu.
Tapi tidak pernah benar-benar lihat kamu.

Mereka cuma menghapusmu kalau pandangannya terganggu.`,
    full_dark: `Kamu transparan sampai tidak dianggap ada.
Semua orang menembusmu.
Tidak ada yang berhenti untuk mengenalmu.

Dan kamu mulai percaya memang tugasmu hanya jadi perantara.`,
    full_advice: `Sesekali biarkan embun itu tebal.
Biarkan orang berhenti.
Bukan hanya melihat lewat kamu —
tapi melihat kamu.`
  },

  {
    category: "tambahan",
    emoji: "🗑️", name: "Tempat Sampah Penuh",
    preview: `Kamu tempat sampah penuh.
Semua orang lihat kamu sudah meluber.
Semua orang sadar harus dikosongkan.
Tapi entah kenapa, tetap ditambah satu lagi.

“Masih muat kok.”
Katanya.`,
    full_dark: `Kamu terlalu lama menampung yang bukan milikmu.
Sampai lupa rasanya kosong.

Kamu pikir itu tugas.
Padahal itu kebiasaan orang lain yang nyaman.`,
    full_advice: `Kosongkan dirimu sebelum meledak.
Tidak semua hal harus kamu simpan.
Kalau terus menahan, yang bau bukan hanya isinya —
tapi seluruh ruangan.`
  },

  {
    category: "tambahan",
    emoji: "🧴", name: "Sabun Hampir Habis",
    preview: `Kamu sabun yang hampir habis.
Masih ada. Masih bisa dipakai.
Tapi sudah tipis dan licin.
Orang pakai kamu sambil melirik sabun baru di pojok kamar mandi.

Kamu tahu.
Mereka tahu.
Tapi pura-pura tidak tahu.`,
    full_dark: `Kamu sudah memberi terlalu banyak.
Sampai tinggal sisa.

Dan yang paling menyakitkan?
Tidak ada yang sadar kamu hampir habis.
Selama masih berbusa, kamu dianggap baik-baik saja.`,
    full_advice: `Bilang kalau kamu hampir habis.
Yang benar-benar peduli akan berhenti sejenak.
Yang tidak?
Memang cuma butuh busanya.`
  },

  {
    category: "tambahan",
    emoji: "⏰", name: "Alarm yang Di-snooze",
    preview: `Kamu alarm yang terus di-snooze.
Sudah bunyi. Sudah peringatkan.
Jawabannya selalu sama:
“Lima menit lagi.”

Lima menit yang berubah jadi satu jam.`,
    full_dark: `Kamu sudah terlalu sering diabaikan.
Sampai kamu mulai meragukan suaramu sendiri.
Bunyi lebih pelan.
Lebih ragu.

Padahal tugasmu cuma satu: mengingatkan.`,
    full_advice: `Bunyilah sekali, tapi tegas.
Kalau tetap ditunda, itu bukan salahmu.
Yang terlambat bukan kamu.`
  },

  {
    category: "tambahan",
    emoji: "🪑", name: "Kursi Cadangan",
    preview: `Kamu kursi cadangan.
Tidak dihitung di awal.
Tidak disiapkan di meja utama.

Tapi begitu tamu kurang tempat duduk,
namamu dipanggil.

Selalu siap.
Selalu ada.
Tidak pernah utama.`,
    full_dark: `Kamu mulai nyaman jadi pilihan kedua.
Karena setidaknya kamu tetap dibutuhkan.

Padahal jauh di dalam,
kamu tahu rasanya jadi cadangan itu pelan-pelan mengikis harga diri.`,
    full_advice: `Minta tempat di meja utama.
Atau tinggalkan ruangan itu.
Tidak ada yang lahir untuk selamanya jadi kursi tambahan.`
  },

  {
    category: "tambahan",
    emoji: "📦", name: "Kardus Lama",
    preview: `Kamu kardus lama.
Pernah membawa sesuatu yang berharga.
Sekarang dilipat dan disimpan di sudut.

Belum dibuang.
Katanya, “siapa tahu nanti perlu.”

Nanti yang tidak pernah jelas kapan.`,
    full_dark: `Kamu disimpan bukan karena dihargai.
Tapi karena orang belum tega melepas.

Itu bukan penghormatan.
Itu penundaan.`,
    full_advice: `Kalau memang tidak dipakai, lepaskan.
Atau isi dengan hal baru.
Lebih baik jadi wadah baru daripada terus menunggu masa lalu kembali.`
  },

  {
    category: "tambahan",
    emoji: "🍜", name: "Mie Instan",
    preview: `Kamu mie instan.
Semua orang bilang ingin hidup sehat.
Tapi jam dua pagi, yang mereka cari kamu.

Dicintai diam-diam.
Diakui jarang.`,
    full_dark: `Kamu dipilih karena praktis.
Cepat.
Tidak ribet.

Bukan karena paling bernilai —
tapi karena paling mudah.

Dan kamu mulai percaya itu sudah cukup.`,
    full_advice: `Tidak salah jadi sederhana.
Tapi jangan biarkan dirimu hanya jadi pilihan saat orang lapar dan sepi.
Kamu lebih dari sekadar solusi cepat.`
  },

  {
    category: "tambahan",
    emoji: "🧊", name: "Es Batu",
    preview: `Kamu es batu.
Masuk ke gelas orang lain, bikin segar.
Semua bilang, “Ah enak banget.”

Tidak ada yang bilang,
“Kasihan ya, dia pelan-pelan mencair.”`,
    full_dark: `Kamu mendinginkan suasana.
Menahan emosi.
Menetralkan konflik.

Tapi setiap kali kamu bikin orang lain nyaman,
kamu sendiri berkurang.

Dan saat kamu habis?
Yang tersisa cuma air biasa.
Tidak ada yang ingat bentuk aslimu.`,
    full_advice: `Tidak semua panas harus kamu dinginkan.
Kadang biarkan saja.
Kamu tidak harus selalu jadi penenang kalau akhirnya kamu yang hilang bentuk.`
  },

  {
    category: "tambahan",
    emoji: "🌱", name: "Benih yang Baru Ditanam",
    preview: `Kamu benih yang baru ditanam.
Dikubur dalam tanah gelap.
Ditekan. Ditimbun.

Kalau belum tumbuh, orang bilang gagal.

Padahal kamu baru mulai.`,
    full_dark: `Tidak ada yang lihat prosesmu di bawah tanah.
Semua orang cuma menunggu hasil di atas permukaan.

Kamu berjuang sendirian di tempat yang tidak terlihat.
Dan itu terasa sepi.`,
    full_advice: `Tidak semua perjuangan harus disaksikan.
Akar tidak pernah pamer.
Tapi tanpa akar, pohon cuma drama.`
  },

  {
    category: "tambahan",
    emoji: "📶", name: "Sinyal Satu Bar",
    preview: `Kamu sinyal satu bar.
Masih terhubung.
Tapi tidak stabil.

Pesan masuk terlambat.
Suara terputus-putus.
Harapan tetap ada… sedikit.`,
    full_dark: `Kamu bertahan di hubungan yang setengah-setengah.
Tidak cukup jelas untuk tenang.
Tidak cukup buruk untuk pergi.

Kamu hidup di antara “mungkin” dan “entah.”

Dan itu melelahkan.`,
    full_advice: `Lebih baik tidak ada sinyal daripada terus menunggu yang tidak pernah kuat.
Jelas itu menyakitkan.
Tapi setengah-setengah itu menguras.`
  },

  {
    category: "tambahan",
    emoji: "🌋", name: "Gunung Berapi Tidur",
    preview: `Kamu tenang. Diam. Terkendali.
Semua bilang kamu dewasa.

Mereka tidak tahu
kamu cuma pintar menahan.`,
    full_dark: `Kamu simpan marah.
Simpan kecewa.
Simpan lelah.

Karena kamu takut disebut berlebihan.

Tapi tekanan tidak hilang.
Ia menumpuk.
Diam bukan berarti aman.`,
    full_advice: `Luapan kecil lebih sehat daripada ledakan besar.
Kalau terus kamu tahan,
yang hancur bukan cuma sekitarmu —
kamu juga.`
  },

  {
    category: "tambahan",
    emoji: "🍂", name: "Daun Gugur",
    preview: `Kamu daun gugur.
Pernah hijau. Pernah jadi peneduh.
Sekarang jatuh, diinjak, disapu.

Orang menyebutnya musim.
Kamu menyebutnya kehilangan.`,
    full_dark: `Kamu pikir jatuh itu akhir.
Padahal itu siklus.

Masalahnya bukan jatuh.
Masalahnya kamu lupa bahwa kamu bagian dari pohon yang sama.`,
    full_advice: `Tidak semua yang jatuh berarti gagal.
Kadang kamu memang harus lepas
supaya yang baru bisa tumbuh.

Dan itu bukan tragedi.
Itu proses.`
  },

  {
    category: "tambahan",
    emoji: "☂️", name: "Payung Saat Hujan",
    preview: `Kamu payung saat hujan.
Dicari waktu langit runtuh.
Begitu matahari muncul, kamu dilipat cepat-cepat.

Basahmu belum kering,
tapi sudah disimpan.`,
    full_dark: `Kamu melindungi orang lain dari derasnya hidup.
Tapi tidak ada yang peduli kamu sendiri kuyup.

Dan yang paling ironis?
Kadang kamu cuma dibawa…
tanpa pernah dibuka.`,
    full_advice: `Tidak semua badai harus kamu hadapi untuk orang lain.
Kalau terus menahan hujan sendirian,
kamu akan berjamur dalam diam.`
  },

  {
    category: "tambahan",
    emoji: "🪞", name: "Cermin Retak",
    preview: `Kamu cermin retak.
Masih bisa memantulkan wajah.
Tapi selalu ada garis yang mengganggu.

Orang bilang,
“Ah, cuma retak sedikit.”`,
    full_dark: `Retaknya kecil, tapi mengubah semuanya.
Kamu mulai meragukan pantulanmu sendiri.
Apakah itu wajah asli,
atau hanya bayangan yang terbelah?

Kadang luka lama tidak menghancurkan.
Ia hanya mengubah cara kita melihat diri.`,
    full_advice: `Retak bukan berarti tidak berguna.
Tapi jangan biarkan retak itu jadi identitas.
Kamu lebih dari garis yang pernah memecahmu.`
  },

  {
    category: "tambahan",
    emoji: "🎟️", name: "Tiket Kadaluarsa",
    preview: `Kamu tiket kadaluarsa.
Pernah jadi akses masuk.
Pernah berharga.

Sekarang?
Masih disimpan, tapi tidak berlaku.`,
    full_dark: `Kesempatan punya waktu.
Dan kamu terlalu lama ragu untuk melangkah.

Sekarang pintunya sudah tutup.
Bukan karena kamu tidak layak —
tapi karena kamu terlambat.`,
    full_advice: `Kesempatan tidak selalu kembali dalam bentuk yang sama.
Kalau pintu baru terbuka,
masuklah.
Jangan tunggu sampai jadi kenangan lagi.`
  },

  {
    category: "tambahan",
    emoji: "🔌", name: "Charger Dipinjam",
    preview: `Kamu charger yang sering dipinjam.
Datang saat orang hampir kehabisan daya.
Semua bilang, “Makasih banget ya.”

Begitu baterai penuh?
Kamu dicabut tanpa pamit.`,
    full_dark: `Kamu selalu hadir di saat kritis.
Tapi tidak pernah diajak tinggal.

Hubungan kalian cuma sebatas kebutuhan.
Bukan kebersamaan.

Dan kamu mulai lelah jadi penyelamat sementara.`,
    full_advice: `Boleh membantu.
Tapi jangan biarkan dirimu hanya dicari saat darurat.
Kalau selalu jadi sumber daya,
kapan kamu jadi tujuan?`
  },

  {
    category: "tambahan",
    emoji: "🕰️", name: "Jam Dinding yang Diam",
    preview: `Kamu jam dinding yang diam.
Masih tergantung.
Masih terlihat normal.

Tapi jarumnya tidak bergerak.

Orang lewat, tidak sadar.
Sampai suatu hari,
mereka sadar waktunya salah.`,
    full_dark: `Kamu terlihat baik-baik saja.
Padahal sudah lama berhenti.

Kamu bertahan di tempat yang sama,
takut bergerak, takut salah.

Diam terasa aman.
Tapi waktu tetap berjalan tanpa kamu.`,
    full_advice: `Lebih baik bergerak pelan daripada membeku.
Kalau kamu terus diam,
yang tertinggal bukan cuma jam —
tapi hidupmu sendiri.`
  },

  {
    category: "tambahan",
    emoji: "📖", name: "Buku yang Tidak Pernah Selesai Dibaca",
    preview: `Kamu buku yang tidak pernah selesai dibaca.
Awalnya bikin penasaran.
Dibuka tiap malam.

Lalu tiba-tiba…
ditaruh pembatas.
Dan tidak pernah dilanjutkan.

Masih disimpan.
Tapi tidak disentuh.`,
    full_dark: `Kamu bukan tidak menarik.
Hanya saja orang berhenti di tengah jalan.

Dan kamu terus ada di rak,
menunggu seseorang kembali ke halaman yang tertinggal.

Menunggu itu sunyi.`,
    full_advice: `Tidak semua orang pantas tahu akhir ceritamu.
Kalau mereka berhenti membaca,
itu bukan berarti kisahmu tidak layak.
Hanya bukan pembaca yang tepat.`
  },

  {
    category: "tambahan",
    emoji: "💡", name: "Lampu yang Berkedip",
    preview: `Kamu lampu yang mulai berkedip.
Masih menyala.
Tapi tidak stabil.

Orang lewat dan bilang,
“Ganggu banget sih.”

Tidak ada yang tanya kenapa kamu tidak lagi terang.`,
    full_dark: `Kamu lelah.
Tapi tetap dipaksa menyala.

Sampai suatu hari kamu benar-benar padam.
Dan orang cuma bilang,
“Ya sudah, ganti.”

Semudah itu.`,
    full_advice: `Kalau mulai redup, istirahat.
Jangan tunggu sampai padam total.
Yang peduli akan memperbaiki,
bukan langsung mengganti.`
  },

  {
    category: "tambahan",
    emoji: "🔑", name: "Kunci yang Tidak Cocok",
    preview: `Kamu kunci yang tidak cocok di pintu tertentu.
Diputar. Dipaksa.
Digoyang-goyang.

Tidak terbuka.
Lalu disalahkan.

Padahal memang bukan pintunya.`,
    full_dark: `Kamu terlalu lama mencoba masuk ke tempat yang bukan milikmu.
Sampai kamu merasa rusak.

Padahal mungkin kamu sempurna —
untuk pintu yang berbeda.`,
    full_advice: `Berhenti memaksa.
Tidak semua pintu harus kamu buka.
Dan tidak semua penolakan berarti kamu tidak berharga.`
  },

  {
    category: "tambahan",
    emoji: "🪑", name: "Kursi di Sudut Ruangan",
    preview: `Kamu kursi di sudut ruangan.
Tidak rusak.
Tidak jelek.

Hanya… tidak dipilih.

Orang lewat,
tapi duduk di tempat lain.`,
    full_dark: `Tidak ada alasan jelas kenapa kamu jarang dipakai.
Dan itu lebih menyakitkan daripada ditolak terang-terangan.

Kamu mulai mempertanyakan diri sendiri,
padahal masalahnya cuma posisi.`,
    full_advice: `Kadang bukan kualitas yang salah,
tapi penempatan.
Pindah sudut bisa mengubah segalanya.`
  },

  {
    category: "tambahan",
    emoji: "📷", name: "Foto Lama di Galeri",
    preview: `Kamu foto lama di galeri.
Tidak pernah dihapus.
Tapi tidak pernah dibuka lagi.

Kamu ada.
Tapi hanya jadi bagian dari memori yang digeser cepat.`,
    full_dark: `Kamu bukan kenangan buruk.
Hanya bukan prioritas lagi.

Dan itu lebih sunyi dari sekadar dihapus.
Karena kamu tetap ada…
tanpa pernah disentuh.`,
    full_advice: `Tidak semua masa lalu harus dihapus.
Tapi jangan biarkan dirimu hidup hanya sebagai arsip.
Buat cerita baru yang layak dibuka ulang.`
  },

  {
    category: "tambahan",
    emoji: "🎭", name: "Topeng",
    preview: `Kamu topeng.
Dipakai saat perlu terlihat kuat.
Dipakai saat perlu terlihat bahagia.

Semua bilang,
“Kamu baik-baik saja kok.”

Iya. Karena yang mereka lihat bukan kamu.`,
    full_dark: `Semakin sering dipakai,
kamu lupa wajah aslimu.

Topeng itu ringan di luar,
tapi berat di dalam.

Dan yang paling melelahkan bukan pura-pura kuat —
tapi takut kalau topengnya jatuh.`,
    full_advice: `Tidak semua orang harus lihat wajah aslimu.
Tapi setidaknya ada satu tempat
di mana kamu bisa melepas topeng tanpa takut.`
  },

  {
    category: "tambahan",
    emoji: "🌓", name: "Bayangan",
    preview: `Kamu bayangan.
Selalu mengikuti.
Selalu ada.

Tapi hanya terlihat saat ada cahaya orang lain.

Begitu gelap?
Kamu hilang.`,
    full_dark: `Kamu hidup dari terang orang lain.
Tanpa itu, kamu merasa tidak ada.

Padahal kamu bukan sekadar bayangan.
Kamu cuma belum berdiri di tempat yang membuatmu terlihat.`,
    full_advice: `Berhenti hanya mengikuti.
Cari cahaya yang memang milikmu.
Bayangan pun bisa jadi arah — kalau tahu dari mana datangnya.`
  },

  {
    category: "tambahan",
    emoji: "🚪", name: "Pintu yang Tidak Pernah Dikunci",
    preview: `Kamu pintu yang tidak pernah dikunci.
Semua bebas masuk.
Semua bebas keluar.

Kamu bangga karena merasa terbuka.

Sampai suatu hari,
ada yang masuk dan merusak.`,
    full_dark: `Keterbukaan tanpa batas bukan kebaikan.
Itu kelengahan.

Kamu terlalu takut dianggap tertutup,
sampai lupa menjaga diri sendiri.`,
    full_advice: `Mengunci bukan berarti menolak.
Itu memilih siapa yang layak masuk.
Tidak semua yang mengetuk harus diberi ruang.`
  },

  {
    category: "tambahan",
    emoji: "🕯️", name: "Lilin yang Menyala di Siang Hari",
    preview: `Kamu lilin yang tetap menyala di siang hari.
Cahayamu ada.
Tapi tidak terlihat.

Orang bilang,
“Buat apa sih?”`,
    full_dark: `Bukan karena kamu tidak bersinar.
Hanya saja kamu berada di waktu yang salah.

Dan kamu mulai meragukan terangmu sendiri.
Padahal masalahnya bukan pada cahayamu —
tapi pada situasinya.`,
    full_advice: `Kalau tempatmu terlalu terang untuk terlihat,
pindah ke ruang yang lebih gelap.
Cahaya kecil pun berarti di tempat yang tepat.`
  },

  {
    category: "tambahan",
    emoji: "📛", name: "Nama yang Salah Dipanggil",
    preview: `Kamu nama yang salah dipanggil.
Bukan sekali.
Berkali-kali.

Orang tertawa, bilang,
“Ah, cuma salah sebut.”

Tapi itu bukan cuma huruf yang salah.`,
    full_dark: `Setiap kali salah dipanggil,
ada bagian kecil dari dirimu yang tidak diakui.

Identitas itu bukan hal sepele.
Dan ketika terus keliru disebut,
kamu mulai merasa tidak benar-benar dikenal.`,
    full_advice: `Koreksi dengan tenang.
Bukan karena kamu sensitif —
tapi karena kamu berhak disebut dengan benar.

Kalau namamu saja tidak dijaga,
apa lagi yang lain?`
  },

  {
    category: "tambahan",
    emoji: "🪜", name: "Tangga Darurat",
    preview: `Kamu tangga darurat.
Tidak pernah dipakai saat semuanya aman.
Hanya dicari saat panik.

Begitu keadaan stabil?
Kamu kembali dilupakan di sudut gedung.`,
    full_dark: `Kamu hadir di saat paling kacau.
Menolong tanpa ditanya.

Tapi hubungan yang lahir dari kepanikan
jarang bertahan saat keadaan tenang.

Kamu cuma solusi sementara,
bukan rencana jangka panjang.`,
    full_advice: `Tidak salah membantu saat darurat.
Tapi jangan bangga hanya karena dibutuhkan saat orang terpojok.
Kamu lebih dari sekadar jalan keluar terakhir.`
  },

  {
    category: "tambahan",
    emoji: "🚗", name: "Kaca Spion",
    preview: `Kamu kaca spion.
Selalu menghadap ke belakang.
Selalu melihat yang sudah lewat.

Padahal kendaraan terus maju.`,
    full_dark: `Kamu terlalu sering memantau masa lalu.
Kesalahan lama.
Kata-kata lama.
Kenangan lama.

Sampai lupa bahwa arah hidup bukan ke belakang.

Melihat itu perlu.
Tapi tinggal di sana melelahkan.`,
    full_advice: `Gunakan untuk melihat, bukan menetap.
Masa lalu hanya panduan,
bukan tujuan.`
  },

  {
    category: "tambahan",
    emoji: "🪑", name: "Kursi yang Berderit",
    preview: `Kamu kursi yang berderit saat diduduki.
Masih kuat.
Masih menahan beban.

Tapi setiap kali ada yang duduk,
kamu bersuara.

Orang bilang,
“Berisik banget sih.”`,
    full_dark: `Itu bukan suara gangguan.
Itu tanda kamu sedang menahan terlalu banyak.

Tapi alih-alih meringankan beban,
orang justru kesal pada suaramu.

Padahal derit itu peringatan.`,
    full_advice: `Kalau mulai berderit, jangan dipaksa diam.
Lebih baik diperbaiki sekarang
daripada patah tiba-tiba.`
  },

  {
    category: "tambahan",
    emoji: "🧭", name: "Kompas yang Kehilangan Arah",
    preview: `Kamu kompas yang jarumnya tidak stabil.
Berputar.
Berhenti.
Berputar lagi.

Orang bingung mengandalkanmu.`,
    full_dark: `Kamu kehilangan arah bukan karena bodoh.
Tapi karena terlalu banyak gangguan di sekitarmu.

Medan luar mempengaruhi jarummu.
Dan kamu mulai meragukan insting sendiri.

Padahal jauh di dalam,
kamu masih tahu mana utara.`,
    full_advice: `Jauhkan diri sejenak dari gangguan.
Biarkan jarummu tenang.
Arah tidak pernah benar-benar hilang.
Ia hanya tertutup kebisingan.`
  },

  {
    category: "tambahan",
    emoji: "🏠", name: "Rumah Kosong",
    preview: `Kamu rumah kosong.
Pintunya ada.
Jendelanya ada.
Strukturnya utuh.

Tapi tidak ada yang tinggal.

Dari luar terlihat baik-baik saja.
Di dalam… sunyi.`,
    full_dark: `Kamu membangun dinding kuat.
Menjaga agar tidak ada yang melukai.

Tapi perlindungan yang terlalu rapat
juga menghalangi kehangatan masuk.

Akhirnya kamu aman,
tapi sepi.`,
    full_advice: `Tidak semua orang harus masuk.
Tapi kalau tidak pernah dibuka,
rumah hanya jadi bangunan.
Bukan tempat pulang.`
  },

  {
    category: "tambahan",
    emoji: "👟", name: "Sepatu Lama",
    preview: `Kamu sepatu lama.
Tidak lagi terlihat baru.
Tidak lagi jadi pilihan utama.

Tapi setiap perjalanan jauh,
yang dipakai tetap kamu.`,
    full_dark: `Kamu tidak mencolok.
Tidak dipuji.
Tidak difoto.

Tapi kamu yang paling tahu jalan terjalnya hidup.
Bekas goresanmu bukan cacat —
itu bukti kamu pernah melangkah.`,
    full_advice: `Tidak semua yang lama harus diganti.
Kadang yang paling setia justru yang paling jarang dibanggakan.
Dan itu tidak mengurangi nilainya.`
  },

  {
    category: "tambahan",
    emoji: "🌉", name: "Jembatan",
    preview: `Kamu jembatan.
Menghubungkan dua sisi yang terpisah.
Semua orang lewat di atasmu.

Tidak ada yang berhenti lama-lama.`,
    full_dark: `Kamu mempertemukan banyak orang.
Tapi jarang benar-benar ditemani.

Peranmu penting,
tapi terasa sepi.

Karena kamu tempat lewat,
bukan tempat tinggal.`,
    full_advice: `Tidak salah jadi penghubung.
Tapi hidupmu bukan cuma untuk dilintasi.
Pastikan ada juga yang berjalan bersamamu,
bukan hanya di atasmu.`
  },

  {
    category: "tambahan",
    emoji: "📄", name: "Kertas yang Diremas",
    preview: `Kamu kertas yang pernah diremas.
Kusut. Tidak rata.
Terlihat gagal.

Tapi ketika dibuka lagi,
kamu masih bisa ditulis.`,
    full_dark: `Kesalahan pernah membuatmu merasa dibuang.
Diremehkan.
Tidak layak.

Tapi kusut tidak menghapus fungsimu.
Ia hanya mengubah bentukmu.`,
    full_advice: `Tidak perlu kembali mulus untuk berguna.
Bekas lipatan itu cerita.
Dan cerita tidak pernah sia-sia.`
  },

  {
    category: "tambahan",
    emoji: "🌅", name: "Matahari Terbit",
    preview: `Kamu matahari terbit.
Tidak datang dengan suara keras.
Tidak minta tepuk tangan.

Tapi pelan-pelan,
mengubah gelap jadi terang.`,
    full_dark: `Malam selalu terasa lebih panjang.
Lebih sunyi.
Lebih berat.

Tapi tidak ada malam yang benar-benar abadi.
Hanya terasa lama saat dijalani.`,
    full_advice: `Kalau hari ini masih gelap,
bukan berarti selamanya.
Terbit itu proses.
Pelan, tapi pasti.`
  },

  {
    category: "tambahan",
    emoji: "🌳", name: "Akar Pohon",
    preview: `Kamu akar pohon.
Tidak terlihat.
Tidak dipuji.
Tidak difoto.

Tapi tanpa kamu,
yang di atas tidak akan berdiri.`,
    full_dark: `Kamu bekerja dalam diam.
Menahan beban.
Menjaga agar tidak tumbang.

Dan sering kali,
yang terlihat indah justru bagian atasnya saja.`,
    full_advice: `Tidak apa-apa tidak selalu terlihat.
Kekuatan tidak selalu butuh sorotan.
Yang kokoh bukan yang paling tinggi,
tapi yang paling dalam.`
  },

  {
    category: "tambahan",
    emoji: "🧵", name: "Benang yang Kusut",
    preview: `Kamu benang yang kusut.
Dilihat saja sudah bikin orang pusing.
Ingin langsung ditarik kuat-kuat supaya cepat rapi.

Padahal semakin ditarik,
semakin mengikat.`,
    full_dark: `Hidupmu terasa berantakan.
Masalah bertumpuk.
Satu belum selesai, sudah datang yang lain.

Dan orang sering memberi saran cepat,
tanpa tahu di mana simpulnya.`,
    full_advice: `Tidak semua kusut harus diselesaikan dengan paksa.
Kadang perlu sabar, pelan, satu simpul demi satu.
Yang penting bukan cepat rapi —
tapi tidak makin terikat.`
  },

  {
    category: "tambahan",
    emoji: "🪁", name: "Layang-Layang",
    preview: `Kamu layang-layang.
Bisa terbang tinggi.
Bisa menari di langit.

Tapi tetap terikat pada satu benang.`,
    full_dark: `Kamu ingin bebas sepenuhnya.
Ingin lepas dari semua kendali.

Tapi tanpa benang itu,
kamu bukan bebas —
kamu hilang arah.

Tidak semua ikatan adalah penjara.
Beberapa adalah penyeimbang.`,
    full_advice: `Bedakan antara dikekang dan diarahkan.
Yang menahanmu belum tentu ingin menjatuhkan.
Kadang justru menjaga agar kamu tidak tersesat.`
  },

  {
    category: "tambahan",
    emoji: "⏳", name: "Jam Pasir",
    preview: `Kamu jam pasir.
Waktumu terus berjalan,
meski tidak ada yang memperhatikan.

Butir demi butir jatuh dalam diam.`,
    full_dark: `Kamu sering menunda.
Menunggu waktu yang “lebih tepat”.
Menunggu kondisi yang “lebih siap”.

Padahal waktu tidak pernah berhenti menunggu kamu.

Dan ketika kamu sadar,
setengahnya sudah jatuh.`,
    full_advice: `Tidak perlu menunggu sempurna untuk mulai.
Mulailah sebelum waktumu habis sendiri.
Karena yang paling mahal bukan kesempatan —
tapi waktu.`
  },

  {
    category: "tambahan",
    emoji: "🚣", name: "Perahu di Tengah Laut",
    preview: `Kamu perahu di tengah laut.
Tidak di darat.
Belum sampai tujuan.

Hanya di tengah.
Dan itu terasa paling tidak nyaman.`,
    full_dark: `Di tengah perjalanan,
godaan untuk kembali lebih besar
daripada dorongan untuk maju.

Karena darat terasa aman.
Tujuan terasa jauh.

Tapi di tengah itulah
kamu belajar mengayuh sendiri.`,
    full_advice: `Jangan berhenti hanya karena belum sampai.
Titik tengah bukan tanda gagal.
Itu tanda kamu sudah berani meninggalkan pantai.`
  },

  {
    category: "tambahan",
    emoji: "🪞", name: "Cermin Utuh",
    preview: `Kamu cermin utuh.
Tidak retak.
Tidak buram.

Dan akhirnya,
kamu berani melihat dirimu sendiri.

Tanpa topeng.
Tanpa bayangan orang lain.`,
    full_dark: `Yang paling sulit bukan memperbaiki dunia.
Tapi berdiri di depan diri sendiri
dan jujur.

Tentang lelah.
Tentang salah.
Tentang takut.`,
    full_advice: `Kalau kamu sudah bisa melihat dirimu tanpa ingin lari,
itu bukan kelemahan.
Itu keberanian paling sunyi.

Dan dari sana,
kamu tidak lagi hidup sebagai benda.
Kamu hidup sebagai diri sendiri.`
  },
// ============================================================
// DATA TAMBAHAN — 50 objek (no. 51–100)
// Tambahkan ke dalam const objects = [ ... ] di objects.js
// ============================================================

  {
    category: "tambahan",
    emoji: "🩴", name: "Sandal Jepit Tertukar",
    preview: `Kamu sandal jepit yang sering tertukar di masjid atau depan rumah orang.
Mirip. Tapi bukan milikmu.
Dipakai sebentar, lalu sadar: “Loh, kok beda rasanya?”`,
    full_dark: `Kamu sering memaksakan diri cocok di tempat yang bukan milikmu.
Kelihatannya sama. Ukurannya mirip.
Tapi tiap langkah terasa ganjil.`,
    full_advice: `Tidak semua yang kelihatan pas benar-benar cocok.
Kalau tiap langkah bikin lecet, mungkin memang bukan jalurmu.`
  },

  {
    category: "tambahan",
    emoji: "📺", name: "Remote dengan Banyak Lakban",
    preview: `Kamu remote penuh lakban.
Tombolnya macet, tutupnya longgar, baterainya diganjal tisu.
Tapi anehnya… masih dipakai.`,
    full_dark: `Kamu bertahan bukan karena sempurna,
tapi karena orang sudah terbiasa.

Kadang bukan cinta.
Cuma malas cari yang baru.`,
    full_advice: `Bertahan itu bagus.
Tapi jangan bangga kalau satu-satunya alasan kamu dipertahankan cuma karena “masih bisa kok.”`
  },

  {
    category: "tambahan",
    emoji: "📡", name: "WiFi Tetangga",
    preview: `Kamu WiFi tetangga.
Dicari diam-diam.
Dipakai tanpa izin.

Begitu lemot, langsung disalahkan.`,
    full_dark: `Kamu memberi tanpa pernah benar-benar dianggap milik sendiri.
Semua mau akses.
Tidak semua mau tanggung jawab.`,
    full_advice: `Kalau mau dipakai bersama, setidaknya jelas aturannya.
Jangan cuma kuat sinyalnya, tapi lemah batasnya.`
  },

  {
    category: "tambahan",
    emoji: "👖", name: "Celana Karet yang Melar",
    preview: `Awalnya pas.
Lama-lama melar.
Tapi tetap dipakai karena “masih muat.”`,
    full_dark: `Kamu terlalu sering menyesuaikan diri.
Sampai bentuk aslimu berubah.

Orang nyaman.
Kamu kehilangan struktur.`,
    full_advice: `Menyesuaikan itu baik.
Tapi kalau terus-menerus, kamu bukan fleksibel — kamu kehilangan bentuk.`
  },

  {
    category: "tambahan",
    emoji: "📴", name: "Grup Chat Sepi",
    preview: `Namanya heboh.
Anggotanya banyak.
Isinya? Notifikasi promo dan “Selamat pagi.”`,
    full_dark: `Kamu berharap ramai,
tapi yang aktif cuma dua orang.

Kadang ramai itu cuma angka.
Bukan koneksi.`,
    full_advice: `Lebih baik sedikit tapi hidup,
daripada ramai tapi sunyi.`
  },

  {
    category: "tambahan",
    emoji: "🛗", name: "Tombol Lift yang Dipencet Berkali-kali",
    preview: `Kamu tombol lift yang ditekan berkali-kali.
Seolah kalau dipencet 10 kali, liftnya datang lebih cepat.

Tenang. Kamu bukan mie instan.`,
    full_dark: `Orang sering panik dan ingin semua serba cepat.
Padahal proses tetap butuh waktu.

Dipencet berkali-kali tidak bikin kamu lebih bekerja.
Cuma bikin kamu lebih tertekan.`,
    full_advice: `Tidak semua hal bisa dipercepat hanya karena kita tidak sabar.
Kadang yang perlu dikendalikan bukan waktunya — tapi orangnya.`
  },

  {
    category: "tambahan",
    emoji: "🔌", name: "Charger KW",
    preview: `Murah. Mirip asli.
Bisa mengisi… kadang.
Kalau lagi mood.`,
    full_dark: `Kamu terlihat cukup, tapi tidak benar-benar stabil.
Orang berharap penuh, tapi dayanya naik turun.

Hubungan yang tidak konsisten lebih melelahkan daripada yang jelas tidak cocok.`,
    full_advice: `Kalau mau jadi sumber daya, jadilah yang bisa diandalkan.
Kalau tidak, jangan heran kalau orang cari yang lebih pasti.`
  },

  {
    category: "tambahan",
    emoji: "🪖", name: "Helm yang Bau Keringat",
    preview: `Dipakai setiap hari.
Melindungi kepala.
Tapi jarang dijemur.

Akhirnya… wangi perjuangan.`,
    full_dark: `Kamu terus dipakai tanpa pernah diberi waktu untuk dibersihkan.
Masalah kecil dibiarkan, sampai baunya ke mana-mana.`,
    full_advice: `Perlindungan juga butuh perawatan.
Kalau terus dipendam, yang pusing bukan cuma kepalanya.`
  },

  {
    category: "tambahan",
    emoji: "🧊", name: "Kulkas yang Dibuka Padahal Tahu Isinya Itu-Itu Saja",
    preview: `Dibuka. Ditutup.
Dibuka lagi lima menit kemudian.

Seolah tiba-tiba ada keajaiban muncul.`,
    full_dark: `Kamu sering berharap perubahan datang tanpa usaha baru.
Padahal isi hidupmu tidak berubah kalau kamu tidak menambah sesuatu.`,
    full_advice: `Kalau ingin hasil berbeda, jangan cuma buka-tutup harapan lama.
Isi dulu dengan hal baru.`
  },

  {
    category: "tambahan",
    emoji: "☔", name: "Payung yang Lupa Dibawa Saat Hujan",
    preview: `Sudah tahu musim hujan.
Sudah lihat langit gelap.
Tetap saja keluar tanpa persiapan.

Lalu lari-lari panik.`,
    full_dark: `Kamu sering sadar risiko, tapi menunda persiapan.
Merasa “ah, tidak akan separah itu.”

Sampai basah sendiri.`,
    full_advice: `Waspada bukan berarti pesimis.
Persiapan itu bukan takut — itu dewasa.`
  },

  {
    category: "tambahan",
    emoji: "⏰", name: "Alarm yang Di-Snooze Terus",
    preview: `Bunyi.
Dimatikan.
Lima menit lagi.

Hidupmu punya fitur tunda yang terlalu sering dipakai.`,
    full_dark: `Kamu tahu harus bangun.
Tahu harus mulai.
Tapi selalu merasa “nanti saja”.

Akhirnya bukan cuma bangun yang terlambat.
Impian juga ikut molor.`,
    full_advice: `Snooze boleh.
Tapi kalau semua hal kamu tunda, jangan heran kalau hasilnya ikut menjauh.`
  },

  {
    category: "tambahan",
    emoji: "🔥", name: "Kompor yang Apinya Kecil",
    preview: `Nyalanya ada.
Tapi kecil banget.

Masaknya jadi lama, yang nunggu mulai kesal.`,
    full_dark: `Kamu punya potensi, tapi setengah-setengah.
Takut besar, takut gagal, jadi pilih aman.

Masalahnya, yang setengah api bikin semua serba tanggung.`,
    full_advice: `Kalau memang mau panas, sekalian.
Hidup bukan mie yang cukup hangat-hangat kuku.`
  },

  {
    category: "tambahan",
    emoji: "🛍️", name: "Tas Kresek Disimpan di Dalam Tas Kresek",
    preview: `Kamu punya satu tas besar.
Isinya? Tas lagi.

Cadangan dari cadangan dari cadangan.`,
    full_dark: `Kamu suka menyimpan kemungkinan,
tapi jarang benar-benar dipakai.

Takut kekurangan, sampai hidupmu penuh barang “kalau-kalau”.`,
    full_advice: `Persiapan itu baik.
Tapi jangan sampai kamu menumpuk rencana tanpa pernah menjalankannya.`
  },

  {
    category: "tambahan",
    emoji: "🌀", name: "Kipas Angin yang Berisik",
    preview: `Anginnya ada.
Tapi bunyinya lebih besar dari manfaatnya.

Berisik dulu, sejuknya belakangan.`,
    full_dark: `Kamu sering banyak bicara tentang rencana.
Tapi hasilnya kecil.

Energi habis di suara, bukan di gerakan.`,
    full_advice: `Kalau mau jadi angin, sejukkan.
Tidak perlu terlalu berisik supaya dianggap bekerja.`
  },

  {
    category: "tambahan",
    emoji: "🥛", name: "Gelas Retak yang Masih Dipakai",
    preview: `Retaknya kecil.
Masih bisa dipakai.
“Ah, aman kok.”

Sampai suatu hari… pecah.`,
    full_dark: `Kamu membiarkan retakan kecil diabaikan.
Dalam hubungan, dalam diri, dalam rencana.

Karena kelihatannya masih berfungsi.`,
    full_advice: `Retakan kecil jarang sembuh sendiri.
Kalau tidak diperbaiki, ia hanya menunggu waktu.`
  },

  {
    category: "tambahan",
    emoji: "🔊", name: "Speaker Lowbat",
    preview: `Awalnya kamu paling semangat.
Paling keras.
Paling kelihatan hidup.

Lalu pelan-pelan suaramu melemah.
Dan orang mulai cari yang lain.`,
    full_dark: `Kamu terbiasa tampil kuat di awal.
Memberi banyak.
Bersuara lantang.

Tapi tidak pernah benar-benar berhenti untuk mengisi diri.

Saat tenagamu turun,
kamu merasa tidak lagi menarik.`,
    full_advice: `Bersinar itu bagus.
Tapi bertahan jauh lebih penting daripada sekadar keras di awal.`
  },

  {
    category: "tambahan",
    emoji: "🏍️", name: "Parkiran Sempit",
    preview: `Semua ingin masuk.
Semua merasa cukup ruang.
Sampai akhirnya tidak ada yang bisa bergerak.

Lucu ya.
Masuknya mudah. Keluarnya ribet.`,
    full_dark: `Kamu sering menerima terlalu banyak hal sekaligus.
Janji, orang, tanggung jawab.

Karena tidak enak menolak.

Sampai suatu hari kamu sendiri yang terjebak di dalamnya.`,
    full_advice: `Tidak semua harus kamu beri tempat.
Ruang yang terlalu penuh membuatmu sulit bergerak.`
  },

  {
    category: "tambahan",
    emoji: "🔐", name: "Password Terlalu Mudah",
    preview: `Mudah diingat.
Mudah ditebak.

Praktis memang.
Tapi rawan.`,
    full_dark: `Kamu terlalu cepat membuka diri.
Terlalu cepat percaya.

Karena ingin dianggap tulus.

Lalu kecewa saat orang masuk tanpa benar-benar menghargai.`,
    full_advice: `Menjaga diri bukan berarti dingin.
Kadang batas itu bentuk sayang pada diri sendiri.`
  },

  {
    category: "tambahan",
    emoji: "🥄", name: "Sendok yang Ikut Terbuang",
    preview: `Harusnya cuma bungkusnya yang pergi.
Tapi karena buru-buru, yang penting ikut terseret.

Baru sadar saat semuanya sudah tertutup.`,
    full_dark: `Dalam emosi, kamu pernah melepas sesuatu yang sebenarnya masih berarti.
Karena kesal.
Karena lelah.

Dan setelah reda, yang tersisa hanya penyesalan pelan.`,
    full_advice: `Marah boleh.
Tapi jangan biarkan satu momen menentukan kehilangan yang lebih besar.`
  },

  {
    category: "tambahan",
    emoji: "📱", name: "Memori Penuh",
    preview: `Ingin hal baru.
Tidak bisa masuk.

Katanya penuh.

Aneh ya, kita sering ingin hidup berbeda,
tapi tidak mau melepas yang lama.`,
    full_dark: `Kamu masih menyimpan luka, cerita, dan harapan yang sudah selesai.
Semua ditahan.

Tidak ada ruang untuk pengalaman baru.`,
    full_advice: `Memberi ruang bukan berarti melupakan.
Kadang itu cara agar hidup bisa bergerak lagi.`
  },

  {
    category: "tambahan",
    emoji: "💬", name: "Status “Online” Tapi Tidak Balas",
    preview: `Terlihat aktif.
Lampunya hijau.
Tapi pesanmu diam saja.

Lucu ya, hadir belum tentu benar-benar ada.`,
    full_dark: `Kamu juga kadang begitu.
Terlihat siap, terlihat tersedia.
Padahal hati sedang tidak ingin terlibat.

Dan orang lain menunggu tanpa tahu kamu sedang menjauh pelan-pelan.`,
    full_advice: `Kalau memang tidak ingin hadir, jujur saja.
Diam terlalu lama sering terasa lebih tajam daripada penolakan.`
  },

  {
    category: "tambahan",
    emoji: "🪑", name: "Kursi Plastik Hajatan",
    preview: `Kelihatannya kuat.
Bisa menahan banyak beban.

Sampai ada satu momen…
dan “krek”.

Semua kaget.`,
    full_dark: `Kamu terbiasa menanggung semuanya sendirian.
Terlihat santai.
Terlihat aman.

Sampai satu tekanan kecil membuatmu runtuh,
dan orang bilang, “Kok bisa?”`,
    full_advice: `Tidak apa-apa mengaku berat.
Lebih baik bergeser sedikit daripada patah diam-diam.`
  },

  {
    category: "tambahan",
    emoji: "📸", name: "Foto yang Difilter Terlalu Halus",
    preview: `Kulit mulus.
Cahaya pas.
Hidup terlihat rapi.

Padahal aslinya… ya manusia biasa.`,
    full_dark: `Kamu terlalu sering menampilkan versi paling enak dilihat.
Takut kalau orang melihat sisi lelahmu.

Akhirnya kamu sendiri yang lupa mana yang asli.`,
    full_advice: `Tidak semua harus tampak sempurna.
Orang lebih mudah percaya pada yang jujur daripada yang terlalu halus.`
  },

  {
    category: "tambahan",
    emoji: "🚶", name: "Antrian yang Diserobot",
    preview: `Kamu sudah berdiri lama.
Tiba-tiba ada yang langsung ke depan.

Dan kamu cuma bisa menghela napas.`,
    full_dark: `Kamu sering memilih diam saat diperlakukan tidak adil.
Bukan karena setuju.
Tapi karena tidak ingin ribut.

Lama-lama orang mengira kamu memang tidak keberatan.`,
    full_advice: `Sopan itu baik.
Tapi membiarkan diri terus dilangkahi bukan kesabaran — itu kebiasaan yang merugikanmu.`
  },

  {
    category: "tambahan",
    emoji: "🛒", name: "Barang “Flash Sale” yang Tidak Perlu",
    preview: `Diskon besar.
Waktu terbatas.
Rasanya sayang kalau tidak ambil.

Padahal setelah sampai rumah… bingung mau diapakan.`,
    full_dark: `Kamu kadang mengejar sesuatu hanya karena takut ketinggalan.
Bukan karena benar-benar butuh.

Dan setelah dapat, rasanya biasa saja.`,
    full_advice: `Tidak semua yang cepat habis itu penting.
Kadang yang benar-benar kamu perlukan tidak sedang terburu-buru.`
  },

  {
    category: "tambahan",
    emoji: "📲", name: "Centang Dua Tanpa Biru",
    preview: `Pesan sudah sampai.
Sudah terbaca.
Tapi tidak ada jawaban.

Sunyi yang sopan.`,
    full_dark: `Kamu pernah memilih tidak merespons karena tidak enak menjawab.
Berharap diam itu cukup jelas.

Padahal bagi yang menunggu,
diam sering terasa lebih panjang dari penolakan.`,
    full_advice: `Kalau memang tidak bisa, katakan.
Kadang kejelasan lebih menenangkan daripada harapan yang digantung.`
  },

  {
    category: "tambahan",
    emoji: "🧊", name: "Es Batu di Minuman Panas",
    preview: `Awalnya terasa menyegarkan.
Dingin sebentar.

Lalu mencair,
dan rasanya jadi hambar.`,
    full_dark: `Ada orang yang datang memberi sensasi sesaat.
Menenangkan sebentar.

Tapi setelah itu, justru mengubah rasa keseluruhan.`,
    full_advice: `Tidak semua yang terasa segar di awal akan membuat segalanya lebih baik.
Perhatikan efek jangka panjangnya.`
  },

  {
    category: "tambahan",
    emoji: "👟", name: "Sepatu Putih di Musim Hujan",
    preview: `Niatnya tampil bersih.
Keluar dengan percaya diri.

Pulangnya penuh noda.`,
    full_dark: `Kamu ingin terlihat rapi di tempat yang sebenarnya belum siap untuk itu.
Berusaha menjaga citra di lingkungan yang mudah mengotori.

Lama-lama kamu lelah sendiri.`,
    full_advice: `Menjaga diri itu penting.
Tapi pilih juga medan yang tidak membuatmu terus-menerus harus membersihkan luka.`
  },

  {
    category: "tambahan",
    emoji: "🔋", name: "Power Bank yang Tertinggal",
    preview: `Sudah siap jauh-jauh.
Baru sadar cadangannya ketinggalan.

Percaya diri di awal, panik di tengah jalan.`,
    full_dark: `Kamu sering yakin bisa menghadapi semuanya sendiri.
Tidak merasa perlu dukungan.

Sampai di momen sulit,
baru terasa rapuhnya.`,
    full_advice: `Kuat itu bagus.
Tapi punya cadangan bukan tanda lemah — itu bijak.`
  },

  {
    category: "tambahan",
    emoji: "🕰️", name: "Jam Dinding yang Mati Tapi Masih Digantung",
    preview: `Masih di tempatnya.
Masih terlihat berfungsi.

Padahal waktunya sudah lama berhenti.`,
    full_dark: `Kamu mempertahankan sesuatu hanya karena sudah terbiasa ada.
Padahal ia tidak lagi bergerak.

Namun karena terlihat normal, kamu memilih tidak menyentuhnya.`,
    full_advice: `Tidak semua yang masih tergantung berarti masih berjalan.
Cek lagi, jangan-jangan waktumu ikut tertahan.`
  },

  {
    category: "tambahan",
    emoji: "▶️", name: "Tombol “Lewati Iklan”",
    preview: `Lima detik terasa lama sekali.
Jari sudah siap menekan.

Tidak sabar ingin langsung ke inti.`,
    full_dark: `Kamu sering ingin hasil tanpa proses.
Ingin cerita tanpa perjuangan.

Padahal kadang bagian yang ingin kamu lewati justru yang membentukmu.`,
    full_advice: `Tidak semua bisa dilompati.
Beberapa bagian memang harus kamu tonton sampai selesai.`
  },

  {
    category: "tambahan",
    emoji: "🪑", name: "Kursi yang Selalu di Pojok",
    preview: `Tidak pernah di tengah.
Jarang jadi pilihan pertama.

Tapi selalu ada kalau dibutuhkan.`,
    full_dark: `Kamu terbiasa menempatkan diri di pinggir.
Takut terlalu terlihat.
Takut terlalu menonjol.

Lama-lama orang mengira kamu memang nyaman di sana.`,
    full_advice: `Sesekali tidak apa-apa duduk di tengah.
Hidupmu bukan latar belakang.`
  },

  {
    category: "tambahan",
    emoji: "📅", name: "Kalender yang Masih di Bulan Lama",
    preview: `Tanggal sudah berubah.
Tapi lembarannya belum diganti.

Seolah waktu masih sama.`,
    full_dark: `Kamu sudah melewati banyak hal,
tapi hatimu masih tertahan di cerita lama.

Tubuhmu bergerak, pikiranmu belum.`,
    full_advice: `Kalau waktunya sudah lewat, balik saja halamannya.
Tidak semua kenangan harus terus kamu tempel di depan.`
  },

  {
    category: "tambahan",
    emoji: "🎧", name: "Headset yang Kusut",
    preview: `Setiap mau dipakai,
harus sabar mengurai dulu.

Padahal tadi rasanya sudah disimpan rapi.`,
    full_dark: `Masalah kecil yang tidak diselesaikan dari awal
sering datang lagi dalam bentuk lebih rumit.

Kamu menunda merapikan,
akhirnya waktumu habis hanya untuk mengurai.`,
    full_advice: `Lebih cepat dibereskan saat masih sederhana.
Semakin lama dibiarkan, semakin sulit dilepaskan.`
  },

  {
    category: "tambahan",
    emoji: "🧻", name: "Tisu Terakhir di Gulungan",
    preview: `Tipis.
Hampir habis.
Tapi tetap dipakai sampai benar-benar tidak ada.

Baru sadar saat tinggal kardusnya.`,
    full_dark: `Kamu sering memberi sampai titik terakhir.
Bertahan sampai hampir kosong.

Karena merasa harus cukup untuk semua orang.`,
    full_advice: `Berhenti sebelum habis itu bukan egois.
Itu cara menjaga agar kamu tetap ada.`
  },

  {
    category: "tambahan",
    emoji: "🔌", name: "Charger yang Harus Dipegang Supaya Mengisi",
    preview: `Kalau dilepas sedikit, tidak masuk.
Harus diatur posisinya.
Kadang malah harus ditahan.

Capek ya.`,
    full_dark: `Ada hubungan yang juga begitu.
Kalau tidak kamu yang terus menyesuaikan,
tidak jalan.

Dan kamu mulai bertanya dalam hati,
ini rusak di kabelnya… atau di sambungannya?`,
    full_advice: `Kalau sesuatu hanya berfungsi saat kamu terus menahan,
mungkin memang sudah waktunya diperbaiki — bukan dipaksa.`
  },

  {
    category: "tambahan",
    emoji: "🏍️", name: "Motor yang Dipanasin Lama Tapi Jarang Jalan",
    preview: `Mesinnya dinyalakan.
Dipanaskan.
Ditunggu.

Tapi tidak pernah benar-benar dipakai pergi jauh.`,
    full_dark: `Kamu sering mempersiapkan diri.
Belajar.
Berencana.

Tapi ragu melangkah.

Akhirnya yang panas cuma mesinnya,
bukan perjalananmu.`,
    full_advice: `Persiapan itu penting.
Tapi keberanian melangkah lebih menentukan arah.`
  },

  {
    category: "tambahan",
    emoji: "📺", name: "TV yang Nyala Tapi Tidak Ditonton",
    preview: `Suara ada.
Gambar ada.
Tapi tidak ada yang benar-benar memperhatikan.

Cuma jadi latar.`,
    full_dark: `Kamu hadir di banyak tempat,
tapi jarang benar-benar didengar.

Terbiasa dianggap ada,
tanpa benar-benar diperhatikan.`,
    full_advice: `Hadir saja tidak cukup.
Kalau ingin dihargai, jangan biarkan dirimu hanya jadi suara latar.`
  },

  {
    category: "tambahan",
    emoji: "🪖", name: "Helm Dipakai Tapi Tidak Dikunci",
    preview: `Sudah merasa aman.
Sudah merasa terlindungi.

Padahal belum benar-benar terkunci.`,
    full_dark: `Kamu merasa sudah menjaga diri.
Tapi masih setengah hati.

Batas dibuat, tapi gampang dilonggarkan.

Dan kamu heran kenapa tetap terasa goyah.`,
    full_advice: `Kalau mau aman, lakukan sepenuhnya.
Setengah proteksi sering memberi rasa tenang yang palsu.`
  },

  {
    category: "tambahan",
    emoji: "⏰", name: "Jam yang Dipercepat Lima Menit",
    preview: `Supaya tidak terlambat.
Supaya lebih disiplin.

Tapi kamu tahu itu bukan waktu asli.`,
    full_dark: `Kamu mencoba mengatur hidup dengan trik kecil.
Mengakali diri sendiri supaya lebih baik.

Kadang berhasil.
Kadang cuma jadi kebiasaan menipu rasa cemas.`,
    full_advice: `Strategi boleh.
Tapi jangan sampai kamu lupa menghadapi waktu yang sebenarnya.`
  },

  {
    category: "tambahan",
    emoji: "☑️", name: "Tombol “Saya Setuju” yang Langsung Dicentang",
    preview: `Tidak dibaca.
Tidak dipikir.
Langsung setuju.

Yang penting lanjut.`,
    full_dark: `Kamu sering mengiyakan sesuatu supaya cepat selesai.
Supaya tidak ribet.
Supaya tidak dianggap sulit.

Lalu di tengah jalan baru sadar,
ternyata kamu tidak benar-benar setuju.`,
    full_advice: `Tidak semua harus langsung kamu terima.
Kadang membaca dulu menyelamatkanmu dari banyak penyesalan.`
  },

  {
    category: "tambahan",
    emoji: "🚗", name: "Kaca Mobil yang Berembun",
    preview: `Jalannya ada.
Tapi pandangannya kabur.

Maju bisa, jelas belum tentu.`,
    full_dark: `Saat emosi naik, pikiran sering berkabut.
Kamu tetap berjalan,
tapi arahmu tidak benar-benar terlihat.

Dan keputusan yang diambil dalam kabut jarang tepat.`,
    full_advice: `Kalau pandangan sedang tidak jernih,
lebih baik berhenti sebentar daripada tersesat jauh.`
  },

  {
    category: "tambahan",
    emoji: "🔔", name: "Notifikasi yang Sebenarnya Tidak Penting",
    preview: `Bunyinya heboh.
Bikin kaget.
Padahal isinya cuma hal kecil.

Ternyata tidak semua yang ribut itu penting.`,
    full_dark: `Kamu sering bereaksi besar pada hal sepele.
Tenagamu habis untuk yang tidak perlu.

Sementara yang benar-benar penting lewat begitu saja.`,
    full_advice: `Tidak semua bunyi harus ditanggapi.
Pilih mana yang layak kamu beri perhatian.`
  },

  {
    category: "tambahan",
    emoji: "🚪", name: "Pintu yang Tidak Pernah Dikunci",
    preview: `Katanya percaya.
Katanya santai.

Tapi sebenarnya cuma lupa berjaga.`,
    full_dark: `Kamu membuka akses terlalu lebar.
Memberi ruang tanpa batas.

Dan ketika ada yang masuk tanpa izin,
kamu bingung harus marah pada siapa.`,
    full_advice: `Percaya itu baik.
Tapi menjaga tetap perlu.`
  },

  {
    category: "tambahan",
    emoji: "🎂", name: "Kue Ulang Tahun yang Lilinnya Terlalu Banyak",
    preview: `Lilin makin banyak.
Tiupnya makin lama.
Capek sendiri sebelum harapan selesai disebut.`,
    full_dark: `Semakin dewasa, keinginan makin banyak.
Target makin tinggi.
Harapan makin berat.

Kadang kamu lupa menikmati kuenya,
karena sibuk menghitung lilin.`,
    full_advice: `Harapan boleh banyak.
Tapi jangan lupa menikmati momen yang sedang kamu pegang.`
  },

  {
    category: "tambahan",
    emoji: "🛒", name: "Keranjang Belanja yang Cuma Diisi, Tidak Jadi Dibayar",
    preview: `Masuk keranjang.
Dipilih.
Dilihat-lihat lagi.

Tapi tidak pernah benar-benar dibawa pulang.`,
    full_dark: `Kamu sering mendekati sesuatu,
merasa cocok,
merasa ingin.

Tapi ragu di langkah terakhir.

Akhirnya hidupmu penuh “hampir”.`,
    full_advice: `Tidak semua harus kamu ambil.
Tapi kalau memang yakin, jangan berhenti di keranjang saja.`
  },

  {
    category: "tambahan",
    emoji: "📲", name: "Update Aplikasi yang Ditunda Terus",
    preview: `Sudah muncul notifikasinya.
Sudah tahu perlu diperbarui.

Tapi selalu pilih “nanti saja”.`,
    full_dark: `Kamu tahu ada kebiasaan yang perlu diperbaiki.
Ada pola yang harus diubah.

Tapi perubahan terasa repot.
Jadi kamu bertahan di versi lama.`,
    full_advice: `Perubahan memang butuh waktu.
Tapi menunda terlalu lama bikin kamu tertinggal oleh dirimu sendiri.`
  },

  {
    category: "tambahan",
    emoji: "🌱", name: "Tanaman yang Disiram Sekali Lalu Ditinggal",
    preview: `Semangat di awal.
Disiram.
Difoto.

Lalu lupa.`,
    full_dark: `Kamu sering memulai dengan niat baik.
Hubungan, hobi, rencana.

Tapi tidak konsisten merawatnya.

Dan kamu heran kenapa tidak tumbuh.`,
    full_advice: `Awal yang manis tidak cukup.
Yang membuat sesuatu hidup adalah perhatian yang berulang.`
  },

  {
    category: "tambahan",
    emoji: "🪞", name: "Cermin di Kamar Mandi yang Sedikit Retak",
    preview: `Masih bisa dipakai.
Masih memantulkan wajah.

Tapi gambarnya tidak lagi utuh.`,
    full_dark: `Cara kamu melihat diri sendiri sudah lama tergores oleh komentar orang.
Oleh pengalaman.
Oleh kegagalan.

Kamu masih berdiri,
tapi pantulanmu tidak lagi seimbang.`,
    full_advice: `Retakan itu bukan dirimu.
Itu hanya sudut pandang yang perlu diganti.`
  },

  {
    category: "tambahan",
    emoji: "🔑", name: "Kunci Cadangan yang Disimpan Baik-Baik",
    preview: `Jarang dipakai.
Disimpan di tempat aman.

Tapi selalu ada kalau keadaan darurat.`,
    full_dark: `Di dalam dirimu selalu ada versi yang lebih tenang,
lebih sabar,
lebih kuat.

Kamu hanya jarang mengaksesnya.`,
    full_advice: `Saat situasi terasa terkunci,
ingat — kamu punya kunci lain di dalam diri.`
  },
// ============================================================
// DATA TAMBAHAN — 50 objek (no. 101–150)
// Tambahkan ke dalam const objects = [ ... ] di objects.js
// ============================================================

  {
    category: "tambahan",
    emoji: "🛌", name: "Selimut Tipis di Malam Dingin",
    preview: `Tidak terlalu tebal.
Tidak mewah.
Tapi cukup untuk membuatmu merasa aman saat malam terasa panjang.`,
    full_dark: `Kamu mungkin bukan orang yang selalu tahu harus berkata apa.
Bukan yang paling pandai memberi solusi.

Tapi kehadiranmu membuat orang merasa tidak sendirian.
Dan itu sering kali lebih berharga daripada jawaban yang sempurna.`,
    full_advice: `Kamu tidak harus menjadi besar untuk berarti.
Kadang menjadi hangat saja sudah cukup.`
  },

  {
    category: "tambahan",
    emoji: "💡", name: "Lampu Teras yang Menyala Diam-Diam",
    preview: `Tidak terang sekali.
Tapi selalu ada saat malam pulang terasa gelap.`,
    full_dark: `Kamu mungkin bukan pusat perhatian.
Bukan yang selalu dipuji.

Tapi kamu konsisten.
Dan konsistensi kecil seperti itu sering jadi alasan seseorang merasa tenang.`,
    full_advice: `Tidak semua cahaya harus menyilaukan.
Yang penting, ia tetap menyala.`
  },

  {
    category: "tambahan",
    emoji: "🍵", name: "Cangkir Teh Hangat",
    preview: `Sederhana.
Tidak ribut.
Tapi perlahan menghangatkan dari dalam.`,
    full_dark: `Kamu belajar bahwa hidup tidak selalu tentang kecepatan.
Ada momen-momen yang lebih indah saat dinikmati pelan.

Dan kamu mulai mengizinkan diri untuk tidak selalu terburu-buru.`,
    full_advice: `Tidak apa-apa berjalan lambat.
Selama hatimu tetap hangat, kamu tidak tertinggal.`
  },

  {
    category: "tambahan",
    emoji: "🌤️", name: "Jendela yang Dibuka Pagi Hari",
    preview: `Udara segar masuk.
Cahaya perlahan menyentuh ruangan.

Tidak langsung terang, tapi cukup membuat harapan terasa nyata.`,
    full_dark: `Ada hari-hari ketika kamu merasa berat bangun.
Tapi kamu tetap membuka sedikit ruang untuk cahaya masuk.

Dan dari hal kecil itu, perlahan kamu belajar bahwa gelap tidak pernah benar-benar menetap.`,
    full_advice: `Kamu tidak harus langsung kuat.
Cukup buka sedikit ruang untuk harapan.`
  },

  {
    category: "tambahan",
    emoji: "🌳", name: "Bangku Taman yang Setia Menunggu",
    preview: `Ia tidak mengejar siapa pun.
Tidak memanggil.
Hanya ada.`,
    full_dark: `Kamu juga mulai mengerti bahwa tidak semua hal perlu dikejar.
Kadang yang tepat akan datang dan duduk di sampingmu dengan tenang.

Dan saat itu terjadi, kamu tahu rasanya berbeda.`,
    full_advice: `Tenang saja.
Yang memang untukmu tidak perlu kamu paksa.`
  },

  {
    category: "tambahan",
    emoji: "💤", name: "Bantal yang Menyimpan Lelah",
    preview: `Ia tidak bertanya kenapa kamu capek.
Tidak meminta penjelasan.
Hanya menerima kepalamu apa adanya.`,
    full_dark: `Ada hari ketika kamu terlalu lelah untuk menjelaskan perasaanmu.
Terlalu penat untuk terlihat kuat.

Dan kamu butuh tempat yang tidak menghakimi,
yang tidak menyuruhmu segera bangkit,
yang hanya berkata lewat diamnya: “Istirahatlah dulu.”`,
    full_advice: `Tidak semua lelah harus dilawan.
Kadang dipeluk sebentar saja sudah cukup untuk membuatmu kuat lagi.`
  },

  {
    category: "tambahan",
    emoji: "🌿", name: "Jalan Setapak Setelah Hujan",
    preview: `Masih basah.
Masih licin.
Tapi pelan-pelan bisa dilewati.`,
    full_dark: `Hidupmu mungkin tidak selalu kering dan mudah.
Ada sisa-sisa badai yang belum benar-benar hilang.

Tapi kamu tetap melangkah, hati-hati, tidak tergesa.
Dan itu bukan kelemahan — itu kebijaksanaan yang lahir dari pengalaman.`,
    full_advice: `Pelan tidak apa-apa.
Yang penting kamu tetap berjalan.`
  },

  {
    category: "tambahan",
    emoji: "📖", name: "Buku yang Sudah Dilipat Sudutnya",
    preview: `Ada tanda kecil di halaman tertentu.
Tanda bahwa bagian itu pernah berarti.`,
    full_dark: `Dalam hidupmu juga ada momen yang tidak bisa kamu lupakan.
Kalimat-kalimat yang membentukmu.
Kejadian yang membuatmu berubah.

Dan meski tidak semua menyenangkan,
semuanya ikut membangun siapa dirimu hari ini.`,
    full_advice: `Kamu adalah kumpulan halaman yang pernah kamu baca dan rasakan.
Dan itu membuatmu lebih dalam, bukan rusak.`
  },

  {
    category: "tambahan",
    emoji: "☂️", name: "Payung yang Dibuka Bersama",
    preview: `Satu payung.
Dua orang.
Langkah jadi lebih dekat tanpa perlu diminta.`,
    full_dark: `Ada kalanya kamu tidak butuh solusi besar.
Hanya butuh seseorang yang berjalan di sampingmu saat hujan datang.

Bukan untuk menghentikan hujan,
tapi untuk membuatnya terasa lebih ringan.`,
    full_advice: `Tidak semua badai harus kamu hadapi sendirian.
Berbagi ruang kecil kadang sudah cukup menguatkan.`
  },

  {
    category: "tambahan",
    emoji: "🌱", name: "Tanaman yang Tumbuh Miring ke Arah Cahaya",
    preview: `Ia tidak tumbuh lurus sempurna.
Ia mengikuti arah terang.`,
    full_dark: `Kamu mungkin merasa jalur hidupmu tidak selalu rapi.
Belok sana, miring sedikit, berbeda dari rencana awal.

Tapi sebenarnya kamu hanya sedang mencari cahaya yang paling cocok untukmu.`,
    full_advice: `Tidak harus lurus untuk menjadi benar.
Selama kamu tumbuh ke arah yang membuatmu hidup, itu sudah indah.`
  },

  {
    category: "tambahan",
    emoji: "🧥", name: "Jaket yang Dipinjamkan",
    preview: `Ukuran mungkin tidak pas.
Warnanya mungkin bukan favoritmu.
Tapi saat dingin datang, rasanya tetap menenangkan.`,
    full_dark: `Ada orang-orang dalam hidupmu yang mungkin tidak selalu sempurna.
Tidak selalu tahu harus berkata apa.

Tapi mereka hadir saat kamu kedinginan oleh keadaan.
Memberi sedikit hangat tanpa banyak drama.

Dan kamu mulai sadar, perhatian kecil sering lebih tulus daripada janji besar.`,
    full_advice: `Tidak semua kebaikan datang dalam bentuk megah.
Kadang ia hanya berupa jaket sederhana yang membuatmu tidak menggigil.`
  },

  {
    category: "tambahan",
    emoji: "🌇", name: "Langit Senja yang Tidak Pernah Sama",
    preview: `Warnanya berubah-ubah.
Tidak pernah persis seperti kemarin.
Tapi selalu indah dengan caranya sendiri.`,
    full_dark: `Kamu juga berubah.
Cara berpikirmu, caramu mencintai, caramu menghadapi masalah.

Dan meski ada hari ketika kamu merasa tidak lagi seperti dulu,
itu bukan kehilangan — itu pertumbuhan.`,
    full_advice: `Kamu tidak harus menjadi versi lama untuk tetap berarti.
Versi hari ini pun sudah cukup indah.`
  },

  {
    category: "tambahan",
    emoji: "💧", name: "Air yang Mengisi Celah Batu",
    preview: `Tidak keras.
Tidak memaksa.
Tapi perlahan menemukan jalannya.`,
    full_dark: `Kamu mungkin bukan tipe yang meledak-ledak.
Bukan yang selalu paling lantang.

Tapi ketenanganmu membuatmu mampu bertahan lama.
Pelan-pelan kamu menemukan celah, menemukan solusi, menemukan tempat.`,
    full_advice: `Tidak semua kekuatan terlihat besar.
Ada yang lembut, tapi mampu bertahan paling lama.`
  },

  {
    category: "tambahan",
    emoji: "✉️", name: "Surat Lama yang Disimpan Rapi",
    preview: `Kertasnya mungkin sudah menguning.
Tulisannya mungkin mulai pudar.
Tapi maknanya masih terasa.`,
    full_dark: `Ada kenangan yang tidak perlu kamu ulang,
tapi tetap layak disimpan.

Bukan untuk kembali ke masa itu,
melainkan untuk mengingat bahwa kamu pernah dicintai, pernah berjuang, pernah bertahan.`,
    full_advice: `Menghargai masa lalu bukan berarti ingin kembali.
Itu hanya cara menghormati perjalananmu sendiri.`
  },

  {
    category: "tambahan",
    emoji: "🚪", name: "Pintu yang Terbuka Perlahan",
    preview: `Tidak dibanting.
Tidak dipaksa.
Hanya dibuka sedikit demi sedikit.`,
    full_dark: `Kamu belajar membuka diri dengan lebih hati-hati.
Tidak lagi sembarangan memberi akses,
tapi juga tidak menutup diri sepenuhnya.

Dan itu bukan karena kamu menjadi dingin,
melainkan karena kamu ingin lebih sehat.`,
    full_advice: `Pelan tidak apa-apa.
Yang penting kamu tetap memberi ruang bagi hal baik untuk masuk.`
  },

  {
    category: "tambahan",
    emoji: "🍞", name: "Roti yang Mengembang Pelan",
    preview: `Ia tidak langsung jadi besar.
Butuh waktu.
Butuh sabar.

Dan diam-diam, ia bertumbuh.`,
    full_dark: `Kamu mungkin merasa belum sampai mana-mana.
Belum sebesar harapanmu.
Belum sehebat orang lain.

Tapi prosesmu sedang bekerja, bahkan saat tidak terlihat.
Ada perubahan kecil yang terus berlangsung di dalam dirimu.`,
    full_advice: `Tidak semua pertumbuhan terlihat cepat.
Yang penting, kamu tidak berhenti berkembang.`
  },

  {
    category: "tambahan",
    emoji: "🌊", name: "Laut yang Tetap Tenang di Permukaan",
    preview: `Dari jauh terlihat damai.
Anginnya lembut.
Permukaannya halus.

Padahal di dalamnya ada banyak kehidupan.`,
    full_dark: `Kamu mungkin terlihat biasa saja bagi orang lain.
Tidak banyak bicara tentang perjuanganmu.

Tapi di dalam dirimu ada cerita, keberanian, dan kekuatan yang tidak semua orang tahu.`,
    full_advice: `Tidak perlu semua orang mengerti kedalamanmu.
Yang penting kamu tahu betapa berharganya dirimu.`
  },

  {
    category: "tambahan",
    emoji: "🕯️", name: "Lilin Kecil di Ruangan Gelap",
    preview: `Cahayanya tidak besar.
Tapi cukup untuk membuat gelap tidak terasa menakutkan.`,
    full_dark: `Kamu mungkin merasa kontribusimu kecil.
Bukan yang paling hebat.
Bukan yang paling menonjol.

Tapi satu kebaikan kecil yang kamu lakukan bisa mengubah suasana hati seseorang.

Dan itu lebih berarti dari yang kamu kira.`,
    full_advice: `Jangan remehkan cahaya kecilmu.
Dalam gelap, ia terasa sangat berharga.`
  },

  {
    category: "tambahan",
    emoji: "👟", name: "Sepatu Lama yang Tetap Nyaman",
    preview: `Tidak lagi baru.
Warnanya mungkin sudah pudar.
Tapi langkah terasa pas.`,
    full_dark: `Kamu belajar bahwa tidak semua yang lama harus diganti.
Ada nilai dalam kesetiaan, dalam kebiasaan baik, dalam hubungan yang sudah saling mengerti.

Kenyamanan itu tidak selalu membosankan.
Kadang ia justru bentuk kedewasaan.`,
    full_advice: `Yang membuatmu tenang layak dipertahankan.
Tidak semua harus selalu baru untuk terasa indah.`
  },

  {
    category: "tambahan",
    emoji: "☁️", name: "Awan yang Bergerak Perlahan",
    preview: `Ia tidak diam.
Hanya bergerak dengan tenang.

Dan tanpa terasa, langit pun berubah.`,
    full_dark: `Mungkin kamu merasa perubahanmu kecil.
Sedikit demi sedikit saja.

Tapi waktu bekerja diam-diam.
Dan suatu hari kamu akan melihat bahwa kamu sudah berada di tempat yang berbeda.`,
    full_advice: `Tenang saja.
Kamu sedang bergerak, meski pelan. Dan itu sudah cukup.`
  },

  {
    category: "tambahan",
    emoji: "🌅", name: "Pagi yang Datang Setelah Malam Panjang",
    preview: `Malam terasa lama.
Pikiran berisik.
Hati lelah.

Tapi entah bagaimana, pagi tetap datang.`,
    full_dark: `Ada fase dalam hidupmu yang terasa tidak ada ujungnya.
Masalah datang satu per satu.
Harapan terasa jauh.

Namun waktu tidak pernah benar-benar berhenti.
Dan tanpa kamu sadari, terang perlahan muncul lagi.`,
    full_advice: `Kalau hari ini terasa berat, bertahanlah.
Pagi tidak pernah lupa untuk kembali.`
  },

  {
    category: "tambahan",
    emoji: "🤝", name: "Jari yang Saling Menggenggam",
    preview: `Tidak perlu kata-kata panjang.
Cukup satu genggaman yang tulus.

Dan rasanya sudah berbeda.`,
    full_dark: `Kamu mungkin pernah merasa harus kuat sendirian.
Harus terlihat mampu menghadapi semuanya.

Padahal kadang yang kamu butuhkan bukan solusi,
melainkan rasa ditemani.`,
    full_advice: `Tidak apa-apa bersandar sesekali.
Kekuatan juga bisa tumbuh dari kebersamaan.`
  },

  {
    category: "tambahan",
    emoji: "🌦️", name: "Hujan Ringan di Siang Hari",
    preview: `Tidak deras.
Tidak menakutkan.
Hanya cukup untuk membuat udara terasa lebih segar.`,
    full_dark: `Tidak semua kesedihan datang untuk merusak.
Ada yang hadir hanya untuk membersihkan sedikit luka lama.
Untuk membuatmu lebih jernih melihat hidup.

Dan setelahnya, kamu merasa lebih ringan.`,
    full_advice: `Menangis sebentar bukan kelemahan.
Kadang itu cara hati mencuci dirinya sendiri.`
  },

  {
    category: "tambahan",
    emoji: "🏠", name: "Rumah yang Lampunya Menyala Saat Kamu Pulang",
    preview: `Pintu dibuka.
Lampu menyala.
Dan kamu tahu kamu tidak sendirian.`,
    full_dark: `Dalam hidupmu mungkin tidak semua tempat terasa nyaman.
Tidak semua orang terasa aman.

Tapi ada satu ruang — entah itu tempat atau seseorang —
yang membuatmu bisa melepas lelah tanpa berpura-pura.`,
    full_advice: `Hargai tempat yang membuatmu bisa menjadi diri sendiri.
Itu adalah anugerah yang tidak semua orang punya.`
  },

  {
    category: "tambahan",
    emoji: "👣", name: "Langkah Kecil yang Diulang Setiap Hari",
    preview: `Tidak terlihat hebat.
Tidak langsung mengubah segalanya.

Tapi ia terus dilakukan.`,
    full_dark: `Kamu mungkin merasa hidupmu biasa saja.
Tidak penuh kejutan besar.

Namun kebiasaan kecil yang kamu jaga,
usaha sederhana yang kamu ulang,
perlahan membentuk masa depan yang stabil.`,
    full_advice: `Jangan remehkan dirimu.
Hal kecil yang konsisten sering membawa hasil paling besar.`
  },

  {
    category: "tambahan",
    emoji: "🍽️", name: "Kursi Kosong di Meja Makan",
    preview: `Ada satu tempat yang tidak terisi.
Sunyi sedikit terasa.
Tapi meja tetap hangat oleh kebersamaan yang ada.`,
    full_dark: `Hidupmu mungkin tidak lagi sama seperti dulu.
Ada orang yang tidak lagi duduk di sisimu.
Ada cerita yang sudah selesai.

Dan itu boleh terasa sedih.

Namun di antara kehilangan itu, masih ada yang tinggal.
Masih ada tawa kecil, masih ada rasa syukur yang pelan-pelan tumbuh.`,
    full_advice: `Kehilangan tidak menghapus kebahagiaan yang pernah ada.
Ia hanya membuatmu belajar menghargai yang masih di sini.`
  },

  {
    category: "tambahan",
    emoji: "🌧️", name: "Hujan yang Dilihat dari Dalam Rumah",
    preview: `Di luar basah.
Di dalam hangat.
Kamu hanya duduk, mendengarkan.`,
    full_dark: `Tidak semua masalah harus kamu hadapi langsung.
Ada kalanya kamu hanya perlu berhenti,
mengamati,
dan memberi jarak pada kekacauan.

Dari jarak itu, hatimu jadi lebih tenang.
Dan keputusanmu jadi lebih bijak.`,
    full_advice: `Kamu tidak harus selalu terlibat dalam setiap badai.
Kadang cukup aman di tempatmu sendiri.`
  },

  {
    category: "tambahan",
    emoji: "📷", name: "Foto Lama yang Tersimpan di Ponsel",
    preview: `Tiba-tiba muncul di layar.
Senyum lama, tempat lama, versi dirimu yang dulu.

Dan kamu tersenyum kecil.`,
    full_dark: `Kamu sudah melewati banyak hal.
Sudah berubah, sudah belajar, sudah jatuh dan bangkit lagi.

Melihat ke belakang bukan untuk menyesal,
tapi untuk menyadari betapa jauhnya kamu sudah berjalan.`,
    full_advice: `Bangga pada dirimu tidak harus menunggu sukses besar.
Bertahan sampai hari ini saja sudah luar biasa.`
  },

  {
    category: "tambahan",
    emoji: "🍃", name: "Angin Sore yang Lembut",
    preview: `Tidak terlihat.
Tidak ribut.
Tapi terasa menyentuh kulit.`,
    full_dark: `Kebaikan yang kamu lakukan mungkin tidak selalu diperhatikan.
Tidak selalu dipuji.

Tapi ia tetap ada, tetap terasa,
dan sering kali menjadi penguat diam-diam bagi orang lain.`,
    full_advice: `Tidak semua kebaikan harus disorot.
Yang penting, ia tulus dan tetap kamu lakukan.`
  },

  {
    category: "tambahan",
    emoji: "🪜", name: "Tangga yang Dinaiki Pelan-Pelan",
    preview: `Anak tangganya banyak.
Langkahnya satu per satu.
Tidak bisa dilompati.`,
    full_dark: `Kamu mungkin ingin cepat sampai.
Ingin hasil segera terlihat.

Tapi hidup memang dirancang untuk dijalani tahap demi tahap.
Dan setiap langkah kecil membuatmu lebih siap di tingkat berikutnya.`,
    full_advice: `Tidak apa-apa naik perlahan.
Yang penting kamu tidak berhenti di bawah.`
  },

  {
    category: "tambahan",
    emoji: "🍱", name: "Bekal Sederhana dari Rumah",
    preview: `Tidak mewah.
Tidak penuh hiasan.
Tapi dibuat dengan perhatian.`,
    full_dark: `Dalam hidupmu mungkin tidak semua yang kamu punya terlihat istimewa di mata orang lain.
Tidak selalu paling mahal.
Tidak selalu paling mencolok.

Tapi ada nilai dalam hal-hal yang dibuat dengan tulus.
Ada rasa cukup yang tidak bisa dibeli.`,
    full_advice: `Yang dibuat dengan hati selalu punya tempat tersendiri.
Dan kamu pun begitu.`
  },

  {
    category: "tambahan",
    emoji: "🌙", name: "Hening Sebelum Tidur",
    preview: `Lampu sudah dimatikan.
Suara mulai pelan.
Hanya ada napasmu sendiri.`,
    full_dark: `Di momen sunyi itu, kamu sering berbicara pada dirimu sendiri.
Mengakui lelahmu.
Menghitung syukurmu.

Dan meski hari tidak selalu sempurna, kamu tetap sampai di ujungnya.`,
    full_advice: `Terima kasih sudah bertahan hari ini.
Besok bisa kamu jalani lagi, pelan-pelan.`
  },

  {
    category: "tambahan",
    emoji: "🌉", name: "Jembatan Kecil di Atas Sungai",
    preview: `Tidak besar.
Tidak megah.
Tapi cukup untuk menyebrangkanmu.`,
    full_dark: `Kadang yang kamu butuhkan bukan perubahan besar.
Hanya satu langkah penghubung.
Satu keputusan kecil yang membawa kamu ke sisi yang berbeda.

Dan dari situ, hidup terasa lebih lapang.`,
    full_advice: `Tidak semua kemajuan harus dramatis.
Kadang satu jembatan kecil sudah cukup mengubah arah.`
  },

  {
    category: "tambahan",
    emoji: "🍲", name: "Aroma Masakan dari Dapur",
    preview: `Belum terlihat di meja.
Tapi wanginya sudah menyebar.

Dan entah kenapa, rasanya menenangkan.`,
    full_dark: `Ada hal-hal baik dalam hidupmu yang belum sepenuhnya terlihat.
Masih dalam proses.
Masih dimasak oleh waktu.

Kamu belum melihat hasilnya,
tapi tanda-tandanya sudah ada.`,
    full_advice: `Bersabarlah sedikit lagi.
Hal baik yang sedang dipersiapkan untukmu akan sampai pada waktunya.`
  },

  {
    category: "tambahan",
    emoji: "🤍", name: "Tangan yang Menepuk Bahu Pelan",
    preview: `Tidak keras.
Tidak heboh.
Hanya sentuhan kecil yang berkata, “Aku di sini.”`,
    full_dark: `Di saat kamu merasa ragu pada diri sendiri,
kadang satu dukungan sederhana bisa menguatkan kembali.

Dan kamu pun sebenarnya pernah menjadi penopang bagi orang lain,
meski mungkin kamu tidak menyadarinya.`,
    full_advice: `Kamu tidak sendirian.
Dan kamu juga lebih berarti daripada yang sering kamu kira.`
  },

  {
    category: "tambahan",
    emoji: "🚿", name: "Air Hangat untuk Mencuci Tangan",
    preview: `Sederhana.
Mengalir pelan.
Membersihkan tanpa menyakiti.`,
    full_dark: `Tidak semua kesalahan perlu dihukum keras.
Ada yang cukup dimaafkan, cukup dipelajari, lalu dilepaskan.

Kamu tidak harus terus menghukum diri atas hal yang sudah lewat.
Hidup juga memberi ruang untuk bersih kembali.`,
    full_advice: `Kamu boleh memulai lagi.
Hati yang mau belajar selalu layak diberi kesempatan.`
  },

  {
    category: "tambahan",
    emoji: "🎵", name: "Lagu Lama yang Tiba-Tiba Terdengar",
    preview: `Nadanya familiar.
Liriknya masih kamu hafal.
Dan kenangannya ikut datang.`,
    full_dark: `Ada bagian dalam dirimu yang tetap sama meski waktu terus berjalan.
Nilai, rasa, dan mimpi kecil yang dulu pernah kamu simpan.

Mengingatnya bukan berarti mundur.
Itu hanya cara menghubungkan dirimu yang dulu dengan yang sekarang.`,
    full_advice: `Kamu adalah perjalanan panjang yang utuh.
Dan setiap versimu layak dihargai.`
  },

  {
    category: "tambahan",
    emoji: "🌤️", name: "Cahaya Matahari yang Masuk Lewat Celah Tirai",
    preview: `Tidak membuka seluruh ruangan.
Hanya satu garis tipis cahaya.
Tapi cukup membuat suasana berubah.`,
    full_dark: `Kadang harapan tidak datang dalam bentuk besar.
Ia muncul kecil, hampir tidak terlihat.

Namun satu pikiran positif, satu dukungan kecil,
bisa menjadi awal perubahan besar dalam dirimu.`,
    full_advice: `Jangan abaikan secercah terang itu.
Ia mungkin sedang membimbingmu perlahan.`
  },

  {
    category: "tambahan",
    emoji: "📔", name: "Buku Catatan yang Masih Ada Halaman Kosong",
    preview: `Beberapa halaman sudah terisi.
Beberapa penuh coretan.
Tapi masih banyak ruang yang belum disentuh.`,
    full_dark: `Hidupmu belum selesai.
Apa pun yang terjadi kemarin, masih ada halaman berikutnya.

Kesalahan tidak menutup cerita.
Ia hanya menjadi bagian dari bab sebelumnya.`,
    full_advice: `Kamu masih punya banyak ruang untuk menulis ulang arah hidupmu.`
  },

  {
    category: "tambahan",
    emoji: "🙂", name: "Senyum Kecil di Tengah Hari Sibuk",
    preview: `Tidak lama.
Tidak mencolok.
Tapi cukup membuat langkah terasa ringan.`,
    full_dark: `Di antara tuntutan dan kesibukan, kamu masih bisa menemukan momen kecil untuk bersyukur.
Masih bisa tertawa pada hal sederhana.

Dan itu tanda bahwa hatimu belum kehilangan hangatnya.`,
    full_advice: `Jangan tunggu semuanya sempurna untuk merasa bahagia.
Kadang satu senyum kecil sudah cukup untuk hari ini.`
  },

  {
    category: "tambahan",
    emoji: "☂️", name: "Payung yang Disiapkan Sebelum Hujan",
    preview: `Langit belum gelap sepenuhnya.
Tapi kamu sudah membawanya.

Bukan karena takut.
Karena kamu belajar dari kemarin.`,
    full_dark: `Ada pengalaman yang dulu membuatmu basah kuyup.
Membuatmu kaget dan tidak siap.

Sekarang kamu lebih peka.
Lebih tenang.
Lebih siap menjaga diri tanpa harus menjadi cemas.`,
    full_advice: `Belajar dari masa lalu bukan berarti hidup dalam ketakutan.
Itu tanda kamu tumbuh.`
  },

  {
    category: "tambahan",
    emoji: "🌱", name: "Tangan yang Kotor Setelah Berkebun",
    preview: `Tanah menempel di jari.
Keringat terasa.
Tapi ada bibit yang sudah ditanam.`,
    full_dark: `Perjuanganmu mungkin tidak selalu terlihat bersih dan rapi.
Ada lelah, ada kesalahan, ada hari yang berantakan.

Namun semua itu bagian dari proses menumbuhkan sesuatu yang lebih baik.`,
    full_advice: `Tidak apa-apa terlihat lelah saat berusaha.
Hasil yang baik sering lahir dari tangan yang mau bekerja.`
  },

  {
    category: "tambahan",
    emoji: "🪟", name: "Kursi di Samping Jendela",
    preview: `Tempat sederhana untuk duduk.
Melihat dunia bergerak.
Tanpa harus ikut berlari.`,
    full_dark: `Kamu tidak harus selalu berada di tengah keramaian.
Ada kekuatan dalam kemampuanmu untuk berhenti sejenak,
mengamati,
dan memahami sebelum melangkah lagi.`,
    full_advice: `Tenang bukan berarti tertinggal.
Kadang itu cara terbaik untuk menjaga dirimu tetap utuh.`
  },

  {
    category: "tambahan",
    emoji: "✉️", name: "Surat yang Tidak Jadi Dikirim",
    preview: `Kata-katanya sudah ditulis.
Perasaan sudah dituangkan.
Tapi akhirnya disimpan.`,
    full_dark: `Tidak semua yang kamu rasakan harus disampaikan.
Ada emosi yang cukup kamu pahami sendiri,
cukup kamu lepaskan dalam diam.

Dan itu bukan kelemahan.
Itu kedewasaan.`,
    full_advice: `Kamu berhak memilih mana yang perlu dibagi,
dan mana yang cukup kamu jaga sendiri.`
  },

  {
    category: "tambahan",
    emoji: "🌬️", name: "Nafas Dalam Sebelum Melangkah",
    preview: `Tarik perlahan.
Hembuskan pelan.
Lalu melangkah.`,
    full_dark: `Sebelum mengambil keputusan besar, kamu belajar berhenti sebentar.
Mendengarkan dirimu sendiri.
Menenangkan pikiran yang riuh.

Dan dari ruang kecil itu, keberanian lahir dengan lebih jernih.`,
    full_advice: `Kamu tidak perlu terburu-buru.
Keputusan yang tenang sering membawa hasil yang lebih baik.`
  },

  {
    category: "tambahan",
    emoji: "🏖️", name: "Jejak Kaki di Pasir",
    preview: `Terlihat jelas untuk sesaat.
Lalu perlahan tersapu ombak.

Namun kamu tahu, kamu pernah berjalan di sana.`,
    full_dark: `Tidak semua kebaikanmu akan diingat orang selamanya.
Tidak semua usaha akan dikenang.

Tapi itu tidak membuatnya sia-sia.
Setiap langkah tetap membentuk dirimu,
meski dunia tidak selalu menyimpannya.`,
    full_advice: `Nilai hidupmu tidak ditentukan oleh seberapa lama orang mengingatmu,
melainkan oleh ketulusan saat kamu melangkah.`
  },

  {
    category: "tambahan",
    emoji: "💧", name: "Air Minum Setelah Haus",
    preview: `Sederhana.
Biasa saja.
Tapi terasa sangat berarti saat dibutuhkan.`,
    full_dark: `Kamu mungkin merasa dirimu tidak istimewa.
Tidak mencolok.
Tidak luar biasa.

Namun bagi seseorang yang sedang lelah atau kesepian,
kehadiranmu bisa terasa seperti pertolongan yang tepat waktu.`,
    full_advice: `Tidak perlu menjadi megah untuk menjadi penting.
Kadang kamu adalah jawaban yang tidak disadari orang lain.`
  },

  {
    category: "tambahan",
    emoji: "☁️", name: "Langit yang Tetap Luas Meski Mendung",
    preview: `Awan menutup sebagian cahaya.
Tapi langitnya tetap sama luasnya.`,
    full_dark: `Hari-hari berat tidak mengurangi nilai dirimu.
Kesalahan tidak mengecilkan kapasitasmu.
Kesedihan tidak menghapus kekuatanmu.

Mendung hanya sementara.
Langit di baliknya tetap utuh.`,
    full_advice: `Kamu lebih besar dari masalah yang sedang kamu hadapi.`
  },

  {
    category: "tambahan",
    emoji: "🪜", name: "Tangga yang Pernah Kamu Turuni dan Naiki Lagi",
    preview: `Pernah turun.
Pernah merasa di bawah.
Lalu perlahan naik kembali.`,
    full_dark: `Kamu tidak selalu berada di atas.
Ada fase jatuh, ragu, bahkan hampir menyerah.

Tapi kamu tetap mencoba lagi.
Dan itu sudah menunjukkan keberanian yang tidak semua orang miliki.`,
    full_advice: `Turun bukan akhir cerita.
Selama kamu mau naik lagi, harapan selalu ada.`
  },

  {
    category: "tambahan",
    emoji: "🏠", name: "Rumah di Dalam Dirimu",
    preview: `Bukan bangunan.
Bukan tempat fisik.
Tapi ruang batin tempat kamu kembali saat dunia terasa terlalu ramai.`,
    full_dark: `Sepanjang perjalanan hidup, kamu mungkin mencari rasa aman di banyak tempat.
Pada orang lain, pada pencapaian, pada pengakuan.

Namun perlahan kamu belajar,
rumah yang paling setia adalah dirimu sendiri.
Tempat kamu bisa jujur, bisa lelah, bisa bangkit lagi.`,
    full_advice: `Selama kamu tidak meninggalkan dirimu sendiri,
kamu tidak pernah benar-benar kehilangan tempat pulang.`
  },
// ============================================================
// DATA TAMBAHAN — 50 objek
// Tambahkan ke dalam const objects = [ ... ] di objects.js
// ============================================================

  {
    category: "tambahan",
    emoji: "🪞", name: "Cermin yang Tidak Pernah Berkedip",
    preview: `Dia melihat semua wajah.
Tapi tidak pernah punya ekspresi sendiri.
Bayangkan kalau suatu hari dia bosan.`,
    full_dark: `Kamu sering jadi tempat orang bercerita.
Tempat orang menaruh emosi.
Tempat orang melihat dirinya sendiri.

Tapi jarang ada yang bertanya:
“Kalau kamu sendiri gimana?”`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "⏰", name: "Alarm yang Tidak Pernah Ikut Bangun",
    preview: `Dia berteriak tiap pagi.
Membangunkan semua orang.
Tapi dia sendiri tetap di tempat yang sama.

Ironis.`,
    full_dark: `Ada orang yang jago menyemangati.
Jago memberi saran.
Jago bilang “ayo semangat!”

Tapi dirinya sendiri?
Masih menunda mimpinya.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🚪", name: "Pintu yang Tidak Pernah Pergi",
    preview: `Semua orang lewat.
Masuk.
Keluar.

Dia tetap di situ.`,
    full_dark: `Dalam hidupmu, ada fase kamu jadi “tempat singgah”.
Orang datang saat butuh.
Pergi saat sudah selesai.

Dan kamu tetap berdiri.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "👡", name: "Sendal yang Tertukar",
    preview: `Dua benda yang seharusnya sepasang.
Tapi kadang tidak cocok di kaki yang salah.

Lucu, tapi menyebalkan.`,
    full_dark: `Kamu bisa sangat tepat untuk seseorang,
dan sangat tidak cocok untuk yang lain.

Masalahnya bukan kamu rusak.
Hanya salah tempat.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "💡", name: "Lampu yang Takut Gelap",
    preview: `Dia dibuat untuk mengusir gelap.
Tapi kalau listrik padam,
dia juga tidak berdaya.

Lucu ya.`,
    full_dark: `Kamu mungkin terlihat kuat.
Terlihat jadi penenang.
Terlihat jadi solusi.

Tapi kamu juga manusia.
Kamu juga butuh sumber energi.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🪑", name: "Kursi yang Tidak Pernah Duduk",
    preview: `Semua orang duduk di atasnya.
Curhat. Lelah. Istirahat.
Tapi kursinya sendiri tidak pernah merasakan istirahat.

Aneh ya.`,
    full_dark: `Kamu sering jadi penopang.
Jadi tempat orang menaruh beban.
Jadi yang “kuat dulu ya”.

Tapi siapa yang menopang kamu?`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🕰️", name: "Jam Dinding yang Tidak Punya Waktu",
    preview: `Dia menunjukkan waktu untuk semua orang.
Tapi dia sendiri tidak pernah tahu hari apa ini berarti baginya.

Lucu tapi menyedihkan.`,
    full_dark: `Kamu sering membantu orang mengatur hidupnya.
Mengatur jadwal.
Mengatur arah.

Tapi pernahkah kamu bertanya:
“Hidupku sendiri sedang menuju ke mana?”`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🥛", name: "Gelas Kosong yang Sebenarnya Penuh",
    preview: `Orang bilang dia kosong.
Padahal dia penuh…
dengan ruang.

Absurd? Sedikit.`,
    full_dark: `Kadang kamu merasa “tidak punya apa-apa”.
Padahal kamu punya ruang untuk belajar.
Ruang untuk berubah.
Ruang untuk menerima hal baru.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🪜", name: "Tangga yang Tidak Pernah Sampai",
    preview: `Semua orang naik lewat dia.
Menuju tempat lebih tinggi.
Tapi dia sendiri tetap di bawah.

Ironis.`,
    full_dark: `Ada kalanya kamu membantu orang lain berkembang.
Melihat mereka maju.
Melihat mereka berhasil.

Sementara kamu merasa diam di tempat.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🌀", name: "Kipas Angin yang Tidak Pernah Merasa Sejuk",
    preview: `Dia membuat orang lain merasa nyaman.
Sejuk. Lega.
Tapi dia sendiri tidak pernah merasakan anginnya.

Lucu juga ya.`,
    full_dark: `Kamu mungkin sering jadi penenang.
Menjadi orang yang meredakan suasana.
Menjadi yang “nggak apa-apa, aku kuat.”

Padahal kamu juga butuh ketenangan.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🌒", name: "Bayangan yang Selalu Mengikuti",
    preview: `Dia selalu ikut ke mana pun kamu pergi.
Tapi tidak pernah bisa berjalan di depan.
Dan hilang saat gelap datang.

Aneh ya, setia tapi tidak terlihat.`,
    full_dark: `Ada bagian dalam dirimu yang selalu mengikuti —
keraguan, rasa takut, kenangan lama.
Kadang kamu ingin meninggalkannya,
tapi dia tetap ada.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🗑️", name: "Tempat Sampah yang Paling Jujur",
    preview: `Semua orang pura-pura rapi.
Tapi ujungnya, semua berakhir di situ.
Tanpa topeng.

Absurd? Lumayan.`,
    full_dark: `Kamu sering menyimpan hal-hal yang tidak enak.
Perasaan yang tidak terucap.
Kekecewaan kecil yang dibiarkan menumpuk.

Dan kamu bilang, “nggak apa-apa.”`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🪟", name: "Jendela yang Tidak Pernah Keluar",
    preview: `Dia memberi pemandangan luas.
Langit. Jalan. Dunia.
Tapi dia sendiri tetap menempel di dinding.

Ironis, ya.`,
    full_dark: `Kamu mungkin sering memberi orang lain perspektif.
Menenangkan mereka.
Membuka cara pandang baru.

Tapi kapan terakhir kali kamu membuka dirimu sendiri?`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🧴", name: "Lem yang Menyatukan Tapi Tidak Terlihat",
    preview: `Dua benda tampak utuh.
Padahal ada sesuatu di tengahnya yang bekerja diam-diam.

Tak terlihat. Tak dipuji.`,
    full_dark: `Di banyak hubungan, kamu mungkin jadi penengah.
Yang meredakan.
Yang menyatukan.
Yang menahan agar tidak retak.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🗺️", name: "Peta yang Tidak Pernah Tersesat",
    preview: `Dia tahu semua arah.
Utara, selatan, timur, barat.
Tapi tidak pernah benar-benar berjalan.

Lucu kan? Tahu jalan, tapi tidak pernah sampai.`,
    full_dark: `Kamu mungkin tahu teori hidup.
Tahu mana yang baik.
Tahu mana yang salah.

Tapi menjalankannya?
Itu cerita lain.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🧶", name: "Karpet yang Selalu Diinjak",
    preview: `Semua orang lewat di atasnya.
Sepatu kotor. Debu. Lumpur.
Dia tetap diam.

Tidak protes. Tidak pindah.`,
    full_dark: `Kadang kamu terlalu baik.
Terlalu memaklumi.
Terlalu membiarkan orang lain melewati batasmu.

Dan kamu bilang, “nggak apa-apa.”`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🧊", name: "Es Batu yang Takut Mencair",
    preview: `Dia ingin tetap utuh.
Tapi semakin lama dipegang,
semakin cepat hilang bentuknya.

Ironis.`,
    full_dark: `Kamu ingin terlihat kuat.
Tidak berubah.
Tidak rapuh.

Tapi hidup memang membuatmu melebur sedikit demi sedikit.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "📕", name: "Buku yang Tak Pernah Dibuka",
    preview: `Isinya mungkin luar biasa.
Penuh cerita.
Penuh pelajaran.

Tapi tetap tertutup.`,
    full_dark: `Ada potensi dalam dirimu yang belum kamu sentuh.
Bukan karena tidak mampu.
Tapi karena takut memulai.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🎈", name: "Balon yang Takut Terbang",
    preview: `Dia dibuat untuk naik.
Semakin tinggi semakin indah.
Tapi dia justru takut dilepas.

Absurd, ya?`,
    full_dark: `Kamu ingin berkembang.
Ingin lebih tinggi.
Ingin lebih jauh.

Tapi saat kesempatan datang,
kamu ragu meninggalkan zona aman.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🗝️", name: "Kunci yang Tidak Tahu Pintu Mana",
    preview: `Dia dibuat untuk membuka.
Tapi tanpa pintu yang tepat,
dia cuma potongan besi.

Lucu sekaligus menyedihkan.`,
    full_dark: `Kamu mungkin merasa tidak berguna di satu tempat.
Tidak dihargai.
Tidak cocok.

Padahal bisa jadi kamu hanya belum berada di pintu yang tepat.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "📶", name: "WiFi yang Tidak Terlihat",
    preview: `Tidak kelihatan.
Tidak bersuara.
Tapi semua orang panik saat dia hilang.

Aneh ya, sesuatu yang tak terlihat justru paling terasa saat tidak ada.`,
    full_dark: `Kamu mungkin bukan orang paling mencolok di ruangan.
Tidak paling keras.
Tidak paling bersinar.

Tapi kehadiranmu menenangkan.
Menyambungkan.
Membuat suasana tetap jalan.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🎩", name: "Topi yang Tidak Pernah Pusing",
    preview: `Dia menutup kepala orang.
Melindungi dari panas.
Tapi tidak pernah ikut pusing.

Lucu ya, dekat dengan kepala, tapi tidak pernah ikut mikir.`,
    full_dark: `Ada kalanya kamu terlihat “tenang banget”.
Seolah tidak terpengaruh apa pun.
Padahal di dalam, pikiranmu ramai sendiri.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "☔", name: "Payung yang Tidak Suka Hujan",
    preview: `Dia dibuat untuk hujan.
Tapi setiap kali hujan datang,
dia justru dibuka dan dipaksa bekerja.

Ironis kan?`,
    full_dark: `Kamu mungkin lahir dengan kemampuan tertentu.
Kemampuan menenangkan.
Kemampuan memimpin.
Kemampuan bertahan.

Dan justru kemampuan itu membuatmu sering “dipanggil” saat masalah muncul.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "📷", name: "Foto yang Tidak Pernah Bergerak",
    preview: `Ia menangkap momen bahagia.
Menyimpannya selamanya.
Tapi tidak pernah bisa kembali ke sana.

Sedikit menyedihkan, ya?`,
    full_dark: `Kamu mungkin sering melihat masa lalu dan berkata,
“dulu lebih enak.”
“dulu lebih ringan.”

Tapi hidup bukan untuk dibekukan.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "👟", name: "Sepatu Baru yang Takut Lecet",
    preview: `Masih bersih.
Masih rapi.
Takut keluar rumah karena takut kotor.

Absurd, tapi sering kejadian.`,
    full_dark: `Kamu ingin tetap aman.
Tetap sempurna.
Tidak ingin gagal.

Tapi hidup memang akan memberi goresan.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "📆", name: "Kalender yang Selalu Disobek",
    preview: `Setiap hari dia “kehilangan” satu bagian dirinya.
Disobek. Dibuang.
Tapi justru itu tanda dia berfungsi.

Aneh ya, berkurang tapi berguna.`,
    full_dark: `Setiap hari kamu juga kehilangan sesuatu.
Waktu. Energi. Kesempatan.

Kadang kamu takut merasa “berkurang”.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🎒", name: "Tas yang Selalu Menyimpan",
    preview: `Semua dimasukkan ke dalamnya.
Dompet. Kunci. Beban kecil yang tak terlihat.
Dia diam saja.

Lucunya, dia jarang diperiksa isinya.`,
    full_dark: `Kamu juga begitu.
Menyimpan cerita.
Menyimpan kecewa.
Menyimpan kalimat yang tidak sempat diucapkan.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🧱", name: "Tembok yang Tidak Pernah Pergi",
    preview: `Semua orang bersandar padanya.
Menggantungkan sesuatu.
Bahkan menempelkan harapan.

Tapi dia sendiri tidak pernah bergerak.`,
    full_dark: `Kamu mungkin terbiasa jadi yang “kuat”.
Yang tidak goyah.
Yang selalu bisa diandalkan.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🔔", name: "Notifikasi yang Selalu Datang",
    preview: `Bunyi sedikit saja,
kamu langsung menoleh.
Seolah hidupmu tergantung di situ.

Absurd, tapi nyata.`,
    full_dark: `Kadang kamu terlalu cepat bereaksi pada hal kecil.
Komentar. Pesan. Penilaian orang.

Seolah setiap bunyi menentukan nilai dirimu.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "☕", name: "Cangkir Retak yang Masih Dipakai",
    preview: `Ada garis halus di sisinya.
Tidak sempurna lagi.
Tapi masih bisa menampung hangat.

Aneh, tapi justru terasa lebih berharga.`,
    full_dark: `Kamu mungkin punya luka lama.
Cerita yang tidak utuh.
Bagian yang pernah patah.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "📺", name: "Remote yang Sering Hilang",
    preview: `Semua orang mencarinya saat butuh.
Teriak-teriak, panik.
Tapi saat ketemu? Ditaruh sembarangan lagi.

Lucu, tapi agak nyebelin.`,
    full_dark: `Kamu mungkin sering dicari saat orang butuh bantuan.
Butuh solusi.
Butuh ditemani.

Tapi setelah semuanya selesai, kamu kembali tak dianggap.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🚗", name: "Kaca Mobil yang Tidak Ikut Perjalanan",
    preview: `Dia melihat pemandangan berubah.
Gunung, kota, hujan, matahari.
Tapi dia tetap menempel di tempat yang sama.

Absurd ya, ikut jalan tapi tidak benar-benar pergi.`,
    full_dark: `Kadang kamu merasa hidup bergerak cepat.
Banyak hal terjadi.
Banyak orang berubah.

Tapi kamu merasa diam di situ-situ saja.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "⌫", name: "Tombol “Undo” yang Tidak Ada di Hidup",
    preview: `Di layar, salah sedikit bisa dibatalkan.
Di hidup? Tidak semudah itu.

Aneh ya, kita pintar bikin tombol itu di mesin, tapi tidak di diri sendiri.`,
    full_dark: `Kamu mungkin sering berharap bisa mengulang momen.
Mengganti kata.
Mengambil keputusan berbeda.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🏡", name: "Pagar yang Takut Ditinggalkan",
    preview: `Dia membatasi.
Melindungi.
Tapi juga membuat jarak.

Lucu, ya? Melindungi sekaligus memisahkan.`,
    full_dark: `Kamu mungkin membangun jarak untuk menjaga diri.
Takut disakiti.
Takut kecewa lagi.

Akhirnya aman, tapi sepi.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🔌", name: "Charger yang Dicari Saat Hampir Habis",
    preview: `Selama baterai penuh, dia tidak dianggap.
Begitu tinggal satu garis, semua panik.

Ironis banget.`,
    full_dark: `Kamu sering menunda istirahat.
Menunda merawat diri.
Menunda mengisi ulang energi.

Sampai akhirnya benar-benar kelelahan.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🧼", name: "Sabun yang Hilang Saat Membersihkan",
    preview: `Semakin dia bekerja,
semakin dia mengecil.
Akhirnya habis.

Lucu ya, membersihkan orang lain sambil menghilang pelan-pelan.`,
    full_dark: `Kamu mungkin tipe yang suka membantu.
Suka merapikan masalah orang lain.
Suka jadi penenang suasana.

Tapi tanpa sadar, energimu ikut terkuras.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🧊", name: "Kulkas yang Paling Diperhatikan Saat Kosong",
    preview: `Saat penuh, semua biasa saja.
Saat kosong, langsung panik.

Absurdnya, yang kosong justru paling diperhatikan.`,
    full_dark: `Kadang kamu merasa baru dicari saat kamu “tidak ada”.
Saat kamu menjauh.
Saat kamu berhenti memberi.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "😭", name: "Tangisan Bayi yang Tidak Malu",
    preview: `Dia ingin sesuatu?
Dia menangis.
Tanpa gengsi. Tanpa strategi.

Sederhana dan jujur.`,
    full_dark: `Semakin dewasa, kamu makin pandai menahan.
Menahan sedih.
Menahan kecewa.
Menahan ingin.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "📝", name: "Kertas Kosong yang Menakutkan",
    preview: `Tidak ada salah.
Tidak ada coretan.
Tapi justru itu yang bikin bingung mau mulai dari mana.

Absurd, ya? Kosong tapi bikin takut.`,
    full_dark: `Kadang kamu takut memulai sesuatu yang baru.
Bukan karena gagal,
tapi karena belum tahu akan jadi apa.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🚗", name: "Bayar Parkir yang Selalu Ada di Akhir",
    preview: `Masuknya mudah.
Keluarnya baru terasa biayanya.

Aneh ya, biaya sering muncul belakangan.`,
    full_dark: `Keputusan cepat sering terasa ringan di awal.
Tapi konsekuensinya muncul di akhir.

Begitu juga sebaliknya,
usaha berat di awal sering terasa ringan hasilnya.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🚶", name: "Antrian yang Selalu Terasa Lama",
    preview: `Waktu lima menit bisa terasa seperti lima jam.
Padahal jarumnya tetap sama.

Aneh, ya? Waktu tidak berubah.
Yang berubah cuma perasaanmu.`,
    full_dark: `Saat menunggu hasil, balasan, atau kepastian,
hidup terasa lambat sekali.
Kamu gelisah. Tidak sabar.

Tapi saat sibuk dan bahagia, waktu terasa terbang.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🪖", name: "Helm yang Tidak Tahu Ke Mana Pergi",
    preview: `Dia ikut ke mana pun kamu naik kendaraan.
Tapi dia sendiri tidak tahu tujuan.

Lucu, ya? Selalu ikut perjalanan tanpa tahu arah.`,
    full_dark: `Kadang kamu ikut arus.
Ikut tren.
Ikut pilihan orang lain.

Bergerak terus, tapi tidak pernah benar-benar bertanya:
“Aku sebenarnya mau ke mana?”`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🛗", name: "Tombol Lift yang Ditekan Berkali-kali",
    preview: `Sudah ditekan sekali.
Tapi tetap ditekan lagi.
Seolah itu membuatnya datang lebih cepat.

Absurd banget… tapi sering dilakukan.`,
    full_dark: `Kamu kadang ingin hasil instan.
Ingin jawaban cepat.
Ingin perubahan segera.

Padahal proses tetap butuh waktu.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "✂️", name: "Gunting yang Tidak Pernah Menjahit",
    preview: `Dia ahli memisahkan.
Memotong.
Membuat dua bagian terpisah.

Tapi tidak pernah menyatukan.`,
    full_dark: `Kamu mungkin cepat mengkritik.
Cepat melihat salahnya.
Cepat memisahkan mana yang tidak cocok.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🌦️", name: "Peta Cuaca yang Tidak Mengendalikan Hujan",
    preview: `Dia memberi tahu akan hujan.
Tapi tidak bisa menghentikannya.

Aneh, tahu badai datang tapi tetap tidak berkuasa.`,
    full_dark: `Kamu sering tahu sesuatu akan sulit.
Tahu risiko.
Tahu kemungkinan kecewa.

Tapi kamu tetap harus menjalaninya.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🧥", name: "Ritsleting yang Macet",
    preview: `Awalnya lancar.
Lalu tiba-tiba tersangkut.
Semakin dipaksa, semakin tidak mau jalan.

Kesal, ya? Padahal tadi baik-baik saja.`,
    full_dark: `Hubungan, rencana, bahkan semangatmu kadang begitu.
Awalnya mulus.
Lalu ada satu titik kecil yang membuat semuanya seret.

Dan saat kamu memaksa, justru makin rumit.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🔦", name: "Senter yang Dicari Saat Gelap",
    preview: `Saat terang, dia tidak dianggap.
Begitu listrik padam, baru semua orang mencarinya.

Ironisnya, dia memang dibuat untuk momen itu.`,
    full_dark: `Mungkin kamu bukan orang yang selalu terlihat di saat senang.
Tapi di saat sulit, orang tahu kamu bisa diandalkan.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🏷️", name: "Label Harga yang Dilepas Setelah Dibeli",
    preview: `Saat masih di toko, semua orang melihat nilainya.
Begitu sudah dimiliki, labelnya dilepas.

Aneh ya, harga penting sebelum punya.`,
    full_dark: `Di awal, orang sering menunjukkan usaha terbaiknya.
Perhatian. Waktu. Sikap manis.

Setelah merasa memiliki, kadang usaha itu berkurang.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🤫", name: "Hening yang Sering Disalahartikan",
    preview: `Tidak bicara bukan berarti tidak peduli.
Tidak bereaksi bukan berarti tidak merasa.

Tapi banyak orang mengira sebaliknya.`,
    full_dark: `Kamu mungkin tipe yang memproses dalam diam.
Berpikir dulu sebelum bicara.
Menyembuhkan diri tanpa banyak suara.`,
    full_advice: ``
  },

  {
    category: "tambahan",
    emoji: "🕯️", name: "Bayangan di Dinding Saat Lampu Dimatikan",
    preview: `Selama ada cahaya, dia ada.
Begitu lampu mati, dia hilang.

Absurdnya, dia tidak pernah benar-benar “pergi”.`,
    full_dark: `Ketakutan dan kekhawatiran sering terasa besar
saat kamu memikirkan kemungkinan buruk.

Tapi saat situasinya benar-benar datang,
sering kali tidak sebesar bayangan di kepala.`,
    full_advice: ``
  }

];
