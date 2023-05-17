fixture('Registro de estudiantes')
    .page('https://brandon2002.github.io/prueba-ejercicio/');

test('Submit a form', async t => {
    await t

        //Fill the name
        .setFilesToUpload('#fileInput', [
            // substitute the following string with the path to a local file or multiple files you want to upload
            '/prueba-ejercicio/archivo1.txt',
        ]
        .click("#upload")
        );

    })