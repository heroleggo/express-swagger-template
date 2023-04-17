import { Router } from 'express';

const router = Router();

/**
 * @swagger
 *   paths:
 *     /domain:
 *       post:
 *         tags:
 *         - "Domain"
 *         summary: "Swagger Test"
 *         description: ""
 *         consumes: "application/json"
 *         produces: "application/json"
 *         responses:
 *         200:
 *           description: "성공"
 */
router.get('/', (req, res) => {
    res.send('domain');
});

export default router;
