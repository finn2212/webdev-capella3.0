export interface FileState {
  [key: number]: {
    id: string;
    selected: boolean;
    name: string;
    file?: File;
    uploaded: boolean;
    isloading: boolean;
    progress?: number;
    downloadLink: string;
  };
}
