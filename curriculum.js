/* Latihan asal dipetakan kepada DSKP KSSR (Semakan 2017), BPK KPM.
   Tahun 1–5: 2019; Tahun 6: September 2021. Bukan pengganti pentaksiran amali. */
window.MUZIK_BANKS=[];
function bank(year,title,sp,text){const rows=text.trim().split('\n').map(line=>line.split('|'));if(rows.length!==20)throw Error(title+' mesti mempunyai 20 item');window.MUZIK_BANKS.push({year,title,sp,rows});}
bank(1,'Pic, Dinamik dan Warna Ton','1.1.1, 1.1.2, 1.1.3',`
Pic tinggi|Bunyi yang kedengaran lebih tinggi
Pic rendah|Bunyi yang kedengaran lebih rendah
Pic|Tinggi atau rendah sesuatu bunyi
Dinamik|Kuat atau lembut sesuatu bunyi
Warna ton|Ciri bunyi yang membezakan suara atau alat
Bunyi kuat|Bunyi dengan dinamik yang lebih kuat
Bunyi lembut|Bunyi dengan dinamik yang lebih lembut
Suara nyanyian|Suara manusia ketika menyanyikan lagu
Suara bercakap|Suara manusia ketika menyampaikan kata-kata
Suara memanggil|Suara manusia ketika menyeru seseorang
Bunyi gitar|Bunyi daripada tali gitar yang bergetar
Bunyi gendang|Bunyi daripada kulit gendang yang bergetar
Bunyi marakas|Bunyi bijian di dalam alat yang digoncang
Mengajuk pic|Meniru tinggi rendah bunyi yang didengar
Membezakan warna ton|Mengecam perbezaan bunyi dua sumber
Nyanyian lembut|Menyanyi dengan kekuatan suara yang kecil
Nyanyian kuat|Menyanyi dengan kekuatan suara yang lebih besar tanpa menjerit
Perubahan pic|Pertukaran bunyi daripada tinggi kepada rendah atau sebaliknya
Pic yang sama|Dua bunyi mempunyai tinggi rendah yang sama
Perubahan dinamik|Pertukaran kekuatan bunyi dalam muzik
`);
bank(1,'Nyanyian, Perkusi dan Gerakan','2.1.1, 2.1.2, 2.1.3, 2.2.1, 2.2.2, 2.2.3, 2.3.1',`
Sebutan jelas|Menyebut perkataan lagu supaya mudah difahami
Pic yang betul|Menyanyikan tinggi rendah nada dengan tepat
Tempo|Kelajuan muzik atau lagu
Detik|Denyutan muzik yang sekata
Mengikut tempo|Menyanyi atau bermain mengikut kelajuan lagu
Tepukan detik|Menepuk pada setiap denyutan muzik
Perkusi|Alat muzik yang dipukul atau digoncang
Tamborin|Alat berbingkai dengan kepingan logam kecil
Marakas|Alat berisi bijian yang digoncang
Kerincing|Alat segi tiga logam yang dipukul dengan pemukul
Kastanet|Dua kepingan kecil yang diketukkan dengan jari
Kompang|Alat berbingkai bulat dan berkulit
Gendang|Alat berkulit dengan badan berongga
Skor ikon|Gambar atau lambang yang membantu permainan irama
Corak irama|Susunan bunyi panjang dan pendek
Gerakan berdasarkan lirik|Melakukan aksi yang sesuai dengan perkataan lagu
Mula serentak|Memulakan permainan bersama selepas isyarat
Berhenti serentak|Mengakhiri permainan bersama selepas isyarat
Dengar sebelum mengajuk|Mendengar contoh dahulu sebelum menirunya
Kawalan suara|Menyanyi dengan selesa tanpa memaksa suara
`);
bank(1,'Cipta Bunyi dan Kenali Muzik Tradisional','3.1.1, 3.1.2, 3.1.3, 4.1.1',`
Bunyi daripada suara|Bunyi yang dicipta menggunakan mulut atau suara
Perkusi badan|Bunyi yang dihasilkan menggunakan anggota badan
Tepukan tangan|Bunyi daripada dua tapak tangan yang bertemu
Petikan jari|Bunyi kecil daripada pergerakan jari
Hentakan kaki|Bunyi daripada kaki yang menyentuh lantai
Alat improvisasi|Alat muzik yang dibuat daripada bahan sesuai
Botol berisi bijian|Contoh alat improvisasi yang digoncang
Kotak sebagai dram|Contoh alat improvisasi yang dipukul
Bahan selamat|Bahan yang tidak tajam dan tidak berbahaya
Meneroka bunyi|Mencuba beberapa cara menghasilkan bunyi
Corak berulang|Susunan bunyi yang dimainkan semula
Cipta corak irama|Menyusun bunyi panjang dan pendek sendiri
Persembahkan ciptaan|Memainkan hasil idea muzik yang telah dibuat
Muzik tradisional|Muzik warisan sesuatu masyarakat
Ensembel kompang|Kumpulan pemain alat kompang
Gamelan|Ensembel tradisional yang mempunyai alat seperti gong
Angklung|Alat buluh yang menghasilkan bunyi apabila digoncang
Caklempong|Alat tradisional berupa gong kecil
Dikir barat|Persembahan nyanyian tradisional secara berkumpulan
Menghargai warisan|Menghormati dan memelihara muzik tradisional
`);
bank(2,'Tempo dan Pergerakan Melodi','1.1.1, 1.1.2, 1.1.3, 1.1.4',`
Tempo cepat|Detik bergerak pada kelajuan yang tinggi
Tempo lambat|Detik bergerak pada kelajuan yang rendah
Melodi bertangga menaik|Pic bergerak ke nada bersebelahan yang lebih tinggi
Melodi bertangga menurun|Pic bergerak ke nada bersebelahan yang lebih rendah
Melodi mendatar|Rangkaian nada pada pic yang sama
Tempo|Kelajuan sesuatu muzik
Pic|Tinggi atau rendah bunyi muzik
Melodi|Rangkaian nada yang tersusun
Detik sekata|Denyutan yang mempunyai jarak masa tetap
Perubahan tempo|Pertukaran kelajuan muzik
Gerakan lebih cepat|Gerakan yang sesuai apabila tempo menjadi cepat
Gerakan lebih lambat|Gerakan yang sesuai apabila tempo menjadi lambat
Nada berulang|Nada yang sama dibunyikan beberapa kali
Nada bersebelahan|Dua nada yang terletak berdekatan dalam turutan
Naik bertangga|Pergerakan pic seperti menaiki anak tangga
Turun bertangga|Pergerakan pic seperti menuruni anak tangga
Pic mendatar|Tinggi rendah bunyi tidak berubah
Dengar dan banding|Mendengar dua contoh untuk mengenal perbezaan
Mengajuk melodi|Meniru rangkaian nada yang didengar
Menyanyi mengikut tempo|Mengekalkan kelajuan nyanyian sama dengan muzik
`);
bank(2,'Postur, Perkusi dan Gerakan Muzik','2.1.1, 2.1.2, 2.1.3, 2.1.4, 2.2.1, 2.2.2, 2.2.3, 2.3.1, 2.3.2',`
Postur berdiri|Berdiri tegak dan selesa ketika menyanyi
Postur duduk|Duduk tegak tanpa membongkok ketika menyanyi
Bahu relaks|Kedudukan bahu yang tidak tegang
Pic tepat|Nada nyanyian sepadan dengan contoh
Nyanyian berubah tempo|Kelajuan nyanyian berubah mengikut muzik
Irama|Gabungan bunyi panjang dan pendek
Detik|Denyutan muzik yang sekata
Skor ikon|Lambang bergambar untuk menunjukkan irama
Alat perkusi|Alat yang dipukul atau digoncang
Marakas|Alat penggoncang yang mengandungi bijian
Tamborin|Alat berbingkai dengan kepingan logam kecil
Kerincing|Alat segi tiga logam yang menggunakan pemukul
Kastanet|Alat kecil yang diketukkan antara dua kepingan
Kompang|Alat berbingkai berkulit yang ditepuk
Main mengikut detik|Membunyikan alat pada denyutan lagu
Main corak irama|Membunyikan alat mengikut panjang pendek bunyi
Gerakan melodi menaik|Gerakan yang menggambarkan pic menuju ke atas
Gerakan melodi menurun|Gerakan yang menggambarkan pic menuju ke bawah
Gerakan tempo cepat|Bergerak lebih pantas mengikut muzik
Gerakan tempo lambat|Bergerak lebih perlahan mengikut muzik
`);
bank(2,'Alat Improvisasi dan Muzik Masyarakat','3.1.1, 3.1.2, 3.1.3, 4.1.1',`
Alat improvisasi|Alat bunyi yang dihasilkan daripada bahan sesuai
Bekas bertutup berisi bijian|Contoh alat improvisasi untuk digoncang
Kotak berongga|Bahan yang boleh ditepuk untuk menghasilkan bunyi
Bahan kitar semula|Bahan terpakai yang boleh digunakan semula
Pemilihan bahan selamat|Mengelakkan bahan tajam atau mudah pecah
Bunyi pukulan|Bunyi yang terhasil apabila alat dipukul
Bunyi goncangan|Bunyi yang terhasil apabila alat digerakkan berulang
Corak irama mudah|Susunan bunyi yang ringkas untuk dimainkan
Ulangan irama|Memainkan corak yang sama sekali lagi
Variasi irama|Mengubah sebahagian susunan bunyi
Ciptaan sendiri|Idea muzik yang dibina oleh murid
Persembahan ciptaan|Memainkan hasil muzik yang telah dirancang
Muzik masyarakat Malaysia|Muzik yang diamalkan oleh masyarakat di Malaysia
Nama ensembel|Nama kumpulan atau jenis kumpulan muzik
Alat ensembel|Alat yang digunakan dalam kumpulan muzik
Kompang|Alat perkusi berbingkai berkulit
Gong|Alat logam bulat yang dipukul
Angklung|Alat buluh yang digoncang
Ulasan muzik|Penerangan tentang muzik selepas didengar
Pendengar beradab|Orang yang mendengar tanpa mengganggu persembahan
`);
bank(3,'Tekstur, Baluk dan Nilai Not','1.1.1, 1.1.2, 1.2.1, 1.2.2',`
Tekstur tebal|Banyak lapisan bunyi kedengaran bersama
Tekstur nipis|Sedikit lapisan bunyi kedengaran
Tekstur muzik|Ketebalan atau kenipisan lapisan bunyi muzik
Suara bersama alat|Contoh lebih daripada satu lapisan bunyi
Suara solo tanpa iringan|Contoh satu lapisan bunyi
Baluk|Lima garisan dan empat ruang untuk notasi
Not G pada klef trebel|Not pada garisan kedua dari bawah
Not A pada klef trebel|Not pada ruang kedua dari bawah
Not B pada klef trebel|Not pada garisan ketiga dari bawah
Semibrif|Not bernilai empat detik krocet
Minim|Not bernilai dua detik krocet
Krocet|Not bernilai satu detik krocet
Dua minim|Jumlah nilai empat detik krocet
Empat krocet|Jumlah nilai empat not satu detik
Minim dan krocet|Jumlah nilai tiga detik krocet
Semibrif dan minim|Jumlah nilai enam detik krocet
G ke A|Pergerakan pic naik satu langkah
B ke A|Pergerakan pic turun satu langkah
G A B|Turutan tiga pic yang menaik
B A G|Turutan tiga pic yang menurun
`);
bank(3,'Rekoder, Nyanyian dan Irama','2.1.1, 2.1.2, 2.1.3, 2.2.1, 2.2.2, 2.3.1, 2.3.2, 2.4.1, 2.4.2, 2.4.3',`
Rekoder|Alat muzik tiupan dengan lubang jari
Bahagian atas rekoder|Bahagian yang mempunyai muncung tiupan
Lubang ibu jari|Lubang di belakang rekoder
Tangan kiri|Tangan yang berada di bahagian atas rekoder
Tangan kanan|Tangan yang berada di bahagian bawah rekoder
Penjarian not B|Tutup lubang belakang dan lubang hadapan pertama
Penjarian not A|Tutup lubang belakang dan dua lubang hadapan atas
Penjarian not G|Tutup lubang belakang dan tiga lubang hadapan atas
Perlidahan|Memulakan bunyi dengan sebutan tu
Embouchure|Kedudukan mulut pada muncung alat
Tiupan terkawal|Tiupan lembut dan stabil untuk ton yang baik
Postur rekoder|Duduk atau berdiri tegak dan selesa
Lubang ditutup rapat|Keadaan jari yang membantu menghasilkan pic tepat
Menjaga rekoder|Membersihkan alat selepas digunakan
Rekoder sendiri|Alat yang tidak dikongsi muncungnya dengan orang lain
Pernafasan nyanyian|Mengawal udara ketika menyanyi
Pic nyanyian tepat|Nada suara sepadan dengan melodi lagu
Tempo permainan sekata|Kelajuan memainkan alat kekal stabil
Skor muzik|Notasi yang dibaca semasa bermain
Gerakan corak irama|Pergerakan yang mengikut panjang pendek bunyi
`);
bank(3,'Kesan Bunyi, Cipta Irama dan Muzik Popular','3.1.1, 3.1.2, 3.1.3, 4.1.1',`
Kesan bunyi|Bunyi yang membantu menggambarkan sesuatu peristiwa
Bunyi tapak kaki|Kesan bunyi yang sesuai untuk watak berjalan
Bunyi angin|Kesan bunyi yang sesuai untuk suasana berangin
Bunyi haiwan|Kesan bunyi yang boleh dihasilkan dengan suara
Medium suara|Menggunakan suara sebagai sumber kesan bunyi
Medium perkusi|Menggunakan alat pukulan atau goncangan sebagai sumber bunyi
Medium improvisasi|Menggunakan alat buatan sendiri sebagai sumber bunyi
Cipta irama|Menyusun nilai bunyi menjadi corak sendiri
Ikon irama|Lambang bergambar yang menunjukkan nilai bunyi
Corak empat detik|Susunan irama yang jumlahnya empat detik
Corak dua detik|Susunan irama yang jumlahnya dua detik
Ulangan corak|Corak yang dimainkan lebih daripada sekali
Rancang persembahan|Menentukan urutan bunyi sebelum mempersembahkan
Hasil ciptaan|Karya muzik yang dibuat sendiri
Muzik popular|Muzik yang digemari dan dikenali ramai pada sesuatu masa
Penyanyi|Orang yang menyanyikan lagu
Judul lagu|Nama sesebuah lagu
Ulasan lagu|Penerangan tentang lagu yang telah didengar
Dengar aktif|Memberi perhatian kepada muzik semasa mendengar
Pendapat beradab|Ulasan yang disampaikan dengan sopan
`);
bank(4,'Notasi dan Simbol Muzik','1.1.1, 1.1.2, 1.1.3',`
Semibrif|Empat detik apabila krocet bernilai satu detik
Minim|Dua detik apabila krocet bernilai satu detik
Krocet|Satu detik dalam kiraan berasaskan krocet
Kuaver|Setengah detik dalam kiraan berasaskan krocet
Dua kuaver|Gabungan dua not setengah detik menjadi satu detik
Rehat semibrif|Senyap sepanjang empat detik krocet dalam konteks latihan ini
Rehat minim|Senyap sepanjang dua detik krocet
Rehat krocet|Senyap sepanjang satu detik krocet
Rehat kuaver|Senyap sepanjang setengah detik krocet
Baluk|Lima garisan dan empat ruang bagi notasi
Klef trebel|Klef yang menetapkan G pada garisan kedua
Not G|Pic pada garisan kedua klef trebel
Not A|Pic pada ruang kedua klef trebel
Not B|Pic pada garisan ketiga klef trebel
Not C tinggi|Pic pada ruang ketiga klef trebel
Not D tinggi|Pic pada garisan keempat klef trebel
Forte f|Dinamik kuat
Piano p|Dinamik lembut
Garis bar|Garisan yang memisahkan bar muzik
Not dan rehat|Lambang bunyi dan lambang senyap dalam skor
`);
bank(4,'Teknik Rekoder G A B C Tinggi D Tinggi','2.4.1, 2.4.2',`
Rekoder soprano|Alat tiupan yang digunakan untuk melodi latihan ini
Penjarian B|Tutup belakang dan lubang hadapan pertama
Penjarian A|Tutup belakang dan dua lubang hadapan atas
Penjarian G|Tutup belakang dan tiga lubang hadapan atas
Penjarian C tinggi|Tutup belakang dan lubang hadapan kedua
Penjarian D tinggi|Tutup lubang hadapan kedua sahaja
Tangan kiri di atas|Kedudukan tangan kiri berhampiran muncung
Tangan kanan di bawah|Kedudukan tangan kanan bagi lubang bahagian bawah
Pernafasan terkawal|Mengalirkan udara secara stabil semasa bermain
Perlidahan tu|Cara memulakan not dengan lidah
Embouchure selesa|Bibir menutup muncung dengan lembut
Postur tegak|Badan dalam keadaan lurus dan relaks
Ton baik|Bunyi yang jelas dan stabil
Menutup lubang rapat|Mengelakkan kebocoran udara melalui lubang
Tiupan terlalu kuat|Punca bunyi rekoder mudah menjadi nyaring tidak terkawal
Skor melodi|Notasi urutan pic dan irama untuk dimainkan
Tempo sekata|Kelajuan persembahan yang kekal stabil
Ensembel|Permainan muzik secara berkumpulan
Penjagaan alat|Membersihkan dan mengeringkan rekoder selepas bermain
Latihan perlahan|Cara membina ketepatan sebelum menambah kelajuan
`);
bank(4,'Lagu Pusingan, Gerakan dan Muzik Malaysia','2.1.1, 2.1.2, 2.1.3, 2.2.1, 2.2.2, 2.3.1, 4.2.1',`
Lagu pusingan|Lagu sama dimulakan pada masa berlainan oleh beberapa kumpulan
Pic nyanyian|Tinggi rendah nada yang dihasilkan oleh suara
Isyarat mula|Petunjuk untuk memulakan persembahan
Tempo nyanyian|Kelajuan menyanyikan lagu
Perkusi berirama|Permainan alat mengikut corak panjang pendek bunyi
Rehat dalam skor|Masa alat tidak dibunyikan mengikut nilai rehat
Meter dua|Kumpulan dua detik dalam setiap bar
Meter tiga|Kumpulan tiga detik dalam setiap bar
Gerakan formasi|Pergerakan yang disusun mengikut bentuk kumpulan
Muzik masyarakat Malaysia|Muzik yang dipersembahkan oleh masyarakat di Malaysia
Nama ensembel|Nama jenis kumpulan muzik yang didengar
Keluarga bertali|Kumpulan alat yang bunyinya daripada tali bergetar
Keluarga tiupan|Kumpulan alat yang bunyinya daripada udara bergetar
Keluarga perkusi|Kumpulan alat yang dipukul atau digoncang
Kompang|Alat perkusi berbingkai berkulit
Angklung|Alat buluh yang digoncang
Gong|Alat logam bulat yang dipukul
Gamelan|Ensembel tradisional dengan alat seperti gong dan bilah berpic
Ulasan ensembel|Penerangan tentang kumpulan dan alat muzik yang didengar
Etika penonton|Mendengar dengan tertib dan menghormati pemuzik
`);
bank(4,'Mencipta Corak Irama dan Melodi','3.2.1, 3.2.2, 3.2.3',`
Corak irama|Susunan bunyi panjang pendek dan rehat
Idea irama|Cadangan susunan bunyi sebelum dimainkan
Semibrif|Satu not sepanjang empat detik krocet
Minim|Satu not sepanjang dua detik krocet
Krocet|Satu not sepanjang satu detik krocet
Kuaver|Satu not sepanjang setengah detik krocet
Rehat|Lambang senyap dalam susunan irama
Ulangan|Memainkan idea yang sama sekali lagi
Kontras|Memainkan idea yang berbeza daripada idea terdahulu
Improvisasi|Mengubah atau mencipta idea muzik secara spontan
Irama soalan|Corak pembuka yang boleh disambut dengan corak lain
Irama jawapan|Corak yang menyambut idea irama pembuka
Empat krocet|Corak empat bunyi yang setiap satunya satu detik
Dua minim|Corak dua bunyi yang setiap satunya dua detik
Minim dan dua krocet|Corak tiga bunyi yang jumlahnya empat detik
Empat kuaver|Corak empat bunyi yang jumlahnya dua detik
Melodi B A G|Ciptaan menggunakan tiga pic B A dan G
Irama kepada melodi|Meletakkan pic pada corak irama
Skor ciptaan|Notasi yang merekodkan idea irama dan melodi
Persembahkan hasil|Memainkan karya yang telah dicipta
`);
bank(5,'Not E hingga D Tinggi, Irama dan Artikulasi','1.1.1, 1.1.2, 1.1.3',`
Not E|Pic pada garisan pertama klef trebel
Not F|Pic pada ruang pertama klef trebel
Not G|Pic pada garisan kedua klef trebel
Not A|Pic pada ruang kedua klef trebel
Not B|Pic pada garisan ketiga klef trebel
Not C tinggi|Pic pada ruang ketiga klef trebel
Not D tinggi|Pic pada garisan keempat klef trebel
Baluk|Lima garisan dan empat ruang untuk menulis not
Klef trebel|Klef yang menetapkan G pada garisan kedua
Semibrif|Empat detik krocet
Minim|Dua detik krocet
Krocet|Satu detik krocet
Kuaver|Setengah detik krocet
Forte f|Bunyi dimainkan dengan dinamik kuat
Piano p|Bunyi dimainkan dengan dinamik lembut
Staccato|Bunyi pendek dan terpisah
Legato|Bunyi bersambung dengan lancar
Tanda rehat|Simbol senyap mengikut nilai dalam skor
Meter 2/4|Dua detik krocet bagi setiap bar
Meter 3/4|Tiga detik krocet bagi setiap bar
`);
bank(5,'Rekoder, Melodi Kaunter dan Lagu Berkembar','2.1.1, 2.1.2, 2.1.3, 2.1.4, 2.4.1, 2.4.2',`
Melodi utama|Melodi pokok dalam persembahan
Melodi kaunter|Melodi tambahan yang mengiringi melodi utama
Ensembel rekoder|Kumpulan pemain rekoder
Lagu berkembar|Dua lagu sesuai yang dinyanyikan bersama
Pic tepat|Nada nyanyian atau alat sepadan dengan skor
Tempo|Kelajuan persembahan muzik
Dinamik kuat|Kekuatan bunyi yang ditunjukkan dengan f
Dinamik lembut|Kekuatan bunyi yang ditunjukkan dengan p
Pernafasan|Kawalan udara semasa menghasilkan bunyi
Perlidahan|Permulaan bunyi menggunakan sebutan tu
Embouchure|Cara bibir diletakkan pada muncung
Postur|Kedudukan badan ketika bermain
Penjarian|Susunan jari pada lubang rekoder
Not E rekoder|Not latihan yang meluaskan julat ke bawah daripada G
Not F rekoder|Not latihan di antara E dan G dalam turutan nada
Not B rekoder|Tutup lubang belakang dan lubang hadapan pertama
Not A rekoder|Tutup lubang belakang dan dua lubang hadapan atas
Not G rekoder|Tutup lubang belakang dan tiga lubang hadapan atas
Mendengar rakan|Cara mengekalkan keseimbangan permainan ensembel
Latihan bahagian|Berlatih melodi kumpulan sendiri sebelum digabungkan
`);
bank(5,'Mencipta Melodi B A G','3.1.1, 3.1.3',`
Melodi|Rangkaian pic yang tersusun
Corak irama|Susunan panjang pendek bunyi
Not B A G|Tiga pic yang digunakan untuk ciptaan melodi Tahun 5
Irama kepada melodi|Menambah pic pada corak panjang pendek bunyi
Frasa soalan|Idea pembuka dalam latihan ciptaan
Frasa jawapan|Idea sambutan kepada pembuka
Improvisasi melodi|Mengubah idea nada secara spontan
Pengulangan melodi|Menggunakan semula rangkaian pic yang sama
Kontras melodi|Menggunakan idea nada yang berbeza
Pic menaik|Pergerakan daripada nada rendah kepada tinggi
Pic menurun|Pergerakan daripada nada tinggi kepada rendah
Pic berulang|Nada sama dibunyikan beberapa kali
Semibrif|Nilai empat detik krocet dalam ciptaan
Minim|Nilai dua detik krocet dalam ciptaan
Krocet|Nilai satu detik krocet dalam ciptaan
Kuaver|Nilai setengah detik krocet dalam ciptaan
Rehat ciptaan|Ruang senyap yang dirancang dalam melodi
Skor ciptaan|Catatan notasi hasil idea muzik
Uji melodi|Memainkan ciptaan dan mendengar semula
Persembahan ciptaan|Memainkan hasil karya yang telah dibina
`);
bank(5,'Apresiasi Muzik Baroque','4.1.1, 4.1.2',`
Zaman Baroque|Zaman muzik Klasik Barat sekitar 1600 hingga 1750
Tahun mula Baroque|Sekitar tahun 1600
Tahun akhir Baroque|Sekitar tahun 1750
Antonio Vivaldi|Komposer contoh Baroque dalam DSKP Tahun 5
Asal Vivaldi|Venice di Itali
La Primavera|Judul karya yang bermaksud Spring
Spring|Musim bunga dalam terjemahan judul La Primavera
The Four Seasons|Kumpulan empat konserto yang mengandungi La Primavera
Komposer|Orang yang menggubah karya muzik
Judul karya|Nama sesebuah karya muzik
Negara asal komposer|Negara tempat asal penggubah muzik
Muzik Klasik Barat|Tradisi muzik seni Barat yang merangkumi zaman Baroque
Konserto|Karya yang menampilkan alat solo bersama ensembel
Alat solo Spring|Biola dalam konserto La Primavera
Biola|Alat bertali yang dimainkan menggunakan penggesek
Iringan ensembel|Permainan kumpulan yang menyokong bahagian solo
Dengar aktif|Memberi perhatian kepada unsur karya semasa mendengar
Ulasan berdasarkan bukti|Pendapat yang disokong perkara yang didengar
Nama komposer dalam ulasan|Maklumat tentang orang yang mencipta karya
Menghargai karya|Mendengar dan membincangkan muzik dengan beradab
`);
bank(6,'Not C hingga D Tinggi dan Bahasa Muzik','1.1.1, 1.1.2, 1.1.3',`
Not C tengah|Pic pada garisan lejer di bawah baluk klef trebel
Not D|Pic pada ruang di bawah garisan pertama klef trebel
Not E|Pic pada garisan pertama klef trebel
Not F|Pic pada ruang pertama klef trebel
Not G|Pic pada garisan kedua klef trebel
Not A|Pic pada ruang kedua klef trebel
Not B|Pic pada garisan ketiga klef trebel
Not C tinggi|Pic pada ruang ketiga klef trebel
Not D tinggi|Pic pada garisan keempat klef trebel
Garisan lejer|Garisan tambahan untuk not di luar baluk
Semibrif|Empat detik apabila krocet menjadi unit kiraan
Minim|Dua detik apabila krocet menjadi unit kiraan
Krocet|Satu detik apabila krocet menjadi unit kiraan
Kuaver|Setengah detik apabila krocet menjadi unit kiraan
Rehat muzik|Senyap mengikut nilai yang dinyatakan dalam skor
Forte f|Dinamik kuat dalam persembahan
Piano p|Dinamik lembut dalam persembahan
Crescendo|Bunyi beransur-ansur semakin kuat
Decrescendo|Bunyi beransur-ansur semakin lembut
Fermata|Memanjangkan bunyi atau rehat melebihi nilai biasa mengikut tafsiran
`);
bank(6,'Mencipta Melodi B A G C Tinggi D Tinggi','3.1.1, 3.1.3',`
Pic ciptaan Tahun 6|B A G C tinggi dan D tinggi
Melodi|Susunan nada yang membentuk rangkaian muzik
Irama|Susunan nilai bunyi dan senyap
Membina melodi|Meletakkan pic pada corak irama
Idea pembuka|Frasa yang memulakan ciptaan
Idea sambutan|Frasa yang menjawab idea pembuka
Improvisasi|Mengubah atau mencipta idea muzik spontan
Ulangan|Menggunakan idea muzik sama semula
Variasi|Mengubah sebahagian idea asal
Kontras|Menggunakan idea yang berbeza
Langkah menaik|Bergerak kepada pic bersebelahan yang lebih tinggi
Langkah menurun|Bergerak kepada pic bersebelahan yang lebih rendah
Nada berulang|Pic yang sama dibunyikan berturut-turut
Lompatan pic|Pergerakan ke nada yang tidak bersebelahan
Rehat terancang|Senyap yang sengaja diletakkan dalam ciptaan
Skor melodi|Notasi yang merekodkan pic dan irama ciptaan
Rekoder untuk mencipta|Alat yang dicadangkan untuk menguji melodi
Semakan ciptaan|Mendengar hasil dan membetulkan idea
Persembahan kreatif|Penyampaian karya dengan idea yang dibina sendiri
Refleksi karya|Menjelaskan pilihan muzik selepas mempersembahkan
`);
bank(6,'Nyanyian Dinamik, Ensembel dan Rekoder','2.1.1, 2.1.2, 2.2.1, 2.3.1, 2.4.1, 2.4.2',`
Pic nyanyian tepat|Nada suara sepadan dengan melodi
Crescendo nyanyian|Kekuatan suara bertambah secara beransur-ansur
Decrescendo nyanyian|Kekuatan suara berkurang secara beransur-ansur
Dinamik forte|Bunyi kuat yang terkawal
Dinamik piano|Bunyi lembut yang terkawal
Melodi kaunter|Melodi tambahan bersama melodi utama
Ensembel|Kumpulan pemuzik yang bermain bersama
Keseimbangan ensembel|Kekuatan bunyi bahagian sesuai antara satu sama lain
Isyarat pemimpin|Petunjuk mula, berhenti atau perubahan muzik
Perkusi mengikut skor|Memainkan irama yang dinyatakan dalam notasi
Rehat perkusi|Tidak membunyikan alat pada nilai senyap
Gerakan bertema|Pergerakan berdasarkan tema seperti hidupan laut
Penjarian rekoder|Susunan jari untuk menghasilkan pic
Pernafasan rekoder|Kawalan udara untuk ton stabil
Perlidahan rekoder|Memulakan bunyi menggunakan tu
Embouchure rekoder|Kedudukan bibir pada muncung
Postur rekoder|Kedudukan badan yang tegak dan selesa
Julat rekoder Tahun 6|Not C D E F G A B C tinggi dan D tinggi
Mendengar semasa bermain|Cara menyesuaikan permainan dengan rakan
Latihan berkumpulan|Berlatih bersama untuk menyelaraskan persembahan
`);
bank(6,'Apresiasi Muzik Classical','4.1.1, 4.1.2',`
Zaman Classical dalam DSKP|Zaman muzik Klasik Barat sekitar 1750 hingga 1830
Tahun mula Classical|Sekitar tahun 1750
Tahun akhir Classical dalam DSKP|Sekitar tahun 1830
Ludwig van Beethoven|Komposer contoh dalam DSKP Tahun 6
Asal Beethoven|Jerman
Symphony No. 5 in C Minor|Karya contoh Beethoven dalam DSKP Tahun 6
Komposer|Penggubah karya muzik
Judul karya|Nama sesebuah karya muzik
Simfoni|Karya berskala besar untuk orkestra
Orkestra|Kumpulan pemuzik dengan pelbagai keluarga alat
Konduktor|Pemimpin persembahan orkestra
Keluarga bertali|Alat yang menghasilkan bunyi melalui tali bergetar
Keluarga tiupan kayu|Keluarga alat seperti seruling dan klarinet
Keluarga tiupan loyang|Keluarga alat seperti trompet dan trombon
Keluarga perkusi|Keluarga alat seperti timpani dan simbal
Motif muzik|Idea muzik pendek yang boleh diulang dan dikembangkan
Kontras dinamik|Perbezaan antara bunyi kuat dengan lembut
Dengar secara aktif|Memberi perhatian kepada ciri karya yang didengar
Ulasan karya|Penerangan tentang komposer, asal dan judul serta muzik
Penghargaan muzik|Menghormati karya dan persembahan pemuzik
`);
