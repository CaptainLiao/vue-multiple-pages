import app from '@/app/index'
import router from "@/app/router"

import routes from './routes/index'
router.addRoutes(routes)

export default app.start()
