/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Tree,
  TreeViewElement,
  CollapseButton,
} from "@/components/custom/tree-view-api";
import { TreeItem } from "./tree-item";
import { useCallback, useState } from "react";

type TOCProps = {
  toc: TreeViewElement[];
  setSelectedItem: (item: {
    cabang: string;
    kota: string;
    sekretariat: string;
  }) => void;
};

export const TOC = ({ toc, setSelectedItem }: TOCProps) => {
  const handleItemClick = useCallback(
    (path: string) => {
      const pathParts = path.split("/").filter(Boolean); // Memisahkan string berdasarkan "/" dan menghilangkan string kosong

      // Mengambil elemen-elemen berdasarkan index
      const cabang = pathParts[0]
        ? pathParts[0].charAt(0).toUpperCase() +
          pathParts[0].slice(1).toLowerCase()
        : "";
      const kota = pathParts[1]
        ? pathParts[1].charAt(0).toUpperCase() +
          pathParts[1].slice(1).toLowerCase()
        : "";
      const sekretariat = pathParts[2] || "";

      // Menyimpan hasilnya (Anda bisa memodifikasi ini sesuai kebutuhan)
      setSelectedItem({ cabang, kota, sekretariat });
    },
    [setSelectedItem]
  );
  return (
    <Tree
      className="w-full h-full max-h-[80dvh] bg-background p-2 rounded-md"
      indicator={true}
    >
      {toc.map((element, _) => (
        <TreeItem
          key={element.id}
          elements={[element]}
          onItemClick={handleItemClick}
          parentPath=""
        />
      ))}
      <CollapseButton elements={toc} expandAll={true} />
    </Tree>
  );
};
