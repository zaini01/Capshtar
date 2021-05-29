import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addApp } from "../store/actions/actions";

export default function ModalAdd() {
  const [namaAplikasi, setNamaAplikasi] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [jumlahPengguna, setJumlahPengguna] = useState("");
  const [pendiri, setPendiri] = useState("");
  const [tanggalDidirikan, setTanggalDidirikan] = useState(new Date());
  const dispatch = useDispatch();
 
  function submit() {
    let data= {
      nama_aplikasi: namaAplikasi,
      keterangan: keterangan,
      jumlah_pengguna: jumlahPengguna,
      pendiri: pendiri,
      tanggal_didirikan: tanggalDidirikan.toLocaleDateString()
    }
    dispatch(addApp(data))
  }

  function clear() {
    setNamaAplikasi('')
    setKeterangan('')
    setJumlahPengguna('')
    setPendiri('')
    setTanggalDidirikan('')
}

  return (
        <div className="modal fade" id="modalAdd" tabIndex="-1" role="dialog" aria-labelledby="modalAdd" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header"></div>
                    <div className="modal-body">
                      <input
                        className="form-control"
                        placeholder="nama aplikasi"
                        value={namaAplikasi}
                        onChange={(e) => setNamaAplikasi(e.target.value)}
                      />
                      <hr/>
                      <textarea
                        className="form-control"
                        placeholder="keterangan"
                        value={keterangan}
                        onChange={(e) => setKeterangan(e.target.value)}
                      />
                      <hr/>
                      <input
                        className="form-control"
                        placeholder="jumlah pengguna"
                        value={jumlahPengguna}
                        onChange={(e) => setJumlahPengguna(e.target.value)}
                      />
                       <hr/>
                      <input
                        className="form-control"
                        placeholder="pendiri"
                        value={pendiri}
                        onChange={(e) => setPendiri(e.target.value)}
                      />
                      <hr/>
                      <div>
                        <span className="label text-secondary"> tanggal didirikan</span>
                        <DatePicker className="form-control ml-3" selected={tanggalDidirikan} onChange={(date) => setTanggalDidirikan(date)} />
                      </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={(event)=>clear(event)} data-dismiss="modal">Tutup</button>
                        <button type="button" className="btn btn-primary" onClick={(event)=>submit(event)} data-dismiss="modal">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}