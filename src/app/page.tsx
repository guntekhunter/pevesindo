import Image from "next/image";
import Header from "./component/Header";
import Descriptions from "./component/Descriptions";

export default function Home() {
  return (
    <div className="flex justify-around relative">
      <div
        className="bg-cover bg-right h-[80vh] w-full"
        style={{ backgroundImage: 'url("/pictures.jpg")' }}
      >
        <div className="bg-gradient-to-r from-[#464444] from-[30%] to-transparent absolute inset-0 w-full" />
        <div className="py-[7rem] w-[80%] relative z-10 px-[8rem] flex align-center">
          <div className="container mx-auto flex items-center justify-between text-white">
            <div className="w-[70%]">
              <h1 className="text-[1.5rem] font-bold mb-4">
                Pevesindo Store, Harga Grosir, Distributor Plafon PVC Dan Panel
                Dinding PVC Berkualitas Di Indonesia.
              </h1>
              <h2 className="text-[1rem] mb-6">
                Pevesindo Store, Harga Grosir, Distributor Plafon PVC Dan Panel
                Dinding PVC Berkualitas Di Indonesia.
              </h2>
              <div className=" flex justify-between w-[20rem]">
                <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850]">
                  Get Started
                </button>
                <button className="bg-white text-black py-2 px-4 rounded hover:bg-primary">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[25rem] w-full flex justify-around">
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
        <div className="mt-[10rem] flex justify-center py-[5rem]">
          <div className="w-[80%] text-center space-y-[2rem]">
            <Header className="text-black">Layanan Pevesindo</Header>
            <div className="w-full flex justify-around">
              <p className="text-[1rem] w-[80%]">
                Pevesindo Berkomitmen Membantu Pelanggan Agar Mendapatkan Produk
                PVC Seperti Plafon PVC, Panel Dinding PVC yang Terbaik, Bermutu
                dan Berkualitas.
              </p>
            </div>
            <div className="w-full flex justify-between">
              <div className="bg-white w-[30%] flex justify-around py-[2rem] rounded-md shadow-xl">
                <div className="flex-col space-y-[1rem]">
                  <div className="space-y-[1rem]">
                    <h3 className="text-[.8rem] font-bold text-center ">
                      RETAIL
                    </h3>
                    <Image width={500} height={500} src="/1.jpg" alt="" />
                    <h4 className="text-[.8rem] px-[1rem] text-left">
                      Pevesindo Adalah Distributor Resmi Produk Dari Natapon
                      PVC. Kami Melayani Penjualan Retail, Grosir dan Kebutuhan
                      Khusus.
                    </h4>
                    <div className="flex px-[1rem] flex space-x-[1rem] w-full justify-beween">
                      <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
                        Pesan
                      </button>
                      <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
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
                      <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
                        Pesan
                      </button>
                      <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
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
                      <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
                        Pesan
                      </button>
                      <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem] font-bold w-full">
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
              <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem]">
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
              <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem]">
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
              <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem]">
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
              <button className="bg-primary text-black py-2 px-4 rounded hover:bg-[#D8A850] text-[.8rem]">
                Konsultasi
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
