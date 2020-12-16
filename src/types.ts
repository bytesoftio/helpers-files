export type SelectFile = () => Promise<File | undefined>
export type SelectFileOfType = (accept?: string) => Promise<File | undefined>
export type SelectFiles = () => Promise<File[] | undefined>
export type SelectFilesOfType = (accept?: string) => Promise<File[] | undefined>
