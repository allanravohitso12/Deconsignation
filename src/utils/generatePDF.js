import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { formatNumber } from "./formatNumber";

export const generatePDF = ({
  products,
  totalCgt,
  totalAr,
  facture,
  aPayer,
  avance,
  reste,
}) => {
  const doc = new jsPDF();

  // HEADER
  doc.setFontSize(22);
  doc.setTextColor(0, 102, 204);

  doc.text(
    "GESTION DE DECONSIGNATION",
    14,
    20
  );

  // DATE
  doc.setFontSize(11);
  doc.setTextColor(100);

  doc.text(
    `Date : ${new Date().toLocaleDateString()}`,
    14,
    30
  );

  // TABLE
  autoTable(doc, {
    startY: 40,

    head: [
      [
        "Designation",
        "NB CGT",
        "P.U",
        "Montant",
      ],
    ],

    body: products.map((product) => [
      product.designation,
      product.nbCgt,
      formatNumber(product.pu),
      formatNumber(
        product.nbCgt * product.pu
      ),
    ]),

    styles: {
      fontSize: 10,
    },

    headStyles: {
      fillColor: [0, 102, 204],
    },
  });

  let finalY = doc.lastAutoTable.finalY + 15;

  // SUMMARY BOXES

  const summary = [
    ["TOTAL CGT", totalCgt],
    ["TOTAL AR", `${formatNumber(totalAr)} Ar`],
    ["FACTURE", `${formatNumber(facture)} Ar`],
    ["A PAYER", `${formatNumber(aPayer)} Ar`],
    ["AVANCE", `${formatNumber(avance)} Ar`],
    ["RESTE", `${formatNumber(reste)} Ar`],
  ];

  summary.forEach((item, index) => {
    doc.setFillColor(240, 240, 240);

    doc.roundedRect(
      14,
      finalY + index * 12,
      180,
      10,
      2,
      2,
      "F"
    );

    doc.setTextColor(0);

    doc.text(
      item[0],
      20,
      finalY + 7 + index * 12
    );

    doc.setFont(undefined, "bold");

    doc.text(
      String(item[1]),
      140,
      finalY + 7 + index * 12
    );

    doc.setFont(undefined, "normal");
  });

  // FOOTER
  doc.setFontSize(10);

  doc.setTextColor(120);

  doc.text(
    "Application de gestion de deconsignation",
    14,
    285
  );

  doc.save("deconsignation.pdf");
};