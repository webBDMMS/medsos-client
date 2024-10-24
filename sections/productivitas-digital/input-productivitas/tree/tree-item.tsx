import {
  File,
  Folder,
  TreeViewElement,
} from "@/components/custom/tree-view-api";

type TreeItemProps = {
  elements: TreeViewElement[];
  onItemClick: (path: string) => void;
  parentPath: string; // Path dari parent folder
};

export const TreeItem = ({
  elements,
  onItemClick,
  parentPath,
}: TreeItemProps) => {
  return (
    <ul className="w-full space-y-1">
      {elements.map((element) => {
        // Trim slashes to avoid double slashes
        const currentPath = `${parentPath}/${element.name}`.replace(
          /\/+/g,
          "/"
        );
        // console.log("ini curr path", elements);

        return (
          <li key={element.id} className="w-full space-y-2">
            {element.children && element.children?.length > 0 ? (
              <Folder
                element={element.name}
                value={element.id}
                isSelectable={element.isSelectable}
                className="px-px pr-1"
              >
                <TreeItem
                  key={element.id}
                  elements={element.children}
                  onItemClick={onItemClick}
                  parentPath={currentPath}
                />
              </Folder>
            ) : (
              <File
                key={element.id}
                value={element.id}
                isSelectable={element.isSelectable}
              >
                <span onClick={() => onItemClick(currentPath)}>
                  {element?.name}
                </span>
              </File>
            )}
          </li>
        );
      })}
    </ul>
  );
};
