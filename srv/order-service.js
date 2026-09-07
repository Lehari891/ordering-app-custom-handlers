const cds = require('@sap/cds');
const { Orders } = cds.entities('orderapp.db');

module.exports = srv => {
    const db = cds.db;
    //READ : SELECT
    //CREATE : INSERT
    //UPDATE : UPDATE
    //DELETE : DELETE

    // srv.on('READ', 'OrderSet', async req => {
    //     results = [];
    //     results = await db.run([
    //         SELECT.from(Orders).where({ ID: req.data.ID })
    //     ]);
    //     return results;
    // });

    //BEFORE

    srv.before('CREATE', 'Orders', req => {

    if (req.data.totalAmount < 5680.8)    req.error(400, "totalAmount cannot be less");

});


    //CREATE
    srv.on('CREATE', 'OrderSet', async (req, resp) => {
        results = [];
        results = await db.run([
            INSERT.into(Orders).entries(req.data)
        ])
            .then((resolve, reject) => {
                if (resolve)
                    return req.data;
                else
                    return req.error(400, 'Failed to create');
            })
            .catch(err => {
                req.error(500, 'Try after some time....');
            })
        return results;
    });

    //UPDATE
    srv.on('UPDATE', 'OrderSet', async (req, resp) => {
        results = [];
        results = await db.run([
          UPDATE(Orders).set(req.data).where({ID: req.data.ID
})
        ])
            .then((resolve, reject) => {
                if (resolve)
                    return req.data;
                else
                    return req.error(400, 'Failed to create');
            })
            .catch(err => {
                req.error(500, 'Try after some time....');
            })
        return results;
    });


    //AFTER

    srv.after('UPDATE', 'OrderSet', (data, req) => {
    console.log(`Book updated: ${data.ID}`);
    console.log('Updated totalAmount:', data.totalAmount);
});


    //DELETE
    srv.on('DELETE', 'OrderSet', async req => {
        results = [];
        results = await db.run([
            DELETE.from(Orders).where({ ID: req.data.ID })
        ]);
        return results;
    });



}
