import { selectFilesOfType } from "./selectFilesOfType"
import { SelectFiles } from "./types"

export const selectFiles: SelectFiles = async () => selectFilesOfType()
