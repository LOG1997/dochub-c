export interface proDataType {
  categoryId: number | string;
  id: number | string;
  introduction: string;
  logoUrl: string;
  projectName: string;
  weight: number | string;
}
export interface categoryDataType {
  categoryName: string;
  id: number | string;
}
export interface versionDataType {
  display: string;
  id: string | number;
  projectId: string | number;
  versionName: string;
  versionStatus: boolean;
  weight: number;
}
