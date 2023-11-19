import Image from "next/image";
import Header from "./component/Header";
import Descriptions from "./component/Descriptions";
import Input from "./component/Input";

export default function Home() {
  return (
    <div className="flex justify-around ">
      <div>
        <div
          className="bg-cover bg-right h-[90vh] w-full relative"
          style={{ backgroundImage: 'url("/hero.jpg")' }}
        >
          <div className="bg-gradient-to-r from-[#464444] from-[30%] to-transparent absolute inset-0 w-full z-0" />
          <div className="container mx-auto flex items-center justify-between text-white h-full w-[80%] z-10">
            <div className="w-[70%] z-10">
              <h1 className="text-[2rem] font-bold mb-4 w-[40rem]">
                Distributor Plafon Dan Panel Dinding PVC Berkualitas Di
                Indonesia.
              </h1>
              <h2 className="text-[.8rem] mb-6 w-[30rem]">
                PEVESINDO Merupakan Perusahan, Pabrik Dan Distributor Penyedia
                Papan Plafon PVC Berkualitas Tinggi Dengan Harga Terjangkau.
                Cocok Bagi Pemilik Rumah, Para Pengembang atau Kontraktor
                Proyek. Kunjungi Cabang Kami Terdekat.
              </h2>
              <div className="flex w-[20rem] space-x-[1rem]">
                <button className="bg-primary text-bwhite text-[.8rem] py-2 px-4 rounded hover:bg-[#D8A850]">
                  Get Started
                </button>
                <button className="bg-white text-black py-2 text-[.8rem] px-4 rounded hover:bg-primary">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[80vh] w-full flex justify-around">
          <div className="w-[80%] flex justify-between">
            <div className="bg-white w-[30%] flex justify-around items-center p-[2rem] rounded-md shadow-xl">
              <div className="flex-col space-y-[1rem]">
                <div className="flex justify-around">
                  <Image
                    src="/discount.png"
                    alt={""}
                    width={500}
                    height={500}
                    className="w-[2rem]"
                  />
                </div>
                <div className="text-center space-y-[1rem]">
                  <h3 className="text-[1rem] font-bold">Harga Terjangkau</h3>
                  <h4 className="text-[.8rem]">
                    Produk Plafon dan Panel Dinding PVC Premium Dengan Harga
                    Sangat Terjangkau. Sehingga Anda Dapat Hemat Anggaran Biaya
                    Untuk Keperluan yang Lainnya.
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-white w-[30%] flex justify-around items-center p-[2rem] rounded-md shadow-xl">
              <div className="flex-col space-y-[1rem]">
                <div className="flex justify-around">
                  <Image
                    src="/thumb-up.png"
                    alt={""}
                    width={500}
                    height={500}
                    className="w-[2rem]"
                  />
                </div>
                <div className="text-center space-y-[1rem]">
                  <h3 className="text-[1rem] font-bold">Kualitas Eksport</h3>
                  <h4 className="text-[.8rem]">
                    Asli Buatan Indonesia, Hanya Terbuat Dari Bahan Poly Vinyl
                    Chloride Pilihan. Produk Berkualitas, Aman Bagi Kesehatan,
                    Standarisasi Nasional Dan Internasional.
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-white w-[30%] flex justify-around items-center p-[2rem] rounded-md shadow-xl">
              <div className="flex-col space-y-[1rem]">
                <div className="flex justify-around">
                  <Image
                    src="/discount.png"
                    alt={""}
                    width={500}
                    height={500}
                    className="w-[2rem]"
                  />
                </div>
                <div className="text-center space-y-[1rem]">
                  <h3 className="text-[1rem] font-bold">Ekstra Kuat</h3>
                  <h4 className="text-[.8rem]">
                    Produk Plafon dan Panel Dinding Dari Natapon PVC Adalah Yang
                    Terbaik Di Indonesia. Bahannya Ringan, Elastis, Kuat Serta
                    Mampu Bertahan Belasan Tahun Tanpa Perlu Diganti.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[12rem] flex justify-center py-[5rem]">
          <div className="w-[80%] text-center space-y-[2rem]">
            <Header className="text-black">Layanan Pevesindo</Header>
            <div className="w-full flex justify-around">
              <p className="w-[80%] text-[.8rem]">
                Pevesindo Berkomitmen Membantu Pelanggan Agar Mendapatkan Produk
                PVC Seperti Plafon PVC, Panel Dinding PVC yang Terbaik, Bermutu
                dan Berkualitas.
              </p>
            </div>
            <div className="w-full flex justify-between">
              <div className="bg-white w-[30%] flex justify-around py-[2rem] rounded-md shadow-xl">
                <div className="flex-col space-y-[1rem]">
                  <div className="space-y-[1rem]">
                    <h3 className="text-[.8rem] font-bold text-center">
                      RETAIL
                    </h3>
                    <Image width={500} height={500} src="/1.jpg" alt="" />
                    <h4 className="text-[.8rem] px-[1rem] text-left">
                      Pevesindo Adalah Distributor Resmi Produk Dari Natapon
                      PVC. Kami Melayani Penjualan Retail, Grosir dan Kebutuhan
                      Khusus.
                    </h4>
                    <div className="flex px-[1rem] flex space-x-[1rem] w-full justify-beween">
                      <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
                        Pesan
                      </button>
                      <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
                        Harga
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white w-[30%] flex justify-around items-center py-[2rem] rounded-md shadow-xl">
                <div className="flex-col space-y-[1rem]">
                  <div className="space-y-[1rem]">
                    <h3 className="text-[.8rem] font-bold text-center ">
                      PEMASANGAN
                    </h3>
                    <Image width={500} height={500} src="/1.jpg" alt="" />
                    <h4 className="text-[.8rem] px-[1rem] text-left">
                      Pevesindo Juga Meyediakan Layanan Jasa Pemasangan Plafon
                      dan Panel Dinding PVC Terpercaya, Berpengalaman &
                      Bergaransi.
                    </h4>
                    <div className="flex px-[1rem] flex space-x-[1rem] w-full justify-beween">
                      <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
                        Pesan
                      </button>
                      <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
                        Harga
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white w-[30%] flex justify-around items-center py-[2rem] rounded-md shadow-xl">
                <div className="flex-col space-y-[1rem]">
                  <div className="space-y-[1rem] overflow-hidden">
                    <h3 className="text-[.8rem] font-bold text-center">
                      PENYEDIAAN
                    </h3>
                    <Image width={500} height={500} src="/1.jpg" alt="" />
                    <h4 className="text-[.8rem] px-[1rem] text-left">
                      Pevesindo Juga Peyediaan Plafon dan Panel Dinding PVC
                      Terpercaya Untuk Para Mitra Agen, Toko, Developer,
                      Kontraktor Sipil, dll.
                    </h4>
                    <div className="flex px-[1rem] flex space-x-[1rem] w-full justify-beween">
                      <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
                        Pesan
                      </button>
                      <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
                        Harga
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="bg-cover bg-right h-[60vh] w-full relative flex justify-around"
          style={{ backgroundImage: 'url("/pictures.jpg")' }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-80 z-0"></div>
          <div className="w-[60%] z-10 flex justify-around h-full items-center">
            <div className="text-center space-y-[.5rem]">
              <Header className="text-white text-[2.5rem] leading-[2.5rem]">
                Semua Layanan PVC Bisa Anda Dapatkan Dalam Satu Atap.
              </Header>
              <Descriptions className="text-white text-[.9rem]">
                Pevesindo Berkomitmen Membantu Pelanggan Agar Mendapatkan Produk
                PVC Seperti Plafon PVC, Panel Dinding PVC yang Terbaik, Bermutu
                dan Berkualitas.
              </Descriptions>
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem]">
                Konsultasi
              </button>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-[5rem]">
          <div className="w-[80%] flex space-x-[5rem]">
            <div className="w-[50%] space-y-[2rem]">
              <Header className="text-[1rem]">
                Semua Layanan PVC Bisa Anda Dapatkan Dalam Satu Atap.
              </Header>
              <Descriptions className="text-black text-[.9rem]">
                Pevesindo Berkomitmen Membantu Pelanggan Agar Mendapatkan Produk
                PVC Seperti Plafon PVC, Panel Dinding PVC yang Terbaik, Bermutu
                dan Berkualitas.
              </Descriptions>
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem]">
                Konsultasi
              </button>
            </div>
            <div className="bg-red-200 w-[50%]">
              <Image src="/1.jpg" alt={""} width={500} height={500}></Image>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-[5rem]">
          <div className="w-[80%] flex space-x-[5rem]">
            <div className="w-[50%] space-y-[2rem]">
              <Header className="text-[1rem]">
                Semua Layanan PVC Bisa Anda Dapatkan Dalam Satu Atap.
              </Header>
              <Descriptions className="text-black text-[.9rem]">
                Pevesindo Berkomitmen Membantu Pelanggan Agar Mendapatkan Produk
                PVC Seperti Plafon PVC, Panel Dinding PVC yang Terbaik, Bermutu
                dan Berkualitas.
              </Descriptions>
              <div className="flex items-center space-x-[1rem]">
                <div className="w-[2rem] rounded-full bg-primary h-[2rem]" />
                <h3 className="text-[1rem] font-bold">Ekstra Kuat</h3>
              </div>
              <div className="flex items-center space-x-[1rem]">
                <div className="w-[2rem] rounded-full bg-primary h-[2rem]" />
                <h3 className="text-[1rem] font-bold">Ekstra Kuat</h3>
              </div>
              <div className="flex items-center space-x-[1rem]">
                <div className="w-[2rem] rounded-full bg-primary h-[2rem]" />
                <h3 className="text-[1rem] font-bold">Ekstra Kuat</h3>
              </div>
              <div className="flex items-center space-x-[1rem]">
                <div className="w-[2rem] rounded-full bg-primary h-[2rem]" />
                <h3 className="text-[1rem] font-bold">Ekstra Kuat</h3>
              </div>
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem]">
                Konsultasi
              </button>
            </div>
            <div className="bg-red-200 w-[50%]">
              <Image src="/1.jpg" alt={""} width={500} height={500}></Image>
            </div>
          </div>
        </section>
        <section
          className="bg-cover bg-right h-[60vh] w-full relative flex justify-around"
          style={{ backgroundImage: 'url("/pictures.jpg")' }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-80 z-0"></div>
          <div className="w-[60%] z-10 flex justify-around h-full items-center">
            <div className="text-center space-y-[.5rem]">
              <Header className="text-white text-[2.5rem] leading-[2.5rem]">
                Distributor Plafon PVC
              </Header>
              <Descriptions className="text-white text-[.9rem]">
                Pevesindo Berkomitmen Membantu Pelanggan Agar Mendapatkan Produk
                PVC Seperti Plafon PVC, Panel Dinding PVC yang Terbaik, Bermutu
                dan Berkualitas.
              </Descriptions>
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem]">
                Konsultasi
              </button>
            </div>
          </div>
        </section>
        <section className="w-full flex flex justify-around py-[5rem]">
          <div className="flex justify-between w-[80%] justify-between space-x-[2rem]">
            <div className="w-[50%]">
              <Header className="text-black">Menjadi Mitra Kami</Header>
              <Descriptions className="text-black">
                Pevesindo Berkomitmen Membantu Pelanggan Agar Mendapatkan Produk
                PVC Seperti Plafon PVC, Panel Dinding PVC yang Terbaik, Bermutu
                dan Berkualitas.
              </Descriptions>
            </div>
            <div className="w-[50%] block space-y-2">
              <p className="text-[1rem]">Nama</p>
              <div className="w-full flex justify-between space-x-[1rem]">
                <div className="inline-block w-full space-y-[.3rem]">
                  <p className="text-[.8rem]">Nama Depan (required)</p>
                  <Input />
                </div>
                <div className="inline-block w-full space-y-[.3rem]">
                  <p className="text-[.8rem]">Nama Nama Belakang (required)</p>
                  <Input />
                </div>
              </div>
              <div className="inline-block w-full space-y-[.3rem]">
                <p className="text-[.8rem]">Email (required)</p>
                <Input />
              </div>
              <div className="inline-block w-full space-y-[.3rem]">
                <p className="text-[.8rem]">Pesan (required)</p>
                <textarea
                  name=""
                  id=""
                  className="w-full h-[2rem] px-[.5rem] h-[5rem] bg-gray-200 rounded-md"
                />
              </div>
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem]">
                Kirim
              </button>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-around">
          <div className="w-[80%] py-[5rem] space-y-[1.5rem]">
            <Header className="text-black text-center">
              Kalkulator Jumlah Bahan
            </Header>
            <div className="w-full flex justify-between space-x-[1rem] space-x-[1rem]">
              <div className="inline-block w-full space-y-[.3rem]">
                <p className="text-[.8rem]">Pilih Produk</p>
                <Input />
              </div>
              <div className="inline-block w-full space-y-[.3rem]">
                <p className="text-[.8rem]">Masukkan Ukuran</p>
                <Input />
              </div>
            </div>
            <div className="w-full bg-green-200">
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] w-full">
                Cek Harga
              </button>
            </div>
            <div className="border-b-[1.5px] text-center">Rp 2.000.000</div>
            {/* <div className="w-full bg-green-200">
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] w-full">
                Hubungi Kami
              </button>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
