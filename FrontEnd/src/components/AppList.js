import React from "react";
import { useDispatch } from "react-redux";
import { deleteApp, getById } from "../store/actions/actions";

function AppList(props) {
  const app = props.app;
  const dispatch = useDispatch();

  function deleteAplikasi(event, appId) {
    dispatch(deleteApp(appId))
  }

  function getAplikasi(event, appId) {
    dispatch(getById(appId))
  }

  return (
        <tr>
          <td>{app.nama_aplikasi}</td>
          <td>{app.keterangan}</td>
          <td>{app.jumlah_pengguna}</td>
          <td>{app.pendiri}</td>
          <td>{app.tanggal_didirikan}</td>
          <td>
            <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalEdit" onClick={(event)=>getAplikasi(event, app.id)}> Edit </button>
            <button className="btn btn-primary ml-1 btn-sm" onClick={(event) => deleteAplikasi(event, app.id)}> Hapus </button>
          </td>
        </tr>
  );
}

export default AppList;
