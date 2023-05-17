fixture('Ejercicio final')
    .page('https://brandon2002.github.io/prueba-ejercicio/');

test('Submit a form', async t => {
    await t
        // // automatically dismiss dialog boxes
        // .setNativeDialogHandler(() => true)

        // //Fill the name
        // //.click("#fileUploadButton")
        // .setFilesToUpload('#fileInput', [
        //     // substitute the following string with the path to a local file or multiple files you want to upload
        //     '/prueba-ejercicio/archivo1.txt',
        //     '/prueba-ejercicio/archivo2.txt',
        // ])
        // .click("#button")
        await t
        .setFilesToUpload('#fileInput', [
          'path/to/your/samplefile1.txt',
          'path/to/your/samplefile2.txt',
        ])
        .click('button');
    
      const table = Selector('#dataTable');
    
      // Verifica que se hayan agregado las filas a la tabla
      await t.expect(table.find('tbody tr').count).gt(0);
    
      // Verifica que se haya agregado la cantidad correcta de columnas
      await t.expect(table.find('thead th').count).eql(2); // Ajusta el valor según tus columnas
    
      // Verifica que los datos se hayan procesado correctamente
      await t.expect(table.innerText).contains('Dato1'); // Ajusta el valor según tus datos
      await t.expect(table.innerText).contains('Dato2'); // Ajusta el valor según tus datos
    
    
    
    
    })