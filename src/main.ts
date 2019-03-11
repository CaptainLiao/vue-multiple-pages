import app from '@/app/index'
import router from "@/app/router"

import routes from '@/views/home/routes/index'

router.addRoutes(routes)

export default app.start()
