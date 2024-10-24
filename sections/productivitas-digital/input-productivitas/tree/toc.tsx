/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOC } from "./tree";

type Item = {
  setSelectedItem: (item: {
    cabang: string;
    kota: string;
    sekretariat: string;
  }) => void;
};

const TOCWrapper = ({ setSelectedItem }: Item) => {
  const toc = [
    {
      id: "4e1a8b52-d8f8-41c9-a7c4-3d815c32fbb6",
      name: "ACEH",
      children: [
        {
          id: "f6e94098-7b47-4c3d-b7f8-5d458f6d8e4c",
          name: "Kota_481",
          children: [
            {
              id: "23425e07-f58e-47be-bbda-4e88eaed0d23",
              name: "sekretariat_123",
            },
            {
              id: "7f2e0e60-9180-4e7a-925d-8a994e6f4d96",
              name: "sekretariat_987",
            },
          ],
        },
        {
          id: "fd0e4b08-e4a9-4b29-9e02-8caa5fa1b372",
          name: "Kota_342",
          children: [
            {
              id: "7df9e8e8-75eb-4709-bded-5f5c62b0b129",
              name: "sekretariat_421",
            },
            {
              id: "f75e9f74-0c47-49f1-bd7c-823d874fcbe5",
              name: "sekretariat_145",
            },
          ],
        },
        {
          id: "c8e3bce1-89f7-4481-8444-a6fa89a83be9",
          name: "Kota_581",
          children: [
            {
              id: "b29f88a0-efb5-4a9f-bf04-2f872c4f90dc",
              name: "sekretariat_362",
            },
            {
              id: "e3ae08c0-d70e-4d94-a203-b4870f759206",
              name: "sekretariat_264",
            },
          ],
        },
      ],
    },
  ];

  return <TOC toc={toc} setSelectedItem={setSelectedItem} />;
};

export default TOCWrapper;
