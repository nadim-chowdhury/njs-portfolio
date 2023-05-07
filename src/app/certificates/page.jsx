/* eslint-disable @next/next/no-img-element */

export default function Certificates() {
  return (
    <section className="py-2 sm:mx-3 lg:mx-0">
      <h3 className="my-2 text-2xl text-center">My Certificates</h3>

      <div className="flex items-center justify-between bg-slate-200 rounded-lg my-4">
        <h4 className="font-bold p-2 text-slate-700">Collection</h4>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 mt-4 mb-2">
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
