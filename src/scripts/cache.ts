import fs from 'fs/promises'
import path from 'path'

import globby from 'globby'

export interface FileCacheObject {
    records: FileCacheRecord
}

interface SlugObject {
    contentDirectory: SlugDirectory
    recordSlugs: SlugRecord
}

interface SlugCacheObject {
    records: SlugDirectory
}

interface Record {
    slugPath: string
    filePath: string
}

interface Slug {
    slugPath: string
}

interface SlugRecord {
    [index: string]: Slug
}

interface SlugDirectory {
    [index: string]: SlugObject
}

interface FileCacheRecord {
    [index: string]: Record
}

const CONTENT_FOLDER = 'content'
const FILE_CACHE_PATH = '../../public/data/fileCache.json'
const SLUG_CACHE_PATH = '../../public/data/slugCache.json'

export const mapFileDataCache = async (baseDirectory: string): Promise<FileCacheObject> => {
    const fileRegex = /\.(md|markdown|mdx)$/gi
    const dateDirectoryRegex = /\d+\//gi
    const replaceFields = (file: string): string => file.replace(fileRegex, '').replace(dateDirectoryRegex, '')
    const getFiles = await globby('**/*.md', { cwd: baseDirectory })
    const records = {
        records: Object.fromEntries(
            getFiles.map(file => [replaceFields(file), 
                { slugPath: replaceFields(file), filePath: file }
            ])
        )
    }

    return records
}

export const mapSlugDataCache = async (baseDirectory: string): Promise<any> => {
    const fileRegex = /\.(md|markdown|mdx)$/gi
    const dateDirectoryRegex = /\d+\//gi
    const replaceFields = (file: string): string => file.replace(fileRegex, '').replace(dateDirectoryRegex, '')
    const directories = await fs.readdir(baseDirectory)
    const returnDirectorySlugs = async (directory: string): Promise<any> => {
        const directoryFiles = await globby('**/*.md', { cwd: path.join(baseDirectory, directory) })
        const slugs = {
            contentDirectory: directory,
            recordSlugs: Object.fromEntries(directoryFiles.map(file => [replaceFields(file), { slugPath: replaceFields(file) } ])),
        }
        return slugs
    }
    const allRecords = await Promise.all(directories
        .map(async directory => returnDirectorySlugs(directory)))
        .then((response: SlugObject[]) => response).catch(error => console.error(error)) as SlugObject[]
    const records: SlugCacheObject = { records: Object.fromEntries(allRecords.map(record => [record.contentDirectory, record])) as SlugDirectory }
    return records
}

const hasFile = async (filePath: string): Promise<boolean> => {
    try {
        await fs.access(path.join(__dirname, filePath))
        return true
    } catch {
        console.warn('No file in place')
        return false
    }
} 

const createFileDataCache = async (): Promise<void> => {
    const data = await mapFileDataCache(path.join(process.cwd(), CONTENT_FOLDER))
    const file = await hasFile(FILE_CACHE_PATH)
    if (!file) {
        await fs.writeFile(path.join(__dirname, FILE_CACHE_PATH), JSON.stringify({}), 'utf8')
    }
    const fileData = JSON.parse(await fs.readFile(path.join(__dirname, FILE_CACHE_PATH), 'utf8')) as FileCacheObject
    if (Object.keys(fileData).length === 0) {
        await fs.writeFile(path.join(__dirname, FILE_CACHE_PATH), JSON.stringify(data))
    }
}

const createSlugDataCache = async (): Promise<void> => {
    const data = await mapSlugDataCache(path.join(process.cwd(), CONTENT_FOLDER)) as SlugCacheObject
    const file = await hasFile(SLUG_CACHE_PATH)
    if (!file) {
        await fs.writeFile(path.join(__dirname, SLUG_CACHE_PATH), JSON.stringify({}), 'utf8')
    }
    const fileData = JSON.parse(await fs.readFile(path.join(__dirname, SLUG_CACHE_PATH), 'utf8')) as SlugCacheObject
    if (Object.keys(fileData).length === 0) {
        await fs.writeFile(path.join(__dirname, SLUG_CACHE_PATH), JSON.stringify(data))
    }
}

const createDataCache = async (): Promise<void> => {
    await createFileDataCache()
    await createSlugDataCache()
}

export default createDataCache

createDataCache().catch(error => {
    console.error(error)
    process.exit(1)
})
