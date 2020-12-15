export type FileHandler = (file?: File) => void
export type FilesHandler = (files?: File[]) => void
export type SelectFile = (onChange: FileHandler) => void
export type SelectFileOfType = (accept: string | undefined, onChange: FileHandler) => void
export type SelectFiles = (onChange: FilesHandler) => void
export type SelectFilesOfType = (accept: string | undefined, onChange: FilesHandler) => void
