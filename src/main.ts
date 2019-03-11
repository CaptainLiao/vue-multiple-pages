import app from '@/app/index'
import router from "@/app/router"

import routes from '@/views/home/routes/index'

console.log(routes);


router.addRoutes(routes)

export default app.start()
