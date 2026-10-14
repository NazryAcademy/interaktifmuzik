# Laporan pembangunan dan pengesahan

Tarikh: 14 Oktober 2026. Versi: 1.1.

## Semakan kurikulum

Rujukan yang dibaca: enam PDF DSKP KSSR (Semakan 2017) Pendidikan Muzik terbitan
Bahagian Pembangunan Kurikulum, Kementerian Pendidikan Malaysia. Tahun 1–5:
terbitan 2019. Tahun 6: September 2021. Salinan diperoleh daripada laman panitia:
https://sites.google.com/moe-dl.edu.my/panitia-pend-muzik/dskp-tahun-1-6

| Tahun | Fokus yang diperbaiki | Soalan |
|---|---|---:|
| 1 | Pic, dinamik, warna ton; nyanyian, perkusi, gerakan; ciptaan bunyi dan muzik tradisional | 60 |
| 2 | Tempo dan melodi bertangga/mendatar; postur, perkusi dan gerakan; improvisasi dan muzik masyarakat | 60 |
| 3 | Tekstur tebal/nipis, G A B dan nilai not; rekoder dan nyanyian; kesan bunyi, irama dan muzik popular | 60 |
| 4 | Notasi G A B C’ D’, teknik rekoder; lagu pusingan dan muzik masyarakat; ciptaan irama dan melodi | 80 |
| 5 | Notasi E F G A B C’ D’; melodi kaunter dan lagu berkembar; ciptaan B A G; Baroque | 80 |
| 6 | Notasi C hingga D’, fermata/crescendo/decrescendo; ciptaan B A G C’ D’; nyanyian dinamik dan rekoder; Classical | 80 |

Pemetaan CSV ialah rujukan SP tajuk, bukan bukti bahawa setiap soalan objektif
mengukur pelaksanaan SP secara penuh. Banyak SP menghendaki murid menyanyi,
bergerak, mencipta atau memainkan alat. Latihan ini menyediakan sokongan pengetahuan,
nota dan permainan; guru masih perlu menilai persembahan sebenar.

Tahun 6 menggunakan julat Classical sekitar 1750–1830 sebagaimana contoh DSKP ini.
Naskhah Tahun 6 turut mempunyai ketidakselarasan teks pada simbol kuat/lembut dan
penomboran dinamik perkusi; aplikasi mengekalkan makna muzik f = kuat, p = lembut.
Rujukan Tahun 4 kreativiti 3.2.1–3.2.3 dikekalkan seperti nombor yang tercetak.
Nama bentuk corak dan jenis alat tambahan digunakan sebagai pengukuhan.

## Perubahan fungsi

- Visual baluk dan simbol nilai not dibina sebagai SVG yang boleh dibesarkan.
- Bank soalan khusus tajuk/tahun menggantikan pengulangan bank umum ZIP asal.
- Nota bagi semua tajuk, bacaan suara mengikut sokongan pelayar, jawapan sebelumnya.
- Kemajuan disimpan dan boleh disambung selepas muat semula.
- Nama/kelas dicatat ketika kuiz bermula, mengelakkan pertukaran identiti rekod di tengah kuiz.
- Semakan dan markah 20 soalan, rekod butiran setiap jawapan, eksport CSV dengan perlindungan formula.
- Permainan padanan mengikut tajuk, permainan detik dengan ralat setiap selang ketukan.
- Audio dihentikan apabila bertukar aktiviti atau aplikasi tidak kelihatan.
- Penghantaran ke Sheets menunggu balasan penerima yang sah, menyimpan rekod tertangguh dan menyediakan cubaan semula.
- Penerima Google mengira markah semula daripada bank jawapan, menggunakan kunci transaksi
  serta ID rekod untuk mengelakkan duplikasi ketika cubaan semula.
- Paparan cetakan mengasingkan keputusan murid dan laporan peranti.
- Susun atur skrin kecil, saiz butang sentuh dan teks input 16 px disediakan.

## Bukti ujian

Ujian dilaksanakan menggunakan jsdom (simulasi DOM) dan Node VM (simulasi perkhidmatan Google).

| Ujian | Hasil |
|---|---|
| 21 kuiz, 420 soalan, empat pilihan dengan satu jawapan padanan tepat | Lulus |
| Semua jawapan betul menghasilkan 20/20; semua salah 0/20 | Lulus |
| Semakan 20 jawapan, ulang kuiz dan nombor percubaan | Lulus |
| 21 permainan padanan, enam pasangan setiap permainan, ulang permainan | Lulus |
| 21 permainan detik dan ketukan tidak sekata | Lulus dalam simulasi masa |
| Simpan/sambung kuiz selepas muat semula, rekod identiti permulaan | Lulus |
| Cubaan penghantaran gagal kekal tertangguh; pengesahan penerima menukar status | Lulus dengan penerima simulasi |
| Penerima Google: 420 jawapan, markah dikira semula, rekod berganda, input tidak sah | Lulus dengan API simulasi |
| Formula ringkasan Sheets kosong dan contoh 16/20 = 80% | Lulus; contoh ujian tidak disimpan |
| Bacaan semula Google Sheets selepas import | Lulus; ringkasan dan tiga tab wujud |

Fail `ujian/test-results.json` dan `ujian/server-test-results.json` menyimpan hasil.

## Belum disahkan

- Chromium/WebKit tidak tersedia di persekitaran ini; muat turun pelayar gagal.
  Ujian DOM bukan bukti rupa paparan, audio yang didengar atau keserasian Safari iPhone.
- Endpoint Apps Script belum diterbitkan. CORS/redirect Google dan penerimaan data dari
  telefon sebenar belum diuji. Jangan anggap rekod telah tiba hanya kerana permintaan dihantar.
- GitHub Pages belum diterbitkan; repositori khusus belum diwujudkan.
- DNS Exabytes belum dibaca atau diubah. Rekod DNS di panduan ialah cadangan, bukan konfigurasi aktif.
- Gambar instrumen sebenar belum disediakan. Carian foto rawak ZIP asal dibuang daripada
  soalan kerana imej yang salah atau gagal dimuat boleh menyebabkan soalan tidak dapat dijawab.
- Ujian pilihan tepat tidak menggantikan semakan pedagogi semua pengganggu oleh panitia.

Pengesahan akhir: buka aplikasi di Safari iPhone dan Chrome Android, uji kuiz serta
permainan pada skrin 320–430 px, terbitkan Apps Script, jawab kuiz percubaan dan semak
1 baris keputusan serta 20 baris jawapan. Kemudian uji URL GitHub sebelum domain tersuai.
