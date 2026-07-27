import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    link: { type: 'string', required: false },
    tech: { type: 'string', required: false },
    image: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (doc) => `/projects/${doc._raw.flattenedPath}` },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
})
