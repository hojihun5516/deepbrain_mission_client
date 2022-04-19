import React from "react";
import tableStyles from "../common/styles/table.module.css";
export default function Board() {
  const columns = [
    "업종명",
    "인허가일자",
    "업소명",
    "소재지(도로명)",
    "소재지(지번)",
    "영업장면적",
    "건물내부면적",
    "건물외부면적",
    "소재지전화",
    "업태명",
  ];
  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th colSpan={columns.length}>
            <h2>공원 등록</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {columns.map((column) => (
            <td key={column}>{column}</td>
          ))}
        </tr>
        <tr style={{ height: 200 }}>
          <td colSpan={columns.length}>준비중입니다.</td>
        </tr>
      </tbody>
    </table>
  );
}
