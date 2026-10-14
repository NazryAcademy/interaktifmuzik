# Modul Interaktif Pendidikan Muzik Tahun 1–6

Versi 1.1. 21 tajuk, 20 soalan setiap tajuk, 420 soalan keseluruhan.
Tahun 1–3: 60 soalan setiap tahun. Tahun 4–6: 80 soalan setiap tahun.

## Fail aplikasi

- `index.html`: paparan murid, nota, kuiz, permainan dan rekod pada peranti.
- `curriculum.js`: bank kandungan mengikut tahun.
- `config.js`: URL penerima Google Apps Script dan pautan Google Sheets guru.
- `Code.gs`: kod penerima keputusan, untuk editor Apps Script; bukan kod pelayar.
- `Pemetaan_420_Soalan.csv`: ID soalan dan rujukan SP pada peringkat tajuk.
- `LAPORAN_SEMAKAN.md`: hasil semakan, bukti ujian dan batas pengesahan.
- `.github/workflows/pages.yml`: aliran penerbitan GitHub Pages.

Buka melalui pelayan web atau GitHub Pages. Bagi semakan setempat:
`python3 -m http.server 8000`, kemudian buka `http://localhost:8000`.

## Murid

Isi nama dan kelas, pilih tahun, baca nota tajuk, kemudian mula kuiz.
Semak jawapan dan baca penerangan. Semua 20 soalan perlu dijawab sebelum dihantar.
Butang suara menggunakan keupayaan pelayar; suara Melayu bergantung pada peranti.
Kemajuan dan keputusan disimpan pada pelayar yang sama. Butang sambung memulihkan
kuiz selepas muat semula. Jangan kosongkan data pelayar sebelum rekod disahkan diterima.
Padanan menggunakan istilah dan penerangan. Permainan detik menggunakan audio sintetik.
Versi ini tidak mempunyai koleksi foto instrumen sebenar yang telah disahkan.

## Guru

Google Sheets disediakan dengan ringkasan tahun, rekod keputusan dan jawapan terperinci.
Akses rekod berpusat menggunakan akaun Google yang mendapat kebenaran kepada Sheet.
Rekod peranti ialah salinan pada pelayar sahaja. Tiada PIN awam yang dianggap sebagai
pengesahan guru. Jangan kongsi akses Sheet kepada murid atau terbitkan Sheet ke web.

Markah ialah latihan pengukuhan, bukan TP automatik. Kemahiran amali perlu diperhatikan
dan dinilai oleh guru. Nama yang ditaip sendiri tidak membuktikan identiti murid.

## Status

Aplikasi aktif: https://nazryacademy.github.io/interaktifmuzik/

Google Sheets telah diwujudkan. Projek Apps Script terikat pada Sheet telah disediakan,
dan akses Anyone dipersetujui oleh pemilik. Penerbitan penerima menunggu kebenaran
Google untuk projek baharu. Endpoint dalam `config.js` masih kosong sehingga kebenaran
itu selesai dan penghantaran sebenar disahkan. DNS Exabytes belum diubah.

Ujian pelayar Chrome sebenar: kuiz Tahun 1 dan Tahun 6 menghasilkan 20/20, padanan 6/6,
dan permainan detik memaparkan maklum balas. Paparan pada bingkai 320, 390 dan 430 px
menunjukkan tiada limpahan mendatar pada halaman utama dan kuiz. Safari iPhone sebenar
masih belum diuji.

Ujian fungsi: `npm install` kemudian `npm test`. Simulasi DOM bukan ujian pelayar telefon.
