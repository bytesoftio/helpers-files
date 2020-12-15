import { SelectFile } from "./types"
import { selectFileOfType } from "./selectFileOfType"

export const selectFile: SelectFile = (onChange) => selectFileOfType(undefined, onChange)
