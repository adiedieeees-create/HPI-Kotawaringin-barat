# Website HPI Kotawaringin Barat

Website informasi Himpunan Pramuwisata Indonesia (HPI) Kotawaringin Barat, Kalimantan Tengah.

## Halaman website
- `index.html` — beranda, layanan, FAQ, dan informasi pengunjung.
- `tentang.html` — profil organisasi dan peran pramuwisata.
- `destinasi.html` — direktori destinasi dengan pencarian dan filter kategori.
- `pemandu.html` — informasi profesi dan direktori anggota (menunggu data terverifikasi).
- `404.html` — halaman saat alamat tidak ditemukan.

## Teknologi
- HTML5
- CSS3 (responsive layout)
- JavaScript vanilla
- GitHub Actions + GitHub Pages

## Menjalankan secara lokal
Buka `index.html` melalui browser, atau jalankan server lokal:

```bash
python -m http.server 8000
```

Buka http://localhost:8000.

## Mengaktifkan website publik (GitHub Pages)
Workflow deploy sudah tersedia di `.github/workflows/pages.yml`. Pengaturan Pages perlu diaktifkan satu kali oleh pemilik repository:

1. Buka **Settings** pada repository.
2. Pilih **Pages** di bagian **Code and automation**.
3. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
4. Setelah tersimpan, buka tab **Actions**, pilih workflow **Deploy HPI website to GitHub Pages**, lalu jalankan **Run workflow** pada branch `main` (atau lakukan push baru).

Setelah deployment berhasil, alamat publik project site adalah:
https://adiedieeees-create.github.io/HPI-Kotawaringin-barat/

## Catatan pengelolaan konten
Informasi kepengurusan, kontak sekretariat HPI, profil anggota, biaya layanan, dan jadwal pemandu tidak diisi dengan data perkiraan. Tambahkan hanya setelah data resmi diterima dan disetujui pengurus.

Informasi destinasi diringkas dari portal resmi Visit Kotawaringin Barat dan Dinas Pariwisata Kabupaten Kotawaringin Barat. Detail jam kunjungan, tarif, akses, dan fasilitas perlu dikonfirmasi kembali kepada pengelola destinasi karena dapat berubah.

Foto yang berasal dari portal Visit Kotawaringin Barat ditautkan langsung dari sumber tersebut. Foto ilustrasi diberi keterangan pada teks alternatif.
