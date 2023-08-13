/* eslint-disable @next/next/no-img-element */

export default function Gallery() {
  return (
    <section className="py-3 sm:mx-3 lg:mx-0">
      <h3 className="my-3 text-2xl text-center pb-2 text-gd">Gallery</h3>

      <div className="flex items-center justify-between bg-slate-200 dark:bg-slate-700 rounded-md my-4">
        <h4 className="font-bold px-4 py-2 text-slate-700 text-gd text-lg">
          Certificates
        </h4>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 my-6">
        <img src="/c1.jpg" alt="" className="certificates-img" />
        <img src="/c2.jpg" alt="" className="certificates-img" />
        <img src="/c3.jpg" alt="" className="certificates-img" />
        <img src="/c4.jpg" alt="" className="certificates-img" />
        <img src="/c10.jpg" alt="" className="certificates-img" />
        <img src="/c5.jpg" alt="" className="certificates-img" />
        <img src="/c6.jpg" alt="" className="certificates-img" />
        <img src="/c7.jpg" alt="" className="certificates-img" />
        <img src="/c8.jpg" alt="" className="certificates-img" />
        <img src="/c9.jpg" alt="" className="certificates-img" />
      </div>
    </section>
  );
}
