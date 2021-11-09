const {Router} = require("express");
const notesControllers = require("../controllers/notesControllers");

const router = Router();

router.get("/notes", notesControllers.notes_get);
router.post("/newNote", notesControllers.note_post);
router.delete("/deleteNote", notesControllers.note_delete);
router.put("/notes", notesControllers.note_put);

module.exports = router;