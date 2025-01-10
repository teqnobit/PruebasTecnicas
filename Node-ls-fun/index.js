const fs = require("node:fs/promises")
const path = require("node:path")
const pc = require("picocolors")

const directorio = process.argv[2] ?? "."

async function ls (directorio) {
    let files
    try {
        files = await fs.readdir(directorio)
    } catch {
        console.error(`No se encontro el directorio ${directorio}`)
        process.exit(1)
    }

    const archivosPromise = files.map(async file => {
        let stats
        const pathFile = path.join(directorio, file)
        try {
            stats = await fs.stat(pathFile)
        } catch {
            console.error(`Error en la lectura del archivo ${pathFile}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const isFile = isDirectory ? "d" : "f"
        const sizeFile = stats.size.toString()
        const modDate = stats.mtime.toLocaleString()

        return `${pc.magenta(isFile)} ${pc.blue(pathFile.padEnd(25))} ${pc.green(sizeFile.padStart(8))} ${pc.yellow(modDate)}`
    })

    const ficherosResueltos = await Promise.all(archivosPromise)
    ficherosResueltos.forEach(elemento => console.log(elemento))
}
ls(directorio)
