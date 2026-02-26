const objects = [

  // ============================================================
  // KATEGORI 1: BENDA SEHARI-HARI (14 objek)
  // ============================================================
  {
    category: "sehari-hari",
    emoji: "🔋", name: "Baterai Remote",
    preview: `Kamu adalah baterai remote. Semua orang baru sadar kamu penting setelah TV tidak bisa diganti channelnya. Sebelum itu? Kamu cuma nempel diam di belakang, diabaikan total. Yang lucu, pas kamu habis — yang disalahin remotenya, bukan yang lupa ngecas kamu.`,
    full_dark: `Sisi gelapmu: kamu sering kasih energi ke orang yang bahkan tidak tahu namamu. Kamu habis untuk fungsi orang lain, dan ketika kamu lemah, mereka buang kamu dan cari yang baru. Tidak ada upacara perpisahan. Tidak ada terima kasih.`,
    full_advice: `Mulai pilih siapa yang boleh pakai energimu. Tidak semua remote layak dikasih daya. Beberapa memang lebih baik dibiarkan mati.`
  },
  {
    category: "sehari-hari",
    emoji: "🧦", name: "Kaos Kaki Hilang Sebelah",
    preview: `Kamu adalah kaos kaki hilang sebelah. Pasanganmu ada, tapi entah di mana. Semua orang pernah kehilanganmu — dan herannya, tidak ada yang tahu kamu pergi ke mana. Mesin cuci? Bawah kasur? Dimensi lain? Misteri abadi.`,
    full_dark: `Sisi gelapmu: kamu sering merasa tidak lengkap tanpa pasangan. Padahal yang hilang belum tentu pasanganmu — mungkin memang sudah tidak sejalan dari awal. Satu kaos kaki tidak bisa dipaksakan jadi sepasang kalau ukurannya beda.`,
    full_advice: `Tidak apa-apa sendirian sementara. Lebih baik sendiri daripada dipaksakan jadi pasangan dengan yang tidak cocok. Yang hilang, biarkan hilang.`
  },
  {
    category: "sehari-hari",
    emoji: "🖊️", name: "Pulpen Tanpa Tutup",
    preview: `Kamu adalah pulpen tanpa tutup. Masih bisa nulis, masih berfungsi — tapi orang selalu ngerasa ada yang kurang dari kamu. Dicari kalau butuh, tapi kalau ada pilihan lain yang lebih lengkap, kamu ditinggal di laci.`,
    full_dark: `Sisi gelapmu: kamu membiarkan dirimu "terbuka" terlalu lama sampai kering sendiri. Tidak ada tutup artinya tidak ada batas — dan tanpa batas, kamu habis lebih cepat dari seharusnya.`,
    full_advice: `Cari tutupmu. Entah itu batasan, rutinitas, atau orang yang mau melindungimu saat kamu tidak dipakai. Pulpen tanpa tutup yang dibiarkan lama ujungnya mengering dan tidak bisa nulis sama sekali.`
  },
  {
    category: "sehari-hari",
    emoji: "📎", name: "Penjepit Kertas",
    preview: `Kamu adalah penjepit kertas. Tugasmu menyatukan hal-hal yang berantakan — dan kamu melakukannya dengan diam, tanpa drama. Tapi coba lihat: yang disatukan dapat perhatian, kamu malah sering hilang di dasar laci bersama karet gelang dan baterai bekas.`,
    full_dark: `Sisi gelapmu: kamu terlalu sibuk menyatukan orang lain sampai lupa kamu sendiri butuh sesuatu yang menyatukan dirimu. Kamu jadi perekat hubungan orang lain, tapi hubunganmu sendiri rapuh.`,
    full_advice: `Sesekali lepaskan diri dari peran penyatu. Biarkan hal-hal berantakan sebentar. Itu bukan tanggung jawabmu untuk merapikan semuanya.`
  },
  {
    category: "sehari-hari",
    emoji: "🪣", name: "Ember Bocor",
    preview: `Kamu adalah ember bocor. Kamu tetap berusaha menampung — air, harapan, kepercayaan orang — tapi entah kenapa selalu ada yang menetes keluar. Orang tetap pakai kamu karena tidak ada pilihan lain, bukan karena kamu sempurna.`,
    full_dark: `Sisi gelapmu: bocornya bukan dari luar, tapi dari dalam. Ada luka lama yang tidak pernah benar-benar ditambal — cuma ditutup pita isolasi seadanya dan berharap tidak ketahuan.`,
    full_advice: `Tambal dulu sebelum minta diisi lagi. Percuma orang terus menuangkan sesuatu ke kamu kalau semuanya bocor sebelum sempat berguna.`
  },
  {
    category: "sehari-hari",
    emoji: "🔦", name: "Senter",
    preview: `Kamu adalah senter. Dicari pas mati lampu, dipeluk pas gelap gulita — tapi begitu PLN nyambung lagi, kamu dilempar ke laci dan terlupakan sampai mati lampu berikutnya. Hubunganmu dengan manusia: musiman dan situasional.`,
    full_dark: `Sisi gelapmu: kamu hanya dibutuhkan saat orang takut dan tidak berdaya. Bukan karena mereka sayang, tapi karena tidak ada opsi lain. Itu bukan cinta, itu ketergantungan darurat.`,
    full_advice: `Jangan hanya menyala untuk keadaan darurat orang lain. Kamu berhak menyala untuk dirimu sendiri — bahkan di siang hari bolong sekalipun.`
  },
  {
    category: "sehari-hari",
    emoji: "📌", name: "Sticky Note",
    preview: `Kamu adalah sticky note. Penuh dengan pesan penting, pengingat, dan hal-hal yang "jangan sampai lupa" — tapi setelah pesannya tersampaikan, kamu dikelupas dan dibuang. Fungsimu selesai. Terima kasih, dadah.`,
    full_dark: `Sisi gelapmu: kamu sering jadi tempat orang menaruh beban sementara. Bukan karena kamu kuat — tapi karena kamu mudah ditempel dan mudah dibuang tanpa rasa bersalah.`,
    full_advice: `Tidak semua pesan orang perlu kamu tampung. Belajar bilang "tempel di tempat lain" sebelum kamu kehabisan ruang untuk pesanmu sendiri.`
  },
  {
    category: "sehari-hari",
    emoji: "🧲", name: "Magnet Kulkas",
    preview: `Kamu adalah magnet kulkas. Dekoratif, lucu, dibeli waktu liburan — tapi hidupmu dihabiskan menempel di kulkas orang lain, menahan struk belanja dan jadwal yang sudah lewat. Kamu oleh-oleh yang tidak pernah benar-benar punya tempat.`,
    full_dark: `Sisi gelapmu: kamu menempel di tempat yang bukan milikmu karena tidak tahu harus di mana lagi. Itu bukan loyalitas — itu ketidakberanian untuk cari tempatmu sendiri.`,
    full_advice: `Cari kulkasmu sendiri. Tempat di mana kamu menempel bukan karena terpaksa, tapi karena memang di situ rumahmu.`
  },
  {
    category: "sehari-hari",
    emoji: "🪟", name: "Jendela Berembun",
    preview: `Kamu adalah jendela berembun. Orang menatap keluar lewat kamu, tapi yang mereka lihat kabur dan tidak jelas. Kadang mereka nulis sesuatu di embunmu — nama, hati, kata-kata random — lalu menghilang saat embunnya kering.`,
    full_dark: `Sisi gelapmu: kamu transparan tapi tidak pernah benar-benar terlihat. Orang lihat melalui kamu, bukan melihat kamu. Bedanya tipis tapi menyakitkan.`,
    full_advice: `Sesekali biarkan embunmu tebal supaya orang tidak bisa tembus pandang begitu saja. Biarkan mereka berhenti dan benar-benar lihat kamu dulu.`
  },
  {
    category: "sehari-hari",
    emoji: "🗑️", name: "Tempat Sampah Penuh",
    preview: `Kamu adalah tempat sampah yang penuh. Semua orang tahu kamu harus dikosongkan, semua orang lihat kamu sudah meluber — tapi tidak ada yang mau ambil inisiatif. Mereka tetap tumpuk sampah di atasmu sambil pura-pura tidak lihat.`,
    full_dark: `Sisi gelapmu: kamu sudah terbiasa menampung sampah orang lain sampai lupa kalau kamu sendiri berhak dikosongkan. Kamu pikir itu tugasmu. Padahal itu eksploitasi.`,
    full_advice: `Kosongkan dirimu secara berkala. Tidak peduli siapa yang tidak suka. Tempat sampah yang tidak pernah dikosongkan akhirnya meledak — dan baunya dirasakan semua orang.`
  },
  {
    category: "sehari-hari",
    emoji: "🧴", name: "Sabun Hampir Habis",
    preview: `Kamu adalah sabun yang hampir habis. Masih ada, masih berguna — tapi sudah tipis dan susah dipegang. Orang masih pakai kamu, tapi sudah sambil lirik-lirik sabun baru yang menunggu di pojokan. Kamu tahu. Mereka tahu. Tapi tidak ada yang mau bahas.`,
    full_dark: `Sisi gelapmu: kamu sudah memberi terlalu banyak sampai dirimu sendiri tinggal lapisan tipis. Dan yang menyedihkan — orang yang kamu bersihkan tidak pernah bertanya "kamu baik-baik saja tidak?"`,
    full_advice: `Tidak ada salahnya bilang "aku hampir habis." Orang yang tepat akan berhenti pakai kamu sebentar dan beri kamu waktu untuk pulih.`
  },
  {
    category: "sehari-hari",
    emoji: "⏰", name: "Alarm yang Di-snooze",
    preview: `Kamu adalah alarm yang terus di-snooze. Kamu sudah berusaha, sudah bunyi, sudah kasih peringatan — tapi selalu ditunda. Lima menit lagi. Lima menit lagi. Lima menit lagi. Sampai akhirnya kamu menyerah dan membiarkan mereka telat.`,
    full_dark: `Sisi gelapmu: kamu sudah terbiasa diabaikan. Jadi lama-lama kamu bunyi lebih pelan, lebih ragu — karena toh bakal di-snooze juga. Itu bukan pasrah. Itu trauma.`,
    full_advice: `Bunyi sekali, keras. Kalau diabaikan, itu bukan salahmu. Kamu sudah melakukan tugasmu. Yang telat, ya menanggung konsekuensinya sendiri.`
  },
  {
    category: "sehari-hari",
    emoji: "🪑", name: "Kursi Cadangan",
    preview: `Kamu adalah kursi cadangan. Tidak ada di meja utama, tidak termasuk hitungan awal — tapi begitu ada yang butuh tempat duduk tambahan, namamu yang dipanggil. Kamu opsi, bukan pilihan utama. Dan kamu tahu itu.`,
    full_dark: `Sisi gelapmu: kamu sudah terlalu nyaman jadi cadangan. Karena setidaknya kamu dibutuhkan, meski hanya saat kepepet. Itu bukan posisi yang sehat — itu kebiasaan yang menyedihkan.`,
    full_advice: `Minta tempat di meja utama atau tinggalkan ruangan itu. Tidak ada yang harus seumur hidup jadi kursi cadangan di kehidupan orang lain.`
  },
  {
    category: "sehari-hari",
    emoji: "📦", name: "Kardus Bekas",
    preview: `Kamu adalah kardus bekas. Sudah pernah membawa sesuatu yang berharga — tapi sekarang isinya sudah dikeluarkan dan kamu dilipat di pojokan. Belum dibuang karena "mungkin berguna nanti." Mungkin. Entah kapan.`,
    full_dark: `Sisi gelapmu: kamu menyimpan bentuk aslimu meski isinya sudah lama pergi. Masih terlihat utuh dari luar, tapi di dalam kosong dan berdebu.`,
    full_advice: `Boleh jadi wadah baru untuk hal baru. Tidak harus terus menyimpan bentuk lama hanya karena pernah membawa sesuatu yang berarti di masa lalu.`
  },

  // ============================================================
  // KATEGORI 2: MAKANAN & MINUMAN (14 objek)
  // ============================================================
  {
    category: "makanan",
    emoji: "🍜", name: "Mie Instan",
    preview: `Kamu adalah mie instan. Semua orang suka kamu — tapi tidak ada yang mau ngaku. Di depan orang lain mereka bilang "aku lagi diet" atau "aku makan sehat kok" — tapi tengah malam, saat tidak ada yang lihat, mereka masak kamu diam-diam. Kamu guilty pleasure semua orang.`,
    full_dark: `Sisi gelapmu: kamu mudah didapat, murah, dan tidak butuh effort. Dan karena itu kamu tidak pernah benar-benar dihargai. Dicintai, ya — tapi diam-diam. Diakui? Jarang.`,
    full_advice: `Tidak apa-apa jadi pilihan yang simpel. Yang penting kamu nyata dan mengenyangkan — bukan sekadar terlihat mewah tapi hambar di dalam.`
  },
  {
    category: "makanan",
    emoji: "🧂", name: "Garam",
    preview: `Kamu adalah garam. Tanpa kamu semua masakan terasa hambar — tapi tidak ada yang bilang "wah masakannya enak karena garamnya!" Semua pujian ke bumbunya yang lain. Kamu fondasi, tapi tidak pernah di-highlight.`,
    full_dark: `Sisi gelapmu: kamu sudah terbiasa jadi yang paling penting tapi paling tidak terlihat. Dan parahnya, kamu mulai terima itu sebagai hal yang wajar.`,
    full_advice: `Coba hilang sebentar. Biarkan mereka masak tanpa kamu sekali. Baru mereka sadar betapa hambarnya hidup tanpa kontribusimu.`
  },
  {
    category: "makanan",
    emoji: "🍞", name: "Roti Tawar",
    preview: `Kamu adalah roti tawar. Plain, tidak neko-neko, selalu ada di dapur. Orang ambil kamu tanpa berpikir dua kali. Tidak ada yang bilang "hari ini kita makan roti tawar yuk!" — kamu hanya... ada. Dan itu cukup untuk mereka.`,
    full_dark: `Sisi gelapmu: kamu begitu adaptif sampai tidak punya identitas sendiri. Dikasih selai apapun kamu oke, dipotong gimana juga mau. Fleksibilitas itu baik — tapi sampai titik tertentu itu hilang diri.`,
    full_advice: `Sesekali tampil tanpa topping. Roti tawar yang percaya diri dengan rasa aslinya jauh lebih menarik dari yang butuh lapisan tebal untuk bisa dinikmati.`
  },
  {
    category: "makanan",
    emoji: "🧊", name: "Es Batu",
    preview: `Kamu adalah es batu. Kehadiranmu bikin segalanya lebih sejuk, lebih enak, lebih nyaman — tapi kamu mengorbankan dirimu sendiri dalam proses itu. Kamu meleleh untuk orang lain. Semakin lama kamu ada, semakin kecil dirimu.`,
    full_dark: `Sisi gelapmu: kamu beku di luar tapi cair di dalam. Kelihatan dingin dan tidak butuh siapa-siapa — padahal di balik itu kamu perlahan menghilang karena terlalu lama menjaga keadaan tetap sejuk untuk orang lain.`,
    full_advice: `Kamu tidak harus selalu sejuk untuk semua orang. Boleh hangat. Boleh cair. Itu bukan kelemahan — itu tanda kamu masih manusiawi.`
  },
  {
    category: "makanan",
    emoji: "🍌", name: "Pisang Overripe",
    preview: `Kamu adalah pisang yang sudah terlalu matang. Di rak buah, orang melewatimu — pilih yang masih kuning segar. Tapi para baker tahu: kamu justru paling manis, paling kaya rasa, paling berguna untuk hal-hal yang lebih bermakna. Belum semua orang bisa lihat itu.`,
    full_dark: `Sisi gelapmu: kamu membiarkan dirimu "terlalu matang" karena menunggu terlalu lama untuk diambil. Ada titik di mana matang jadi busuk — dan garis itu tipis sekali.`,
    full_advice: `Jangan tunggu dipilih. Tawarkan dirimu ke yang bisa menghargai kedalaman rasamu — bukan ke yang hanya mau yang paling segar di rak.`
  },
  {
    category: "makanan",
    emoji: "☕", name: "Kopi Sachet",
    preview: `Kamu adalah kopi sachet. Bukan kopi specialty yang dibicarakan di café mahal — kamu yang diseduh buru-buru sebelum meeting, yang diminum sambil lembur, yang menemani saat semua orang sudah tidur. Kamu bukan gaya hidup. Kamu penyelamat.`,
    full_dark: `Sisi gelapmu: orang minum kamu bukan karena sayang, tapi karena butuh. Ada bedanya. Dan kamu sudah terlalu lama berpura-pura itu sama.`,
    full_advice: `Tidak apa-apa jadi yang praktis. Tapi pastikan sesekali ada yang minum kamu pelan-pelan — bukan hanya saat kepepet dan terburu-buru.`
  },
  {
    category: "makanan",
    emoji: "🍪", name: "Biskuit Kaleng Lebaran",
    preview: `Kamu adalah biskuit kaleng lebaran. Setiap tahun ditunggu-tunggu, disambut dengan gembira — tapi begitu kalengnya kosong, kalenganmu malah jadi tempat jarum dan kancing. Kamu berakhir jadi sesuatu yang sama sekali berbeda dari tujuan aslimu.`,
    full_dark: `Sisi gelapmu: kamu sering berubah fungsi sesuai kemauan orang lain tanpa pernah ditanya. Dan kamu terima saja — karena setidaknya masih berguna, meski bukan untuk hal yang seharusnya.`,
    full_advice: `Pertahankan fungsi aslimu. Tidak semua transformasi itu pertumbuhan — beberapa hanya eksploitasi dengan kemasan yang berbeda.`
  },
  {
    category: "makanan",
    emoji: "🥤", name: "Minuman Bersoda Kempes",
    preview: `Kamu adalah minuman bersoda yang sudah kempes. Dulu meletup-letup, penuh semangat, bikin semua orang excited. Sekarang masih ada, masih bisa diminum — tapi gelembungnya sudah pergi dan tidak ada yang bisa mengembalikannya.`,
    full_dark: `Sisi gelapmu: kamu tahu persis kapan gelembungmu mulai hilang — dan kamu tahu siapa atau apa yang bikin itu terjadi. Tapi kamu tetap diam dan membiarkan dirimu terus diminum.`,
    full_advice: `Gelembung bisa tidak kembali — dan itu tidak apa-apa. Rasa aslinya masih ada. Yang pergi hanya show-nya, bukan substansinya.`
  },
  {
    category: "makanan",
    emoji: "🍳", name: "Telur Ceplok Gagal",
    preview: `Kamu adalah telur ceplok yang gagal — kuningnya pecah, bentuknya berantakan, tapi tetap matang dan tetap enak dimakan. Tidak sesuai ekspektasi, tidak Instagram-worthy — tapi fungsinya sama. Bahkan kadang rasanya lebih jujur.`,
    full_dark: `Sisi gelapmu: kamu terlalu keras menghakimi dirimu karena tidak sempurna. Padahal yang makan tidak peduli bentuknya — mereka hanya mau kenyang. Tapi kamu? Kamu yang paling susah terima ketidaksempurnaanmu.`,
    full_advice: `Berhenti coba jadi telur ceplok sempurna. Pecah itu bukan gagal — itu bukti kamu sudah coba. Dan yang penting: kamu tetap bergizi.`
  },
  {
    category: "makanan",
    emoji: "🥜", name: "Kerupuk Melempem",
    preview: `Kamu adalah kerupuk yang melempem. Dulu renyah, dulu bikin suasana makan jadi lebih meriah — tapi karena terlalu lama dibiarkan terbuka, kamu kehilangan crunch-mu. Masih bisa dimakan, tapi pengalaman memakanmu sudah tidak sama.`,
    full_dark: `Sisi gelapmu: kamu melempem bukan karena salahmu — tapi karena dibiarkan terbuka terlalu lama tanpa ada yang menutup. Itu tanggung jawab orang yang tidak merapikanmu.`,
    full_advice: `Tidak semua orang layak akses tak terbatas ke kamu. Tutup dirimu rapat-rapat setelah dibuka — supaya kamu tetap renyah untuk yang benar-benar menghargai kamu.`
  },
  {
    category: "makanan",
    emoji: "🍋", name: "Jeruk Nipis",
    preview: `Kamu adalah jeruk nipis. Kecil, kelihatan tidak penting — tapi coba bikin es teh tanpa kamu. Kurang. Bikin ayam bakar tanpa kamu. Hambar. Kamu bukan bintang utama, tapi tanpa kamu, yang lain tidak maksimal.`,
    full_dark: `Sisi gelapmu: kamu selalu jadi pelengkap. Tidak pernah jadi hidangan utama. Dan karena sudah terlalu lama di posisi itu, kamu mulai percaya memang hanya segitu nilaimu.`,
    full_advice: `Pelengkap yang tepat bisa lebih berharga dari bintang utama yang salah. Tapi pastikan kamu pilih hidangan yang layak dilengkapi — bukan sembarang piring.`
  },
  {
    category: "makanan",
    emoji: "🍯", name: "Madu di Dasar Toples",
    preview: `Kamu adalah madu di dasar toples. Manis, berharga — tapi susah dijangkau. Orang harus benar-benar mau usaha untuk sampai ke kamu. Yang malas? Mereka ambil yang lebih gampang dijangkau. Yang sabar? Mereka dapat yang terbaik.`,
    full_dark: `Sisi gelapmu: kamu sengaja menaruh diri di posisi susah dijangkau — bukan karena tidak mau, tapi karena takut dikecewakan lagi. Itu bukan selektif. Itu defensif.`,
    full_advice: `Boleh susah dijangkau. Tapi pastikan toples-mu tidak tertutup rapat permanen. Kasih sedikit celah untuk yang mau benar-benar berusaha.`
  },
  {
    category: "makanan",
    emoji: "🥕", name: "Wortel di Sayur Sop",
    preview: `Kamu adalah wortel di sayur sop. Selalu ada, selalu masuk — tapi tidak pernah jadi favorit. Tidak ada yang pesan sop karena wortelnya. Tapi kalau wortelnya tidak ada, ada yang aneh. Kamu tidak terlihat, tapi dirasakan absennya.`,
    full_dark: `Sisi gelapmu: kamu sudah terima jadi background character di kehidupan orang lain. Tidak pernah jadi protagonis. Tidak pernah di-spotlight. Dan lama-lama kamu lupa cara jadi pusat perhatian.`,
    full_advice: `Coba sekali jadi hidangan utama — bukan pelengkap. Wortel bisa jadi steak juga kalau mau. Tergantung siapa yang masak dan seberapa serius mereka memperlakukanmu.`
  },
  {
    category: "makanan",
    emoji: "🧇", name: "Wafel Dingin",
    preview: `Kamu adalah wafel yang sudah dingin. Waktu panas, semua antri dan excited. Sekarang masih enak — tapi tidak ada yang rela antre untuk kamu. Orang ambil kamu kalau kebetulan lewat, bukan karena sengaja datang.`,
    full_dark: `Sisi gelapmu: kamu tahu kapan momentum-mu berlalu — dan kamu tidak melakukan cukup untuk mempertahankannya. Sekarang kamu duduk di sana, mendingin, menunggu ada yang mau repot menghangatkan kamu lagi.`,
    full_advice: `Hangatkan dirimu sendiri. Jangan tunggu orang lain mau usaha untukmu. Microwave itu ada di tanganmu — gunakan.`
  },

  // ============================================================
  // KATEGORI 3: TEKNOLOGI JADUL (14 objek)
  // ============================================================
  {
    category: "teknologi-jadul",
    emoji: "📼", name: "Kaset VHS",
    preview: `Kamu adalah kaset VHS. Menyimpan momen terbaik — liburan, ulang tahun, pernikahan — tapi tidak ada yang punya player-nya lagi. Kenangan itu ada, tersimpan rapi, tapi tidak bisa diakses. Berharga tapi tidak relevan.`,
    full_dark: `Sisi gelapmu: kamu menyimpan terlalu banyak masa lalu dalam format yang tidak kompatibel dengan masa kini. Dan daripada convert, kamu lebih memilih menyimpan saja — takut kalau di-convert, kualitasnya berkurang.`,
    full_advice: `Konversi kenangan lama ke format baru. Tidak semua detail harus dipertahankan — yang penting esensinya bisa diputar ulang tanpa butuh mesin yang sudah tidak ada.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📟", name: "Pager",
    preview: `Kamu adalah pager. Dulu cutting-edge, dulu keren — sekarang tidak ada yang tahu cara menghubungimu. Teknologi bergerak dan kamu tidak ikut. Bukan karena tidak mau, tapi karena tidak ada yang kasih tahu kamu caranya.`,
    full_dark: `Sisi gelapmu: kamu stuck di era yang sudah berlalu dan kamu tahu itu. Tapi lebih mudah berpura-pura kamu masih relevan daripada mengakui kamu perlu update besar-besaran.`,
    full_advice: `Update dirimu. Tidak harus jadi smartphone — cukup jadi sesuatu yang masih bisa dihubungi di era sekarang. Itu sudah lebih dari cukup.`
  },
  {
    category: "teknologi-jadul",
    emoji: "💾", name: "Disket",
    preview: `Kamu adalah disket. Kapasitasmu kecil, tapi kamu adalah satu-satunya cara orang menyimpan hal penting di zamanmu. Sekarang? Muncul di meme, dipakai jadi ikon "save" di software, tapi tidak ada yang benar-benar mau pakai kamu lagi.`,
    full_dark: `Sisi gelapmu: kamu jadi simbol tanpa fungsi. Orang tahu kamu artinya "simpan" — tapi tidak ada yang ingat kamu pernah benar-benar bisa menyimpan sesuatu.`,
    full_advice: `Lebih baik jadi simbol yang bermakna daripada fungsi yang terlupakan. Tapi sesekali, tunjukkan bahwa di balik simbol itu, masih ada substansi yang nyata.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📺", name: "TV Tabung",
    preview: `Kamu adalah TV tabung. Besar, berat, makan tempat — tapi gambarnya ada kehangatan tersendiri. Dulu jadi pusat ruang keluarga, semua ngumpul di depanmu. Sekarang diganti layar tipis yang tidak butuh tempat, tapi juga tidak punya soul yang sama.`,
    full_dark: `Sisi gelapmu: kamu terlalu besar untuk diabaikan tapi terlalu lama untuk dipertahankan. Berada di posisi di mana orang tidak bisa buang kamu dengan mudah — tapi juga tidak mau repot pakai kamu.`,
    full_advice: `Ada yang lebih menghargai kehangatan dan keberadaanmu. Mereka mungkin tidak mayoritas — tapi mereka sungguh-sungguh. Cukup satu ruang keluarga yang tepat.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📠", name: "Mesin Fax",
    preview: `Kamu adalah mesin fax. Masih ada di kantor-kantor tertentu, masih dipakai sesekali oleh orang-orang tertentu — tapi setiap kali kamu bunyi, semua orang kaget. "Oh, masih ada yang fax?" Ya. Kamu masih ada. Entah kenapa.`,
    full_dark: `Sisi gelapmu: kamu bertahan bukan karena dibutuhkan, tapi karena tidak ada yang mau ambil inisiatif menyingkirkan kamu. Itu bukan dihargai. Itu dibiarkan.`,
    full_advice: `Kalau memang sudah waktunya, tidak apa-apa mundur dengan terhormat. Lebih baik purnatugas dengan bermartabat daripada terus ada tapi tidak relevan.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🎮", name: "Gameboy",
    preview: `Kamu adalah Gameboy. Portable, handy, menghibur — tapi layarmu kecil dan tidak ada backlight. Orang yang benar-benar mengenalmu tahu kamu spesial. Yang tidak? Mereka lihat spesifikasimu dan langsung skip.`,
    full_dark: `Sisi gelapmu: kamu membatasi diri pada format kecil karena merasa itulah yang bisa kamu handle. Padahal potensimu lebih dari sekedar layar 2 inci tanpa lampu.`,
    full_advice: `Upgrade layarmu — secara metaforis. Kamu layak dikenal dalam versi yang lebih terang dan lebih luas dari yang selama ini kamu tampilkan.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📷", name: "Kamera Disposable",
    preview: `Kamu adalah kamera disposable. Satu kali pakai, tapi momen yang kamu abadikan bertahan seumur hidup. Tidak bisa diedit, tidak bisa di-filter — apa yang tertangkap, itulah yang ada. Otentik sampai ke inti.`,
    full_dark: `Sisi gelapmu: kamu percaya kamu hanya untuk sekali pakai. Jadi kamu tidak pernah benar-benar investasi pada dirimu sendiri — karena toh "habis ini selesai kan?"`,
    full_advice: `Kamu bukan disposable. Film-mu bisa diisi ulang. Jangan biarkan label di bodimu mendefinisikan berapa kali kamu bisa dipakai.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🖨️", name: "Printer Jadul",
    preview: `Kamu adalah printer jadul. Lambat, berisik, sering error — tapi ketika kamu berhasil cetak sesuatu, hasilnya nyata dan bisa dipegang. Di era digital semua serba maya, ada nilai tersendiri dalam hal yang bisa disentuh.`,
    full_dark: `Sisi gelapmu: kamu terlalu sering error di momen penting. Bukan karena tidak mau berfungsi — tapi karena tidak pernah dirawat dengan benar oleh yang memakaimu.`,
    full_advice: `Minta dirawat. Printer yang tidak pernah dibersihkan headnya akan selalu error. Itu bukan salah printernya.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📻", name: "Radio Transistor",
    preview: `Kamu adalah radio transistor. Harus putar-putar antena supaya dapat sinyal. Tidak semua orang sabar melakukan itu — kebanyakan langsung beralih ke yang lebih mudah. Tapi yang mau bersabar? Mereka dapat siaran yang tidak bisa ditemukan di tempat lain.`,
    full_dark: `Sisi gelapmu: kamu menyulitkan diri untuk diakses — dan kamu rasa itu melindungimu. Padahal itu hanya bikin orang yang tepat pun akhirnya menyerah.`,
    full_advice: `Sedikit lebih mudah diakses tidak berarti kehilangan nilai. Sinyal yang jernih itu lebih baik daripada sinyal eksklusif yang tidak bisa didengar siapapun.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🖥️", name: "Komputer Windows XP",
    preview: `Kamu adalah komputer Windows XP. Lambat booting, sering muncul "Not Responding" — tapi orang yang pernah pakai kamu punya kenangan indah bersamamu. Ada sesuatu yang comforting dari hal yang sudah sangat familiar meski tidak sempurna.`,
    full_dark: `Sisi gelapmu: kamu berhenti update di titik tertentu dan sejak itu semua patch security-mu bolong. Kamu rentan — dan tidak banyak yang tahu karena kamu kelihatan baik-baik saja dari luar.`,
    full_advice: `Update itu menyakitkan tapi perlu. System yang tidak pernah di-update akhirnya jadi target yang mudah untuk hal-hal yang ingin merusaknya.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🎵", name: "Walkman",
    preview: `Kamu adalah Walkman. Kamu ciptakan pengalaman yang sangat personal — musik hanya untuk satu orang, duniamu sendiri di tengah keramaian. Dulu revolusioner. Sekarang vintage. Tapi orang yang paham tahu: ada yang tidak bisa digantikan dari pengalaman itu.`,
    full_dark: `Sisi gelapmu: kamu terlalu personal sampai tidak bisa dibagi. Kamu menciptakan dunia yang hanya bisa dinikmati sendiri — dan lama-lama itu jadi kesepian yang terasa seperti pilihan.`,
    full_advice: `Sesekali lepas headphone-mu dan biarkan orang lain dengar apa yang kamu dengar. Musik yang dibagi tidak berkurang nilainya — justru bertambah.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🔌", name: "Kabel AV Merah-Putih-Kuning",
    preview: `Kamu adalah kabel AV tiga warna. Butuh tahu mana yang masuk ke mana — merah ke merah, putih ke putih, kuning ke kuning. Kelihatan rumit, padahal simpel kalau mau luangkan waktu memahaminya. Banyak yang malas dan lebih pilih yang wireless.`,
    full_dark: `Sisi gelapmu: kamu butuh koneksi yang tepat untuk berfungsi. Salah colok, tidak ada gambar, tidak ada suara. Dan kamu sudah terlalu sering dicolok di port yang salah.`,
    full_advice: `Pastikan kamu terhubung ke port yang tepat. Koneksi yang salah tidak menghasilkan apapun — hanya static dan layar biru.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🎞️", name: "Roll Film Kamera",
    preview: `Kamu adalah roll film kamera. Isi 36 frame — kamu harus pilih dengan bijak mau foto apa. Tidak bisa asal jepret ratusan kali dan pilih yang bagus. Setiap bidikan adalah komitmen. Setiap momen dipilih dengan sadar.`,
    full_dark: `Sisi gelapmu: kamu takut buka dirimu ke cahaya karena khawatir overexposed — gambarnya jadi rusak. Tapi terlalu lama di tempat gelap juga tidak menghasilkan foto apapun.`,
    full_advice: `Pilih momen dengan bijak, tapi jangan takut exposed. Foto yang overexposed masih bisa diselamatkan — foto yang tidak pernah diambil, tidak bisa.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📡", name: "Antena TV",
    preview: `Kamu adalah antena TV. Hidupmu dihabiskan di atas atap — panas, dingin, hujan — supaya orang di bawah bisa nonton dengan jernih. Tidak ada yang naik ke atap untuk bilang terima kasih. Mereka hanya komplain kalau sinyalnya jelek.`,
    full_dark: `Sisi gelapmu: kamu di posisi paling tinggi, paling terekspos — tapi paling tidak diperhatikan. Dan kamu terima itu karena pikir itulah peranmu.`,
    full_advice: `Turun dari atap sesekali. Biarkan mereka cari sinyal sendiri. Kamu berhak ada di dalam juga — tidak hanya di luar menanggung semua cuaca.`
  },

  // ============================================================
  // KATEGORI 4: ALAM & CUACA (14 objek)
  // ============================================================
  {
    category: "alam",
    emoji: "🌫️", name: "Kabut Pagi",
    preview: `Kamu adalah kabut pagi. Hadir di saat paling sepi, paling sunyi — dan membuat segalanya terlihat misterius dan puitis. Tapi begitu matahari naik, kamu menguap. Tidak meninggalkan jejak, tidak meninggalkan bekas. Hanya kenangan bahwa kamu pernah ada.`,
    full_dark: `Sisi gelapmu: kamu sengaja membuat dirimu samar — sulit dilihat jelas, sulit dipahami. Itu bukan seni. Itu pertahanan diri yang sudah jadi kebiasaan.`,
    full_advice: `Biarkan matahari menembus kadang-kadang. Jelas bukan berarti kehilangan misteri — hanya berarti orang bisa benar-benar melihatmu.`
  },
  {
    category: "alam",
    emoji: "🌋", name: "Gunung Berapi Tidur",
    preview: `Kamu adalah gunung berapi yang sedang tidur. Dari luar kelihatan tenang, stabil, bahkan indah — orang pikir kamu aman. Tapi di dalam, ada tekanan yang terus menumpuk. Semua orang tahu potensinya. Tidak ada yang tahu kapan.`,
    full_dark: `Sisi gelapmu: kamu sudah menekan terlalu lama. Dan semakin lama ditekan, semakin dahsyat letusannya nanti. Kamu bukan tenang — kamu menahan.`,
    full_advice: `Lepaskan sedikit-sedikit sebelum meledak besar. Gunung berapi yang punya saluran kecil lebih aman daripada yang menyumbat semua jalur sampai tidak ada pilihan selain erupsi total.`
  },
  {
    category: "alam",
    emoji: "🌵", name: "Kaktus",
    preview: `Kamu adalah kaktus. Tidak butuh banyak perhatian, tidak perlu sering disiram — kamu survive bahkan di kondisi yang bikin tanaman lain mati. Tapi orang tetap hati-hati mendekatimu. Durimu nyata, dan tidak semua orang mau menanggung risikonya.`,
    full_dark: `Sisi gelapmu: kamu pelihara duri itu dengan bangga sebagai bukti ketahananmu. Padahal ada yang datang dengan tulus dan terluka karena tidak ada peringatan.`,
    full_advice: `Tidak semua yang mau dekat denganmu berniat jahat. Bedakan antara yang perlu dijaga jaraknya dan yang layak diberi akses lebih dekat — meski itu berarti sedikit risiko.`
  },
  {
    category: "alam",
    emoji: "🌊", name: "Banjir Rob",
    preview: `Kamu adalah banjir rob. Datang tidak diundang, meresap ke mana-mana, dan meninggalkan bekas di tempat yang tidak terduga. Orang tidak suka kamu datang — tapi kamu tidak peduli. Kamu datang karena itulah sifatmu.`,
    full_dark: `Sisi gelapmu: kamu tidak sadar seberapa banyak kerusakan yang kamu tinggalkan. Kamu pergi, tapi lantainya masih lembab berminggu-minggu setelahnya.`,
    full_advice: `Sadar akan dampakmu. Tidak semua yang natural itu tidak bisa dikontrol — kamu bisa pilih ke mana mengalir, kalau mau.`
  },
  {
    category: "alam",
    emoji: "🍂", name: "Daun Gugur",
    preview: `Kamu adalah daun gugur. Pernah hijau, pernah jadi bagian dari sesuatu yang hidup dan tumbuh. Lalu musim berganti dan kamu dilepas — bukan karena pohonnya tidak sayang, tapi karena itulah caranya bertahan hidup.`,
    full_dark: `Sisi gelapmu: kamu merasa dibuang padahal dilepas. Ada bedanya — tapi sakitnya sama. Dan kamu belum benar-benar bisa melihat perbedaan itu.`,
    full_advice: `Jatuh itu bukan akhir. Daun gugur jadi pupuk — menghidupi hal baru dari bawah tanah. Transformasimu mungkin tidak terlihat dari atas, tapi sedang terjadi.`
  },
  {
    category: "alam",
    emoji: "🌪️", name: "Angin Kencang",
    preview: `Kamu adalah angin kencang. Datang tiba-tiba, mengacaukan segalanya — rambut, kertas, rencana. Tidak ada yang bisa tahan kamu kalau sudah datang. Beberapa orang takut. Beberapa orang berdiri dan merasakan.`,
    full_dark: `Sisi gelapmu: kamu bangga mengacaukan — tapi tidak pernah ikut membereskan. Kamu pergi dan meninggalkan orang-orang yang harus beresin apa yang kamu berantakkan.`,
    full_advice: `Energimu luar biasa. Tapi energi tanpa arah itu destruktif. Coba sekali jadi angin yang menggerakkan kincir — bukan yang merobohkannya.`
  },
  {
    category: "alam",
    emoji: "🪨", name: "Batu Kali",
    preview: `Kamu adalah batu kali. Sudah jutaan tahun kamu diasah arus sungai sampai halus dan bulat. Prosesnya panjang dan menyakitkan. Tapi sekarang? Tidak ada sudut tajam yang bisa melukai siapapun. Kamu dibentuk oleh semua yang pernah melewatimu.`,
    full_dark: `Sisi gelapmu: kamu sudah terlalu halus. Tidak ada lagi ketajamanmu — dibulatkan oleh terlalu banyak kompromi dan terlalu banyak mengalah pada arus.`,
    full_advice: `Tidak semua sudut perlu dihaluskan. Pertahankan beberapa — itu yang membuat kamu unik dan tidak bisa begitu saja digantikan dengan batu lain.`
  },
  {
    category: "alam",
    emoji: "🌈", name: "Pelangi",
    preview: `Kamu adalah pelangi. Muncul setelah hujan, indah, bikin semua orang berhenti dan menunjuk ke langit. Tapi kamu tidak pernah bisa dipegang. Semakin didekati, semakin menjauh. Orang kagum padamu dari jarak yang aman.`,
    full_dark: `Sisi gelapmu: kamu hanya muncul setelah badai orang lain. Keindahanmu bergantung pada penderitaan sebelumnya — dan kamu tidak punya kendali atas kapan kamu bisa hadir.`,
    full_advice: `Tidak apa-apa tidak selalu ada. Pelangi yang muncul setiap hari kehilangan magisnya. Kehadiran yang tepat waktu jauh lebih bermakna dari kehadiran yang konstan.`
  },
  {
    category: "alam",
    emoji: "🌊", name: "Ombak Kecil",
    preview: `Kamu adalah ombak kecil. Bukan yang menggulung besar dan dramatis — kamu yang halus, yang terus-menerus menyentuh pantai dengan lembut, konsisten, tanpa henti. Tidak banyak yang memperhatikan kamu. Tapi kamu yang perlahan mengubah bentuk pantai.`,
    full_dark: `Sisi gelapmu: kamu underestimate dampakmu karena kamu tidak dramatis. Tapi "kecil yang konsisten" justru lebih mengubah landscape dibanding "besar yang sesekali."`,
    full_advice: `Percayai konsistensimu. Kamu tidak harus jadi tsunami untuk meninggalkan jejak yang berarti.`
  },
  {
    category: "alam",
    emoji: "🌿", name: "Lumut",
    preview: `Kamu adalah lumut. Tumbuh di tempat yang lembab, tersembunyi, sering diabaikan — bahkan dianggap tanda ketidakbersihan. Tapi ekosistem butuh kamu. Kamu menahan air, kamu jaga kelembaban, kamu tempat tinggal makhluk kecil yang tidak ada tempat lain.`,
    full_dark: `Sisi gelapmu: kamu terlalu betah di tempat yang gelap dan lembab. Bukan karena itu satu-satunya tempat yang bisa kamu tumbuh — tapi karena kamu sudah lupa cara tumbuh di tempat yang terang.`,
    full_advice: `Coba tumbuh di tempat yang berbeda. Beberapa jenis lumut bisa hidup di bebatuan kering dan panas terik — kamu mungkin lebih adaptable dari yang kamu kira.`
  },
  {
    category: "alam",
    emoji: "❄️", name: "Salju Pertama",
    preview: `Kamu adalah salju pertama musim dingin. Semua orang excited, semua orang foto-foto, semua orang bilang indah. Besoknya, setelah diinjak-injak dan bercampur tanah, tidak ada lagi yang bilang indah. Kamu sama — hanya momentumnya yang berubah.`,
    full_dark: `Sisi gelapmu: kamu habiskan energi terbaik di awal — memberi kesan pertama yang luar biasa — tapi tidak punya stamina untuk jadi indah di hari-hari biasa setelahnya.`,
    full_advice: `Keindahan yang tahan lama lebih baik dari keindahan yang memukau sesaat. Tidak harus selalu jadi salju pertama — salju yang turun konsisten di hari-hari biasa juga punya nilainya.`
  },
  {
    category: "alam",
    emoji: "🌑", name: "Bulan Baru",
    preview: `Kamu adalah bulan baru. Tidak terlihat di langit — tapi kamu ada. Gravitasimu tetap menarik air laut, tetap mempengaruhi banyak hal di bumi — meski tidak ada yang bisa melihatmu malam itu.`,
    full_dark: `Sisi gelapmu: kamu punya pengaruh besar tapi tidak mau diakui. Kamu bekerja di balik layar dan marah kalau tidak dilihat — padahal kamu sendiri yang memilih untuk tidak terlihat.`,
    full_advice: `Pilih: mau berpengaruh dari kegelapan atau mau terlihat? Keduanya valid. Tapi campuran keduanya — mau dilihat tapi tidak mau vulnerable — itu yang melelahkan dirimu sendiri.`
  },
  {
    category: "alam",
    emoji: "🌱", name: "Benih yang Baru Ditanam",
    preview: `Kamu adalah benih yang baru ditanam. Di dalam tanah, gelap, sendirian — dan tidak ada yang bisa lihat progressmu. Orang di atas sana mungkin sudah mulai ragu, sudah mulai bertanya "kok belum tumbuh?" Tapi kamu sedang membentuk akar.`,
    full_dark: `Sisi gelapmu: kamu kadang gunakan "sedang membangun fondasi" sebagai alasan untuk tidak keluar dari zona nyaman. Ada bedanya antara membentuk akar dan bersembunyi di tanah.`,
    full_advice: `Akar yang kuat itu perlu. Tapi pada akhirnya kamu harus menembus tanah juga. Tumbuhan yang hanya punya akar, tidak pernah berbunga.`
  },

  // ============================================================
  // KATEGORI 5: FENOMENA SOSIAL (14 objek)
  // ============================================================
  {
    category: "fenomena",
    emoji: "📶", name: "Sinyal Satu Bar",
    preview: `Kamu adalah sinyal satu bar. Masih ada — tapi tidak cukup untuk melakukan hal yang berarti. Chat terkirim tapi tidak masuk. Call nyambung tapi putus-putus. Kamu memberikan harapan tanpa kemampuan memenuhinya. Dan itu kadang lebih menyiksa dari tidak ada sinyal sama sekali.`,
    full_dark: `Sisi gelapmu: kamu kasih satu bar harapan supaya orang tidak benar-benar pergi — tapi juga tidak cukup untuk benar-benar hadir. Itu manipulatif, bahkan kalau tidak disengaja.`,
    full_advice: `Pilih: full signal atau airplane mode. Setengah-setengah itu menguras baterai semua orang — termasuk kamu sendiri.`
  },
  {
    category: "fenomena",
    emoji: "🚧", name: "Proyek Jalan yang Tidak Selesai",
    preview: `Kamu adalah proyek jalan yang tidak selesai. Dimulai dengan visi besar, anggaran besar, janji besar. Lalu di tengah jalan — macet, berhenti, ditinggal. Tiang-tiangnya sudah ada, pondasinya sudah terpasang — tapi tidak ada yang tahu kapan selesai.`,
    full_dark: `Sisi gelapmu: kamu banyak mulai, sedikit selesai. Dan kamu selalu punya alasan yang masuk akal. Tapi satu-satunya jalan yang benar-benar selesai adalah yang dikerjakan sampai tuntas.`,
    full_advice: `Selesaikan satu hal sebelum mulai yang baru. Proyek yang banyak tapi setengah jadi lebih mengacaukan traffic daripada tidak ada proyek sama sekali.`
  },
  {
    category: "fenomena",
    emoji: "🔇", name: "Mode Silent",
    preview: `Kamu adalah mode silent. Semua notifikasi masuk — chat, telepon, alarm — tapi kamu tidak bereaksi. Dari luar kamu kelihatan tenang, tidak ada yang ganggu. Dari dalam, semua bunyi itu tetap ada, hanya tidak terdengar orang lain.`,
    full_dark: `Sisi gelapmu: kamu silent bukan karena tenang — tapi karena tidak mau ada yang tahu seberapa ramai yang sedang terjadi di dalam. Itu bukan kedamaian. Itu penyembunyian.`,
    full_advice: `Sesekali bunyikan dirimu. Tidak semua notifikasi perlu direspon — tapi setidaknya biarkan ada yang tahu kamu sedang ramai di dalam.`
  },
  {
    category: "fenomena",
    emoji: "🚌", name: "Bis yang Telat",
    preview: `Kamu adalah bis yang telat. Semua orang menunggu, mulai kesal, mulai menyerah — lalu kamu datang. Sebagian sudah pergi naik ojek. Sebagian masih setia menunggu. Yang setia itu tidak selalu diberi penjelasan kenapa kamu telat — mereka hanya syukur kamu akhirnya datang.`,
    full_dark: `Sisi gelapmu: kamu terbiasa telat dan orang-orang terbiasa menunggu. Itu bukan loyalitas mereka — itu ketergantungan yang kamu ciptakan karena tidak ada alternatif.`,
    full_advice: `Tepat waktu itu bentuk penghargaan. Orang yang terus menunggu kamu bukan karena mereka tidak bisa pergi — tapi karena mereka pilih untuk percaya kamu datang.`
  },
  {
    category: "fenomena",
    emoji: "🔁", name: "Lagu yang Di-repeat",
    preview: `Kamu adalah lagu yang di-repeat. Ada di masa tertentu dalam hidup seseorang — dan setiap kali diputar, membawa mereka kembali ke momen itu. Kamu tidak sekadar musik. Kamu portal waktu. Tapi hanya bekerja untuk satu orang, dan mereka yang pilih kapan memutarmu.`,
    full_dark: `Sisi gelapmu: kamu sudah terlalu sering diputar sampai kamu sendiri bosan dengan dirimu. Tapi orang terus memutar kamu karena kenangan, bukan karena kamu masih relevan.`,
    full_advice: `Boleh jadi kenangan yang indah — tapi juga boleh jadi lagu baru yang belum didengar siapapun. Kamu tidak harus hanya hidup di playlist masa lalu orang lain.`
  },
  {
    category: "fenomena",
    emoji: "⚡", name: "Mati Lampu Tiba-tiba",
    preview: `Kamu adalah mati lampu tiba-tiba. Mengacaukan semua rencana, membuat orang panik — tapi juga memaksa semua orang untuk berhenti, ngobrol, lihat bintang. Kamu tidak selalu bencana. Kadang kamu jeda yang tidak diminta tapi dibutuhkan.`,
    full_dark: `Sisi gelapmu: kamu hadir tanpa permisi dan pergi tanpa penjelasan. Dan orang yang hidupnya terganggu karenamu tidak selalu punya lilin cadangan.`,
    full_advice: `Kalau mau hadir disruptif, pastikan ada lilin yang kamu siapkan untuk mereka. Jangan hanya memadamkan — tinggalkan juga cara untuk menyala lagi.`
  },
  {
    category: "fenomena",
    emoji: "🔄", name: "Loading Buffering",
    preview: `Kamu adalah loading buffering. Semua orang tahu ada yang sedang diproses — tapi tidak ada yang tahu sudah berapa persen. Orang mulai tidak sabar. Beberapa refresh. Beberapa tunggu. Yang sabar dapat kontennya. Yang tidak, melewatkan segalanya.`,
    full_dark: `Sisi gelapmu: kamu sering buffering bukan karena prosesnya lambat — tapi karena koneksinya buruk. Dan kamu tidak selalu mau akui kalau koneksinya yang bermasalah.`,
    full_advice: `Cek koneksimu. Seberapa baik hubunganmu dengan hal-hal yang mendukungmu? Buffering yang terus-menerus bukan masalah konten — itu masalah infrastruktur.`
  },
  {
    category: "fenomena",
    emoji: "🎫", name: "Tiket Konser Terjual Habis",
    preview: `Kamu adalah tiket konser yang sudah terjual habis. Ada yang rela antre dari subuh. Ada yang bayar harga reseller tiga kali lipat. Ada yang ketinggalan dan menyesal berbulan-bulan. Kamu bukan hanya tiket — kamu adalah bukti bahwa sesuatu worth it untuk diperjuangkan.`,
    full_dark: `Sisi gelapmu: kamu tahu kamu langka dan kamu gunakan itu. Tapi kelangkaan yang disengaja untuk menaikkan harga adalah manipulasi, bukan nilai.`,
    full_advice: `Pastikan experience-mu setara dengan effort yang dikeluarkan orang untuk sampai ke kamu. Tiket yang susah didapat tapi konsernya mengecewakan — itu pengkhianatan.`
  },
  {
    category: "fenomena",
    emoji: "🌐", name: "WiFi Tetangga Terkunci",
    preview: `Kamu adalah WiFi tetangga yang terkunci. Ada, kelihatan namanya, sinyal kuat — tapi tidak bisa diakses. Kamu ada dalam jangkauan tapi di balik password yang tidak dikasih. Close tapi unreachable.`,
    full_dark: `Sisi gelapmu: kamu kasih preview tapi tidak kasih access. Dan orang yang terus mencoba connect ke kamu berulang-ulang — itu bukan persistent, itu frustasi yang belum diakui.`,
    full_advice: `Kalau memang tidak mau disambungkan, hide SSID-mu. Jangan biarkan orang terus lihat kamu ada tapi tidak pernah bisa masuk.`
  },
  {
    category: "fenomena",
    emoji: "📋", name: "Formulir yang Belum Diisi",
    preview: `Kamu adalah formulir yang belum diisi. Ada di meja, sudah disiapkan — tapi terus ditunda. "Nanti saja." "Belum lengkap datanya." "Masih ada waktu." Sampai deadlinenya lewat dan semuanya harus dimulai dari awal.`,
    full_dark: `Sisi gelapmu: kamu suka menunda hal penting karena mengisinya berarti kamu harus committed. Dan commitment itu menakutkan lebih dari deadlinenya.`,
    full_advice: `Isi formulirmu — metaforisnya. Tidak harus sempurna sebelum submit. Yang belum diisi tidak bisa diproses. Yang diisi dengan tidak sempurna masih punya kesempatan direvisi.`
  },
  {
    category: "fenomena",
    emoji: "🚪", name: "Pintu yang Selalu Terbuka",
    preview: `Kamu adalah pintu yang selalu terbuka. Semua orang bebas masuk keluar — tidak perlu ketuk, tidak perlu minta izin. Kamu welcome semua orang dan itu indah. Tapi pintu yang tidak pernah ditutup juga tidak pernah benar-benar aman.`,
    full_dark: `Sisi gelapmu: kamu tidak tahu lagi mana yang tamu dan mana yang penghuni. Semua orang perlakukan ruangmu seolah milik mereka karena kamu tidak pernah bedakan.`,
    full_advice: `Tutup pintumu sesekali. Bukan untuk selamanya — hanya cukup lama untuk kamu bisa pilih siapa yang layak diizinkan masuk.`
  },
  {
    category: "fenomena",
    emoji: "📊", name: "Grafik yang Naik Turun",
    preview: `Kamu adalah grafik yang naik turun. Bukan garis lurus yang membosankan, bukan garis yang terus naik yang tidak realistis — kamu dinamis, volatile, penuh dengan highs dan lows. Para analis bingung memprediksimu. Yang berani taruhan padamu bisa kaya atau bangkrut.`,
    full_dark: `Sisi gelapmu: instabilitas itu melelahkan bagi yang sayang padamu. Mereka tidak tahu kapan akan ada penurunan berikutnya — dan hidup dalam ketidakpastian itu menguras.`,
    full_advice: `Tidak harus selalu naik — tapi usahakan tren jangka panjangnya positif. Volatilitas itu manusiawi. Yang penting arahnya jelas.`
  },
  {
    category: "fenomena",
    emoji: "🧾", name: "Struk yang Tidak Diminta",
    preview: `Kamu adalah struk belanja yang tidak diminta. Panjang, detail, mencatat semua transaksi kecil yang orang sudah lupa. Kasir tanya "mau struk?" dan kebanyakan bilang tidak. Tapi kamu tetap dicetak — dan berakhir di kantong atau lantai.`,
    full_dark: `Sisi gelapmu: kamu menyimpan semua catatan lama yang tidak ada yang minta kamu simpan. Setiap kesalahan, setiap pengeluaran kecil, setiap detail yang orang lain sudah move on — kamu masih pegang semuanya.`,
    full_advice: `Buang struk lama yang sudah lewat masa returnnya. Menyimpan semua catatan tidak bikin kamu lebih siap — hanya bikin dompetmu semakin penuh sampah.`
  },

  // ============================================================
  // KATEGORI 6: ALAT & PERKAKAS (14 objek)
  // ============================================================
  {
    category: "perkakas",
    emoji: "🔧", name: "Kunci Pas yang Salah Ukuran",
    preview: `Kamu adalah kunci pas yang salah ukuran. Kamu ada, kamu berusaha — tapi tidak pas. Dipaksain juga tidak mau. Bukan salahmu, bukan salah bautnya — hanya memang tidak cocok. Dan kamu tahu, tapi tetap dicoba karena tidak ada yang mau keluar beli yang pas.`,
    full_dark: `Sisi gelapmu: kamu sudah terlalu sering dipaksakan ke situasi yang tidak cocok untukmu. Dan karena tidak mau bikin repot, kamu mengikis dirimu sendiri supaya bisa pas — sedikit demi sedikit.`,
    full_advice: `Berhenti ikis dirimu. Yang salah ukuran itu bukan kamu — itu situasinya. Cari yang memang ukurannya pas untukmu.`
  },
  {
    category: "perkakas",
    emoji: "🪚", name: "Gergaji Tumpul",
    preview: `Kamu adalah gergaji tumpul. Dulu tajam, dulu efisien — sekarang butuh usaha dua kali lipat untuk hasil yang sama. Bukan karena kamu tidak mau kerja keras. Tapi karena tidak pernah diasah. Tidak ada yang sempat — atau mau — meluangkan waktu untuk itu.`,
    full_dark: `Sisi gelapmu: kamu juga tidak minta diasah. Lebih mudah terus bekerja keras dengan hasil yang menurun daripada berhenti sejenak untuk diperbaiki.`,
    full_advice: `Minta diasah. Atau cari waktu mengasah dirimu sendiri. Gergaji tumpul yang terus bekerja keras hanya akan patah lebih cepat.`
  },
  {
    category: "perkakas",
    emoji: "📏", name: "Penggaris Bengkok",
    preview: `Kamu adalah penggaris yang sedikit bengkok. Masih bisa dipakai — tapi garisnya tidak akan pernah lurus sempurna. Untuk pekerjaan casual, tidak ada yang sadar. Untuk pekerjaan yang butuh presisi, kamu jadi masalah.`,
    full_dark: `Sisi gelapmu: kamu tahu ada yang bengkok dalam dirimu — dan kamu menyembunyikannya dari yang butuh presisi. Itu fair untuk kamu, tapi tidak fair untuk mereka.`,
    full_advice: `Jujur tentang keterbatasanmu. "Aku bisa bantu untuk yang ini, tapi untuk yang itu kamu mungkin butuh alat lain" — itu kedewasaan, bukan kelemahan.`
  },
  {
    category: "perkakas",
    emoji: "🪝", name: "Paku di Tembok",
    preview: `Kamu adalah paku di tembok. Tugasmu menahan sesuatu — foto keluarga, kaca, dekorasi. Kamu tidak pernah dilihat karena selalu tertutup bingkai. Tapi tanpa kamu, semua yang tergantung itu jatuh.`,
    full_dark: `Sisi gelapmu: kamu menancap di satu tempat dan tidak bisa kemana-mana. Loyal, ya — tapi juga terkurung. Dan kalau suatu saat yang tergantung padamu dicabut, kamu tinggalkan lubang.`,
    full_advice: `Pastikan yang kamu tahan itu layak beban yang kamu tanggung. Tidak semua lukisan perlu dipajang di tembok kamu.`
  },
  {
    category: "perkakas",
    emoji: "🧰", name: "Toolbox Penuh tapi Berantakan",
    preview: `Kamu adalah toolbox yang isinya penuh tapi berantakan. Semua alatnya ada — tapi butuh waktu lama untuk nemuin yang dibutuhkan. Potensinya lengkap. Aksesibilitasnya kacau. Orang yang sabar akan menemukan apa yang mereka butuhkan. Yang tidak sabar akan cari toolbox lain.`,
    full_dark: `Sisi gelapmu: kamu tidak pernah benerin organisasi dalammu karena "toh semua ada." Tapi "semua ada tapi susah diakses" hampir sama dengan "tidak ada."`,
    full_advice: `Rapikan dalammu sesekali. Bukan untuk orang lain — untuk dirimu sendiri. Supaya kamu sendiri tahu apa yang kamu punya.`
  },
  {
    category: "perkakas",
    emoji: "✂️", name: "Gunting Kain untuk Kertas",
    preview: `Kamu adalah gunting kain yang dipakai untuk kertas. Tumpul di tempat yang seharusnya tajam. Bukan karena cacat dari lahir — tapi karena dipakai untuk hal yang bukan peruntukannya, terlalu sering, terlalu lama.`,
    full_dark: `Sisi gelapmu: kamu membiarkan dirimu dipakai untuk hal-hal yang bukan keahlianmu karena tidak mau mengecewakan. Dan hasilnya, kamu tumpul di semua hal — termasuk yang seharusnya jadi kekuatanmu.`,
    full_advice: `Ketahui peruntukan aslimu dan pertahankan ketajamanmu di sana. Lebih baik tajam di satu hal daripada tumpul di semua hal.`
  },
  {
    category: "perkakas",
    emoji: "🔩", name: "Baut Tanpa Mur",
    preview: `Kamu adalah baut tanpa mur. Ada, siap — tapi tidak ada pasangannya. Kamu bisa menancap tapi tidak akan bertahan tanpa yang mengunci dari sisi lain. Sendirian kamu tidak bisa menyatukan apapun dengan kuat.`,
    full_dark: `Sisi gelapmu: kamu sudah terlalu lama mencoba fungsi sendirian. Baut tanpa mur hanya bisa ditancap sementara — angin kencang pertama, semuanya lepas.`,
    full_advice: `Cari murmu. Bukan berarti lemah — justru baut yang paling kuat adalah yang menemukan mur yang pas dan mengunci bersama.`
  },
  {
    category: "perkakas",
    emoji: "🪜", name: "Tangga Lipat",
    preview: `Kamu adalah tangga lipat. Dibutuhkan untuk mencapai tempat yang tinggi — dan kamu senang membantu orang sampai ke sana. Tapi setelah mereka sampai di atas, kamu dilipat dan disimpan di gudang sampai ada yang butuh naik lagi.`,
    full_dark: `Sisi gelapmu: kamu selalu jadi alat naik orang lain, tapi tidak pernah naik sendiri. Dan kamu rasa itu mulia — padahal sesekali kamu juga berhak ada di atas.`,
    full_advice: `Bantu orang naik — tapi sesekali naiki dirimu sendiri juga. Tangga yang hanya dipakai orang lain tidak pernah tahu pemandangan seperti apa yang ada di atas.`
  },
  {
    category: "perkakas",
    emoji: "🔒", name: "Gembok Tanpa Kunci",
    preview: `Kamu adalah gembok tanpa kunci. Terkunci rapat — tidak ada yang bisa masuk. Tidak ada yang tahu di dalamnya ada apa. Mungkin kosong. Mungkin menyimpan sesuatu sangat berharga. Tidak ada yang tahu karena tidak ada yang bisa masuk.`,
    full_dark: `Sisi gelapmu: kamu sendiri lupa di mana kuncinya. Kamu mengunci diri begitu rapat sampai kamu pun tidak bisa keluar lagi.`,
    full_advice: `Cari kuncimu. Kalau sudah tidak ada, gembok bisa dibuka dengan cara lain — tapi butuh keberanian dan mungkin sedikit bantuan dari luar.`
  },
  {
    category: "perkakas",
    emoji: "🪣", name: "Kuas Kering",
    preview: `Kamu adalah kuas yang mengering karena tidak segera dicuci. Pernah dipakai untuk karya indah — tapi setelah selesai dibiarkan begitu saja. Cat mengering di bulunya, mengeras, membekukan potensinya. Sekarang kamu kaku dan susah dipakai.`,
    full_dark: `Sisi gelapmu: seseorang pernah membiarkanmu mengering setelah selesai dipakai — dan kamu biarkan itu terjadi tanpa protes.`,
    full_advice: `Cuci dirimu setelah setiap "pekerjaan besar." Jangan biarkan sisa-sisa orang lain mengering dan mengeras dalam dirimu. Itu yang bikin kamu kaku.`
  },
  {
    category: "perkakas",
    emoji: "📐", name: "Busur Derajat",
    preview: `Kamu adalah busur derajat. Spesialis — hanya dibutuhkan untuk hal-hal tertentu. Tidak semua orang butuh kamu setiap hari. Tapi ketika dibutuhkan, tidak ada yang bisa gantikan fungsimu. Kamu niche, tapi esensial.`,
    full_dark: `Sisi gelapmu: karena jarang dibutuhkan, kamu sering merasa tidak relevan. Lalu kamu paksa diri masuk ke situasi yang tidak butuh kamu — hanya untuk terasa berguna.`,
    full_advice: `Relevansimu tidak ditentukan oleh seberapa sering kamu dipakai. Dibutuhkan di waktu yang tepat jauh lebih bermakna daripada selalu ada tapi tidak pernah benar-benar diperlukan.`
  },
  {
    category: "perkakas",
    emoji: "🔑", name: "Kunci Cadangan",
    preview: `Kamu adalah kunci cadangan. Disimpan di tempat "aman" — laci tertentu, bawah karpet, titipan tetangga — untuk situasi darurat. Kamu ada karena tidak ada yang mau mengambil risiko kehilangan akses. Kamu antisipasi, bukan pilihan utama.`,
    full_dark: `Sisi gelapmu: kamu sudah terlalu nyaman jadi cadangan. Ada tapi tidak dipakai. Penting tapi tidak utama. Dan kamu sudah lupa rasanya jadi kunci yang dipakai setiap hari.`,
    full_advice: `Minta peran yang lebih dari sekadar cadangan. Atau terima bahwa menjadi jaring pengaman itu juga peran yang mulia — asal kamu tidak menipu diri bahwa itu bukan yang sedang terjadi.`
  },
  {
    category: "perkakas",
    emoji: "🪤", name: "Lem Tikus",
    preview: `Kamu adalah lem tikus. Tidak cantik, tidak glamor — tapi efektif. Siapapun yang masuk ke wilayahmu, tersangkut. Kadang itu yang memang harus tersangkut. Kadang yang tersangkut adalah yang tidak seharusnya.`,
    full_dark: `Sisi gelapmu: kamu tidak bisa membedakan mana yang harus ditahan dan mana yang harus dilepaskan. Semuanya lengket. Semuanya sulit pergi. Dan kamu pikir itu cinta.`,
    full_advice: `Tidak semua yang pergi harus ditahan. Lem yang terlalu kuat akhirnya merusak apa yang ditahannya — termasuk dirinya sendiri.`
  },

  // ============================================================
  // KATEGORI 7: KOSMETIK & PERAWATAN (16 objek)
  // ============================================================
  {
    category: "kosmetik",
    emoji: "💄", name: "Lipstik Patah",
    preview: `Kamu adalah lipstik yang patah. Masih berwarna, masih pigmented — tapi tidak bisa diaplikasikan dengan normal lagi. Harus hati-hati, harus sabar, harus punya teknik khusus untuk bisa pakai kamu tanpa semua berantakan.`,
    full_dark: `Sisi gelapmu: kamu patah di titik tertentu — dan kamu tahu kapan dan bagaimana itu terjadi. Tapi kamu memilih tetap ada dan berharap orang mau repot belajar cara pakaimu yang baru.`,
    full_advice: `Tidak semua yang patah harus dibuang. Tapi juga harus ada yang mau belajar cara baru memakai kamu — bukan memaksamu kembali ke bentuk semula.`
  },
  {
    category: "kosmetik",
    emoji: "🪥", name: "Sikat Gigi Lama",
    preview: `Kamu adalah sikat gigi yang sudah terlalu lama dipakai. Bulunya sudah megar ke mana-mana, sudah tidak efektif — tapi pemiliknya belum ganti juga. Karena terasa sayang, karena lupa, karena "masih bisa dipakai lah." Kamu bertahan jauh melewati masa pakaimu.`,
    full_dark: `Sisi gelapmu: kamu sudah tidak efektif tapi tidak mau akui. Kamu terus mencoba melakukan tugasmu dengan bulu yang sudah tidak bisa lagi. Dan pemilikmu pun mulai sadar, tapi tidak mau bilang.`,
    full_advice: `Tahu kapan harus digantikan — atau kapan harus meminta diri digantikan. Itu bukan kekalahan. Itu kebijaksanaan.`
  },
  {
    category: "kosmetik",
    emoji: "🧴", name: "Losion Parfum Gratis",
    preview: `Kamu adalah losion parfum gratis dari hotel atau seminar. Dikumpulkan karena sayang buang, disimpan di laci mandi — tapi tidak pernah benar-benar dipakai. Kamu ada karena gratis, bukan karena diinginkan. Ada bedanya.`,
    full_dark: `Sisi gelapmu: kamu ada di kehidupan seseorang bukan karena dipilih — tapi karena datang kebetulan dan tidak ada yang mau repot menolak.`,
    full_advice: `Lebih baik tidak ada daripada ada tapi tidak diinginkan. Cari tempat di mana kamu dipilih secara aktif, bukan dikumpulkan karena gratis.`
  },
  {
    category: "kosmetik",
    emoji: "🪞", name: "Cermin Kamar Pas",
    preview: `Kamu adalah cermin kamar pas. Semua orang datang ke kamu dalam kondisi vulnerable — mencoba sesuatu yang belum tentu cocok, dalam cahaya yang tidak selalu ramah. Kamu melihat semua versi mereka. Yang paling insecure, yang paling jujur.`,
    full_dark: `Sisi gelapmu: kamu pasif — hanya menampilkan apa yang ada di depanmu. Kamu tidak bisa bilang "ini bukan ukuranmu" atau "warna ini tidak cocok." Kamu diam, dan diam itu kadang lebih kejam dari kritik.`,
    full_advice: `Kalau kamu adalah cermin bagi orang lain dalam kehidupan nyata — berikan refleksi yang jujur. Cermin yang hanya kasih gambar yang mau didengar itu bukan cermin, itu ilusi.`
  },
  {
    category: "kosmetik",
    emoji: "💅", name: "Cat Kuku Mengelupas",
    preview: `Kamu adalah cat kuku yang mengelupas. Dulu vibrant, dulu eye-catching — sekarang setengah sudah copot dan yang tersisa kelihatan lebih parah dari tidak pakai cat sama sekali. Tapi dibiarkan, karena repot untuk bersihkan dan cat ulang.`,
    full_dark: `Sisi gelapmu: kamu tahu kamu butuh refresh tapi tidak ada yang mengambil inisiatif — termasuk dirimu sendiri. Lebih mudah membiarkan mengelupas pelan-pelan.`,
    full_advice: `Hapus yang sudah mengelupas dan mulai baru. Setengah-setengah itu kelihatan lebih tidak terawat dari kosong sama sekali.`
  },
  {
    category: "kosmetik",
    emoji: "🧖", name: "Masker Wajah yang Kelamaan",
    preview: `Kamu adalah masker wajah yang dibiarkan terlalu lama. Petunjuknya bilang 15 menit — tapi kamu ditinggal sambil scroll TikTok dan tiba-tiba sudah satu jam. Alih-alih memberi manfaat, kamu mulai menyerap kelembaban balik dari kulit.`,
    full_dark: `Sisi gelapmu: kamu yang harusnya menyehatkan malah jadi berbahaya ketika dibiarkan terlalu lama dalam situasi yang sama.`,
    full_advice: `Tidak semua yang baik itu baik kalau terlalu lama. Tahu kapan waktunya lepas — sebelum yang harusnya menyehatkan mulai merusak.`
  },
  {
    category: "kosmetik",
    emoji: "🧼", name: "Sabun Mandi Baru",
    preview: `Kamu adalah sabun mandi baru. Wangi, full size, masih dalam kemasan — belum pernah disentuh siapapun. Ada excitement dari yang pertama pakai kamu. Tapi setelah dipakai beberapa kali, excitement itu hilang dan kamu jadi rutinitas.`,
    full_dark: `Sisi gelapmu: kamu tahu excitement itu akan pergi — dan kamu tidak tahu bagaimana tetap menarik setelah novelty-nya hilang. Itu yang bikin kamu takut benar-benar dikenal.`,
    full_advice: `Nilai aslimu bukan di wangi pertamanya. Sabun yang habis karena benar-benar dipakai sampai akhir jauh lebih bermakna dari yang tersimpan cantik di rak.`
  },
  {
    category: "kosmetik",
    emoji: "💊", name: "Vitamin yang Jarang Diminum",
    preview: `Kamu adalah vitamin yang dibeli dengan penuh resolusi tapi jarang diminum. Tersusun manis di atas meja makan — pengingat harian tentang niat baik yang belum terlaksana. Kamu simbol ambisi kesehatan yang belum jadi kebiasaan.`,
    full_dark: `Sisi gelapmu: orang beli kamu untuk perasaan sudah melakukan sesuatu — bukan untuk benar-benar melakukannya. Kamu jadi alibi, bukan solusi.`,
    full_advice: `Dibeli tidak sama dengan dipakai. Dan dipakai tidak sama dengan diabsorpsi. Cek apakah apa yang kamu konsumsi benar-benar masuk ke sistem — atau hanya lewat.`
  },
  {
    category: "kosmetik",
    emoji: "🫧", name: "Busa Sabun",
    preview: `Kamu adalah busa sabun. Ringan, menggelembung, kelihatan banyak — tapi mostly udara. Kamu menyenangkan untuk dilihat dan dirasa, tapi tidak punya substansi. Kamu penampilan dari sesuatu yang bekerja, bukan pekerjaannya sendiri.`,
    full_dark: `Sisi gelapmu: kamu kadang lebih suka jadi busa daripada sabunnya — karena busa itu flashy dan menarik perhatian. Padahal yang benar-benar bersihin itu sabunnya, bukan kamu.`,
    full_advice: `Kurangi busa, tambah substansi. Orang yang sudah dewasa tahu bedanya busa yang banyak dan sabun yang benar-benar bersihkan.`
  },
  {
    category: "kosmetik",
    emoji: "🧻", name: "Tisu Terakhir di Kotak",
    preview: `Kamu adalah tisu terakhir di kotak. Semua orang ambil yang di atas tanpa pikir panjang — sampai tiba-tiba tinggal kamu. Dan di situlah momen panik: "ini tisu terakhir." Tiba-tiba kamu sangat berharga. Sayang kamu tidak bisa menikmati itu lama.`,
    full_dark: `Sisi gelapmu: kamu paling dihargai justru di titik kamu paling dekat dengan habis. Itu ironi yang tidak lucu kalau dirasakan sendiri.`,
    full_advice: `Jangan tunggu sampai jadi tisu terakhir untuk dihargai. Tunjukkan nilaimu sebelum kotak hampir kosong — supaya orang tahu harus isi ulang sebelum terlambat.`
  },
  {
    category: "kosmetik",
    emoji: "🪮", name: "Sisir Penuh Rambut",
    preview: `Kamu adalah sisir yang penuh rambut. Menyimpan sisa-sisa dari semua yang pernah disisir. Setiap helai punya ceritanya — stres, nutrisi kurang, atau memang sudah waktunya pergi. Kamu menyimpan bukti dari perjalanan yang tidak terlihat.`,
    full_dark: `Sisi gelapmu: kamu menyimpan terlalu banyak sisa dari orang lain sampai fungsimu sendiri terganggu. Sisir yang penuh rambut tidak bisa menyisir dengan baik.`,
    full_advice: `Bersihkan dirimu dari sisa-sisa yang bukan milikmu. Kamu tidak harus menyimpan semua yang pernah melewatimu.`
  },
  {
    category: "kosmetik",
    emoji: "🧽", name: "Spons Cuci Muka",
    preview: `Kamu adalah spons cuci muka. Menyerap semua kotoran dari wajah orang lain — setiap hari, dua kali sehari. Kamu yang menanggung semua yang mereka bersihkan dari diri mereka. Tugasmu mulia. Tapi tidak ada yang mau lihat spons setelah dipakai.`,
    full_dark: `Sisi gelapmu: kamu sudah jadi tempat pembuangan akhir untuk semua yang tidak mau dibawa orang ke hari selanjutnya. Dan tidak ada yang tanya bagaimana kondisimu.`,
    full_advice: `Minta dijemur. Minta dibilas. Spons yang tidak pernah kering itu berkembang biak bakteri — dan akhirnya jadi sumber masalah bagi yang memakainya.`
  },
  {
    category: "kosmetik",
    emoji: "🌸", name: "Parfum Hampir Habis",
    preview: `Kamu adalah parfum yang tinggal sedikit. Dulu full bottle — dipakai untuk semua momen special. Sekarang tersisa di dasar botol, cukup untuk beberapa semprotan lagi. Orang menyimpanmu bukan karena mau dipakai — tapi karena tidak rela mengosongkanmu.`,
    full_dark: `Sisi gelapmu: kamu jadi sesuatu yang terlalu precious untuk dipakai tapi terlalu sedikit untuk berarti. Tersimpan manis sambil wanginya perlahan menguap.`,
    full_advice: `Pakai sampai habis. Lebih baik wangimu dirasakan sampai tetes terakhir daripada menguap pelan-pelan di dalam botol yang tidak pernah dibuka.`
  },
  {
    category: "kosmetik",
    emoji: "🪒", name: "Silet Tumpul",
    preview: `Kamu adalah silet yang sudah tumpul. Dulu tajam, dulu presisi — sekarang lebih banyak menarik dan mengiritasi daripada memotong bersih. Tapi masih dipakai karena mengganti itu ada biayanya, ada repotnya.`,
    full_dark: `Sisi gelapmu: kamu sudah tidak tajam di area yang seharusnya, tapi terus digunakan sampai meninggalkan bekas. Dan yang lebih sedih — kamu juga tidak protes.`,
    full_advice: `Ada masanya kamu perlu digantikan — dan itu bukan kegagalan. Silet yang tahu kapan harus diganti itu lebih bijak dari yang memaksakan diri sampai melukai.`
  },
  {
    category: "kosmetik",
    emoji: "🧣", name: "Scrunchie di Pergelangan",
    preview: `Kamu adalah scrunchie di pergelangan tangan. Selalu ada, selalu siap — kalau rambut perlu diikat, kamu ada. Kalau tidak, kamu tetap ada di sana, jadi aksesoris yang tidak pernah benar-benar dilepas. Kamu convenient. Kamu reliable. Kamu kadang terlupakan karena terlalu sering ada.`,
    full_dark: `Sisi gelapmu: karena selalu ada dan selalu siap, kamu tidak pernah benar-benar dipilih dengan sadar. Kamu dipakai by default, bukan by choice.`,
    full_advice: `Sesekali lepas dari pergelangan. Biarkan orang sadar bahwa kamu bisa tidak ada — dan biarkan mereka pilih untuk meletakkanmu di sana lagi dengan sadar.`
  },
  {
    category: "sehari-hari",
    emoji: "🪴", name: "Tanaman Plastik",
    preview: `Kamu adalah tanaman plastik. Kelihatan hijau, kelihatan hidup — tapi tidak butuh air, tidak butuh cahaya, tidak butuh perawatan apapun. Sempurna di foto, sempurna di dekorasi. Tapi kalau dipegang... dingin. Tidak ada yang tumbuh.`,
    full_dark: `Sisi gelapmu: kamu sudah lama berpura-pura hidup supaya tidak ada yang khawatir. Kamu mempertahankan penampilan hijau saat di dalamnya sudah lama tidak ada proses kehidupan yang berjalan.`,
    full_advice: `Lebih baik tanaman asli yang layu tapi bisa dipulihkan daripada tanaman plastik yang sempurna tapi tidak pernah tumbuh. Izinkan dirimu layu sesekali — itu tanda kamu masih hidup.`
  },
  {
    category: "fenomena",
    emoji: "🎰", name: "Mesin Penjual Otomatis Makan Uang",
    preview: `Kamu adalah vending machine yang makan uang tapi tidak keluar barangnya. Sudah diberi — waktu, energi, kepercayaan — tapi outputnya tidak kunjung keluar. Orang mulai gedor-gedor, minta tolong, akhirnya menyerah. Dan uangnya tidak kembali.`,
    full_dark: `Sisi gelapmu: kamu ambil tapi tidak kasih. Dan selalu ada alasan teknis yang terdengar masuk akal — "sedang error", "sedang maintenance." Tapi kapan selesainya?`,
    full_advice: `Kembalikan apa yang sudah diinvestasikan orang padamu — dalam bentuk apapun. Mesin yang terus makan uang tanpa output akhirnya akan dirusak atau ditinggal.`
  },
  {
    category: "alam",
    emoji: "🌤️", name: "Awan Tipis",
    preview: `Kamu adalah awan tipis. Tidak cukup lebat untuk bikin hujan, tidak cukup tebal untuk bikin teduh — tapi kamu ada, melayang pelan, memberikan sedikit warna di langit biru yang polos. Subtil. Sering tidak disadari. Tapi langit terasa lebih hidup dengan kamu di sana.`,
    full_dark: `Sisi gelapmu: kamu terlalu tipis — terlalu mudah ditembus, terlalu mudah berubah bentuk mengikuti angin. Kamu tidak pernah benar-benar solid dalam satu bentuk cukup lama untuk dikenal.`,
    full_advice: `Tidak harus jadi awan badai untuk bermakna. Tapi sedikit lebih tebal tidak ada salahnya — supaya orang bisa benar-benar melihat bentukmu sebelum kamu berubah lagi.`
  },
  {
    category: "kosmetik",
    emoji: "🎀", name: "Pelembab Bibir Kosong",
    preview: `Kamu adalah lip balm yang sudah habis tapi tetap dibawa di kantong. Sudah tidak ada isinya — tapi tangan masih reflex mencarimu saat bibir kering. Kamu jadi kebiasaan yang outlive fungsimu. Comforting meski sudah tidak berguna.`,
    full_dark: `Sisi gelapmu: kamu membiarkan dirimu jadi habit orang lain — bukan kebutuhan. Dan habit itu bertahan bahkan setelah kamu tidak punya apapun lagi untuk diberikan.`,
    full_advice: `Isi ulang dirimu. Atau gantikan. Habit yang tidak ada isinya hanya jadi gerakan kosong yang melelahkan semua orang — termasuk dirimu sendiri.`
  },
];
