import { createServer } from 'node:http';

createServer(function (request, response) {
    if (request.url === '/api/health') {
        response.writeHead(
            200,
            { 'content-type': 'application/json' }
        );
        response.end(JSON.stringify({ status: 'ok' })); // corpo da response (end)
        return;
    }

    response.writeHead(
        404,
        { 'content-type': 'application/json' }
    )
    response.end(JSON.stringify({ message: 'Recurso não encontrado.' }))

}).listen(3000); // listen disponibiliza uma porta na máquina