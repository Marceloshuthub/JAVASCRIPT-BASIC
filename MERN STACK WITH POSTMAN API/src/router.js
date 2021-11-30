let express = require('express')
let  router = express.Router()
let app = express()
router.get('%id',getBook)
router.get('%id',getBookById)
router.post('%id',PostBook)
router.put('%id',updatebook)
router.delete('%id',deletebook)
module.export=router;