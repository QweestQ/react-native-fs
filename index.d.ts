declare module "FS.common" {
    type MkdirOptions = {
        NSURLIsExcludedFromBackupKey?: boolean;
        NSFileProtectionKey?: string;
    };
    type FileOptions = {
        NSFileProtectionKey?: string;
    };
    type FSInfoResult = {
        totalSpace: number;
        freeSpace: number;
    };
    type ReadDirItem = {
        ctime: Date;
        mtime: Date;
        name: string;
        path: string;
        size: string;
        isFile: () => boolean;
        isDirectory: () => boolean;
    };
    type StatResult = {
        name: string;
        path: string;
        size: string;
        mode: number;
        ctime: number;
        mtime: number;
        originalFilepath: string;
        isFile: () => boolean;
        isDirectory: () => boolean;
    };
    type DownloadFileOptions = {
        fromUrl: string;
        toFile: string;
        headers?: Headers;
        background?: boolean;
        discretionary?: boolean;
        cacheable?: boolean;
        progressInterval?: number;
        progressDivider?: number;
        begin?: (res: DownloadBeginCallbackResult) => void;
        progress?: (res: DownloadProgressCallbackResult) => void;
        resumable?: () => void;
        connectionTimeout?: number;
        readTimeout?: number;
        backgroundTimeout?: number;
    };
    type DownloadResult = {
        jobId: number;
        statusCode: number;
        bytesWritten: number;
    };
    type UploadFileOptions = {
        toUrl: string;
        binaryStreamOnly?: boolean;
        files: UploadFileItem[];
        headers?: Headers;
        fields?: Fields;
        method?: string;
        beginCallback?: (res: UploadBeginCallbackResult) => void;
        progressCallback?: (res: UploadProgressCallbackResult) => void;
        begin?: (res: UploadBeginCallbackResult) => void;
        progress?: (res: UploadProgressCallbackResult) => void;
    };
    type UploadResult = {
        jobId: number;
        statusCode: number;
        headers: Headers;
        body: string;
    };
    type Headers = {
        [name: string]: string;
    };
    type DownloadBeginCallbackResult = {
        jobId: number;
        statusCode: number;
        contentLength: number;
        headers: Headers;
    };
    type DownloadProgressCallbackResult = {
        jobId: number;
        contentLength: number;
        bytesWritten: number;
    };
    type UploadFileItem = {
        name: string;
        filename: string;
        filepath: string;
        filetype: string;
    };
    type Fields = {
        [name: string]: string;
    };
    type UploadBeginCallbackResult = {
        jobId: number;
    };
    type UploadProgressCallbackResult = {
        jobId: number;
        totalBytesExpectedToSend: number;
        totalBytesSent: number;
    };
    export function mkdir(filepath: string, options?: MkdirOptions): Promise<void>;
    export function moveFile(filepath: string, destPath: string, options?: FileOptions): Promise<void>;
    export function copyFile(filepath: string, destPath: string, options?: FileOptions): Promise<void>;
    export function copyFolder(filepath: string, destPath: string): Promise<void>;
    export function pathForBundle(bundleNamed: string): Promise<string>;
    export function pathForGroup(groupName: string): Promise<string>;
    export function getFSInfo(): Promise<FSInfoResult>;
    export function getAllExternalFilesDirs(): Promise<string>;
    export function unlink(filepath: string): Promise<void>;
    export function exists(filepath: string): Promise<boolean>;
    export function stopDownload(jobId: number): void;
    export function resumeDownload(jobId: number): void;
    export function isResumable(jobId: number): Promise<bool>;
    export function stopUpload(jobId: number): void;
    export function completeHandlerIOS(jobId: number): void;
    export function readDir(dirpath: string): Promise<ReadDirItem[]>;
    export function readDirAssets(dirpath: string): Promise<ReadDirItem[]>;
    export function existsAssets(filepath: string): any;
    export function existsRes(filename: string): any;
    export function readdir(dirpath: string): Promise<string[]>;
    export function setReadable(filepath: string, readable: boolean, ownerOnly: boolean): Promise<boolean>;
    export function stat(filepath: string): Promise<StatResult>;
    export function readFile(filepath: string, encodingOrOptions?: any): Promise<string>;
    export function read(filepath: string, length?: number, position?: number, encodingOrOptions?: any): Promise<string>;
    export function chunkFromFile(filepath: string, length: number, position: number, chunkPath: string): Promise<string>;
    export function readFileAssets(filepath: string, encodingOrOptions?: any): Promise<string>;
    export function readFileRes(filename: string, encodingOrOptions?: any): Promise<string>;
    export function hash(filepath: string, algorithm: string): Promise<string>;
    export function copyFileAssets(filepath: string, destPath: string): any;
    export function copyFileRes(filename: string, destPath: string): any;
    export function copyAssetsFileIOS(imageUri: string, destPath: string, width: number, height: number, scale?: number, compression?: number, resizeMode?: string): Promise<string>;
    export function copyAssetsVideoIOS(imageUri: string, destPath: string): Promise<string>;
    export function writeFile(filepath: string, contents: string, encodingOrOptions?: any): Promise<void>;
    export function appendFile(filepath: string, contents: string, encodingOrOptions?: any): Promise<void>;
    export function write(filepath: string, contents: string, position?: number, encodingOrOptions?: any): Promise<void>;
    export function downloadFile(options: DownloadFileOptions): {
        jobId: number;
        promise: Promise<DownloadResult>;
    };
    export function uploadFiles(options: UploadFileOptions): {
        jobId: number;
        promise: Promise<UploadResult>;
    };
    export function touch(filepath: string, mtime?: Date, ctime?: Date, Creation?: boolean): Promise<void>;
    export function scanFile(path: string): Promise<ReadDirItem[]>;
    export let MainBundlePath: any;
    export let CachesDirectoryPath: any;
    export let ExternalCachesDirectoryPath: any;
    export let DocumentDirectoryPath: any;
    export let DownloadDirectoryPath: any;
    export let ExternalDirectoryPath: any;
    export let ExternalStorageDirectoryPath: any;
    export let TemporaryDirectoryPath: any;
    export let LibraryDirectoryPath: any;
    export let PicturesDirectoryPath: any;
    export let FileProtectionKeys: any;
    export let RoamingDirectoryPath: any;
    export {};
}
