import path from 'path'
import express from 'express'

const log = console.log;

const expressStatic = (rootPath: string) => express.static(path.join(process.cwd(), rootPath), {
    index: ['index.html', 'index.htm', 'default.html', 'default.htm']
})

export default function (port = 3000) {
    const app = express()

    app.use((req, _res, nextTick) => {
        log(req.path);
        log('req.headers: ', req.headers);
        nextTick();
    })

    app.use('/mirrors', expressStatic('.static'));

    app.listen(port, () => {
        log('Server starts successfully:', `http://localhost:${port}`)
    })
    return app
}
