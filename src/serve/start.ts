import path from 'path'
import express from 'express'

const expressStatic = (rootPath: string) => express.static(path.join(process.cwd(), rootPath), {
    index: ['index.html', 'index.htm', 'default.html', 'default.htm']
})

export default function (port = 3000) {
    const app = express()

    app.use((req, _res, nextTick) => {
        console.log(req.path);
        console.log('req.headers: ', req.headers);
        nextTick();
    })

    app.use('/mirrors', expressStatic('.static'));

    app.listen(port, () => {
        console.log('程序启动成功:', `http://localhost:${port}`)
    });

    app.on('error', (a) => {
    })
    return app
}
