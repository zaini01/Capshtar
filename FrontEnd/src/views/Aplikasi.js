import { useEffect, useState } from "react";
import { fetch } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import AppList from "../components/AppList"
import ModalAdd from "../components/ModalAdd"
import ModalEdit from "../components/ModalEdit"
require("dotenv").config();

function Aplikasi() {
  const dispatch = useDispatch();
  const apps = useSelector((state) => state.apps);
  const loading = useSelector((state) => state.loading);
  const [namaPendiri, setNamaPendiri] = useState('');

  useEffect(() => {
    if (apps.length === 0) {
      dispatch(
        fetch()
      );
    }
  }, [dispatch,apps.length]);

  function search() {
      if (namaPendiri !== '') {
        dispatch(
            fetch(namaPendiri)
        );
      }
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center p-5 m-5">
        <div
          className="spinner-border"
          style={{ width: 300, height: 300, color: "lightblue" }}
          role="status"
        ></div>
      </div>
    );
  }

  return (
        <div className="container-fluid">
            <div className="container-fluid">
                <nav className="navbar navbar-info bg-info justify-content-center">
                    <span className="navbar-brand text-light">Informasi Sosial Media</span>
                </nav>
            </div>

            <div className="d-flex justify-content-between container-fluid">
                <div>
                    <button className="btn btn-light m-1" data-toggle="modal" data-target="#modalAdd"> Tambah Aplikasi </button>
                </div>

                <div className="pt-2">
                    <form onSubmit={search}>
                        <input
                            placeholder="cari nama pendiri"
                            onChange={(e) => setNamaPendiri(e.target.value)}
                        />
                    </form>
                </div>
            </div>

            <div className="container-fluid">
                <table className="table table-striped text-xsmall">
                    <tbody>
                        <tr>
                            <th>Nama Aplikasi</th>
                            <th>Keterangan</th>
                            <th>Jumlah Pengguna</th>
                            <th>Pendiri</th>
                            <th>Tanggal Didirikan</th>
                            <th>Aksi</th>
                        </tr>
                        
                        {apps.map((app) => {
                            return <AppList key={app.id} app={app} />;
                        })}
                    </tbody>
                </table>
                <div className="col text-center">
                    <button type="button" className="btn btn-light">View as Document</button>
                </div>
            </div>
            
            <ModalAdd />
            <ModalEdit />
            
        </div>
    );
    
}

export default Aplikasi;
