module.exports = async (req, res) => {
    const handles = { code: 200, status: "OK", fail: [], data: [] };
    try {
        if (handles.fail.length <= 0) {
            let selParcels = await req.models.parcels.findAll(
                {
                    attributes: ["parcels_id","tracking", "receiver_to", "description","created_at"],
                }
            );
            if (!selParcels) { handles.code = 404; handles.status = "Not Found"; }
            else { handles.data = selParcels; }
        }
    } catch (error) { handles.code = 400; handles.status = "Bad Request"; handles.fail.push("data is catch"); console.log(error); }
    res.json(handles);
}