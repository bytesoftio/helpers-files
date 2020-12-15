# @bytesoftio/helpers-files

## Installation

`yarn add @bytesoftio/helpers-files` or `npm install @bytesoftio/helpers-files`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Usage](#usage)
  - [selectFile](#selectfile)
  - [selectFiles](#selectfiles)
  - [selectFileOfType](#selectfileoftype)
  - [selectFilesOfType](#selectfilesoftype)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This package provides several helpers to deal with files in the browser, mainly for upload purposes.

## Usage

### selectFile

Example of an imperative approach to let the user pick a file without having to deal with any input fields, and submit it iimmediately to the server.

```tsx
import { selectFile } from "@bytesoftio/helpers-files"
import axios from "axios"

const handleSelectFile = (file?: File) => {
  if ( ! file) return

  showPreview(file)
  submitFile(file) 
}

const submitFile = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  await axios.post(`/endpoint`, formData, {
    headers: { 'content-type': 'multipart/form-data' },
  })
}


<button onClick={() => selectFile(handleSelectFile)}/>
```

### selectFiles

Similar to `selectFile`, but allows user to select multiple files.

```tsx
import { selectFiles } from "@bytesoftio/helpers-files"

const handleSelectFiles = (files?: File[]) => {
  if ( ! files) return

  // do something with the files...
}

<button onClick={() => selectFiles(handleSelectFiles)}/>
```

### selectFileOfType

Allow only specific types of files, used inputs `accept` property behind the scenes, see [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept). In this example we will display an image preview immediately.

```tsx
import { selectFileOfType } from "@bytesoftio/helpers-files"

const handleSelectFileOfType = (file?: File) => {
  if ( ! file) return

  showPreview(file)
}

const showPreview = (file: File) => {
  const img = document.createElement('img')
  img.src = URL.createObjectURL(file)
  document.body.appendChild(img)
}

<button onClick={() => selectFileOfType('image/*', handleSelectFileOfType)}/>
```

### selectFilesOfType

Similar to `selectFileOfType`, but allows user to select multiple files.

```tsx
import { selectFilesOfType } from "@bytesoftio/helpers-files"

const handleSelectFilesOfType = (files?: File[]) => {
  if ( ! files) return

  // do something with the files...
}

<button onClick={() => selectFilesOfType('image/*', handleSelectFilesOfType)}/>
```
