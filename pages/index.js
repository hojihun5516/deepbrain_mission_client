import React, { useEffect } from "react";
import tableStyles from "./common/styles/table.module.css";
export default function Home() {
  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th>
            <h2>HOME</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>준비중입니다.</td>
        </tr>
      </tbody>
    </table>
  );
}
