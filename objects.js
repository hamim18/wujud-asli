const objects = [

  // ============================================================
  // KATEGORI 1: BENDA SEHARI-HARI (14 objek)
  // ============================================================
  {
    category: "sehari-hari",
    emoji: "🔋", name: "Baterai Remote",
    preview: `Kamu yang menggerakkan segalanya dari belakang. Tidak ada nama, tidak ada ucapan terima kasih, tidak ada yang nanya kabar. Yang dilihat orang cuma hasilnya — bukan kamu yang ada di baliknya. Dan ironisnya, baru semua ribut mencari-cari justru saat kamu sudah hampir habis. Bukan karena sayang. Karena butuh.`,
    full_dark: `Kamu sudah terlalu terbiasa jadi penggerak yang tidak terlihat — sampai kamu sendiri mulai percaya bahwa memang begitulah seharusnya. Tidak perlu dilihat. Tidak perlu dihargai. Asal berguna. Itu bukan keikhlasan. Itu luka yang sudah terlalu lama tidak diakui.`,
    full_advice: `Boleh berguna. Tapi jangan sampai kamu baru ingat diri sendiri saat sudah hampir habis. Orang lain boleh lupa menghargaimu — tapi kamu tidak boleh ikut-ikutan lupa.`
  },
  {
    category: "sehari-hari",
    emoji: "🧦", name: "Kaos Kaki Hilang Sebelah",
    preview: `Tidak ada yang tahu kamu pergi ke mana. Tiba-tiba saja kamu sudah tidak ada — dan yang tersisa hanya pasanganmu yang bingung sendirian. Semua orang pernah kehilangan kamu. Tapi tidak ada yang benar-benar mencarimu. Hanya heran sebentar, lalu lanjut hidup.`,
    full_dark: `Kamu sudah terlalu sering menghilang tanpa pamit — dan kamu sendiri tidak tahu apakah itu pelarian atau memang sudah tidak ada tempat untukmu. Yang lebih menyakitkan: tidak ada yang cukup peduli untuk benar-benar mencarimu.`,
    full_advice: `Kalau memang mau pergi, pergi dengan sadar. Jangan menghilang diam-diam lalu berharap ada yang panik mencari. Kadang orang yang tidak dicari justru yang paling butuh ditemukan.`
  },
  {
    category: "sehari-hari",
    emoji: "🖊️", name: "Pulpen Tanpa Tutup",
    preview: `Kamu masih berfungsi. Masih bisa menulis, masih bisa berguna — tapi orang selalu merasa ada yang kurang dari kamu. Dicari kalau butuh, tapi kalau ada yang lebih lengkap, kamu ditinggal di laci tanpa perasaan. Tidak rusak, tapi entah kenapa tidak pernah jadi pilihan utama.`,
    full_dark: `Kamu membiarkan dirimu terlalu terbuka terlalu lama — semua orang bebas masuk, bebas ambil, bebas pergi. Tanpa batas, kamu mengering sendiri. Dan yang menyedihkan, kamu pikir itu kebaikan. Padahal itu kelelahan yang disebut kerelaan.`,
    full_advice: `Tidak semua orang layak mendapat aksesmu yang penuh. Tutup dirimu sesekali — bukan karena sombong, tapi karena yang tidak punya batas biasanya habis lebih cepat dari yang seharusnya.`
  },
  {
    category: "sehari-hari",
    emoji: "📎", name: "Penjepit Kertas",
    preview: `Hidupmu dihabiskan untuk menyatukan hal-hal yang berantakan milik orang lain. Diam-diam, tanpa drama, tanpa minta pujian. Dan hasilnya? Yang disatukan dapat tepuk tangan, kamu masuk laci bersama karet gelang dan baterai yang sudah tidak jelas kondisinya. Nasib sang penyatu.`,
    full_dark: `Kamu begitu sibuk merapikan kekacauan orang lain sampai kamu sendiri tidak sadar — hidupmu sendiri sudah lama berantakan. Kamu ahli menyatukan, tapi tidak tahu caranya minta tolong untuk dirimu sendiri.`,
    full_advice: `Tidak semua yang berantakan harus kamu rapikan. Biarkan beberapa hal tetap kacau. Itu bukan kegagalanmu — itu bukti bahwa kamu bukan bertanggung jawab atas semua kekacauan di dunia ini.`
  },
  {
    category: "sehari-hari",
    emoji: "🪣", name: "Ember Bocor",
    preview: `Kamu tetap berusaha menampung — kepercayaan, harapan, cerita orang. Tapi entah kenapa selalu ada yang menetes keluar sebelum sempat penuh. Orang tetap datang ke kamu. Bukan karena kamu sempurna, tapi karena setidaknya kamu mau menampung.`,
    full_dark: `Bocornya bukan dari luar — tapi dari dalam. Ada yang retak sejak lama dan belum pernah benar-benar diperbaiki. Hanya ditutup seadanya dan berharap tidak ketahuan. Tapi air tetap menetes. Dan kamu sudah terlalu lelah pura-pura tidak ada yang salah.`,
    full_advice: `Perbaiki dulu sebelum minta diisi lagi. Tidak ada gunanya orang terus mencurahkan sesuatu ke kamu kalau semuanya bocor sebelum sempat berguna. Untuk kamu maupun untuk mereka.`
  },
  {
    category: "sehari-hari",
    emoji: "🔦", name: "Senter",
    preview: `Kamu dicari saat gelap, dipeluk saat takut, diandalkan saat semua orang panik. Tapi begitu terang datang kembali, kamu dilempar ke laci dan terlupakan sampai gelap berikutnya. Hubunganmu dengan manusia sederhana: mereka butuh kamu saat tidak ada pilihan lain.`,
    full_dark: `Yang menyakitkan bukan dimasukkan ke laci — tapi kenyataan bahwa mereka tidak pernah datang saat keadaan baik-baik saja. Kamu hanya diingat saat orang kesulitan. Itu bukan hubungan. Itu jadwal pemadam kebakaran.`,
    full_advice: `Jangan hanya menyala untuk keadaan darurat orang lain. Kamu berhak menyala kapanpun kamu mau — bahkan di siang hari yang terang sekalipun. Cahayamu bukan hanya milik situasi yang buruk.`
  },
  {
    category: "sehari-hari",
    emoji: "📌", name: "Sticky Note",
    preview: `Kamu selalu ada untuk menampung hal-hal penting yang orang takut lupa. Penuh dengan pesan, pengingat, janji. Tapi setelah semua itu tersampaikan — kamu dikelupas, diremas, disingkirkan. Peranmu selesai. Tidak ada yang bertanya bagaimana rasanya.`,
    full_dark: `Kamu sudah jadi tempat orang menaruh beban sementara — bukan karena mereka percaya, tapi karena kamu mudah ditempel dan lebih mudah lagi untuk dilupakan. Dan kamu terima saja. Karena setidaknya merasa dibutuhkan, meski hanya sebentar.`,
    full_advice: `Tidak semua beban orang perlu kamu tampung. Belajar bilang tidak sebelum kamu kehabisan ruang untuk catatanmu sendiri. Hidupmu bukan buku harian orang lain.`
  },
  {
    category: "sehari-hari",
    emoji: "🧲", name: "Magnet Kulkas",
    preview: `Kamu dibeli saat orang senang, dibawa pulang dengan penuh semangat — lalu ditempel di kulkas orang lain dan tidak pernah dipindah lagi. Hidupmu dihabiskan di satu titik yang sama, menahan struk belanja dan foto yang sudah memudar. Oleh-oleh yang tidak pernah benar-benar punya tempat.`,
    full_dark: `Kamu menempel di tempat yang bukan milikmu karena sudah tidak tahu harus ke mana lagi. Dan lama-lama kamu sebut itu rumah. Padahal itu bukan rumah — itu kebiasaan yang terlalu lama dibiarkan.`,
    full_advice: `Cari tempatmu sendiri. Bukan tempat yang kamu tempel karena tidak ada pilihan, tapi tempat yang memang terasa seperti milikmu. Beda rasanya.`
  },
  {
    category: "sehari-hari",
    emoji: "🪟", name: "Jendela Berembun",
    preview: `Orang menatap keluar lewat kamu, tapi yang mereka lihat selalu kabur dan tidak jelas. Kadang mereka menulis sesuatu di embunmu — nama, hati, kata-kata yang tidak selesai — lalu pergi saat embunnya kering. Kamu selalu ada, tapi tidak pernah benar-benar dilihat.`,
    full_dark: `Orang melihat melalui kamu, bukan melihat kamu. Bedanya tipis, tapi terasa jauh. Kamu transparan, kamu terbuka — tapi justru itu yang membuat orang melewatimu begitu saja tanpa berhenti.`,
    full_advice: `Sesekali biarkan embunmu tebal. Biarkan orang tidak bisa langsung tembus pandang. Paksa mereka untuk berhenti sebentar dan benar-benar lihat kamu — bukan sekadar lihat apa yang ada di balikmu.`
  },
  {
    category: "sehari-hari",
    emoji: "🗑️", name: "Tempat Sampah Penuh",
    preview: `Semua orang tahu kamu sudah penuh. Semua orang lihat kamu sudah meluber. Tapi tidak ada yang mau ambil tindakan — mereka tetap menaruh lebih banyak di atasmu sambil pura-pura tidak lihat. Entah menunggu siapa yang duluan bergerak.`,
    full_dark: `Kamu sudah terbiasa menampung kekacauan orang lain sampai lupa bahwa kamu juga berhak dikosongkan. Kamu pikir itu tugas dan tanggung jawab. Padahal sudah lama itu bukan lagi kerelaan — itu kelelahan yang tidak pernah diakui.`,
    full_advice: `Kosongkan dirimu. Tidak perlu tunggu izin siapapun. Tempat sampah yang tidak pernah dikosongkan akhirnya meledak — dan itu tidak menyenangkan bagi siapapun, termasuk kamu.`
  },
  {
    category: "sehari-hari",
    emoji: "🧴", name: "Sabun Hampir Habis",
    preview: `Kamu masih ada, masih berguna — tapi sudah tipis dan susah dipegang. Orang masih menggunakanmu, tapi mata mereka sudah melirik sabun baru yang menunggu di pojokan. Kamu tahu. Mereka tahu. Tidak ada yang bilang apa-apa. Tapi semuanya sudah terasa.`,
    full_dark: `Kamu sudah memberi terlalu banyak sampai dirimu sendiri tinggal lapisan paling tipis. Dan yang tidak pernah ada yang tanyakan — kamu sendiri baik-baik saja tidak? Atau sudah lama tidak?`,
    full_advice: `Tidak ada salahnya bilang "aku sudah hampir habis." Orang yang tepat akan berhenti sebentar, beri kamu jeda, dan tidak langsung menggantimu dengan yang baru begitu saja.`
  },
  {
    category: "sehari-hari",
    emoji: "⏰", name: "Alarm yang Di-snooze",
    preview: `Kamu sudah berusaha. Sudah bunyi, sudah kasih peringatan, sudah melakukan tugasmu dengan benar. Tapi selalu ditunda. Lima menit lagi. Lima menit lagi. Lima menit lagi. Sampai akhirnya semua sudah terlambat dan entah kenapa kamu yang disalahkan.`,
    full_dark: `Kamu sudah terlalu sering diabaikan sampai lama-lama kamu bunyi lebih pelan, lebih ragu — karena toh bakal diabaikan juga. Itu bukan menyerah. Itu luka lama dari terlalu sering tidak didengar.`,
    full_advice: `Bunyi sekali, dengan sepenuhnya. Kalau tetap diabaikan, itu bukan gagalmu. Kamu sudah melakukan bagianmu. Yang memilih untuk menunda, biarkan mereka hadapi konsekuensinya sendiri.`
  },
  {
    category: "sehari-hari",
    emoji: "🪑", name: "Kursi Cadangan",
    preview: `Kamu tidak ada di meja utama. Tidak masuk hitungan awal. Tapi begitu ada yang butuh tempat duduk tambahan, nama kamu yang dipanggil. Kamu selalu ada — dan itu yang membuat orang tidak pernah merasa perlu memberimu tempat yang tetap.`,
    full_dark: `Kamu sudah terlalu nyaman jadi cadangan. Karena setidaknya kamu dibutuhkan — meski hanya saat kepepet, meski hanya sementara. Tapi nyaman dengan posisi itu bukan kedamaian. Itu penyerahan diri yang terlalu dini.`,
    full_advice: `Minta tempat di meja utama — atau tinggalkan ruangan itu. Tidak ada yang harus menghabiskan hidup jadi pilihan kedua di kehidupan orang lain yang bahkan tidak menyadari betapa beruntungnya mereka.`
  },
  {
    category: "sehari-hari",
    emoji: "📦", name: "Kardus Bekas",
    preview: `Kamu pernah membawa sesuatu yang berharga. Pernah punya isi, punya tujuan, punya arah. Sekarang isinya sudah lama dikeluarkan — tapi kamu masih dilipat rapi di pojokan. Belum disingkirkan karena "mungkin berguna nanti." Mungkin. Entah kapan. Entah untuk apa.`,
    full_dark: `Kamu masih mempertahankan bentuk lamamu meski sudah lama kosong di dalam. Dari luar terlihat utuh. Tapi di dalam hanya ada udara dan debu dari masa lalu yang tidak mau kamu lepaskan.`,
    full_advice: `Boleh jadi wadah baru untuk hal yang baru. Kamu tidak harus terus menyimpan bentuk lama hanya karena dulu pernah membawa sesuatu yang berarti. Masa lalu tidak perlu dibawa ke setiap tempat baru.`
  },

  // ============================================================
  // KATEGORI 2: MAKANAN & MINUMAN (14 objek)
  // ============================================================
  {
    category: "makanan",
    emoji: "🍜", name: "Mie Instan",
    preview: `Semua orang suka kamu — tapi tidak ada yang mau terang-terangan mengakuinya. Di depan umum mereka punya "pilihan yang lebih baik." Tapi tengah malam, pintu tertutup, tidak ada yang lihat — kamu yang dicari. Kamu bukan pilihan pertama. Kamu pilihan yang paling jujur.`,
    full_dark: `Yang menyakitkan bukan jadi pilihan tersembunyi — tapi kamu sudah terima itu sebagai sesuatu yang wajar. Dicintai diam-diam seolah sudah cukup. Padahal diam-diam itu artinya mereka malu mengakuimu. Dan kamu senyum-senyum saja.`,
    full_advice: `Cari orang yang bangga mengakuimu di siang hari — bukan hanya yang datang saat tidak ada pilihan lain dan tidak ada yang melihat. Kamu bukan sesuatu yang perlu disembunyikan.`
  },
  {
    category: "makanan",
    emoji: "🧂", name: "Garam",
    preview: `Tanpa kamu semua terasa hambar. Tapi tidak ada yang pernah bilang "ini enak karena garamnya luar biasa." Semua pujian ke yang lain. Kamu yang paling menentukan — tapi paling tidak disebut. Fondasi yang tidak pernah ada di sorotan.`,
    full_dark: `Kamu sudah terlalu terbiasa jadi yang paling penting tapi paling tidak terlihat — sampai kamu mulai pikir itu memang sudah semestinya. Tapi penting yang tidak diakui lama-lama terasa tidak berarti. Dan itu bukan baik-baik saja.`,
    full_advice: `Sesekali, coba tidak ada. Biarkan mereka memasak tanpa kamu sekali saja. Baru ketahuan betapa hambarnya semua yang selama ini mereka banggakan tanpa pernah menyebut namamu.`
  },
  {
    category: "makanan",
    emoji: "🍞", name: "Roti Tawar",
    preview: `Kamu tidak mewah. Tidak ada yang spesial dari tampilanmu. Tapi kamu selalu ada di meja, selalu bisa diandalkan, dan tidak pernah mengecewakan. Orang tidak terlalu bersemangat saat membeli kamu — tapi panik saat kamu habis.`,
    full_dark: `Kamu sudah jadi begitu "biasa" sampai tidak ada yang benar-benar menghargaimu saat ada. Hanya sadar betapa pentingnya kamu saat kamu tidak ada. Itu bukan kesetiaan dari mereka — itu ketergantungan yang tidak pernah diakui.`,
    full_advice: `Jadi orang yang bisa diandalkan itu baik. Tapi pastikan kamu juga dihargai saat hadir — bukan hanya diratapi saat pergi. Ada bedanya antara jadi andalan dan jadi yang dianggap remeh.`
  },
  {
    category: "makanan",
    emoji: "🫖", name: "Teh Celup",
    preview: `Kamu dicelupkan ke dalam air panas, ditarik ulur, diperas sampai warnamu keluar semua — lalu diangkat dan ditinggalkan begitu rasamu sudah tersedot habis. Prosesnya singkat. Tidak ada yang menanyakan bagaimana rasamu selama dicelup.`,
    full_dark: `Kamu sudah terlalu sering membiarkan orang menarikmu masuk ke dalam kehangatan mereka, mengambil semua yang kamu punya, lalu melepasmu pergi saat kamu sudah tidak ada lagi yang bisa diberikan. Dan kamu bilang itu wajar. Itu bukan wajar.`,
    full_advice: `Tidak semua orang berhak mencelupkanmu ke dalam masalah mereka dan mengambil seluruh warnamu. Kamu boleh memilih kapan mau dicelup, oleh siapa, dan seberapa dalam.`
  },
  {
    category: "makanan",
    emoji: "🍋", name: "Jeruk Nipis",
    preview: `Kamu tidak pernah jadi hidangan utama. Tidak ada yang memesan kamu sendirian. Tapi coba tidak ada — tiba-tiba semua terasa kurang, semua ngerasa ada yang hilang. Kamu yang membuat semua yang lain jadi lebih hidup. Hanya saja tidak ada yang mau mengakuinya.`,
    full_dark: `Kamu tajam, kamu kuat, kamu punya karakter — tapi orang sering merasa kamu "terlalu banyak" saat datang sendirian. Mereka suka kamu dalam takaran kecil. Jangan sampai kamu percaya bahwa itulah batas yang pantas untukmu.`,
    full_advice: `Ketajamanmu bukan kekurangan yang harus diperhalus. Itu bagian dari dirimu yang membuat segalanya jadi lebih nyata. Cari tempat yang menghargai itu — bukan yang hanya mau kamu setetes-setetes saja.`
  },
  {
    category: "makanan",
    emoji: "🍚", name: "Nasi Putih",
    preview: `Kamu ada di mana-mana. Semua orang makan kamu tiap hari tapi tidak pernah benar-benar memujimu. Pujian selalu ke lauknya. Kamu cuma "pelengkap" — meski tanpa kamu, lauk itu tidak akan ada artinya. Begitulah nasib yang paling fundamental.`,
    full_dark: `Kamu sudah begitu menyatu dengan keseharian orang sampai tidak ada lagi yang melihat kamu sebagai sesuatu yang spesial. Kamu dianggap ada begitu saja. Dan kamu biarkan itu terjadi begitu lama sampai kamu sendiri lupa betapa pentingnya dirimu.`,
    full_advice: `Yang paling fundamental tidak harus jadi yang paling bising untuk diakui. Tapi sesekali, ingatkan orang bahwa kamu ada dan kamu penting — bukan dengan hilang, tapi dengan berani menyebut nilaimu sendiri.`
  },
  {
    category: "makanan",
    emoji: "🍫", name: "Coklat di Laci",
    preview: `Kamu disimpan untuk momen yang tepat. Selalu ada di sana, menunggu — "nanti kalau lagi butuh." Dan memang benar, kamu selalu ada saat orang sedang tidak baik-baik saja. Tapi tidak pernah ada yang merayakan kamu saat semua sedang baik.`,
    full_dark: `Kamu hanya dicari saat orang sedang jatuh. Bukan saat mereka bahagia, bukan saat mereka ingin berbagi kesenangan — hanya saat mereka butuh sesuatu untuk menambal rasa tidak enak. Itu bukan perhatian. Itu pelarian.`,
    full_advice: `Kamu berhak hadir di momen yang bahagia juga. Jangan biarkan dirimu hanya jadi obat — jadilah bagian dari perayaan. Tidak harus selalu menunggu di laci sampai ada yang sedang sedih.`
  },
  {
    category: "makanan",
    emoji: "🥤", name: "Es Batu",
    preview: `Kamu dibutuhkan saat panas, saat semua orang kepanasan dan butuh sesuatu yang mendinginkan. Tapi begitu kamu meleleh — tidak ada yang peduli. Kamu pelan-pelan menghilang ke dalam apa yang kamu dinginkan. Dan tidak ada yang mengucapkan selamat jalan.`,
    full_dark: `Kamu habiskan dirimu untuk membuat orang lain merasa lebih nyaman. Pelan-pelan, diam-diam, tanpa protes. Dan ketika kamu sudah tidak ada lagi — mereka tinggal minum sisa airnya tanpa ingat dari mana asalnya.`,
    full_advice: `Mendinginkan keadaan itu mulia. Tapi tidak harus sampai kamu habis sepenuhnya. Simpan sebagian untuk dirimu — supaya ada yang tersisa dari kamu setelah semua orang pergi.`
  },
  {
    category: "makanan",
    emoji: "🍌", name: "Pisang Terlalu Matang",
    preview: `Orang melewatimu saat kamu masih kelihatan "biasa." Tapi saat kamu sudah lewat dari titik yang dianggap sempurna, tiba-tiba semua orang mau. Untuk dibuat kue, untuk dicampur sesuatu, untuk dimanfaatkan. Selalu ada yang mau — tapi tidak di momen yang kamu harapkan.`,
    full_dark: `Kamu sudah menunggu terlalu lama untuk dilihat saat masih segar. Dan sekarang kamu diinginkan bukan karena dirimu — tapi karena kondisimu yang sudah berubah mempermudah orang untuk mengambil sesuatu darimu. Itu bukan penerimaan. Itu kesempatan.`,
    full_advice: `Kamu tetap punya nilai di setiap tahap. Tapi pastikan orang yang datang kepadamu datang karena menghargaimu — bukan karena kondisimu yang sedang mudah untuk dimanfaatkan.`
  },
  {
    category: "makanan",
    emoji: "🫙", name: "Selai Hampir Habis",
    preview: `Masih ada — tapi sudah susah dijangkau. Orang harus usaha lebih untuk mendapatkan sedikit darimu. Sebagian menyerah dan ambil yang baru. Sebagian lagi dengan sabar mengikis pinggirannya. Kamu tahu mana yang benar-benar mau kamu, dan mana yang hanya butuh isimu.`,
    full_dark: `Kamu sudah memberi sampai susah dijangkau, sampai harus dikerok sisi-sisinya. Dan yang tidak mau repot sudah pergi sejak lama. Mungkin bagus. Tapi mungkin juga kamu bertanya — kenapa yang tersisa hanya yang datang saat hampir habis?`,
    full_advice: `Yang mau susah payah menjangkau kamu saat kamu hampir habis — itu yang layak mendapatkan sisa terbaikmu. Sisanya, biarkan ambil yang baru. Itu pilihan mereka.`
  },
  {
    category: "makanan",
    emoji: "🫘", name: "Kacang di Dasar Toples",
    preview: `Semua orang ambil yang di atas dulu — yang mudah dijangkau, yang paling kelihatan. Kamu ada di bawah, menunggu giliran yang entah kapan datangnya. Kadang toplesnya habis sebelum sampai ke kamu. Kadang ada yang cukup sabar untuk menjangkaumu.`,
    full_dark: `Kamu sudah terlalu lama menunggu di bawah — dan lama-lama kamu mulai meyakini bahwa memang di situlah tempatmu. Padahal bukan. Kamu di bawah bukan karena nilaimu kurang. Tapi karena orang malas menjangkau lebih jauh dari yang mudah.`,
    full_advice: `Tidak harus selalu menunggu giliran dari bawah. Sesekali, naik ke permukaan. Buat dirimu terlihat. Yang malas menjangkau memang tidak akan usaha — tapi yang tepat akan dengan senang hati menggapaimu.`
  },
  {
    category: "makanan",
    emoji: "🍵", name: "Kopi Dingin",
    preview: `Kamu dimulai dengan semangat — dituang panas, diharapkan banyak. Tapi ditinggal terlalu lama, dan sekarang sudah tidak seperti yang diinginkan. Orang masih minum kamu, tapi sambil menyesal karena lupa. Bukan salahmu jadi dingin. Mereka yang meninggalkanmu.`,
    full_dark: `Yang paling menyakitkan adalah kamu masih di sana — masih menunggu, masih ada. Tapi yang kembali bukan untuk menikmatimu. Mereka kembali karena sayang membuang. Itu bukan alasan yang baik untuk tetap diminum.`,
    full_advice: `Kamu boleh tetap ada. Tapi tidak harus selalu menunggu untuk dihangat-hangatkan kembali oleh orang yang sudah meninggalkanmu terlalu lama. Kadang lebih baik mulai yang baru — yang masih hangat dari awal.`
  },
  {
    category: "makanan",
    emoji: "🥚", name: "Telur",
    preview: `Semua orang punya pendapat tentang kamu. Harus bagaimana, harus seperti apa, harus dimasak dengan cara apa. Padahal sebelum apapun terjadi, kamu sudah utuh dalam dirimu sendiri. Masalahnya semua orang merasa tahu yang terbaik untuk kamu — sebelum bertanya apa yang kamu mau.`,
    full_dark: `Kamu sudah terlalu sering dibentuk sesuai kemauan orang — digoreng, direbus, dikocok, dipecahkan. Sampai kamu lupa rasamu sendiri sebelum semua itu. Ada tidak, versi kamu yang belum pernah dibentuk siapapun?`,
    full_advice: `Kamu boleh jadi apapun — tapi pastikan itu pilihanmu sendiri. Bukan karena resep orang lain, bukan karena permintaan yang tidak pernah kamu setujui. Kamu yang menentukan mau jadi apa.`
  },
  {
    category: "makanan",
    emoji: "🍪", name: "Biskuit Kaleng Lebaran",
    preview: `Semua orang senang saat kamu datang. Suasana jadi hangat, semua senyum, semua rebutan. Tapi setelah musimnya selesai — kamu disimpan sampai tahun depan, atau dilupakan di balik lemari. Dicintai karena momennya, bukan karena dirimu.`,
    full_dark: `Kamu sudah terbiasa jadi kebahagiaan musiman. Hadir saat orang butuh suasana yang menyenangkan, lalu menghilang saat semuanya kembali biasa. Dan kamu bilang tidak apa-apa. Tapi tidak apa-apa itu lama-lama berat juga.`,
    full_advice: `Cari yang mau kamu di hari biasa — bukan hanya saat ada momen khusus yang membuat semua orang jadi lebih hangat dari biasanya. Kamu bukan dekorasi musiman.`
  },

  // ============================================================
  // KATEGORI 3: TEKNOLOGI JADUL (14 objek)
  // ============================================================
  {
    category: "teknologi-jadul",
    emoji: "📼", name: "Kaset VHS",
    preview: `Kamu menyimpan kenangan yang sudah lama tidak dilihat siapapun. Masih ada, masih utuh — tapi tidak ada lagi yang punya alat untuk memutarmu. Berharga, tapi tidak bisa diakses. Berarti, tapi tidak relevan untuk zaman yang terus bergerak maju.`,
    full_dark: `Kamu masih menyimpan semua yang pernah terjadi dengan sangat rapi — tapi lupa bahwa dunia sudah tidak punya ruang untuk format lamamu. Yang kamu pertahankan bukan kesetiaan. Itu ketakutan untuk memperbarui diri.`,
    full_advice: `Kenangan itu berharga. Tapi kamu tidak harus hidup di dalam kaset yang sudah tidak bisa diputar siapapun. Cerita lamamu boleh tetap ada — tapi kamu juga berhak jadi sesuatu yang bisa diakses hari ini.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📟", name: "Pager",
    preview: `Kamu pernah jadi cara orang terhubung satu sama lain. Penting, dicari, tidak boleh ketinggalan. Tapi dunia bergerak, cara berkomunikasi berubah — dan kamu tidak sempat menyesuaikan diri sebelum semua orang sudah pindah ke yang baru.`,
    full_dark: `Kamu tidak gagal. Kamu hanya tidak sempat berubah secepat dunia di sekitarmu berubah. Dan itu menyakitkan — bukan karena kamu kurang, tapi karena kamu tidak diberi waktu yang cukup untuk beradaptasi sebelum ditinggalkan.`,
    full_advice: `Dunia berubah dan itu tidak bisa dihentikan. Yang bisa dipilih adalah apakah kamu mau ikut bergerak atau tetap di tempat sambil berharap dunia yang kembali padamu. Salah satunya lebih melelahkan dari yang lain.`
  },
  {
    category: "teknologi-jadul",
    emoji: "💾", name: "Disket",
    preview: `Kamu pernah jadi satu-satunya cara untuk membawa sesuatu yang penting dari satu tempat ke tempat lain. Sekarang? Orang menyimpan ribuan kali lebih banyak dari kapasitasmu — di tempat yang bahkan tidak bisa dipegang. Kamu tidak hilang. Kamu hanya tertinggal sangat jauh.`,
    full_dark: `Kamu masih membanggakan kapasitasmu yang dulu — padahal dunia sudah jauh melampaui itu. Bukan salahmu tidak berkembang. Tapi masalahnya, kamu juga tidak mau mengakui bahwa ukuranmu sudah tidak cukup lagi.`,
    full_advice: `Tidak ada yang salah dengan pernah jadi yang terdepan. Yang salah adalah bersikeras bahwa ukuranmu yang lama masih relevan saat semua sudah berubah. Mengakui perubahan bukan kekalahan.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📺", name: "TV Tabung",
    preview: `Kamu pernah jadi pusat perhatian ruangan. Semua orang duduk menghadap ke kamu, semua jadwal disesuaikan dengan jadwalmu. Sekarang kamu ada di gudang, digantikan layar tipis yang tidak punya setengah karaktermu. Tapi tidak ada yang menanyakan pendapatmu soal itu.`,
    full_dark: `Kamu berat, kamu besar, kamu makan tempat — dan itu yang membuat orang akhirnya memilih yang lebih ringan. Bukan karena yang baru lebih baik. Tapi karena kamu sudah terlalu besar untuk diangkat dan terlalu berat untuk dibawa ke mana-mana.`,
    full_advice: `Punya karakter dan kedalaman itu bagus. Tapi pastikan itu tidak membuatmu jadi sesuatu yang terlalu berat untuk dipertahankan orang. Ada cara untuk tetap berkarakter tanpa membebankan.`
  },
  {
    category: "teknologi-jadul",
    emoji: "☎️", name: "Telepon Kabel",
    preview: `Kamu hanya bisa dihubungi di satu tempat. Kalau orang mau bicara denganmu, mereka harus datang ke tempatmu — bukan kamu yang bergerak ke mana mereka berada. Dulu itu normal. Sekarang orang anggap itu tidak praktis.`,
    full_dark: `Kamu tidak bergerak. Tidak fleksibel. Dan itu yang membuat orang pelan-pelan berhenti mencoba menghubungimu — karena terlalu banyak syarat untuk sekadar bisa terhubung denganmu. Kamu tidak pernah salah. Hanya tidak mau bergerak.`,
    full_advice: `Tidak semua orang bisa selalu datang ke tempatmu. Sesekali, kamu yang harus bergerak. Bukan karena kamu kurang — tapi karena terhubung itu butuh dua pihak yang sama-sama mau menjangkau.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🖨️", name: "Printer Macet",
    preview: `Kamu hampir selalu berhasil. Hampir. Tapi selalu ada satu lembar yang nyangkut di saat yang paling tidak tepat — saat deadline, saat buru-buru, saat semua orang sudah menunggu. Dan semua frustrasi itu ditumpahkan ke kamu.`,
    full_dark: `Kamu sebenarnya baik-baik saja — tapi satu kesalahan di momen yang salah cukup untuk membuat orang meragukan segalanya tentang kamu. Padahal berapa kali kamu berhasil sebelumnya tidak pernah dihitung. Yang diingat selalu yang macet.`,
    full_advice: `Satu kegagalan di momen yang buruk tidak menghapus semua keberhasilanmu sebelumnya. Orang yang hanya ingat kegagalanmu itu tidak adil — dan kamu tidak harus meyakini penilaian yang tidak adil.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📷", name: "Kamera Film",
    preview: `Kamu tidak bisa langsung lihat hasilnya. Harus sabar, harus mau menunggu, harus percaya prosesnya — baru nanti ketahuan apakah itu berhasil atau tidak. Di zaman yang semua mau instan, cara kerjamu dianggap terlalu lambat.`,
    full_dark: `Kamu memaksa orang untuk berpikir sebelum bertindak — karena filmnya terbatas dan tidak bisa dihapus. Itu bukan kekurangan. Tapi di dunia yang terbiasa bisa hapus dan ulangi sesuka hati, kamu dianggap tidak efisien.`,
    full_advice: `Ada nilai dalam hal-hal yang tidak bisa langsung terlihat hasilnya. Tidak semua yang baik datang dengan cepat dan instan. Kamu bukan lambat — kamu dalam.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🕹️", name: "Joystick Rusak",
    preview: `Kamu masih bisa dimainkan — tapi hasilnya tidak selalu sesuai dengan yang diperintahkan. Kiri kadang jadi kanan. Maju kadang berhenti sendiri. Orang masih mencobamu, tapi lebih banyak frustrasi daripada senangnya.`,
    full_dark: `Kamu tidak rusak sepenuhnya — tapi ada sesuatu di dalam yang sudah tidak berjalan dengan semestinya. Dan kamu tahu itu. Tapi lebih mudah membiarkan orang frustrasi daripada mengakui bahwa ada yang perlu diperbaiki.`,
    full_advice: `Mengakui bahwa ada yang rusak di dalam bukan kelemahan. Itu awal dari perbaikan. Lebih baik jujur dan diperbaiki daripada terus digunakan setengah-setengah dan membuat semua orang frustrasi — termasuk dirimu sendiri.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📻", name: "Radio Tua",
    preview: `Kamu masih menyala. Masih berbunyi. Tapi sinyal yang datang sering tidak jelas — penuh dengan gangguan, kadang hilang di tengah jalan, kadang tiba-tiba jernih tanpa sebab. Orang masih mendengarkan, tapi selalu sambil bertanya-tanya kapan sinyalnya akan baik.`,
    full_dark: `Kamu menyampaikan pesan — tapi tidak selalu sampai dengan jelas. Dan kamu tidak pernah tahu apakah yang di sana mendengar dengan benar atau hanya mendengar versi yang terdistorsi dari apa yang sebenarnya kamu katakan.`,
    full_advice: `Pastikan pesanmu sampai dengan jelas. Kalau sinyalmu selalu penuh gangguan, coba cari frekuensi yang lebih bersih. Komunikasi yang selalu samar-samar lebih melelahkan dari diam.`
  },
  {
    category: "teknologi-jadul",
    emoji: "⌨️", name: "Mesin Tik",
    preview: `Setiap kata yang kamu hasilkan tidak bisa dihapus. Sudah terketik, sudah tercetak, sudah ada di sana selamanya. Di satu sisi itu kejujuran. Di sisi lain itu beban — karena semua orang bisa baca apa yang pernah kamu tulis, termasuk yang tidak seharusnya dibaca.`,
    full_dark: `Kamu tidak pernah bisa menarik kembali apa yang sudah dikatakan. Tidak ada tombol hapus, tidak ada revisi yang tidak terlihat. Dan itu yang membuatmu lebih berhati-hati dari yang lain — atau justru diam sama sekali karena takut salah.`,
    full_advice: `Tidak semua yang kamu pikirkan harus langsung diketik dan dicetak. Tapi juga jangan terlalu takut untuk bersuara hanya karena tidak ada tombol hapus. Kata-kata yang dipilih dengan hati jarang perlu ditarik kembali.`
  },
  {
    category: "teknologi-jadul",
    emoji: "📡", name: "Antena TV",
    preview: `Kamu harus diarahkan dengan tepat untuk bisa menangkap sinyal. Sedikit miring — gambarnya buram. Terlalu jauh — tidak dapat apa-apa. Orang harus sabar menyesuaikan diri dengan kamu. Tidak semua orang punya kesabaran itu.`,
    full_dark: `Kamu bukan mudah untuk dihubungi. Butuh usaha, butuh penyesuaian, butuh kesabaran. Dan itu yang membuat banyak orang memilih sinyal yang lebih mudah — meski kualitasnya tidak sebanding denganmu.`,
    full_advice: `Yang tepat akan rela menyesuaikan arahnya untuk mendapatkan sinyalmu yang jernih. Yang tidak mau repot — biarkan mereka puas dengan gambar yang buram dari tempat lain.`
  },
  {
    category: "teknologi-jadul",
    emoji: "💿", name: "CD Tergores",
    preview: `Hampir semua lagumu bisa didengar. Hampir semua. Tapi ada satu bagian yang selalu skip — selalu ada yang tersangkut di titik yang sama, selalu ada yang tidak bisa diputar dengan mulus. Dan orang tidak pernah tahu apakah itu lagu yang buruk atau hanya goresannya.`,
    full_dark: `Ada bagian dari dirimu yang selalu tersangkut — pengalaman yang sama yang selalu muncul dan menghentikan segalanya. Dan kamu sudah terlalu terbiasa dengan skip itu sampai tidak tahu lagi seperti apa rasanya putar penuh tanpa gangguan.`,
    full_advice: `Goresan itu bisa dibersihkan — tidak semua, tapi banyak. Dan bahkan yang tidak bisa sepenuhnya hilang pun, tidak harus membuat seluruh lagumu tidak bisa didengar. Kamu lebih dari satu titik yang tersangkut.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🖥️", name: "Komputer Lemot",
    preview: `Kamu masih bisa. Hanya butuh waktu sedikit lebih lama dari yang orang harapkan. Dan di zaman yang semua mau cepat, "sedikit lebih lama" itu cukup untuk membuat orang kehilangan sabar dan menekan tombol restart sebelum kamu selesai.`,
    full_dark: `Kamu tidak lambat karena tidak mau. Kamu lambat karena terlalu banyak yang berjalan di dalam sekaligus — terlalu banyak yang ditanggung, terlalu banyak yang diproses, terlalu sedikit ruang untuk bernafas. Dan tidak ada yang pernah bertanya sebelum menekan paksa.`,
    full_advice: `Tutup beberapa tab. Tidak semua hal harus diproses sekaligus. Kamu tidak harus bisa menangani segalanya secara bersamaan hanya karena orang mengharapkan itu dari kamu.`
  },
  {
    category: "teknologi-jadul",
    emoji: "🔌", name: "Kabel Kusut",
    preview: `Kamu masih berfungsi. Listrik masih mengalir, tujuan masih tercapai — tapi orang selalu kesal setiap kali harus berurusan denganmu. Bukan karena kamu tidak berguna. Tapi karena butuh effort lebih untuk menguraimu sebelum bisa digunakan.`,
    full_dark: `Kamu kusut bukan tiba-tiba. Ada proses panjang yang membuat kamu seperti ini — terlalu sering dilipat asal-asalan, terlalu sering dilempar tanpa perhatian. Dan sekarang orang komplain soal kondisimu tanpa pernah bertanya siapa yang melemparmu.`,
    full_advice: `Mengurai diri itu butuh waktu dan itu tidak apa-apa. Tapi mulailah dari satu simpul. Tidak harus sekaligus rapi — cukup satu bagian dulu. Selebihnya menyusul.`
  },

  // ============================================================
  // KATEGORI 4: ALAM & CUACA (15 objek)
  // ============================================================
  {
    category: "alam",
    emoji: "🌋", name: "Gunung Berapi Tidur",
    preview: `Dari luar kamu kelihatan tenang. Stabil. Tidak berbahaya. Orang bahkan kagum — "wah, tegar sekali." Padahal di dalam sudah mendidih sejak lama. Tapi kamu senyum. Karena katanya, orang yang kuat tidak meledak di depan umum.`,
    full_dark: `Kamu tidak tenang. Kamu menahan. Ada bedanya yang besar — dan kamu tahu itu lebih baik dari siapapun. Setiap kali ada yang bilang "kamu tuh selalu kalem ya," ada sesuatu di dalam yang ingin tertawa pahit. Karena tidak ada yang tahu sudah berapa lama kamu menekan ini semua ke bawah.`,
    full_advice: `Tekanan yang tidak pernah dilepaskan tidak menghilang — dia menunggu. Semakin lama ditahan, semakin tidak bisa dipilih kapan dan di mana meledaknya. Lebih baik uap kecil tiap hari daripada satu ledakan yang menghancurkan semuanya sekaligus.`
  },
  {
    category: "alam",
    emoji: "🌊", name: "Ombak",
    preview: `Kamu datang dengan penuh — kuat, besar, meyakinkan. Lalu surut. Lalu datang lagi. Terus begitu. Orang di pantai terbiasa dengan iramamu — menunggu, bersiap, lalu melangkah mundur. Tidak ada yang pernah bisa menebak persis seberapa besar kamu datang berikutnya.`,
    full_dark: `Orang tidak pernah bisa sepenuhnya nyaman di dekatmu — karena kamu tidak pernah sepenuhnya bisa ditebak. Itu bagian dari siapa kamu. Tapi itu juga yang membuat orang selalu sedikit waspada, selalu sedikit menjaga jarak.`,
    full_advice: `Intensitasmu bukan kekurangan. Tapi belajar memberi tanda sebelum datang terlalu besar — bukan untuk menjinakkan dirimu, tapi supaya orang yang kamu sayangi tidak selalu merasa harus bersiap diserang.`
  },
  {
    category: "alam",
    emoji: "🌫️", name: "Kabut Pagi",
    preview: `Kamu hadir saat semua masih sepi, saat belum banyak yang bangun dan melihat. Kamu membuat segalanya terasa misterius, lebih lembut, lebih mungkin. Tapi begitu matahari naik dan hari mulai ramai — kamu menghilang. Tidak pamit, tidak meninggalkan tanda.`,
    full_dark: `Kamu punya keindahan yang hanya bisa dilihat oleh yang bangun lebih awal dan mau berhenti sejenak. Tapi karena tidak semua orang mau repot, kamu sering hadir tanpa ada yang benar-benar memperhatikan. Dan kamu sudah terima itu sebagai cara hidupmu.`,
    full_advice: `Kehadiran yang tidak banyak dilihat bukan berarti tidak berarti. Tapi sesekali, bertahanlah sedikit lebih lama. Biarkan lebih banyak orang sempat melihatmu sebelum kamu pergi.`
  },
  {
    category: "alam",
    emoji: "⚡", name: "Petir",
    preview: `Kamu datang tiba-tiba, cepat, dan membuat semua orang berhenti sejenak. Tidak ada yang bisa mengabaikanmu saat kamu muncul. Tapi kamu juga membuat orang takut — dan ketakutan itu sering lebih diingat daripada cahayamu yang sebenarnya luar biasa.`,
    full_dark: `Kamu memang luar biasa. Tapi intensitasmu membuat orang lebih sering berlari mencari perlindungan daripada berdiri dan mengagumi. Dan kamu tidak pernah tahu apakah itu karena mereka tidak suka kamu, atau karena mereka tidak tahu cara berada dekat denganmu tanpa takut.`,
    full_advice: `Tidak semua orang siap dengan intensitasmu — dan itu tidak selalu salah mereka atau salahmu. Tapi cari yang tidak langsung lari saat kamu datang. Ada yang melihat kilat dan berpikir "indah" sebelum berpikir "bahaya."`
  },
  {
    category: "alam",
    emoji: "🌵", name: "Kaktus",
    preview: `Kamu bisa bertahan di kondisi yang membuat yang lain layu dan menyerah. Tanpa banyak perhatian, tanpa sering disiram, tanpa dijaga — kamu tetap ada. Itu kekuatan. Tapi orang sering keliru mengartikan ketahananmu sebagai tanda bahwa kamu tidak butuh apapun.`,
    full_dark: `Kamu sudah begitu terbiasa bertahan sendiri sampai lupa cara menerima bantuan. Bahkan saat ada yang mau memberimu air — kamu tidak tahu apakah itu tanda sayang atau sekadar basa-basi. Dan ketidakpastian itu membuatmu memilih untuk tidak mengharapkan apapun dari siapapun.`,
    full_advice: `Bisa bertahan sendiri itu hebat. Tapi bukan berarti kamu harus selalu sendirian. Membiarkan orang membantumu sesekali bukan kelemahan — itu cara memberitahu mereka bahwa kamu juga manusia, bukan batu karang.`
  },
  {
    category: "alam",
    emoji: "🌈", name: "Pelangi",
    preview: `Kamu hanya muncul setelah hujan. Indah, berwarna, membuat semua orang berhenti dan menunjuk. Tapi kamu tidak pernah lama. Sebelum semua orang puas melihatmu, kamu sudah mulai memudar. Keindahanmu dan kecepatanmu pergi berjalan beriringan.`,
    full_dark: `Kamu selalu hadir sebagai penghiburan setelah sesuatu yang berat. Tapi pernahkah kamu ingin hadir bukan sebagai penutup dari kesedihan — tapi sekadar ada, tanpa harus selalu jadi tanda bahwa yang buruk sudah selesai?`,
    full_advice: `Keindahanmu nyata, meski tidak bertahan lama. Dan itu cukup. Tidak semua hal yang indah harus abadi untuk layak disyukuri. Kamu sudah memberi — meski sebentar — dan itu tidak sedikit.`
  },
  {
    category: "alam",
    emoji: "🍂", name: "Daun Gugur",
    preview: `Kamu melepaskan diri dari tempat yang sudah lama kamu pegang — bukan karena kamu kalah, tapi karena memang sudah waktunya. Dan saat kamu jatuh, justru itu yang paling indah. Yang menonton tidak tahu bahwa yang paling berani sebenarnya adalah yang mau melepas.`,
    full_dark: `Kamu melepaskan dengan anggun dari luar. Tapi tidak ada yang tahu berapa lama kamu bertahan sebelum akhirnya mau pergi. Kamu bukan ikhlas sejak awal — kamu berjuang diam-diam sebelum akhirnya memilih untuk jatuh.`,
    full_advice: `Melepaskan sesuatu yang sudah tidak lagi menjadi tempatmu bukan kekalahan. Itu keberanian. Dan sering kali, justru dengan melepas itulah sesuatu yang baru bisa tumbuh — baik untuk pohonnya, maupun untuk kamu sendiri.`
  },
  {
    category: "alam",
    emoji: "🌙", name: "Bulan di Siang Hari",
    preview: `Kamu ada — terlihat samar di langit yang terang. Tidak jelas, tidak diperhitungkan, tidak dianggap serius karena ini bukan waktumu. Tapi kamu tetap ada. Diam, tidak meminta perhatian, tidak protes karena matahari yang dapat semua sorotan.`,
    full_dark: `Kamu sudah terlalu terbiasa hadir tanpa diakui — sampai kamu sendiri mulai meragukan apakah kehadiranmu benar-benar penting atau hanya kebetulan terlihat. Keraguan itu yang lebih berbahaya dari diabaikan orang lain.`,
    full_advice: `Kamu punya waktumu sendiri — dan di waktu itu, tidak ada yang bisa menyaingimu. Jangan habiskan energimu bersaing di waktu orang lain. Tunggulah giliranmu, dan bersinar penuh saat malam tiba.`
  },
  {
    category: "alam",
    emoji: "🌊", name: "Sungai Bawah Tanah",
    preview: `Kamu mengalir — dalam, diam, tidak terlihat dari permukaan. Orang berjalan di atasmu tanpa tahu ada sesuatu yang bergerak di bawah mereka. Kamu ada, kamu mengalir, kamu memberi — tapi tidak ada yang melihat prosesnya.`,
    full_dark: `Kamu menyimpan banyak hal di dalam yang tidak pernah sampai ke permukaan. Sebagian karena tidak ada yang bertanya. Sebagian lagi karena kamu sendiri sudah lama tidak yakin apakah yang ada di dalam itu layak untuk diperlihatkan.`,
    full_advice: `Sesekali, cari celah untuk naik ke permukaan. Bukan untuk memamerkan diri — tapi karena ada orang yang butuh tahu bahwa ada sesuatu yang mengalir di bawah yang mereka injak setiap hari.`
  },
  {
    category: "alam",
    emoji: "❄️", name: "Salju Pertama",
    preview: `Kamu membuat segalanya kelihatan bersih, baru, dan penuh kemungkinan. Orang bersemangat saat pertama kali melihatmu. Tapi salju selanjutnya? Sudah biasa. Tidak ada yang seistimewa kedatanganmu yang pertama — dan kamu tidak bisa datang pertama kali lebih dari sekali.`,
    full_dark: `Kamu pernah membuat semua orang berhenti dan terkagum. Tapi pengalaman pertama tidak bisa diulang — dan kamu tidak bisa terus bersaing dengan versi pertamamu sendiri. Itu beban yang tidak adil untuk ditanggung.`,
    full_advice: `Kamu tidak harus selalu jadi yang pertama untuk tetap berarti. Salju yang kesepuluh pun masih dingin, masih nyata, masih bisa membuat seseorang berhenti dan tersenyum — kalau mereka mau memperhatikan.`
  },
  {
    category: "alam",
    emoji: "🌪️", name: "Angin Puting Beliung",
    preview: `Kamu datang dan mengubah segalanya — mau atau tidak, siap atau tidak, setuju atau tidak. Setelahmu, tidak ada yang sama lagi. Orang takut, tapi juga tidak bisa mengalihkan pandangan. Kamu terlalu kuat untuk diabaikan dan terlalu tidak terduga untuk dihadapi dengan tenang.`,
    full_dark: `Kamu membawa perubahan — tapi tidak selalu menanyakan apakah orang siap. Dan kerusakan yang ditinggalkan setelahmu sering kali lebih diingat daripada alasan kamu datang. Niatmu tidak cukup kalau dampaknya tidak diperhitungkan.`,
    full_advice: `Kekuatanmu nyata. Tapi kekuatan tanpa arah hanya meninggalkan puing. Coba tanyakan sesekali — perubahan yang kamu bawa itu membantu, atau hanya membuktikan bahwa kamu bisa?`
  },
  {
    category: "alam",
    emoji: "🪨", name: "Batu di Tengah Jalan",
    preview: `Semua orang harus memutuskan apa yang dilakukan terhadapmu — melangkah, melompati, atau memutar jalan. Kamu tidak meminta untuk ada di sana. Kamu hanya ada. Tapi kehadiranmu memaksa semua orang untuk sadar dan membuat pilihan.`,
    full_dark: `Kamu sudah sering dianggap penghalang — padahal kamu tidak pernah memilih untuk jadi di tengah jalan. Kamu ada di sana karena serangkaian hal yang terjadi sebelum kamu punya kendali atasnya. Tapi yang disalahkan tetap kamu.`,
    full_advice: `Tidak semua yang dianggap penghalang memang berniat menghalangi. Dan tidak semua orang yang tersandung kamu punya hak untuk menyalahkanmu. Kamu ada — dan itu bukan kejahatan.`
  },
  {
    category: "alam",
    emoji: "🌱", name: "Tanaman Liar",
    preview: `Tidak ada yang menanammu, tidak ada yang merawatmu, tidak ada yang sengaja memberimu tempat. Tapi kamu tumbuh juga — di celah aspal, di sudut tembok, di tempat yang tidak ada yang sangka bisa ditumbuhi sesuatu. Karena kamu tidak menunggu kondisi yang sempurna.`,
    full_dark: `Kamu tumbuh tanpa dukungan — dan itu kekuatanmu sekaligus lukamu. Karena tumbuh sendiri membuat kamu tidak tahu rasanya dirawat, tidak tahu apakah kamu layak mendapat perhatian, tidak tahu cara menerima bantuan tanpa curiga.`,
    full_advice: `Tumbuh sendiri itu hebat. Tapi kamu juga berhak ditanam di tanah yang subur, disiram, dan diberi ruang yang lebih baik dari celah aspal. Jangan terlalu cepat menolak tanah yang bagus hanya karena tidak terbiasa ditawari.`
  },
  {
    category: "alam",
    emoji: "🌊", name: "Air Tenang",
    preview: `Kamu terlihat diam. Tenang. Tidak ada riak, tidak ada suara. Orang merasa nyaman di dekatmu — tapi ada yang selalu sedikit bertanya-tanya: setenang itu apa memang tidak ada apa-apa di bawahnya?`,
    full_dark: `Kamu sudah belajar menyembunyikan pergerakanmu dari permukaan dengan sangat baik. Tapi di bawahnya, arus terus mengalir — kuat, bertujuan, tidak pernah benar-benar berhenti. Hanya tidak terlihat. Dan kamu biarkan semua orang percaya bahwa kamu memang sedangkal penampilanmu.`,
    full_advice: `Tidak harus selalu menampilkan kedalaman ke permukaan. Tapi pilih orang-orang yang layak untuk tahu bahwa di bawah ketenanganmu ada sesuatu yang jauh lebih dalam dari yang mereka kira.`
  },

  // ============================================================
  // KATEGORI 5: FENOMENA SOSIAL (15 objek)
  // ============================================================
  {
    category: "fenomena",
    emoji: "📶", name: "Sinyal Satu Bar",
    preview: `Kamu masih ada — tapi tidak cukup untuk hal yang benar-benar penting. Pesan terkirim, tapi lambat. Panggilan nyambung, tapi sering putus di tengah. Kamu tidak absen, tapi juga tidak hadir sepenuhnya. Dan itu sering lebih menyebalkan daripada tidak ada sinyal sama sekali.`,
    full_dark: `Kamu memberikan cukup untuk orang tidak bisa menyebutmu tidak ada — tapi tidak cukup untuk mereka merasa benar-benar terhubung. Setengah-setengah itu bukan jalan tengah yang bijak. Sering kali itu hanya cara menghindari pilihan.`,
    full_advice: `Pilih: hadir sepenuhnya atau tidak sama sekali. Hadir dengan satu bar itu melelahkan — untuk kamu dan untuk semua yang mencoba terhubung denganmu. Lebih baik jujur soal kapasitasmu daripada terus setengah-setengah.`
  },
  {
    category: "fenomena",
    emoji: "🔔", name: "Notifikasi yang Diabaikan",
    preview: `Kamu muncul, kamu berbunyi, kamu sudah melakukan bagianmu. Tapi layarnya tidak dibuka. Kamu menumpuk bersama ratusan yang lain — semua menunggu, semua penting bagi yang mengirim, tidak ada yang diprioritaskan oleh yang menerima.`,
    full_dark: `Kamu sudah terbiasa tidak dibalas — dan pelan-pelan kamu mulai meragukan apakah pesanmu memang penting atau hanya gangguan bagi yang menerimanya. Keraguan itu yang paling menggerogoti, lebih dari penolakan yang jelas sekalipun.`,
    full_advice: `Kalau pesanmu terus diabaikan oleh orang yang sama, itu bukan tentang waktu yang belum tepat. Itu tentang prioritas — dan kamu bukan prioritasnya. Mengetahui itu lebih awal menghemat banyak energi.`
  },
  {
    category: "fenomena",
    emoji: "🪞", name: "Cermin Retak",
    preview: `Kamu masih bisa memantulkan gambar — tapi tidak utuh. Ada bagian yang terdistorsi, ada yang terpecah, ada yang tidak kelihatan. Orang masih bercermin ke kamu, tapi tidak pernah yakin apakah yang mereka lihat itu benar-benar diri mereka.`,
    full_dark: `Kamu sudah lama memberikan gambaran yang tidak sepenuhnya akurat — bukan karena berniat menipu, tapi karena kamu sendiri sudah retak sebelum orang datang untuk bercermin. Dan tidak ada yang pernah bertanya bagaimana kondisimu sebelum mulai menuntut pantulan yang sempurna.`,
    full_advice: `Sebelum jadi cermin bagi orang lain, lihat dirimu sendiri dulu. Cermin yang retak tidak bisa memberikan gambaran yang utuh — baik untuk orang lain maupun untuk dirimu sendiri.`
  },
  {
    category: "fenomena",
    emoji: "🎭", name: "Topeng",
    preview: `Kamu selalu ada saat yang asli terasa terlalu berat untuk ditampilkan. Di balikmu, orang bisa jadi apa saja — lebih berani, lebih rapi, lebih kelihatan baik-baik saja. Kamu tidak berbohong untuk mereka. Kamu hanya memberi jeda dari kenyataan.`,
    full_dark: `Masalahnya, kamu sudah bertahan terlalu lama sampai yang asli lupa seperti apa rasanya. Wajah di balikmu sudah tidak terlatih untuk ditampilkan. Dan sekarang yang paling menakutkan justru pertanyaan sederhana: siapa aslinya kalau topengnya dilepas?`,
    full_advice: `Melepas topeng itu menakutkan — tapi tidak melepasnya lebih lama lagi itu melelahkan. Mulai dari orang yang paling aman. Satu orang yang kamu percaya melihatmu tanpa topeng sudah cukup untuk awal.`
  },
  {
    category: "fenomena",
    emoji: "🏃", name: "Orang yang Selalu Sibuk",
    preview: `Kamu tidak pernah berhenti. Selalu ada yang dikerjakan, selalu ada alasan untuk tidak duduk diam. Orang kagum — "wah produktif banget." Tapi tidak ada yang tanya apakah kamu sibuk karena memang ada yang dikerjakan, atau karena diam itu terlalu sunyi untuk kamu hadapi.`,
    full_dark: `Kamu lari. Bukan dari pekerjaan — tapi dari waktu kosong yang memaksamu bertemu dengan dirimu sendiri. Selama terus bergerak, tidak perlu menjawab pertanyaan yang sudah lama menunggu jawaban.`,
    full_advice: `Coba diam sebentar. Bukan lama — hanya cukup untuk dengar apa yang selama ini kamu hindari dengan terus bergerak. Yang menakutkan dari kesunyian bukan isi sunyinya. Tapi kenyataan bahwa kamu tidak kenal dirimu sendiri di dalamnya.`
  },
  {
    category: "fenomena",
    emoji: "💬", name: "Chat yang Tidak Terkirim",
    preview: `Kamu sudah diketik. Sudah selesai. Sudah siap. Tapi ada sesuatu yang membuat jarinya berhenti sebelum menekan kirim — dan kamu duduk di sana, menunggu keputusan yang tidak kunjung datang. Perasaan yang sudah dirangkai tapi tidak pernah sampai ke tujuannya.`,
    full_dark: `Kamu tidak pernah terkirim bukan karena tidak penting. Tapi karena rasa takut menjadi lebih kuat dari keinginan untuk jujur. Dan yang paling menyedihkan — yang dituju tidak pernah tahu bahwa ada yang hampir dikatakan.`,
    full_advice: `Ada momen dimana tidak terkirim memang pilihan yang bijak. Tapi kalau selalu begitu — ada sesuatu yang lebih besar dari sekadar pesan yang perlu diperiksa. Jujur itu butuh latihan, dan latihan itu dimulai dari suatu tempat.`
  },
  {
    category: "fenomena",
    emoji: "👁️", name: "Centang Dua Biru",
    preview: `Kamu sudah dibaca. Mereka tahu. Kamu tahu mereka tahu. Tapi tidak ada balasan. Kamu duduk di sana — terbuka, terbaca, diabaikan dengan sangat sadar. Bukan tidak kelihatan. Dipilih untuk tidak dijawab.`,
    full_dark: `Dibaca tapi tidak dibalas itu lebih menyakitkan dari tidak dibaca sama sekali — karena artinya ada keputusan aktif untuk tidak merespons kamu. Dan kamu harus duduk dengan pengetahuan itu tanpa bisa melakukan apapun.`,
    full_advice: `Satu kali diabaikan, mungkin sibuk. Dua kali, mungkin lupa. Tiga kali — itu jawaban. Dan jawaban yang diam tetap jawaban, meski terasa tidak adil. Hargai dirimu cukup untuk tidak terus mengetuk pintu yang sudah jelas tidak akan dibuka.`
  },
  {
    category: "fenomena",
    emoji: "🧩", name: "Potongan Puzzle yang Hilang",
    preview: `Semua orang tahu ada yang kurang. Gambarnya hampir selesai — tapi ada satu lubang yang tidak bisa diisi dengan apapun selain kamu. Dan kamu ada di suatu tempat, tidak tahu bahwa ada yang menunggu kehadiranmu untuk merasa lengkap.`,
    full_dark: `Kamu mungkin tidak sadar betapa pentingnya tempatmu. Kamu anggap dirimu potongan kecil yang tidak terlalu berpengaruh — padahal tanpamu, gambar besar yang sudah hampir selesai itu tetap terasa belum selesai.`,
    full_advice: `Cari tempat yang memang kosong untukmu — bukan yang memaksamu untuk muat di lubang dengan bentuk yang salah. Potongan puzzle yang dipaksakan tidak pernah benar-benar pas, dan itu terlihat.`
  },
  {
    category: "fenomena",
    emoji: "🚪", name: "Pintu yang Selalu Terbuka",
    preview: `Kamu tidak pernah ditutup untuk siapapun. Semua boleh masuk, semua boleh keluar, semua kapanpun mereka mau. Itu terasa seperti kebaikan. Tapi pintu yang tidak pernah ditutup juga tidak pernah memberi rasa aman untuk yang di dalam.`,
    full_dark: `Kamu membuka diri untuk semua orang tanpa syarat — dan itu indah sekaligus berbahaya. Karena tidak semua yang masuk punya niat yang baik. Dan kamu terlalu terbuka untuk menyadarinya sebelum terlambat.`,
    full_advice: `Boleh tetap terbuka. Tapi belajar untuk bisa menutup diri juga — bukan untuk semua orang, tapi untuk yang tidak layak masuk. Pintu yang bisa ditutup justru membuat pintu terbuka terasa lebih berarti.`
  },
  {
    category: "fenomena",
    emoji: "🎈", name: "Balon yang Dilepas",
    preview: `Kamu dilepaskan — entah dengan sengaja atau tidak sengaja. Sekarang kamu naik, terus naik, semakin jauh dari tempat kamu berasal. Dari bawah terlihat indah. Tapi dari atas, tidak ada yang bisa dijangkau lagi.`,
    full_dark: `Kamu pergi dengan cara yang terlihat bebas dari luar. Tapi kamu tidak pernah memilih untuk dilepas — itu terjadi. Dan semakin jauh kamu dari tempat asalmu, semakin kamu tidak tahu ke mana kamu sebenarnya menuju.`,
    full_advice: `Ketinggian tidak selalu berarti kebebasan. Kadang itu hanya berarti semakin jauh dari tempat kamu sebenarnya ingin berada. Tidak apa-apa untuk mencari cara turun kembali.`
  },
  {
    category: "fenomena",
    emoji: "🪤", name: "Jebakan Tikus",
    preview: `Kamu dipasang di tempat yang strategis dengan umpan yang sempurna. Siapapun yang mendekatimu berpikir ada sesuatu yang baik. Dan memang ada — tapi ada konsekuensi yang tidak disebutkan di depan. Selalu ada yang tidak disebutkan di depan.`,
    full_dark: `Kamu sudah pernah masuk ke dalam sesuatu yang kelihatan menarik dari luar — dan baru sadar ada yang salah setelah sudah terlambat untuk keluar dengan mudah. Dan kamu menyalahkan dirimu sendiri untuk itu. Padahal umpannya memang dirancang agar tidak terlihat berbahaya.`,
    full_advice: `Tidak semua yang menarik aman untuk didekati. Tapi tidak semua yang menarik juga jebakan. Bedanya ada di sana — pada apakah ada yang disembunyikan di balik umpannya. Belajar membaca itu butuh waktu, dan tidak apa-apa.`
  },
  {
    category: "fenomena",
    emoji: "🌐", name: "Sinyal WiFi Tetangga",
    preview: `Kamu bisa dilihat, terdeteksi, tergoda untuk dihubungi — tapi ada kata "secured" yang menghalangi. Orang tahu kamu ada, tapi tidak bisa masuk tanpa izin. Dan beberapa tetap mencoba, menebak-nebak passwordnya, berharap bisa masuk tanpa diajak.`,
    full_dark: `Kamu sudah pernah membiarkan seseorang masuk tanpa benar-benar mengizinkan mereka — dan hasilnya mereka mengonsumsi bandwidthmu tanpa pernah berkontribusi apapun. Sekarang kamu lebih waspada. Tapi waspada yang terlalu ketat juga punya harga.`,
    full_advice: `Tidak semua yang meminta akses layak mendapatkannya. Tapi jangan sampai passwordmu jadi terlalu rumit untuk siapapun — termasuk yang memang berhak masuk.`
  },
  {
    category: "fenomena",
    emoji: "📊", name: "Grafik yang Terus Turun",
    preview: `Semua orang melihatmu dan langsung khawatir. Panggilan darurat, rapat mendadak, pertanyaan yang sama diulang-ulang — "kenapa bisa turun?" Tidak ada yang bertanya apakah kamu baik-baik saja. Yang mereka tanya hanya bagaimana caranya supaya kamu naik lagi.`,
    full_dark: `Kamu turun bukan tanpa alasan. Ada hal-hal yang terjadi di balik grafik itu yang tidak terlihat di angka-angkanya. Tapi tidak ada yang mau repot memahami konteksnya — yang dilihat hanya arahnya. Dan arahnya ke bawah.`,
    full_advice: `Turun itu tidak selalu buruk. Kadang itu koreksi. Kadang itu napas. Yang penting bukan tidak pernah turun — tapi mengerti kenapa, dan apa yang perlu berubah. Grafik yang sehat pun naik turun.`
  },
  {
    category: "fenomena",
    emoji: "🔄", name: "Loading yang Tidak Selesai",
    preview: `Kamu sudah mulai — sudah ada progres, sudah berjalan. Tapi tidak kunjung selesai. Terus berputar, terus memuat, terus memberikan harapan bahwa sebentar lagi akan selesai. Dan orang menunggu. Sampai ada yang kehilangan sabar dan menutup jendelanya.`,
    full_dark: `Kamu tidak gagal menyelesaikan — kamu hanya membutuhkan lebih banyak waktu dan kapasitas yang tidak selalu tersedia. Tapi bagi yang menunggu, alasannya tidak terlalu penting. Yang mereka tahu, kamu tidak kunjung selesai.`,
    full_advice: `Kalau kamu butuh waktu lebih, bilang dari awal. Jangan biarkan orang terus menunggu tanpa tahu seberapa lama. Transparansi tentang prosesmu lebih dihargai daripada janji selesai yang tidak kunjung terpenuhi.`
  },

  // ============================================================
  // KATEGORI 6: ALAT & PERKAKAS (14 objek)
  // ============================================================
  {
    category: "perkakas",
    emoji: "🔨", name: "Palu",
    preview: `Kamu kuat dan langsung — tidak ada yang ambigu dari cara kerjamu. Tapi kekuatanmu membuat orang kadang lupa bahwa tidak semua masalah butuh dipukul. Dan kamu, tanpa sadar, sudah menghancurkan beberapa hal yang sebenarnya hanya butuh sedikit sentuhan lembut.`,
    full_dark: `Kamu tidak tahu cara lain selain memukul. Bukan karena kamu tidak mau belajar — tapi karena selama ini yang diminta selalu sama: pukul lebih keras. Dan sekarang kamu tidak tahu lagi cara menangani sesuatu yang rapuh tanpa membuat lubang.`,
    full_advice: `Kekuatanmu berharga — tapi belajar kapan harus menahannya. Tidak semua yang perlu diperbaiki harus dipukul dulu. Kadang yang dibutuhkan bukan kekuatan, tapi ketelitian.`
  },
  {
    category: "perkakas",
    emoji: "🪛", name: "Obeng Salah Ukuran",
    preview: `Kamu ada, kamu siap, kamu mau membantu — tapi ukuranmu tidak cocok dengan sekrup yang ada. Bisa dipaksakan? Bisa. Akan berhasil? Tidak sepenuhnya. Kamu dan tempatmu tidak diciptakan untuk satu sama lain, dan tidak ada yang bisa mengubah itu dengan tenaga ekstra.`,
    full_dark: `Kamu sudah terlalu sering memaksakan diri masuk ke tempat yang tidak cocok — dan hasilnya selalu sama: sekrupnya rusak, kamu aus, dan tidak ada yang benar-benar terpasang dengan baik. Tapi kamu terus mencoba karena tidak ada yang bilang "ini bukan tempatmu."`,
    full_advice: `Ada tempat yang memang ukuranmu. Tidak perlu memaksakan diri ke yang tidak pas hanya karena ukuran yang lain sedang tidak tersedia. Yang tepat akan terasa berbeda — tidak perlu dipaksa, tidak perlu tenaga ekstra.`
  },
  {
    category: "perkakas",
    emoji: "📏", name: "Penggaris Bengkok",
    preview: `Kamu seharusnya jadi tolok ukur — tapi kamu sendiri tidak lurus. Orang masih menggunakanmu sebagai patokan, masih percaya pada angka-angkamu, tapi hasilnya selalu sedikit meleset. Dan tidak ada yang langsung sadar bahwa sumber masalahnya adalah penggaris yang dijadikan patokan.`,
    full_dark: `Kamu memberikan standar kepada orang lain — tapi standarmu sendiri sudah lama tidak akurat. Kamu menilai, kamu mengukur, kamu membandingkan. Padahal kamu sendiri bengkok sejak lama dan tidak pernah memeriksa dirimu sendiri.`,
    full_advice: `Sebelum mengukur orang lain, periksa dulu apakah penggarisMu masih lurus. Standar yang diberikan oleh sesuatu yang tidak akurat hanya akan menghasilkan ketidakakuratan yang diwariskan.`
  },
  {
    category: "perkakas",
    emoji: "✂️", name: "Gunting Tumpul",
    preview: `Kamu masih bisa memotong — tapi butuh usaha lebih besar dari yang seharusnya. Yang seharusnya sekali potong jadi dua kali. Yang seharusnya rapi jadi sobek. Kamu tidak rusak, hanya sudah tidak setajam dulu. Dan itu butuh diakui, bukan disembunyikan.`,
    full_dark: `Kamu tumpul karena terlalu sering digunakan tanpa pernah diasah. Tidak ada yang peduli untuk memeriksa kondisimu — selama kamu masih bisa difungsikan, tidak ada yang bertanya apakah kamu baik-baik saja.`,
    full_advice: `Minta diasah. Jangan terus memaksakan diri memotong dengan kondisi yang sudah melampaui batasmu. Mengakui bahwa kamu butuh diasah itu bukan kelemahan — itu perawatan yang sudah terlambat.`
  },
  {
    category: "perkakas",
    emoji: "🔑", name: "Kunci Tanpa Gembok",
    preview: `Kamu punya bentuk yang unik, kamu dirancang untuk membuka sesuatu — tapi gembok yang kamu ciptakan untuknya entah di mana. Kamu terus mencoba berbagai pintu, tapi tidak ada yang cocok. Kamu tidak salah bentuk. Hanya belum ketemu gemboknya.`,
    full_dark: `Kamu sudah mencoba terlalu banyak pintu yang salah sampai mulai bertanya-tanya apakah memang ada gembok yang diciptakan untukmu. Keraguan itu lebih menyiksa dari pintu yang tidak pernah terbuka.`,
    full_advice: `Gembokmu ada di suatu tempat — dan kamu akan tahu saat menemukannya, karena tidak perlu dipaksakan. Yang perlu dijaga adalah jangan sampai kamu aus karena terlalu sering mencoba pintu yang salah.`
  },
  {
    category: "perkakas",
    emoji: "🧰", name: "Kotak Perkakas Penuh",
    preview: `Kamu punya segalanya. Siap untuk apapun, lengkap untuk semua situasi — tapi karena punya segalanya, kamu juga berat untuk dibawa ke mana-mana. Orang lebih suka yang lebih ringan meski tidak selengkap kamu. Kelengkapanmu kadang jadi alasan untuk ditinggal di rumah.`,
    full_dark: `Kamu sudah belajar jadi segalanya untuk semua orang — sampai kamu sendiri tidak tahu lagi apa yang sebenarnya kamu butuhkan. Di balik semua kelengkapan itu, ada satu hal yang tidak pernah ada: seseorang yang datang untuk merawat kamu.`,
    full_advice: `Tidak harus selalu siap dengan segalanya. Boleh hanya punya beberapa hal tapi merawatnya dengan baik. Lebih baik sedikit yang terjaga daripada banyak yang berantakan di dalam.`
  },
  {
    category: "perkakas",
    emoji: "🪚", name: "Gergaji Berkarat",
    preview: `Kamu pernah tajam. Pernah efisien, pernah diandalan untuk pekerjaan besar. Tapi karat itu datang pelan-pelan — saat kamu tidak dirawat, saat dibiarkan sendirian terlalu lama di tempat yang lembab. Sekarang kamu masih bisa difungsikan, tapi dengan lebih banyak usaha dan lebih banyak suara.`,
    full_dark: `Karat itu bukan salahmu sepenuhnya. Kamu dibiarkan di kondisi yang membuat karat tak terhindarkan — dan tidak ada yang peduli untuk membersihkan atau memindahkanmu sebelum terlambat. Tapi kamu juga tidak pernah meminta untuk dipindahkan.`,
    full_advice: `Karat bisa dibersihkan — tidak sepenuhnya, tapi cukup untuk bisa difungsikan kembali dengan baik. Tapi itu butuh mau untuk dibersihkan, dan mau untuk tidak kembali ke tempat yang membuatmu berkarat lagi.`
  },
  {
    category: "perkakas",
    emoji: "🪝", name: "Paku Bengkok",
    preview: `Kamu dipukul terlalu keras di awal — dan sekarang kamu tidak bisa masuk lurus ke manapun. Bukan karena kamu buruk. Tapi karena awal yang salah membuat segalanya miring setelahnya. Dan memaksamu lurus sekarang hanya akan membuatmu patah.`,
    full_dark: `Awal yang kasar itu meninggalkan kedalaman yang tidak mudah diluruskan. Dan kamu sudah terlalu lama mencoba menyesuaikan diri dengan berbagai permukaan yang tidak dirancang untukmu. Hasilnya tidak pernah sempurna, tapi kamu terus mencoba.`,
    full_advice: `Ada yang harus dimulai dari awal yang baru untuk bisa lurus. Tidak memalukan untuk mengakui bahwa yang bengkok sejak awal tidak bisa dipaksakan lurus tanpa risiko patah. Mulai yang baru tidak berarti yang lama tidak berarti.`
  },
  {
    category: "perkakas",
    emoji: "🔧", name: "Kunci Pas Setengah Pas",
    preview: `Kamu hampir cocok. Hampir. Tapi "hampir" itu cukup untuk membuat baut slip saat dikencangkan, cukup untuk membuat pekerjaan jadi dua kali lebih lama, cukup untuk membuat orang frustrasi. Kamu tidak salah — hanya tidak benar-benar pas.`,
    full_dark: `Kamu sudah terlalu terbiasa menjadi "yang hampir cocok" di berbagai situasi. Hampir cocok sebagai teman, hampir cocok sebagai pasangan, hampir cocok di tempat kerja. Dan kamu tidak pernah yakin apakah masalahnya di kamu atau di tempatnya.`,
    full_advice: `"Hampir pas" itu bukan tempat yang nyaman untuk tinggal lama-lama. Cari yang benar-benar pas — di mana kamu tidak perlu menyesuaikan diri sampai aus, dan tempat itu tidak perlu memaksamu muat.`
  },
  {
    category: "perkakas",
    emoji: "🧲", name: "Magnet Lemah",
    preview: `Kamu menarik — tapi tidak cukup kuat untuk menahan. Sesuatu mendekat, merasa ada tarikan, lalu pelan-pelan terdrift pergi lagi. Kamu tidak pernah benar-benar bisa menjaga apa yang kamu tarik untuk tetap di tempatnya.`,
    full_dark: `Kamu punya daya tarik yang cukup untuk membuat orang tertarik — tapi tidak cukup untuk membuat mereka bertahan. Dan kamu tidak tahu apakah itu karena kekuatanmu yang kurang, atau karena yang datang memang tidak pernah berniat untuk menetap.`,
    full_advice: `Kekuatan tarikmu tidak harus ditingkatkan untuk semua orang. Yang perlu adalah menemukan yang memang punya kecenderungan alami untuk tertarik ke arahmu — bukan yang harus dipaksa dan ditahan dengan keras.`
  },
  {
    category: "perkakas",
    emoji: "📐", name: "Jangka",
    preview: `Kamu bisa membuat lingkaran yang sempurna — selama titik pusatnya tidak bergerak. Satu kaki kamu tetap di satu titik, yang lain menggambar keliling. Hidupmu bergantung pada seberapa kuat kamu bisa mempertahankan satu titik yang tetap.`,
    full_dark: `Kamu sudah kehilangan titik pusatmu — dan tanpa itu, semua yang kamu gambar jadi tidak karuan. Bukan lingkaran, bukan elips, hanya goresan yang tidak jelas arahnya. Dan kamu tidak selalu tahu kapan tepatnya kamu mulai kehilangan titik itu.`,
    full_advice: `Temukan kembali apa yang menjadi pusat hidupmu. Nilai, keyakinan, hal yang tidak boleh bergerak meski sekelilingnya berputar. Tanpa titik pusat yang kuat, kamu hanya bisa menggambar lingkaran yang bengkok.`
  },
  {
    category: "perkakas",
    emoji: "🔦", name: "Senter Berkedip",
    preview: `Kamu menyala — tapi tidak konsisten. Kadang terang, kadang redup, kadang mati sebentar lalu nyala lagi. Orang tidak bisa mengandalkanmu sepenuhnya, tapi juga tidak bisa meninggalkanmu sepenuhnya karena kadang-kadang kamu memang menyala dengan sempurna.`,
    full_dark: `Ketidakkonsistenanmu itu melelahkan — untuk orang lain dan untuk dirimu sendiri. Kamu tidak pernah sepenuhnya hadir, tidak pernah sepenuhnya pergi. Dan itu membuat orang tidak tahu harus memperlakukanmu seperti apa.`,
    full_advice: `Konsistensi itu bukan tentang selalu menyala terang. Boleh redup, boleh lebih pelan — tapi usahakan konsisten. Lebih mudah diandalkan daripada dikagumi tapi tidak bisa dipercaya.`
  },
  {
    category: "perkakas",
    emoji: "🕯️", name: "Lilin",
    preview: `Kamu menyala untuk menerangi orang lain — dan dalam prosesnya, kamu sendiri yang habis. Semakin lama kamu menyala, semakin pendek kamu. Tidak ada yang pernah berpikir tentang itu saat menikmati cahayamu.`,
    full_dark: `Kamu sudah terlalu sering membiarkan dirimu habis demi kenyamanan orang lain. Dan yang ironis — saat kamu sudah meleleh habis, orang tinggal menyalakan lilin baru. Tanpa upacara, tanpa terima kasih. Begitu saja.`,
    full_advice: `Menyala itu pilihan yang indah. Tapi pilih juga seberapa lama dan untuk siapa kamu menyala. Tidak semua kegelapan orang lain harus kamu terangi dengan mengorbankan dirimu sendiri.`
  },
  {
    category: "perkakas",
    emoji: "🪣", name: "Timba Sumur",
    preview: `Kamu turun ke tempat yang gelap dan dalam untuk mengambil sesuatu yang dibutuhkan orang di atas. Tidak ada yang melihatmu selama proses itu. Yang dilihat hanya saat kamu naik dengan hasil. Dan yang dinilai hanya seberapa penuh kamu.`,
    full_dark: `Kamu terus turun ke kedalaman yang tidak nyaman untuk mengangkat sesuatu bagi orang lain. Dan tidak ada yang pernah bertanya bagaimana rasanya turun — semuanya hanya peduli dengan apa yang kamu bawa naik.`,
    full_advice: `Boleh terus mengangkat sesuatu untuk orang lain — tapi pastikan ada yang juga mau mengangkatmu saat kamu butuh. Timba yang tidak pernah dirawat akhirnya tidak bisa turun dan naik lagi.`
  },

  // ============================================================
  // KATEGORI 7: KOSMETIK & PERAWATAN (16 objek)
  // ============================================================
  {
    category: "kosmetik",
    emoji: "💄", name: "Lipstik",
    preview: `Kamu mengubah segalanya hanya dengan satu sentuhan. Orang jadi lebih percaya diri, lebih siap, lebih "terlihat." Tapi kamu bisa terhapus — oleh waktu, oleh makanan, oleh terlalu banyak bicara. Dan kamu harus diulang berkali-kali untuk bertahan sepanjang hari.`,
    full_dark: `Kamu sudah terlalu sering jadi topeng kepercayaan diri seseorang — bukan jadi pelengkap, tapi pengganti. Dan saat kamu tidak ada, kepercayaan diri itu ikut hilang. Itu bukan baik untuk mereka, dan bukan peran yang kamu pilih.`,
    full_advice: `Kamu bisa membuat seseorang terlihat lebih baik. Tapi yang terbaik adalah saat itu melengkapi kepercayaan diri yang sudah ada di dalam — bukan menutupi ketiadaannya. Karena kamu tidak bisa selalu ada setiap saat.`
  },
  {
    category: "kosmetik",
    emoji: "🪥", name: "Sikat Gigi Lama",
    preview: `Kamu hadir setiap pagi dan setiap malam — lebih konsisten dari kebanyakan orang di hidup seseorang. Tidak pernah lupa, tidak pernah terlambat, tidak pernah minta hari libur. Tapi tidak ada yang pernah bersyukur atas kehadiranmu. Itu baru dirasakan saat kamu tidak ada.`,
    full_dark: `Kamu sudah terlalu lama difungsikan melampaui masanya — bulu-bulumu sudah tidak karuan, sudah tidak efektif, tapi masih digunakan juga karena orang malas menggantimu. Itu bukan kesetiaan. Itu kemalasan yang kamu tanggung.`,
    full_advice: `Tahu kapan waktunya untuk diganti — dan itu tidak memalukan. Yang terlalu lama bertahan di posisi yang sudah melampaui masanya tidak melayani siapapun dengan baik, termasuk dirinya sendiri.`
  },
  {
    category: "kosmetik",
    emoji: "🧴", name: "Pelembab yang Tidak Pernah Dipakai",
    preview: `Kamu dibeli dengan niat baik — "mulai sekarang aku akan merawat diri." Tapi kamu duduk di rak, segel masih utuh, menunggu waktu yang tepat yang tidak pernah datang. Penuh kemungkinan, tapi tidak pernah disentuh.`,
    full_dark: `Kamu jadi bukti janji yang tidak pernah ditepati — bukan untuk orang lain, tapi untuk diri sendiri. Dan setiap kali terlihat, ada rasa bersalah kecil yang muncul. Bukan tentang kamu. Tentang semua yang sudah dijanjikan tapi tidak pernah dimulai.`,
    full_advice: `Mulai sekarang, bukan nanti. Bukan saat waktu tepat — karena waktu tepat tidak akan datang sendiri. Buka segelnya. Pakai sedikit. Itu sudah cukup untuk hari ini.`
  },
  {
    category: "kosmetik",
    emoji: "🪞", name: "Kaca Pembesar",
    preview: `Kamu membuat segalanya terlihat lebih besar — detail yang tidak terlihat mata biasa, bagian yang selama ini tersembunyi. Itu berguna. Tapi kamu juga membuat setiap kekurangan kecil terlihat jauh lebih besar dari ukuran aslinya.`,
    full_dark: `Kamu terlalu sering membesarkan kekurangan dirimu sendiri — memperbesar setiap noda kecil sampai terlihat seperti bencana, setiap kekurangan kecil sampai terasa seperti cacat besar. Dan lupa bahwa itu hanya sebesar yang kamu putuskan untuk dilihat.`,
    full_advice: `Sama seperti kaca pembesar bisa dibalik — coba gunakan yang sama untuk memperbesar hal-hal baik yang ada pada dirimu. Perhatianmu ke kekuranganmu sudah cukup banyak. Sudah waktunya sedikit lebih banyak ke yang lain.`
  },
  {
    category: "kosmetik",
    emoji: "💅", name: "Cat Kuku Mengelupas",
    preview: `Kamu pernah terlihat sempurna — warna yang rata, mengkilap, rapi. Tapi sekarang pinggiran-pinggirnya sudah mulai terangkat. Masih terlihat oke dari jauh, tapi dari dekat sudah kelihatan bahwa ada yang tidak lagi seindah awalnya.`,
    full_dark: `Kamu sudah terlalu lama mempertahankan penampilan yang sudah mulai mengelupas di dalam — dari jauh masih terlihat baik, tapi kamu sendiri tahu seberapa banyak yang sudah tidak lagi seperti semula. Dan usaha untuk terus terlihat sempurna itu melelahkan.`,
    full_advice: `Tidak apa-apa untuk mulai dari awal — bersihkan semuanya dan mulai lagi dengan yang baru. Lebih baik tampil tanpa warna daripada terus mempertahankan yang sudah mengelupas dan tidak bisa diperbaiki lagi.`
  },
  {
    category: "kosmetik",
    emoji: "🧖", name: "Masker Wajah",
    preview: `Kamu hanya disentuh saat ada waktu — saat tidak ada yang lain yang lebih mendesak, saat semua pekerjaan selesai, saat mood-nya lagi bagus. Artinya, kamu jarang sekali disentuh. Karena selalu ada yang lebih mendesak dari merawat diri sendiri.`,
    full_dark: `Kamu adalah perawatan diri yang terus ditunda — dijanjikan tapi tidak pernah diprioritaskan. Dan ironisnya, saat paling butuh dirawat justru saat paling tidak ada waktu dan energi untuk melakukannya.`,
    full_advice: `Merawat diri bukan kemewahan yang harus menunggu semua selesai. Itu kebutuhan yang harus dijadwalkan seperti hal penting lainnya — karena kalau tidak dijadwalkan, tidak akan pernah ada waktunya.`
  },
  {
    category: "kosmetik",
    emoji: "🪒", name: "Pisau Cukur Tumpul",
    preview: `Kamu masih bisa — tapi tidak semulus dulu. Yang seharusnya satu langkah jadi tiga langkah. Yang seharusnya bersih jadi sedikit tergores. Kamu tidak rusak. Kamu hanya sudah terlalu banyak difungsikan tanpa pernah diistirahatkan.`,
    full_dark: `Kamu sudah aus karena terlalu sering digunakan tanpa pernah diberi kesempatan untuk pulih. Dan yang menyedihkan, kamu sendiri tidak pernah memintanya — karena sudah terbiasa terus difungsikan sampai benar-benar tidak bisa lagi.`,
    full_advice: `Minta istirahat sebelum benar-benar aus. Yang sudah terlalu tumpul untuk berfungsi dengan baik tidak melayani siapapun dengan baik — termasuk dirinya sendiri.`
  },
  {
    category: "kosmetik",
    emoji: "🧼", name: "Sabun Mandi",
    preview: `Tugasmu membersihkan — setiap hari, tanpa pengecualian, tanpa keluhan. Kamu habis perlahan sambil membersihkan kotoran orang lain. Dan semakin bersih orang yang kamu layani, semakin kecil kamu yang tersisa.`,
    full_dark: `Ada yang ironis dari hidupmu — semakin banyak kamu membersihkan, semakin kamu berkurang. Dan tidak ada yang pernah menghitung seberapa banyak yang sudah hilang dari dirimu dalam proses membersihkan semuanya untuk orang lain.`,
    full_advice: `Membersihkan diri sendiri sama pentingnya dengan membersihkan orang lain. Jangan habiskan semua yang kamu punya untuk orang lain sampai tidak ada lagi yang tersisa untuk dirimu sendiri.`
  },
  {
    category: "kosmetik",
    emoji: "💊", name: "Vitamin yang Terlupakan",
    preview: `Kamu dibeli karena ada niat untuk menjadi lebih baik. Tapi niat baik tanpa kebiasaan tidak menghasilkan apapun — dan kamu duduk di samping tempat tidur, menonton hari demi hari berlalu tanpa diminum. Potensi yang tidak pernah diaktifkan.`,
    full_dark: `Kamu jadi pengingat diam-diam dari semua tekad yang tidak pernah bertahan lebih dari beberapa hari. Setiap kali terlihat, ada perasaan gagal kecil yang muncul. Bukan tentang kesehatan. Tentang konsistensi yang tidak pernah bisa dijaga.`,
    full_advice: `Mulai lagi — tanpa harus menyelesaikan botol yang ada dari awal. Setiap hari yang dimulai adalah kesempatan baru. Tidak harus sempurna dan tidak putus untuk tetap berarti.`
  },
  {
    category: "kosmetik",
    emoji: "🪮", name: "Sisir Kusut",
    preview: `Kamu menyimpan terlalu banyak — rambut yang sudah rontok, sisa dari banyak hari yang berbeda, hal-hal yang seharusnya sudah dilepaskan. Kamu masih berfungsi, tapi dengan semua yang kamu bawa, kamu jadi lebih berat dan kurang efektif dari seharusnya.`,
    full_dark: `Kamu tidak tahu cara melepaskan apa yang sudah tertinggal — dan karena itu kamu terus membawa sisa dari semua yang sudah berlalu. Bukan kesetiaan pada masa lalu. Itu ketidakmampuan untuk membereskan.`,
    full_advice: `Bersihkan sisirmu secara berkala. Lepaskan apa yang sudah bukan milikmu lagi. Bukan karena itu tidak pernah berarti — tapi karena membawa terlalu banyak sisa membuat kamu tidak bisa bergerak dengan bebas ke depan.`
  },
  {
    category: "kosmetik",
    emoji: "🧴", name: "Parfum Hampir Habis",
    preview: `Kamu tidak sebanyak dulu. Kalau dulu bisa disemprot bebas, sekarang setiap tetes diperhitungkan — dihemat untuk momen yang benar-benar penting. Kamu masih harum. Hanya sedikit lebih berhati-hati dari sebelumnya.`,
    full_dark: `Kamu sudah habiskan begitu banyak dari dirimu dengan begitu mudah di awal — dan sekarang kamu hanya tersisa sedikit. Sekarang kamu lebih selektif. Tapi ada pertanyaan yang tersisa: apakah kamu memang sudah lebih bijak, atau hanya sudah terlalu lelah untuk murah hati?`,
    full_advice: `Boleh lebih selektif tentang ke mana dan untuk siapa kamu memberikan dirimu. Itu bukan kekikiran — itu kebijaksanaan. Tapi pastikan itu benar-benar pilihan, bukan ketakutan.`
  },
  {
    category: "kosmetik",
    emoji: "💆", name: "Pijatan yang Terlewat",
    preview: `Kamu dibutuhkan — tubuh sudah tegang, kepala sudah berat, bahu sudah berteriak minta perhatian. Tapi selalu ada yang lebih mendesak. Terlalu sibuk, terlalu mahal, terlalu merepotkan untuk dijadwalkan. Sampai akhirnya tubuh yang memutuskan sendiri untuk berhenti.`,
    full_dark: `Kamu adalah kebutuhan yang terus dikorbankan atas nama produktivitas. Dan kamu terima itu — karena ada rasa bersalah saat istirahat, ada perasaan tidak berguna saat tidak bergerak. Tapi tubuh menyimpan semua yang kamu abaikan, dan catatannya tidak pernah dihapus.`,
    full_advice: `Istirahat bukan hadiah yang harus diraih setelah cukup produktif. Itu hak yang harus dijaga. Tubuh yang tidak pernah dipulihkan akhirnya memaksamu berhenti — dan biasanya di waktu yang paling tidak kamu pilih.`
  },
  {
    category: "kosmetik",
    emoji: "🪟", name: "Kaca Jendela Berminyak",
    preview: `Kamu ada di sana — tapi tidak ada yang mau repot membersihkanmu. Pandangan keluar jadi sedikit kabur, sedikit buram, sedikit tidak seperti yang seharusnya. Orang terbiasa melihat dunia lewat kamu yang tidak bersih dan mulai lupa bahwa ada yang lebih jernih dari ini.`,
    full_dark: `Kamu sudah lama tidak dibersihkan — bukan karena tidak ada yang bisa, tapi karena tidak ada yang mau meluangkan waktu. Dan lama-lama kamu sendiri lupa seperti apa rasanya bersih, seperti apa rasanya jernih tanpa lapisan yang menumpuk.`,
    full_advice: `Minta dibersihkan. Atau bersihkan sendiri. Tidak perlu menunggu sampai segalanya terlalu kotor untuk dilihat tembus. Sedikit usaha untuk membersihkan diri sendiri membuat segalanya jauh lebih jelas dari yang kamu bayangkan.`
  },
  {
    category: "kosmetik",
    emoji: "🛁", name: "Bak Mandi Jarang Dipakai",
    preview: `Kamu ada di sana — besar, siap, menjanjikan ketenangan. Tapi semua orang selalu memilih yang lebih cepat, lebih praktis, lebih efisien. Kamu bukan pilihan untuk hari-hari biasa. Kamu pilihan untuk saat ada waktu — yang hampir tidak pernah ada.`,
    full_dark: `Kamu sudah lama tidak pernah benar-benar digunakan untuk tujuanmu yang sesungguhnya. Dan lama-lama kamu jadi sekadar dekorasi — ada tapi tidak benar-benar hadir dalam kehidupan sehari-hari. Itu bukan hidup. Itu pajangan.`,
    full_advice: `Sesekali, pilih yang lebih lambat dan lebih dalam atas yang cepat dan dangkal. Bukan karena kamu punya waktu — tapi karena kamu butuh waktu. Ada bedanya.`
  },
  {
    category: "kosmetik",
    emoji: "🌸", name: "Bunga di Cermin",
    preview: `Kamu ditempel di pojok cermin — dekorasi kecil yang membuat rutinitas harian terasa sedikit lebih indah. Tidak penting, tidak fungsional, tapi entah kenapa kalau tidak ada, ada yang terasa berbeda. Kamu hal kecil yang ternyata lebih berarti dari yang diduga.`,
    full_dark: `Kamu sering diremehkan karena tidak punya fungsi yang jelas dan terukur. Di dunia yang menilai segalanya dari fungsinya, keberadaanmu terasa tidak bisa dipertahankan. Tapi tanpamu, semuanya terasa lebih dingin dari yang seharusnya.`,
    full_advice: `Tidak semua yang berharga harus bisa diukur dan dijelaskan fungsinya. Kadang nilai sesuatu ada di bagaimana ia membuat suasana menjadi sedikit lebih baik — dan itu sudah lebih dari cukup alasan untuk ada.`
  },
  {
    category: "kosmetik",
    emoji: "✨", name: "Glitter yang Susah Hilang",
    preview: `Kamu menyebar ke mana-mana tanpa minta izin. Semua yang pernah bersentuhan denganmu membawa sedikit darimu pergi — bahkan setelah lama berlalu, ada yang masih bersinar di tempat yang tidak terduga. Kamu tidak bisa ditarik kembali. Itu kekuatanmu sekaligus kekacauanmu.`,
    full_dark: `Kamu meninggalkan jejak di semua tempat dan semua orang yang pernah kamu sentuh. Beberapa senang. Beberapa kesal. Tapi tidak ada yang bisa berpura-pura kamu tidak pernah ada — karena jejakmu selalu ditemukan, bahkan di tempat yang tidak dicari.`,
    full_advice: `Kalau memang sudah terlanjur menyebar ke mana-mana, pastikan yang kamu tinggalkan adalah sesuatu yang membuat orang tersenyum saat menemukannya — bukan sesuatu yang membuat mereka lelah membersihkan.`
  },

];
