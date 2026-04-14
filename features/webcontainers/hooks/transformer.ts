interface TemplateItem {
  filename: string;
  fileExtension: string;
  content: string;
  folderName?: string;
  items?: TemplateItem[];
}

interface WebContainerFile {
  file: {
    contents: string;
  };
}

interface WebContainerDirectory {
  directory: {
    [key: string]: WebContainerFile | WebContainerDirectory;
  };
}

type WebContainerFileSystem = Record<string, WebContainerFile | WebContainerDirectory>;

export function transformToWebContainerFormat(template: { folderName: string; items: TemplateItem[] }): WebContainerFileSystem {
  function processItem(item: TemplateItem): WebContainerFile | WebContainerDirectory {
    if (item.folderName && item.items) {
      const directoryContents: WebContainerFileSystem = {};
      
      item.items.forEach(subItem => {
        const key = subItem.fileExtension 
          ? `${subItem.filename}.${subItem.fileExtension}`
          : subItem.folderName!;
        directoryContents[key] = processItem(subItem);
      });

      return {
        directory: directoryContents
      };
    } else {
      return {
        file: {
          contents: item.content
        }
      };
    }
  }

  const result: WebContainerFileSystem = {};
  
  template.items.forEach(item => {
    if (item.folderName && item.items) {
      // This is a folder at root level - process it recursively
      result[item.folderName] = processItem(item);
    } else if (item.fileExtension) {
      // This is a file at root level
      const key = `${item.filename}.${item.fileExtension}`;
      result[key] = {
        file: {
          contents: item.content
        }
      };
    }
  });

  return result;
}1