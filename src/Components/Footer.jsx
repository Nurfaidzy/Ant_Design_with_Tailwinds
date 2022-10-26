const Footer = () => {
  return (
    <>
      <div className="bg-slate-800 text-white">
        <div className="px-[5%] py-[2%] flex justify-between">
          <div className="font-bold font-lora text-2xl">Logo</div>
          <div className="flex justify-between gap-10">
            <div>
              <h2 className="text-white">Perusahaan</h2>
              <h4 className="text-white  text-end">Daerah</h4>
              <h4 className="text-white text-end">Tentang</h4>
            </div>
            <div>
              <h2 className="text-white">Sosial Media</h2>
              <h4 className="text-white  text-end">Facebook</h4>
              <h4 className="text-white text-end">Instagram</h4>
              <h4 className="text-white text-end">Youtube</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
