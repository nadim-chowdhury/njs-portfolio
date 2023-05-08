import { info } from "../info";

export default function Info() {
  return (
    <section className="py-3 sm:mx-3 lg:mx-0">
      <h3 className="my-3 text-2xl text-center pb-2">Information</h3>

      <div className="flex items-center justify-between bg-slate-200 rounded-lg my-4">
        <h4 className="font-bold p-2 text-slate-700">JavaScript</h4>
      </div>

      <div className="my-6">
        {info.map((i) => (
          <div key={i.id} className="my-4 p-2 text-slate-600 border rounded-lg">
            <h4 className="font-semibold">{i.title}</h4>
            <p>
              &nbsp; <span className="text-slate-400">&gt;</span> &nbsp;
              {i.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
