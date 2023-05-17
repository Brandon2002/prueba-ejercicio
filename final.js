fixture('Registro de estudiantes')
    .page('pagina');

test('Submit a form', async t => {
    await t
        // automatically dismiss dialog boxes
        .setNativeDialogHandler(() => true)

        //Fill the name
        .click("#buttonBrowse")
        .click("#buttonRead")
    
    
    
    
    
    })