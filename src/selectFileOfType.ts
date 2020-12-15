import { SelectFileOfType } from "./types"
import { selectFilesOfType } from "./selectFilesOfType"

export const selectFileOfType: SelectFileOfType = (accept, onChange) => {
  selectFilesOfType(accept, (files) => {
    onChange(files ? files[0] : undefined)
  })
}
