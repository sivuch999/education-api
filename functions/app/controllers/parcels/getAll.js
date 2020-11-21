module.exports = async (req, res) => {
    const handles = { code: 200, status: "OK", fail: [], data: [] };
    const reqKeyword = req.body.keyword;
    console.log(reqKeyword)
    try {
        if (handles.fail.length <= 0) {
            let condition = [];
            if (reqKeyword) { condition.push({ tracking: reqKeyword }); }
            let selParcels = await req.models.parcels.findAll(
                {
                    attributes: ["parcels_id","tracking", "receiver_to", "description","created_at"],
                    where: condition
                }
            );
            if (!selParcels) { handles.code = 404; handles.status = "Not Found"; }
            else { handles.data = selParcels; }
        }
    } catch (error) { handles.code = 400; handles.status = "Bad Request"; handles.fail.push("data is catch"); console.log(error); }
    res.json(handles);
}